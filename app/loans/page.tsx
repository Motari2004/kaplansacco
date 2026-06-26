'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  ArrowLeft,
  CreditCard,
  CheckCircle,
  Clock,
  XCircle,
  Eye,
  CircleDollarSign,
  FileText,
  Calendar,
  AlertCircle,
  TrendingUp,
  Wallet,
  PiggyBank,
  Info
} from 'lucide-react'

export default function MyLoansPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loans, setLoans] = useState([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    total: 0,
    disbursed: 0,
    pending: 0,
    totalBorrowed: 0,
    totalPaid: 0,
    totalRemaining: 0,
    totalRepayable: 0
  })

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
      return
    }

    if (status === 'authenticated') {
      fetchLoans()
    }
  }, [status, router])

  const fetchLoans = async () => {
    try {
      const response = await fetch('/api/user/loans')
      const data = await response.json()
      setLoans(data)
      
      // Calculate stats
      const total = data.length
      const disbursed = data.filter((l: any) => l.status === 'DISBURSED').length
      const pending = data.filter((l: any) => l.status === 'PENDING' || l.status === 'APPROVED').length
      
      // Calculate financial stats
      const totalBorrowed = data.reduce((sum: number, l: any) => sum + l.amount, 0)
      const totalRepayable = data.reduce((sum: number, l: any) => sum + (l.totalRepayable || 0), 0)
      
      // Calculate total paid across all loans
      const totalPaid = data.reduce((sum: number, l: any) => {
        const paid = l.payments?.reduce((s: number, p: any) => s + p.amount, 0) || 0
        return sum + paid
      }, 0)
      
      // Calculate remaining balance
      const totalRemaining = totalRepayable - totalPaid
      
      setStats({ 
        total, 
        disbursed, 
        pending, 
        totalBorrowed, 
        totalPaid, 
        totalRemaining,
        totalRepayable 
      })
    } catch (error) {
      console.error('Failed to fetch loans:', error)
    } finally {
      setLoading(false)
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

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { label: string; description: string }> = {
      'APPROVED': { 
        label: 'Approved ✅', 
        description: 'Your loan has been approved. Awaiting disbursement.' 
      },
      'DISBURSED': { 
        label: 'Disbursed 💰', 
        description: 'Funds have been sent. You can make payments.' 
      },
      'PENDING': { 
        label: 'Pending ⏳', 
        description: 'Your application is being reviewed by the loan officer.' 
      },
      'REJECTED': { 
        label: 'Rejected ❌', 
        description: 'Your application was not approved. Please contact support.' 
      },
      'PAID': { 
        label: 'Paid ✅', 
        description: 'This loan has been fully repaid.' 
      }
    }
    return statusMap[status] || { label: status, description: '' }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
          <p className="mt-4 text-slate-600">Loading your loans...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link href="/dashboard" className="p-2 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105">
            <ArrowLeft className="h-5 w-5 text-slate-600" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">My Loans</h1>
            <p className="text-slate-600">Track and manage your loan applications</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-sm text-slate-500">Total Loans</p>
            <p className="text-2xl font-bold text-slate-900">{stats.total}</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-sm text-slate-500">Disbursed (Active)</p>
            <p className="text-2xl font-bold text-blue-600">{stats.disbursed}</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-sm text-slate-500">Pending/Approved</p>
            <p className="text-2xl font-bold text-amber-600">{stats.pending}</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-sm text-slate-500">Total Borrowed</p>
            <p className="text-2xl font-bold text-emerald-600">Kshs {stats.totalBorrowed.toLocaleString()}</p>
          </div>
        </div>

        {/* Financial Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-200/50">
            <p className="text-sm text-slate-500">Total Paid</p>
            <p className="text-2xl font-bold text-emerald-600">Kshs {stats.totalPaid.toLocaleString()}</p>
          </div>
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200/50">
            <p className="text-sm text-slate-500">Remaining to Pay</p>
            <p className="text-2xl font-bold text-amber-600">Kshs {stats.totalRemaining.toLocaleString()}</p>
          </div>
        </div>

        {/* Loan Status Guide */}
        <div className="bg-blue-50/80 rounded-xl p-4 border border-blue-200/50 mb-6">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-blue-800">Understanding Your Loan Status</p>
              <ul className="text-sm text-blue-700 mt-1 space-y-1">
                <li>• <strong>Pending:</strong> Under review by loan officer</li>
                <li>• <strong>Approved:</strong> Approved but funds not yet sent</li>
                <li>• <strong>Disbursed:</strong> Funds sent - <span className="text-emerald-600 font-medium">Payments can be made</span></li>
                <li>• <strong>Rejected:</strong> Application not approved</li>
                <li>• <strong>Paid:</strong> Fully repaid</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Loans List */}
        {loans.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
            <CreditCard className="h-16 w-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-800">No Loans Yet</h3>
            <p className="text-slate-500 mt-2">You haven't applied for any loans</p>
            <Link
              href="/loans/apply"
              className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
            >
              Apply for a Loan
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {loans.map((loan: any) => {
              const statusInfo = getStatusBadge(loan.status)
              const isDisbursed = loan.status === 'DISBURSED'
              const loanPaid = loan.payments?.reduce((sum: number, p: any) => sum + p.amount, 0) || 0
              const loanRemaining = (loan.totalRepayable || 0) - loanPaid
              
              return (
                <div key={loan.id} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    {/* Left Section */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(loan.status)}`}>
                          {getStatusIcon(loan.status)}
                          {statusInfo.label}
                        </span>
                        <span className="text-xs text-slate-400">
                          Applied: {new Date(loan.createdAt).toLocaleDateString()}
                        </span>
                        {loan.approvalDate && (
                          <span className="text-xs text-slate-400">
                            Approved: {new Date(loan.approvalDate).toLocaleDateString()}
                          </span>
                        )}
                        {loan.disbursementDate && (
                          <span className="text-xs text-slate-400">
                            Disbursed: {new Date(loan.disbursementDate).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-sm text-slate-500 mt-1">{statusInfo.description}</p>
                      
                      <div className="mt-2">
                        <p className="text-2xl font-bold text-slate-900">Kshs {loan.amount.toLocaleString()}</p>
                        <p className="text-sm text-slate-500 mt-1">{loan.purpose}</p>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3 text-sm">
                        <div>
                          <span className="text-slate-500">Monthly Installment</span>
                          <p className="font-semibold text-slate-800">Kshs {loan.monthlyInstallment?.toLocaleString() || 0}</p>
                        </div>
                        <div>
                          <span className="text-slate-500">Total Repayable</span>
                          <p className="font-semibold text-slate-800">Kshs {loan.totalRepayable?.toLocaleString() || 0}</p>
                        </div>
                        <div>
                          <span className="text-slate-500">Term</span>
                          <p className="font-semibold text-slate-800">{loan.termMonths} months</p>
                        </div>
                        <div>
                          <span className="text-slate-500">Due Date</span>
                          <p className="font-semibold text-slate-800">{new Date(loan.dueDate).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Section - Actions */}
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link
                        href={`/loans/${loan.id}`}
                        className="flex items-center gap-1 px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors"
                      >
                        <Eye className="h-4 w-4" />
                        View Details
                      </Link>
                      {/* Payment button ONLY for DISBURSED loans */}
                      {isDisbursed && (
                        <Link
                          href={`/loans/pay/${loan.id}`}
                          className="flex items-center gap-1 px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors"
                        >
                          <CircleDollarSign className="h-4 w-4" />
                          Make Payment
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Progress Bar for Disbursed loans */}
                  {isDisbursed && loan.totalRepayable && (
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-500">Repayment Progress</span>
                        <span className="text-slate-700 font-medium">
                          Kshs {loanPaid.toLocaleString()} paid out of Kshs {loan.totalRepayable.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 rounded-full h-2 transition-all duration-500"
                          style={{ 
                            width: `${Math.min((loanPaid / loan.totalRepayable) * 100, 100)}%` 
                          }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-slate-400 mt-1">
                        <span>{Math.round(Math.min((loanPaid / loan.totalRepayable) * 100, 100))}%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  )}

                  {/* Status specific messages */}
                  {loan.status === 'APPROVED' && (
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <div className="bg-emerald-50/80 rounded-lg p-3 border border-emerald-200/50 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                        <p className="text-sm text-emerald-700">
                          ✅ Your loan has been approved! Funds will be disbursed soon.
                        </p>
                      </div>
                    </div>
                  )}

                  {loan.status === 'PENDING' && (
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <div className="bg-amber-50/80 rounded-lg p-3 border border-amber-200/50 flex items-center gap-2">
                        <Clock className="h-4 w-4 text-amber-600" />
                        <p className="text-sm text-amber-700">
                          ⏳ Your application is being reviewed. You'll be notified once a decision is made.
                        </p>
                      </div>
                    </div>
                  )}

                  {loan.status === 'REJECTED' && (
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <div className="bg-red-50/80 rounded-lg p-3 border border-red-200/50 flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-red-600" />
                        <p className="text-sm text-red-700">
                          ❌ Your application was not approved. Please contact support for more information.
                        </p>
                      </div>
                    </div>
                  )}

                  {loan.status === 'PAID' && (
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <div className="bg-gray-50/80 rounded-lg p-3 border border-gray-200/50 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-gray-600" />
                        <p className="text-sm text-gray-700">
                          ✅ This loan has been fully repaid. Thank you!
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}

        {/* Quick Action - Apply for Loan */}
        <div className="mt-6">
          <Link
            href="/loans/apply"
            className="flex items-center justify-center gap-2 w-full p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl hover:shadow-lg transition-all hover:scale-[1.02]"
          >
            <CreditCard className="h-5 w-5" />
            Apply for a New Loan
          </Link>
        </div>
      </div>
    </div>
  )
}