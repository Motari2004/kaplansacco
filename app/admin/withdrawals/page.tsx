'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { 
  ArrowLeft,
  Wallet,
  CheckCircle,
  Clock,
  XCircle,
  Eye,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  Smartphone,
  Building2,
  DollarSign,
  User,
  Phone,
  Calendar,
  Check,
  X,
  RefreshCw
} from 'lucide-react'

export default function AdminWithdrawalsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [withdrawals, setWithdrawals] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [selectedWithdrawal, setSelectedWithdrawal] = useState<any>(null)
  const [showModal, setShowModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [processingId, setProcessingId] = useState<string | null>(null)
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    completed: 0,
    rejected: 0,
    totalAmount: 0,
    pendingAmount: 0,
  })
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

    if (status === 'authenticated') {
      fetchWithdrawals()
    }
  }, [status, session, router])

  const fetchWithdrawals = async () => {
    try {
      const response = await fetch('/api/admin/withdrawals')
      const data = await response.json()
      setWithdrawals(data)
      
      // Calculate stats
      const total = data.length
      const pending = data.filter((w: any) => w.status === 'PENDING').length
      const completed = data.filter((w: any) => w.status === 'COMPLETED').length
      const rejected = data.filter((w: any) => w.status === 'REJECTED').length
      const totalAmount = data.reduce((sum: number, w: any) => sum + w.amount, 0)
      const pendingAmount = data
        .filter((w: any) => w.status === 'PENDING')
        .reduce((sum: number, w: any) => sum + w.amount, 0)
      
      setStats({ total, pending, completed, rejected, totalAmount, pendingAmount })
    } catch (error) {
      console.error('Failed to fetch withdrawals:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleStatusUpdate = async (withdrawalId: string, newStatus: string) => {
    setProcessingId(withdrawalId)
    try {
      const response = await fetch(`/api/admin/withdrawals/${withdrawalId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      })

      if (response.ok) {
        fetchWithdrawals()
        setShowModal(false)
      } else {
        const data = await response.json()
        alert(data.error || 'Failed to update withdrawal status')
      }
    } catch (error) {
      console.error('Failed to update withdrawal:', error)
      alert('Failed to update withdrawal status')
    } finally {
      setProcessingId(null)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PENDING': return 'bg-amber-100 text-amber-700'
      case 'PROCESSING': return 'bg-blue-100 text-blue-700'
      case 'COMPLETED': return 'bg-emerald-100 text-emerald-700'
      case 'REJECTED': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'PENDING': return <Clock className="h-4 w-4" />
      case 'PROCESSING': return <Clock className="h-4 w-4" />
      case 'COMPLETED': return <CheckCircle className="h-4 w-4" />
      case 'REJECTED': return <XCircle className="h-4 w-4" />
      default: return <Clock className="h-4 w-4" />
    }
  }

  const getMethodIcon = (method: string) => {
    return method === 'mpesa' ? <Smartphone className="h-4 w-4" /> : <Building2 className="h-4 w-4" />
  }

  const filteredWithdrawals = withdrawals.filter((w: any) => {
    const searchLower = search.toLowerCase()
    const matchesSearch = 
      w.user?.firstName?.toLowerCase().includes(searchLower) ||
      w.user?.lastName?.toLowerCase().includes(searchLower) ||
      w.user?.memberNumber?.toLowerCase().includes(searchLower) ||
      w.id.toLowerCase().includes(searchLower)
    const matchesStatus = filterStatus === 'all' || w.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const totalPages = Math.ceil(filteredWithdrawals.length / itemsPerPage)
  const paginatedWithdrawals = filteredWithdrawals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
          <p className="mt-4 text-slate-600">Loading withdrawals...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link href="/admin" className="p-2 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105">
            <ArrowLeft className="h-5 w-5 text-slate-600" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Withdrawals Management</h1>
            <p className="text-slate-600">Review and process member withdrawal requests</p>
          </div>
          <button
            onClick={fetchWithdrawals}
            className="ml-auto flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-6">
          <div className="bg-white rounded-xl p-3 shadow-sm text-center">
            <p className="text-xs text-slate-500">Total</p>
            <p className="text-xl font-bold text-slate-900">{stats.total}</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm text-center">
            <p className="text-xs text-slate-500">Pending</p>
            <p className="text-xl font-bold text-amber-600">{stats.pending}</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm text-center">
            <p className="text-xs text-slate-500">Completed</p>
            <p className="text-xl font-bold text-emerald-600">{stats.completed}</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm text-center">
            <p className="text-xs text-slate-500">Rejected</p>
            <p className="text-xl font-bold text-red-600">{stats.rejected}</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm text-center">
            <p className="text-xs text-slate-500">Total Amount</p>
            <p className="text-sm font-bold text-purple-600">Kshs {stats.totalAmount.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm text-center">
            <p className="text-xs text-slate-500">Pending Amount</p>
            <p className="text-sm font-bold text-amber-600">Kshs {stats.pendingAmount.toLocaleString()}</p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px] relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by member, withdrawal ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="all">All Status</option>
              <option value="PENDING">Pending</option>
              <option value="COMPLETED">Completed</option>
              <option value="REJECTED">Rejected</option>
            </select>
          </div>
        </div>

        {/* Withdrawals Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Member</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Method</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {paginatedWithdrawals.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-slate-500">
                      No withdrawals found
                    </td>
                  </tr>
                ) : (
                  paginatedWithdrawals.map((withdrawal: any) => (
                    <tr key={withdrawal.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                            {withdrawal.user?.firstName?.[0] || '?'}{withdrawal.user?.lastName?.[0] || ''}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">{withdrawal.user?.firstName} {withdrawal.user?.lastName}</p>
                            <p className="text-xs text-slate-500">{withdrawal.user?.memberNumber}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-semibold text-slate-900">Kshs {withdrawal.amount.toLocaleString()}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                          {getMethodIcon(withdrawal.method)}
                          {withdrawal.method === 'mpesa' ? 'M-Pesa' : 'Bank'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(withdrawal.status)}`}>
                          {getStatusIcon(withdrawal.status)}
                          {withdrawal.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-slate-600">{new Date(withdrawal.createdAt).toLocaleDateString()}</p>
                        <p className="text-xs text-slate-400">{new Date(withdrawal.createdAt).toLocaleTimeString()}</p>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => {
                            setSelectedWithdrawal(withdrawal)
                            setShowModal(true)
                          }}
                          className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <Eye className="h-5 w-5" />
                        </button>
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
                Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredWithdrawals.length)} of {filteredWithdrawals.length} withdrawals
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

      {/* Withdrawal Detail Modal */}
      {showModal && selectedWithdrawal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between rounded-t-3xl">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Withdrawal Details</h2>
                <p className="text-sm text-slate-500">Request #{selectedWithdrawal.id.slice(0, 8)}</p>
              </div>
              <button
                onClick={() => {
                  setShowModal(false)
                  setSelectedWithdrawal(null)
                }}
                className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <XCircle className="h-6 w-6 text-slate-500" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Member Info */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <h3 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Member Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate-500">Name</p>
                    <p className="font-medium text-slate-900">{selectedWithdrawal.user?.firstName} {selectedWithdrawal.user?.lastName}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Member Number</p>
                    <p className="font-medium text-slate-900">{selectedWithdrawal.user?.memberNumber}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Email</p>
                    <p className="font-medium text-slate-900">{selectedWithdrawal.user?.email}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Phone</p>
                    <p className="font-medium text-slate-900">{selectedWithdrawal.user?.phone}</p>
                  </div>
                </div>
              </div>

              {/* Withdrawal Details */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-500">Amount</p>
                  <p className="text-2xl font-bold text-slate-900">Kshs {selectedWithdrawal.amount.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Method</p>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                    {getMethodIcon(selectedWithdrawal.method)}
                    {selectedWithdrawal.method === 'mpesa' ? 'M-Pesa' : 'Bank Transfer'}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Status</p>
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedWithdrawal.status)}`}>
                    {getStatusIcon(selectedWithdrawal.status)}
                    {selectedWithdrawal.status}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Date</p>
                  <p className="font-medium text-slate-900">{new Date(selectedWithdrawal.createdAt).toLocaleString()}</p>
                </div>
              </div>

              {/* Method Details */}
              {selectedWithdrawal.method === 'mpesa' && selectedWithdrawal.phoneNumber && (
                <div className="bg-emerald-50/80 rounded-xl p-4 border border-emerald-200/50">
                  <h3 className="text-sm font-semibold text-emerald-800 mb-2">M-Pesa Details</h3>
                  <p className="text-sm text-emerald-700">Phone: {selectedWithdrawal.phoneNumber}</p>
                </div>
              )}

              {selectedWithdrawal.method === 'bank' && (
                <div className="bg-blue-50/80 rounded-xl p-4 border border-blue-200/50">
                  <h3 className="text-sm font-semibold text-blue-800 mb-2">Bank Details</h3>
                  <div className="space-y-1 text-sm text-blue-700">
                    <p>Bank: {selectedWithdrawal.bankName}</p>
                    <p>Account: {selectedWithdrawal.accountNumber}</p>
                    <p>Name: {selectedWithdrawal.accountName}</p>
                  </div>
                </div>
              )}

              {/* Actions - Only show for PENDING status */}
              {selectedWithdrawal.status === 'PENDING' && (
                <div className="border-t border-slate-200 pt-4">
                  <h3 className="text-sm font-semibold text-slate-700 mb-3">Process Withdrawal</h3>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => {
                        if (confirm(`Are you sure you want to approve this withdrawal of Kshs ${selectedWithdrawal.amount.toLocaleString()}?`)) {
                          handleStatusUpdate(selectedWithdrawal.id, 'COMPLETED')
                        }
                      }}
                      disabled={processingId === selectedWithdrawal.id}
                      className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors disabled:opacity-50"
                    >
                      {processingId === selectedWithdrawal.id ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      ) : (
                        <>
                          <Check className="h-4 w-4" />
                          Approve & Complete
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Are you sure you want to reject this withdrawal of Kshs ${selectedWithdrawal.amount.toLocaleString()}?`)) {
                          handleStatusUpdate(selectedWithdrawal.id, 'REJECTED')
                        }
                      }}
                      disabled={processingId === selectedWithdrawal.id}
                      className="flex items-center gap-2 px-6 py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors disabled:opacity-50"
                    >
                      {processingId === selectedWithdrawal.id ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      ) : (
                        <>
                          <X className="h-4 w-4" />
                          Reject
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-slate-400 mt-3">
                    Note: Approving will mark this withdrawal as completed. The member has already been debited.
                  </p>
                </div>
              )}

              {selectedWithdrawal.status === 'COMPLETED' && (
                <div className="border-t border-slate-200 pt-4 text-center text-emerald-600">
                  <CheckCircle className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-semibold">This withdrawal has been completed</p>
                  {selectedWithdrawal.processedAt && (
                    <p className="text-sm text-slate-500">Processed on {new Date(selectedWithdrawal.processedAt).toLocaleString()}</p>
                  )}
                </div>
              )}

              {selectedWithdrawal.status === 'REJECTED' && (
                <div className="border-t border-slate-200 pt-4 text-center text-red-600">
                  <XCircle className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-semibold">This withdrawal has been rejected</p>
                  {selectedWithdrawal.processedAt && (
                    <p className="text-sm text-slate-500">Rejected on {new Date(selectedWithdrawal.processedAt).toLocaleString()}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}