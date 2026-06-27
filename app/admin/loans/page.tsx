'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { 
  ArrowLeft,
  CreditCard,
  CheckCircle,
  Clock,
  XCircle,
  Eye,
  DollarSign,
  Users,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  FileText,
  AlertCircle,
  TrendingUp,
  Wallet,
  Calendar,
  User,
  Phone,
  Mail,
  Building2,
  UserPlus // Added for guarantors
} from 'lucide-react'

interface Loan {
  id: string
  amount: number
  interestRate: number
  totalRepayable: number
  monthlyInstallment: number
  termMonths: number
  purpose: string
  status: string
  approvalDate: string | null
  disbursementDate: string | null
  dueDate: string
  createdAt: string
  // Add guarantor fields
  guarantor1: string
  guarantor1Phone: string
  guarantor2: string
  guarantor2Phone: string
  user: {
    firstName: string
    lastName: string
    email: string
    phone: string
    memberNumber: string
  }
  payments: {
    id: string
    amount: number
    paymentDate: string
    receiptNo: string
  }[]
  _count?: {
    payments: number
  }
}

export default function AdminLoansPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loans, setLoans] = useState<Loan[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [selectedLoan, setSelectedLoan] = useState<Loan | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    disbursed: 0,
    rejected: 0,
    paid: 0,
    totalAmount: 0
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
      fetchLoans()
    }
  }, [status, session, router])

  const fetchLoans = async () => {
    try {
      const response = await fetch('/api/admin/loans')
      const data = await response.json()
      setLoans(data)
      
      // Calculate stats
      const total = data.length
      const pending = data.filter((l: Loan) => l.status === 'PENDING').length
      const approved = data.filter((l: Loan) => l.status === 'APPROVED').length
      const disbursed = data.filter((l: Loan) => l.status === 'DISBURSED').length
      const rejected = data.filter((l: Loan) => l.status === 'REJECTED').length
      const paid = data.filter((l: Loan) => l.status === 'PAID').length
      const totalAmount = data.reduce((sum: number, l: Loan) => sum + l.amount, 0)
      
      setStats({ total, pending, approved, disbursed, rejected, paid, totalAmount })
    } catch (error) {
      console.error('Failed to fetch loans:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleStatusUpdate = async (loanId: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/admin/loans/${loanId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      })

      if (response.ok) {
        fetchLoans()
        setShowModal(false)
      } else {
        const data = await response.json()
        alert(data.error || 'Failed to update loan status')
      }
    } catch (error) {
      console.error('Failed to update loan status:', error)
      alert('Failed to update loan status')
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'APPROVED': return 'bg-emerald-100 text-emerald-700'
      case 'DISBURSED': return 'bg-blue-100 text-blue-700'
      case 'PENDING': return 'bg-amber-100 text-amber-700'
      case 'REJECTED': return 'bg-red-100 text-red-700'
      case 'PAID': return 'bg-gray-100 text-gray-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'APPROVED': return <CheckCircle className="h-4 w-4" />
      case 'DISBURSED': return <CreditCard className="h-4 w-4" />
      case 'PENDING': return <Clock className="h-4 w-4" />
      case 'REJECTED': return <XCircle className="h-4 w-4" />
      case 'PAID': return <CheckCircle className="h-4 w-4" />
      default: return <Clock className="h-4 w-4" />
    }
  }

  const getStatusActions = (status: string) => {
    switch (status) {
      case 'PENDING':
        return ['APPROVED', 'REJECTED']
      case 'APPROVED':
        return ['DISBURSED', 'REJECTED']
      case 'DISBURSED':
        return ['PAID']
      default:
        return []
    }
  }

  const filteredLoans = loans.filter(loan => {
    const searchLower = search.toLowerCase()
    const fullName = `${loan.user.firstName} ${loan.user.lastName}`.toLowerCase()
    const matchesSearch = fullName.includes(searchLower) ||
                         loan.user.memberNumber.toLowerCase().includes(searchLower) ||
                         loan.id.toLowerCase().includes(searchLower) ||
                         loan.purpose?.toLowerCase().includes(searchLower)
    const matchesStatus = filterStatus === 'all' || loan.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const totalPages = Math.ceil(filteredLoans.length / itemsPerPage)
  const paginatedLoans = filteredLoans.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
          <p className="mt-4 text-slate-600">Loading loans...</p>
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
            <h1 className="text-2xl font-bold text-slate-900">Loan Management</h1>
            <p className="text-slate-600">Review and manage loan applications</p>
          </div>
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
            <p className="text-xs text-slate-500">Approved</p>
            <p className="text-xl font-bold text-emerald-600">{stats.approved}</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm text-center">
            <p className="text-xs text-slate-500">Disbursed</p>
            <p className="text-xl font-bold text-blue-600">{stats.disbursed}</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm text-center">
            <p className="text-xs text-slate-500">Rejected</p>
            <p className="text-xl font-bold text-red-600">{stats.rejected}</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm text-center">
            <p className="text-xs text-slate-500">Total Amount</p>
            <p className="text-sm font-bold text-purple-600">Kshs {stats.totalAmount.toLocaleString()}</p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px] relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by member, loan ID, purpose..."
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
              <option value="APPROVED">Approved</option>
              <option value="DISBURSED">Disbursed</option>
              <option value="REJECTED">Rejected</option>
              <option value="PAID">Paid</option>
            </select>
          </div>
        </div>

        {/* Loans Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Member</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Loan Details</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {paginatedLoans.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-slate-500">
                      No loans found
                    </td>
                  </tr>
                ) : (
                  paginatedLoans.map((loan) => (
                    <tr key={loan.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                            {loan.user.firstName[0]}{loan.user.lastName[0]}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">{loan.user.firstName} {loan.user.lastName}</p>
                            <p className="text-xs text-slate-500">{loan.user.memberNumber}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-medium text-slate-900">{loan.purpose || 'N/A'}</p>
                        <p className="text-xs text-slate-500">{loan.termMonths} months • {Math.round(loan.interestRate * 100)}% interest</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-semibold text-slate-900">Kshs {loan.amount.toLocaleString()}</p>
                        <p className="text-xs text-slate-500">Monthly: Kshs {loan.monthlyInstallment?.toLocaleString()}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(loan.status)}`}>
                          {getStatusIcon(loan.status)}
                          {loan.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-slate-600">{new Date(loan.createdAt).toLocaleDateString()}</p>
                        <p className="text-xs text-slate-400">Due: {new Date(loan.dueDate).toLocaleDateString()}</p>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => {
                            setSelectedLoan(loan)
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
                Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredLoans.length)} of {filteredLoans.length} loans
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

      {/* Loan Detail Modal */}
      {showModal && selectedLoan && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between rounded-t-3xl">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Loan Details</h2>
                <p className="text-sm text-slate-500">Application #{selectedLoan.id.slice(0, 8)}</p>
              </div>
              <button
                onClick={() => {
                  setShowModal(false)
                  setSelectedLoan(null)
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
                    <p className="font-medium text-slate-900">{selectedLoan.user.firstName} {selectedLoan.user.lastName}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Member Number</p>
                    <p className="font-medium text-slate-900">{selectedLoan.user.memberNumber}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Email</p>
                    <p className="font-medium text-slate-900">{selectedLoan.user.email}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Phone</p>
                    <p className="font-medium text-slate-900">{selectedLoan.user.phone}</p>
                  </div>
                </div>
              </div>

              {/* Guarantors Section - NEW */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200/50">
                <h3 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                  <UserPlus className="h-4 w-4 text-blue-600" />
                  Guarantors
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/70 rounded-lg p-3 border border-blue-200/30">
                    <p className="text-xs text-slate-500">Guarantor 1</p>
                    <p className="font-semibold text-slate-900">{selectedLoan.guarantor1 || 'N/A'}</p>
                    <p className="text-sm text-blue-600 flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      {selectedLoan.guarantor1Phone || 'N/A'}
                    </p>
                  </div>
                  <div className="bg-white/70 rounded-lg p-3 border border-blue-200/30">
                    <p className="text-xs text-slate-500">Guarantor 2</p>
                    <p className="font-semibold text-slate-900">{selectedLoan.guarantor2 || 'N/A'}</p>
                    <p className="text-sm text-blue-600 flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      {selectedLoan.guarantor2Phone || 'N/A'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Loan Details */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-500">Loan Amount</p>
                  <p className="text-xl font-bold text-slate-900">Kshs {selectedLoan.amount.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Total Repayable</p>
                  <p className="text-xl font-bold text-slate-900">Kshs {selectedLoan.totalRepayable?.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Monthly Installment</p>
                  <p className="text-lg font-semibold text-emerald-600">Kshs {selectedLoan.monthlyInstallment?.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Term</p>
                  <p className="text-lg font-semibold text-slate-900">{selectedLoan.termMonths} months</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Interest Rate</p>
                  <p className="text-lg font-semibold text-slate-900">{Math.round(selectedLoan.interestRate * 100)}%</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Due Date</p>
                  <p className="text-lg font-semibold text-slate-900">{new Date(selectedLoan.dueDate).toLocaleDateString()}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-slate-500">Purpose</p>
                  <p className="text-slate-800">{selectedLoan.purpose || 'N/A'}</p>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedLoan.status)}`}>
                  {getStatusIcon(selectedLoan.status)}
                  {selectedLoan.status}
                </span>
                <span className="text-sm text-slate-500">
                  Applied: {new Date(selectedLoan.createdAt).toLocaleDateString()}
                </span>
                {selectedLoan.approvalDate && (
                  <span className="text-sm text-slate-500">
                    Approved: {new Date(selectedLoan.approvalDate).toLocaleDateString()}
                  </span>
                )}
                {selectedLoan.disbursementDate && (
                  <span className="text-sm text-slate-500">
                    Disbursed: {new Date(selectedLoan.disbursementDate).toLocaleDateString()}
                  </span>
                )}
              </div>

              {/* Payments */}
              {selectedLoan.payments && selectedLoan.payments.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-slate-700 mb-3">Payment History</h3>
                  <div className="space-y-2">
                    {selectedLoan.payments.map((payment) => (
                      <div key={payment.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200">
                        <div>
                          <p className="font-medium text-slate-900">Kshs {payment.amount.toLocaleString()}</p>
                          <p className="text-xs text-slate-500">{new Date(payment.paymentDate).toLocaleDateString()}</p>
                        </div>
                        <span className="text-xs text-slate-400 font-mono">{payment.receiptNo}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="border-t border-slate-200 pt-4">
                <h3 className="text-sm font-semibold text-slate-700 mb-3">Update Status</h3>
                <div className="flex flex-wrap gap-2">
                  {getStatusActions(selectedLoan.status).map((action) => (
                    <button
                      key={action}
                      onClick={() => {
                        if (confirm(`Are you sure you want to mark this loan as ${action}?`)) {
                          handleStatusUpdate(selectedLoan.id, action)
                        }
                      }}
                      className={`px-4 py-2 rounded-xl text-sm font-medium text-white transition-colors ${
                        action === 'APPROVED' ? 'bg-emerald-600 hover:bg-emerald-700' :
                        action === 'DISBURSED' ? 'bg-blue-600 hover:bg-blue-700' :
                        action === 'REJECTED' ? 'bg-red-600 hover:bg-red-700' :
                        action === 'PAID' ? 'bg-gray-600 hover:bg-gray-700' :
                        'bg-slate-600 hover:bg-slate-700'
                      }`}
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}