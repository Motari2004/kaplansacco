'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  ArrowLeft,
  Wallet,
  DollarSign,
  CheckCircle,
  AlertCircle,
  Info,
  Clock,
  Banknote,
  Smartphone,
  Building2
} from 'lucide-react'

export default function WithdrawPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [availableBalance, setAvailableBalance] = useState(0)
  const [totalContributions, setTotalContributions] = useState(0)
  const [amount, setAmount] = useState('')
  const [withdrawalMethod, setWithdrawalMethod] = useState('mpesa')
  const [bankDetails, setBankDetails] = useState({
    bankName: '',
    accountNumber: '',
    accountName: '',
  })
  const [mpesaDetails, setMpesaDetails] = useState({
    phoneNumber: '',
    network: 'Safaricom',
  })

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
      return
    }

    if (status === 'authenticated') {
      fetchUserData()
    }
  }, [status, router])

  const fetchUserData = async () => {
    try {
      const response = await fetch('/api/user/profile')
      const data = await response.json()
      
      setAvailableBalance(data.savingsBalance || 0)
      setTotalContributions(data.totalContributions || 0)
      
      setMpesaDetails(prev => ({
        ...prev,
        phoneNumber: data.phone || ''
      }))
    } catch (error) {
      console.error('Failed to fetch user data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    setSuccess('')

    const withdrawAmount = parseFloat(amount)
    
    if (!withdrawAmount || withdrawAmount <= 0) {
      setError('Please enter a valid amount')
      setSubmitting(false)
      return
    }

    if (withdrawAmount > availableBalance) {
      setError(`Amount cannot exceed your available balance of Kshs ${availableBalance.toLocaleString()}`)
      setSubmitting(false)
      return
    }

    if (withdrawAmount < 100) {
      setError('Minimum withdrawal amount is Kshs 100')
      setSubmitting(false)
      return
    }

    if (withdrawalMethod === 'bank') {
      if (!bankDetails.bankName || !bankDetails.accountNumber || !bankDetails.accountName) {
        setError('Please fill in all bank details')
        setSubmitting(false)
        return
      }
    } else {
      if (!mpesaDetails.phoneNumber || mpesaDetails.phoneNumber.length < 10) {
        setError('Please enter a valid M-Pesa phone number')
        setSubmitting(false)
        return
      }
    }

    try {
      const response = await fetch('/api/withdraw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: withdrawAmount,
          method: withdrawalMethod,
          ...(withdrawalMethod === 'bank' ? {
            bankName: bankDetails.bankName,
            accountNumber: bankDetails.accountNumber,
            accountName: bankDetails.accountName,
          } : {
            phoneNumber: mpesaDetails.phoneNumber,
            network: mpesaDetails.network,
          }),
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(`Withdrawal request of Kshs ${withdrawAmount.toLocaleString()} submitted successfully!`)
        setAmount('')
        fetchUserData()
        setTimeout(() => {
          router.push('/dashboard')
        }, 3000)
      } else {
        setError(data.message || 'Withdrawal request failed')
      }
    } catch (error) {
      setError('An error occurred. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
          <p className="mt-4 text-slate-600">Loading withdrawal details...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/dashboard" className="p-2 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105">
            <ArrowLeft className="h-5 w-5 text-slate-600" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Withdraw Savings</h1>
            <p className="text-slate-600">Withdraw funds from your savings account</p>
          </div>
        </div>

        {/* Balance Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 text-white shadow-lg">
            <p className="text-emerald-100 text-xs">Available Balance</p>
            <p className="text-2xl font-bold">Kshs {availableBalance.toLocaleString()}</p>
            <p className="text-emerald-100 text-[10px] mt-0.5">What you can withdraw</p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-4 text-white shadow-lg">
            <p className="text-blue-100 text-xs">Total Deposited</p>
            <p className="text-2xl font-bold">Kshs {totalContributions.toLocaleString()}</p>
            <p className="text-blue-100 text-[10px] mt-0.5">Your monthly contributions</p>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50/80 rounded-xl p-4 border border-blue-200/50 mb-6">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-blue-800">Withdrawal Information</p>
              <ul className="text-sm text-blue-700 mt-1 space-y-1">
                <li>• Minimum withdrawal: <strong>Kshs 100</strong></li>
                <li>• Choose between <strong>M-Pesa</strong> or <strong>Bank Transfer</strong></li>
                <li>• Withdrawals are processed after admin approval</li>
                <li>• Bank transfers take <strong>1-3 business days</strong> after approval</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Withdrawal Form */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Amount (Kshs) *
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="number"
                  required
                  min="100"
                  max={availableBalance}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                  placeholder="Enter amount"
                />
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Min: Kshs 100 | Max: Kshs {availableBalance.toLocaleString()}
              </p>
            </div>

            {/* Withdrawal Method */}
            <div className="border-t border-slate-200 pt-4">
              <h3 className="text-sm font-semibold text-slate-800 mb-3">Select Withdrawal Method</h3>
              
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setWithdrawalMethod('mpesa')}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    withdrawalMethod === 'mpesa'
                      ? 'border-emerald-500 bg-emerald-50/50 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Smartphone className={`h-5 w-5 ${withdrawalMethod === 'mpesa' ? 'text-emerald-600' : 'text-slate-400'}`} />
                    <div className="text-left">
                      <p className={`text-sm font-medium ${withdrawalMethod === 'mpesa' ? 'text-emerald-700' : 'text-slate-700'}`}>M-Pesa</p>
                      <p className="text-xs text-slate-400">funds within 24hrs</p>
                    </div>
                    {withdrawalMethod === 'mpesa' && (
                      <CheckCircle className="h-5 w-5 text-emerald-500 ml-auto" />
                    )}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setWithdrawalMethod('bank')}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    withdrawalMethod === 'bank'
                      ? 'border-blue-500 bg-blue-50/50 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Building2 className={`h-5 w-5 ${withdrawalMethod === 'bank' ? 'text-blue-600' : 'text-slate-400'}`} />
                    <div className="text-left">
                      <p className={`text-sm font-medium ${withdrawalMethod === 'bank' ? 'text-blue-700' : 'text-slate-700'}`}>Bank Transfer</p>
                      <p className="text-xs text-slate-400">1-3 business days</p>
                    </div>
                    {withdrawalMethod === 'bank' && (
                      <CheckCircle className="h-5 w-5 text-blue-500 ml-auto" />
                    )}
                  </div>
                </button>
              </div>
            </div>

            {/* M-Pesa Details */}
            {withdrawalMethod === 'mpesa' && (
              <div className="border-t border-slate-200 pt-4">
                <h3 className="text-sm font-semibold text-slate-800 mb-3 flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-emerald-600" />
                  M-Pesa Details
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      M-Pesa Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={mpesaDetails.phoneNumber}
                      onChange={(e) => setMpesaDetails({ ...mpesaDetails, phoneNumber: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none"
                      placeholder="0712345678"
                    />
                    <p className="text-xs text-slate-400 mt-1">The M-Pesa number where funds will be sent</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Network</label>
                    <select
                      value={mpesaDetails.network}
                      onChange={(e) => setMpesaDetails({ ...mpesaDetails, network: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none"
                    >
                      <option value="Safaricom">Safaricom</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Bank Details */}
            {withdrawalMethod === 'bank' && (
              <div className="border-t border-slate-200 pt-4">
                <h3 className="text-sm font-semibold text-slate-800 mb-3 flex items-center gap-2">
                  <Banknote className="h-4 w-4 text-blue-600" />
                  Bank Account Details
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Bank Name *</label>
                    <select
                      required
                      value={bankDetails.bankName}
                      onChange={(e) => setBankDetails({ ...bankDetails, bankName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                    >
                      <option value="">Select your bank</option>
                      <option value="Equity Bank">Equity Bank</option>
                      <option value="KCB Bank">KCB Bank</option>
                      <option value="Cooperative Bank">Cooperative Bank</option>
                      <option value="Absa Bank">Absa Bank</option>
                      <option value="NCBA Bank">NCBA Bank</option>
                      <option value="Family Bank">Family Bank</option>
                      <option value="I&M Bank">I&M Bank</option>
                      <option value="DTB">DTB</option>
                      <option value="Stanbic Bank">Stanbic Bank</option>
                      <option value="Standard Chartered">Standard Chartered</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Account Number *</label>
                    <input
                      type="text"
                      required
                      value={bankDetails.accountNumber}
                      onChange={(e) => setBankDetails({ ...bankDetails, accountNumber: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                      placeholder="Enter account number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Account Name *</label>
                    <input
                      type="text"
                      required
                      value={bankDetails.accountName}
                      onChange={(e) => setBankDetails({ ...bankDetails, accountName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                      placeholder="Enter account holder name"
                    />
                  </div>
                </div>
              </div>
            )}

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

            <button
              type="submit"
              disabled={submitting || availableBalance <= 0}
              className="relative w-full group overflow-hidden py-3 rounded-xl font-semibold text-white shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:scale-110 transition-transform duration-300"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                {submitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Wallet className="h-5 w-5" />
                    {withdrawalMethod === 'mpesa' ? 'Withdraw via M-Pesa' : 'Withdraw via Bank'}
                  </>
                )}
              </span>
            </button>

            <p className="text-xs text-slate-400 text-center">
              By submitting this request, you confirm that the details provided are correct.
              Your withdrawal will be processed after admin approval.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}