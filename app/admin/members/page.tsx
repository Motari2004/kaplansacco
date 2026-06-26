'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { 
  Search, 
  UserPlus, 
  Eye, 
  FileText,
  ChevronLeft, 
  ChevronRight,
  Download,
  Trash2,
  CheckCircle,
  XCircle,
  Clock,
  Users,
  Mail,
  Phone,
  Calendar,
  User,
  Building2,
  CreditCard,
  PiggyBank,
  ArrowLeft,
  X
} from 'lucide-react'

interface Member {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  idNumber: string
  memberNumber: string
  savingsBalance: number
  status: string
  idDocument: string | null
  createdAt: string
  physicalAddress?: string
  postalAddress?: string
}

export default function AdminMembers() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [members, setMembers] = useState<Member[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [selectedMember, setSelectedMember] = useState<Member | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
      return
    }

    if (status === 'authenticated' && session?.user?.role !== 'ADMIN') {
      router.push('/dashboard')
      return
    }

    fetchMembers()
  }, [status, session, router])

  const fetchMembers = async () => {
    try {
      const response = await fetch('/api/admin/members')
      const data = await response.json()
      setMembers(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Failed to fetch members:', error)
      setMembers([])
    } finally {
      setLoading(false)
    }
  }

  const filteredMembers = members.filter(member => {
    const fullName = `${member.firstName} ${member.lastName}`.toLowerCase()
    const searchLower = search.toLowerCase()
    return fullName.includes(searchLower) ||
           member.memberNumber.toLowerCase().includes(searchLower) ||
           member.email.toLowerCase().includes(searchLower) ||
           member.phone.includes(search) ||
           member.idNumber.includes(search)
  })

  // Pagination
  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage)
  const paginatedMembers = filteredMembers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE': return 'bg-emerald-100 text-emerald-700'
      case 'SUSPENDED': return 'bg-yellow-100 text-yellow-700'
      case 'DORMANT': return 'bg-gray-100 text-gray-700'
      case 'TERMINATED': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ACTIVE': return <CheckCircle className="h-4 w-4" />
      case 'SUSPENDED': return <Clock className="h-4 w-4" />
      case 'TERMINATED': return <XCircle className="h-4 w-4" />
      default: return null
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
          <p className="mt-4 text-slate-600">Loading members...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3">
              <Link
                href="/admin"
                className="p-2 hover:bg-white rounded-xl transition-colors"
              >
                <ArrowLeft className="h-5 w-5 text-slate-600" />
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Member Management</h1>
                <p className="text-slate-600">View and manage all SACCO members</p>
              </div>
            </div>
          </div>
          <Link
            href="/admin/members/add"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
          >
            <UserPlus className="h-5 w-5" />
            Add Member
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-sm text-slate-500">Total Members</p>
            <p className="text-2xl font-bold text-slate-900">{members.length}</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-sm text-slate-500">Active</p>
            <p className="text-2xl font-bold text-emerald-600">
              {members.filter(m => m.status === 'ACTIVE').length}
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-sm text-slate-500">With ID Uploaded</p>
            <p className="text-2xl font-bold text-blue-600">
              {members.filter(m => m.idDocument).length}
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-sm text-slate-500">Total Savings</p>
            <p className="text-2xl font-bold text-emerald-600">
              Kshs {members.reduce((sum, m) => sum + (m.savingsBalance || 0), 0).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, member number, email, phone or ID number..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Members Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Member</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Member No.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">ID Number</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Savings</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">ID Document</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {paginatedMembers.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-6 py-8 text-center text-slate-500">
                      {search ? 'No members match your search' : 'No members found'}
                    </td>
                  </tr>
                ) : (
                  paginatedMembers.map((member) => (
                    <tr key={member.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                            {member.firstName?.[0] || '?'}{member.lastName?.[0] || ''}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">{member.firstName} {member.lastName}</p>
                            <p className="text-xs text-slate-500">{member.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-medium text-slate-900">{member.memberNumber}</p>
                        <p className="text-xs text-slate-400">{new Date(member.createdAt).toLocaleDateString()}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-slate-600">{member.idNumber}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-slate-600">{member.phone}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(member.status)}`}>
                          {getStatusIcon(member.status)}
                          {member.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-medium text-emerald-600">Kshs {member.savingsBalance?.toLocaleString() || 0}</p>
                      </td>
                      <td className="px-6 py-4">
                        {member.idDocument ? (
                          <button
                            onClick={() => {
                              setSelectedMember(member)
                              setShowModal(true)
                            }}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-colors text-sm"
                          >
                            <CheckCircle className="h-4 w-4" />
                            Uploaded
                          </button>
                        ) : (
                          <span className="text-xs text-slate-400">Not uploaded</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => {
                              setSelectedMember(member)
                              setShowModal(true)
                            }}
                            className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="View Details"
                          >
                            <Eye className="h-5 w-5" />
                          </button>
                          <button
                            className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete Member"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between">
              <div className="text-sm text-slate-500">
                Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredMembers.length)} of {filteredMembers.length} members
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 rounded-lg transition-colors ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Member Detail Modal */}
      {showModal && selectedMember && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between rounded-t-3xl">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                  {selectedMember.firstName?.[0] || '?'}{selectedMember.lastName?.[0] || ''}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{selectedMember.firstName} {selectedMember.lastName}</h2>
                  <p className="text-sm text-slate-500">{selectedMember.memberNumber}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowModal(false)
                  setSelectedMember(null)
                }}
                className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <X className="h-6 w-6 text-slate-500" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Member Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-500">Full Name</p>
                  <p className="font-semibold text-slate-900">{selectedMember.firstName} {selectedMember.lastName}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Member Number</p>
                  <p className="font-semibold text-slate-900">{selectedMember.memberNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-semibold text-slate-900">{selectedMember.email}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="font-semibold text-slate-900">{selectedMember.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">ID Number</p>
                  <p className="font-semibold text-slate-900">{selectedMember.idNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Status</p>
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedMember.status)}`}>
                    {getStatusIcon(selectedMember.status)}
                    {selectedMember.status}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Savings Balance</p>
                  <p className="font-semibold text-emerald-600">Kshs {selectedMember.savingsBalance?.toLocaleString() || 0}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Joined</p>
                  <p className="font-semibold text-slate-900">{new Date(selectedMember.createdAt).toLocaleDateString()}</p>
                </div>
                {selectedMember.physicalAddress && (
                  <div>
                    <p className="text-sm text-slate-500">Physical Address</p>
                    <p className="font-semibold text-slate-900">{selectedMember.physicalAddress}</p>
                  </div>
                )}
                {selectedMember.postalAddress && (
                  <div>
                    <p className="text-sm text-slate-500">Postal Address</p>
                    <p className="font-semibold text-slate-900">{selectedMember.postalAddress}</p>
                  </div>
                )}
              </div>

              {/* ID Document */}
              {selectedMember.idDocument ? (
                <div className="border-t border-slate-200 pt-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">ID Document</h3>
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm text-slate-600">Uploaded ID</p>
                      <a
                        href={selectedMember.idDocument}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      >
                        <Download className="h-4 w-4" />
                        View / Download
                      </a>
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden border border-slate-200">
                      {selectedMember.idDocument.toLowerCase().match(/\.(jpg|jpeg|png|gif|webp)$/) ? (
                        <img
                          src={selectedMember.idDocument}
                          alt="ID Document"
                          className="w-full max-h-96 object-contain"
                        />
                      ) : selectedMember.idDocument.toLowerCase().endsWith('.pdf') ? (
                        <div className="p-8 text-center">
                          <FileText className="h-16 w-16 text-slate-400 mx-auto mb-2" />
                          <p className="text-sm text-slate-600">ID Document (PDF)</p>
                          <a
                            href={selectedMember.idDocument}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 text-blue-600 hover:text-blue-700"
                          >
                            Open PDF
                          </a>
                        </div>
                      ) : (
                        <div className="p-8 text-center text-slate-500">
                          <FileText className="h-16 w-16 text-slate-400 mx-auto mb-2" />
                          <p>Document uploaded</p>
                          <a
                            href={selectedMember.idDocument}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 text-blue-600 hover:text-blue-700"
                          >
                            View Document
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="border-t border-slate-200 pt-6 text-center text-slate-500">
                  <p>No ID document uploaded</p>
                </div>
              )}

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
                <button
                  onClick={() => {
                    setShowModal(false)
                    setSelectedMember(null)
                  }}
                  className="px-6 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}