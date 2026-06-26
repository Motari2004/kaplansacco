'use client'

import { useState, useEffect, use } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  ArrowLeft,
  CreditCard,
  CheckCircle,
  Clock,
  XCircle,
  CircleDollarSign,
  Calendar,
  User,
  Phone,
  Mail,
  FileText,
  Download,
  Printer,
  AlertCircle,
  Loader2
} from 'lucide-react'

export default function LoanDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loan, setLoan] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  
  const { id } = use(params)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
      return
    }

    if (status === 'authenticated' && id) {
      fetchLoanDetails()
    }
  }, [status, router, id])

  const fetchLoanDetails = async () => {
    try {
      setLoading(true)
      setError('')
      
      const response = await fetch(`/api/user/loans/${id}`)
      
      if (!response.ok) {
        if (response.status === 404) {
          setError('Loan not found')
        } else {
          setError('Failed to load loan details')
        }
        setLoading(false)
        return
      }
      
      const data = await response.json()
      setLoan(data)
    } catch (error) {
      console.error('Failed to fetch loan details:', error)
      setError('Failed to load loan details')
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
      case 'APPROVED': return <CheckCircle className="h-5 w-5" />
      case 'DISBURSED': return <CreditCard className="h-5 w-5" />
      case 'PENDING': return <Clock className="h-5 w-5" />
      case 'REJECTED': return <XCircle className="h-5 w-5" />
      case 'PAID': return <CheckCircle className="h-5 w-5" />
      default: return <Clock className="h-5 w-5" />
    }
  }

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { label: string; description: string }> = {
      'APPROVED': { 
        label: 'Approved', 
        description: 'Your loan has been approved. Awaiting disbursement.' 
      },
      'DISBURSED': { 
        label: 'Disbursed', 
        description: 'Funds have been sent. You can make payments.' 
      },
      'PENDING': { 
        label: 'Pending', 
        description: 'Your application is being reviewed by the loan officer.' 
      },
      'REJECTED': { 
        label: 'Rejected', 
        description: 'Your application was not approved. Please contact support.' 
      },
      'PAID': { 
        label: 'Paid', 
        description: 'This loan has been fully repaid.' 
      }
    }
    return statusMap[status] || { label: status, description: '' }
  }

  const canMakePayment = () => {
    return loan?.status === 'DISBURSED'
  }

  const totalPaid = loan?.payments?.reduce((sum: number, p: any) => sum + p.amount, 0) || 0
  const remainingBalance = loan?.totalRepayable ? loan.totalRepayable - totalPaid : 0
  const progressPercentage = loan?.totalRepayable ? Math.min((totalPaid / loan.totalRepayable) * 100, 100) : 0

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="text-center">
          <Loader2 className="h-16 w-16 text-blue-500 animate-spin mx-auto mb-4" />
          <p className="text-slate-600">Loading loan details...</p>
        </div>
      </div>
    )
  }

  if (error || !loan) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
        <div className="bg-white rounded-2xl shadow-sm p-8 max-w-md w-full text-center">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-800 mb-2">Loan Not Found</h2>
          <p className="text-slate-600 mb-6">{error || 'The loan you\'re looking for doesn\'t exist.'}</p>
          <Link
            href="/loans"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
          >
            Back to My Loans
          </Link>
        </div>
      </div>
    )
  }

  const statusInfo = getStatusBadge(loan.status)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link href="/loans" className="p-2 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105">
            <ArrowLeft className="h-5 w-5 text-slate-600" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Loan Details</h1>
            <p className="text-slate-600">Application #{loan.id.slice(0, 8)}</p>
          </div>
        </div>

        {/* Status Banner */}
        <div className={`rounded-2xl p-6 mb-6 ${getStatusColor(loan.status).replace('text-', 'bg-').replace('bg-', 'bg-')}`}>
          <div className="flex items-center gap-3">
            {getStatusIcon(loan.status)}
            <div>
              <h3 className="text-lg font-bold">{statusInfo.label}</h3>
              <p className="text-sm opacity-90">{statusInfo.description}</p>
            </div>
            {canMakePayment() && (
              <Link
                href={`/loans/pay/${loan.id}`}
                className="ml-auto flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors"
              >
                <CircleDollarSign className="h-4 w-4" />
                Make Payment
              </Link>
            )}
          </div>
        </div>

        {/* Loan Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Loan Summary
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-500">Loan Amount</span>
                <span className="font-bold text-slate-900">Kshs {loan.amount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Interest Rate</span>
                <span className="font-bold text-slate-900">{Math.round(loan.interestRate * 100)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Term</span>
                <span className="font-bold text-slate-900">{loan.termMonths} months</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Monthly Installment</span>
                <span className="font-bold text-emerald-600">Kshs {loan.monthlyInstallment?.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Total Repayable</span>
                <span className="font-bold text-slate-900">Kshs {loan.totalRepayable?.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Amount Paid</span>
                <span className="font-bold text-emerald-600">Kshs {totalPaid.toLocaleString()}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-200">
                <span className="text-slate-500 font-semibold">Remaining Balance</span>
                <span className={`font-bold ${remainingBalance > 0 ? 'text-amber-600' : 'text-emerald-600'}`}>
                  Kshs {remainingBalance.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Dates & Status
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-500">Application Date</span>
                <span className="font-medium text-slate-900">{new Date(loan.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Approval Date</span>
                <span className="font-medium text-slate-900">
                  {loan.approvalDate ? new Date(loan.approvalDate).toLocaleDateString() : 'N/A'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Disbursement Date</span>
                <span className="font-medium text-slate-900">
                  {loan.disbursementDate ? new Date(loan.disbursementDate).toLocaleDateString() : 'N/A'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Due Date</span>
                <span className="font-bold text-slate-900">{new Date(loan.dueDate).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-200">
                <span className="text-slate-500">Status</span>
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(loan.status)}`}>
                  {getStatusIcon(loan.status)}
                  {statusInfo.label}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Purpose */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h3 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Loan Purpose
          </h3>
          <p className="text-slate-800">{loan.purpose || 'N/A'}</p>
        </div>

        {/* Progress Bar */}
        {loan.status === 'DISBURSED' && loan.totalRepayable && (
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
            <h3 className="text-sm font-semibold text-slate-700 mb-3">Repayment Progress</h3>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-500">Paid</span>
              <span className="text-slate-700 font-medium">
                Kshs {totalPaid.toLocaleString()} of Kshs {loan.totalRepayable.toLocaleString()}
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-3">
              <div 
                className="bg-blue-500 rounded-full h-3 transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>{Math.round(progressPercentage)}% completed</span>
              <span>100%</span>
            </div>
          </div>
        )}

        {/* Payment History */}
        {loan.payments && loan.payments.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Payment History
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 rounded-lg">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase">Date</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase">Amount</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase">Receipt</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {loan.payments.map((payment: any) => (
                    <tr key={payment.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 text-sm text-slate-600">
                        {new Date(payment.paymentDate).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-slate-900">
                        Kshs {payment.amount.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-sm font-mono text-slate-500">
                        {payment.receiptNo}
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                          <CheckCircle className="h-3 w-3" />
                          {payment.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}