'use client'

import { useState, useEffect, use } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  ArrowLeft,
  CreditCard,
  CircleDollarSign,
  CheckCircle,
  AlertCircle,
  Calendar,
  DollarSign
} from 'lucide-react'

export default function LoanPaymentPage({ params }: { params: Promise<{ id: string }> }) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loan, setLoan] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [amount, setAmount] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState('')
  const [remainingBalance, setRemainingBalance] = useState(0)
  
  // Unwrap params using React.use()
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
      
      // Calculate remaining balance
      const totalPaid = data.payments?.reduce((sum: number, p: any) => sum + p.amount, 0) || 0
      const remaining = data.totalRepayable - totalPaid
      setRemainingBalance(remaining)
      setAmount(Math.min(remaining, data.monthlyInstallment || remaining))
    } catch (error) {
      console.error('Failed to fetch loan details:', error)
      setError('Failed to load loan details')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    setSuccess('')

    if (amount <= 0) {
      setError('Please enter a valid amount')
      setSubmitting(false)
      return
    }

    if (amount > remainingBalance) {
      setError(`Amount cannot exceed remaining balance of Kshs ${remainingBalance.toLocaleString()}`)
      setSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/user/loans/pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          loanId: id,
          amount,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(`Payment of Kshs ${amount.toLocaleString()} recorded successfully!`)
        setTimeout(() => {
          router.push('/loans')
        }, 2000)
      } else {
        setError(data.error || 'Payment failed')
      }
    } catch (error) {
      setError('An error occurred. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
          <p className="mt-4 text-slate-600">Loading loan details...</p>
        </div>
      </div>
    )
  }

  // Show error state
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/loans" className="p-2 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105">
            <ArrowLeft className="h-5 w-5 text-slate-600" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Make Loan Payment</h1>
            <p className="text-slate-600">
              Loan #{loan.id ? loan.id.slice(0, 8) : 'N/A'}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Loan Summary */}
          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-slate-200">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500">Loan Amount</p>
                <p className="text-xl font-bold text-slate-900">
                  Kshs {loan.amount ? loan.amount.toLocaleString() : '0'}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Total Repayable</p>
                <p className="text-xl font-bold text-slate-900">
                  Kshs {loan.totalRepayable ? loan.totalRepayable.toLocaleString() : '0'}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Monthly Installment</p>
                <p className="text-xl font-bold text-emerald-600">
                  Kshs {loan.monthlyInstallment ? loan.monthlyInstallment.toLocaleString() : '0'}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Remaining Balance</p>
                <p className={`text-xl font-bold ${remainingBalance > 0 ? 'text-amber-600' : 'text-emerald-600'}`}>
                  Kshs {remainingBalance.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Payment Form - Only show if there's a remaining balance */}
          {remainingBalance > 0 ? (
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Payment Amount (Kshs) *
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="number"
                      required
                      min="1"
                      max={remainingBalance}
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none"
                      placeholder="Enter amount"
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Maximum: Kshs {remainingBalance.toLocaleString()} (remaining balance)
                  </p>
                </div>

                <div className="bg-blue-50/80 rounded-xl p-3 border border-blue-200/50">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-blue-800">Payment Information</p>
                      <ul className="text-xs text-blue-700 mt-1 space-y-0.5">
                        <li>• Payment will be recorded immediately</li>
                        <li>• You'll receive a receipt number</li>
                        <li>• Loan status updates automatically</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="rounded-xl p-3 text-sm text-center border bg-red-50/80 border-red-200/50 text-red-600">
                    {error}
                  </div>
                )}

                {success && (
                  <div className="rounded-xl p-3 text-sm text-center border bg-emerald-50/80 border-emerald-200/50 text-emerald-600">
                    {success}
                  </div>
                )}

                <div className="flex gap-3">
                  <Link
                    href="/loans"
                    className="flex-1 px-4 py-3 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors text-center"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    disabled={submitting || remainingBalance <= 0}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl hover:shadow-lg transition-all hover:scale-105 disabled:opacity-50"
                  >
                    {submitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mx-auto"></div>
                    ) : (
                      'Make Payment'
                    )}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="p-6 text-center">
              <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800">Loan Fully Paid! 🎉</h3>
              <p className="text-slate-600 mt-2">This loan has been fully repaid.</p>
              <Link
                href="/loans"
                className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
              >
                Back to My Loans
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}