'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { 
  ArrowLeft,
  PiggyBank,
  Wallet,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  Plus,
  DollarSign,
  TrendingUp,
  Baby,
  Gift,
  Sparkles,
  Building2,
  CreditCard
} from 'lucide-react'

export default function ContributionsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [contributions, setContributions] = useState([])
  const [stats, setStats] = useState({
    totalSaved: 0,
    totalContributions: 0,
    monthsActive: 0,
    nextContribution: 0,
    savingsBalance: 0
  })
  const [showModal, setShowModal] = useState(false)
  const [contributionAmount, setContributionAmount] = useState(500)
  const [selectedSavingsType, setSelectedSavingsType] = useState('ordinary')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const savingsTypes = [
    {
      id: 'ordinary',
      name: 'Ordinary Savings',
      icon: PiggyBank,
      description: 'Minimum monthly contribution of Kshs 500',
      minAmount: 500,
      color: 'from-emerald-500 to-teal-500',
      bg: 'bg-emerald-50'
    },
    {
      id: 'jenga',
      name: 'Jenga Junior Savings',
      icon: Baby,
      description: 'Specially tailored accounts to help minors build financial savings',
      minAmount: 200,
      color: 'from-blue-500 to-indigo-500',
      bg: 'bg-blue-50'
    },
    {
      id: 'christmas',
      name: 'Christmas Savings',
      icon: Gift,
      description: 'Designated account to facilitate saving for holiday expenses',
      minAmount: 100,
      color: 'from-amber-500 to-orange-500',
      bg: 'bg-amber-50'
    },
  
  ]

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
      return
    }

    if (status === 'authenticated') {
      fetchContributions()
    }
  }, [status, router])

  const fetchContributions = async () => {
    try {
      const response = await fetch('/api/contributions')
      const data = await response.json()
      
      const profileResponse = await fetch('/api/user/profile')
      const profileData = await profileResponse.json()
      
      setContributions(data.contributions || [])
      setStats({
        totalSaved: data.totalSaved || 0,
        totalContributions: data.totalContributions || 0,
        monthsActive: data.monthsActive || 0,
        nextContribution: data.nextContribution || 500,
        savingsBalance: profileData.savingsBalance || 0
      })
    } catch (error) {
      console.error('Failed to fetch contributions:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleContribution = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    setSuccess('')

    const selectedType = savingsTypes.find(t => t.id === selectedSavingsType)
    if (contributionAmount < (selectedType?.minAmount || 500)) {
      setError(`Minimum contribution for ${selectedType?.name} is Kshs ${selectedType?.minAmount}`)
      setSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/contributions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: contributionAmount,
          month: new Date().toISOString(),
          savingsType: selectedSavingsType,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(`Contribution of Kshs ${contributionAmount.toLocaleString()} recorded successfully!`)
        setShowModal(false)
        fetchContributions()
        setTimeout(() => {
          setSuccess('')
        }, 3000)
      } else {
        setError(data.message || 'Contribution failed')
      }
    } catch (error) {
      setError('An error occurred. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const getSavingsTypeLabel = (type: string) => {
    const types: Record<string, string> = {
      ordinary: 'Ordinary Savings',
      jenga: 'Jenga Junior Savings',
      christmas: 'Christmas Savings',
      premium: 'Premium Savings'
    }
    return types[type] || type
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
          <p className="mt-4 text-slate-600">Loading your contributions...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="p-2 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105"
            >
              <ArrowLeft className="h-5 w-5 text-slate-600" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">My Savings</h1>
              <p className="text-slate-600">Track and manage your savings contributions</p>
            </div>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
          >
            <Plus className="h-5 w-5" />
            Make Contribution
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-200/50 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <Wallet className="h-4 w-4 text-emerald-600" />
              <p className="text-xs text-slate-500">Savings Balance</p>
            </div>
            <p className="text-2xl font-bold text-emerald-600">Kshs {stats.savingsBalance.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <PiggyBank className="h-4 w-4 text-blue-600" />
              <p className="text-xs text-slate-500">Total Contributions</p>
            </div>
            <p className="text-2xl font-bold text-slate-900">Kshs {stats.totalSaved.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="h-4 w-4 text-purple-600" />
              <p className="text-xs text-slate-500">Contributions Made</p>
            </div>
            <p className="text-2xl font-bold text-slate-900">{stats.totalContributions}</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="h-4 w-4 text-amber-600" />
              <p className="text-xs text-slate-500">Months Active</p>
            </div>
            <p className="text-2xl font-bold text-slate-900">{stats.monthsActive}</p>
          </div>
        </div>

        {/* Savings Types Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {savingsTypes.map((type) => {
            const Icon = type.icon
            return (
              <div key={type.id} className={`${type.bg} p-3 rounded-xl border border-slate-200 text-center`}>
                <Icon className="h-6 w-6 mx-auto mb-1 text-slate-700" />
                <p className="text-xs font-semibold text-slate-800">{type.name}</p>
                <p className="text-[10px] text-slate-500">Min: Kshs {type.minAmount}</p>
              </div>
            )
          })}
        </div>

        {/* Eligibility Status */}
        {stats.monthsActive < 3 && (
          <div className="bg-amber-50/80 rounded-xl p-4 border border-amber-200/50 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-amber-800">Loan Eligibility Status</p>
                <p className="text-sm text-amber-700 mt-1">
                  You need {3 - stats.monthsActive} more month(s) of contributions to qualify for a loan.
                </p>
                <div className="mt-2 w-full bg-amber-200 rounded-full h-2">
                  <div 
                    className="bg-amber-600 rounded-full h-2 transition-all duration-500"
                    style={{ width: `${(stats.monthsActive / 3) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-amber-600 mt-1">
                  {stats.monthsActive} of 3 months completed
                </p>
              </div>
            </div>
          </div>
        )}

        {stats.monthsActive >= 3 && (
          <div className="bg-emerald-50/80 rounded-xl p-4 border border-emerald-200/50 mb-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-emerald-800">✅ You're Eligible for a Loan!</p>
                <p className="text-sm text-emerald-700 mt-1">
                  You have {stats.monthsActive} months of savings history. You can now apply for a loan up to 
                  3 times your savings balance (Kshs {(stats.savingsBalance * 3).toLocaleString()}).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Contributions List */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200">
            <h2 className="text-lg font-bold text-slate-900">Contribution History</h2>
          </div>
          <div className="overflow-x-auto">
            {contributions.length === 0 ? (
              <div className="p-8 text-center text-slate-500">
                <PiggyBank className="h-12 w-12 mx-auto mb-3 text-slate-300" />
                <p>No contributions yet</p>
                <p className="text-sm">Make your first contribution to start building your savings</p>
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Month</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Receipt</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {contributions.map((contribution: any) => (
                    <tr key={contribution.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-medium text-slate-900">
                          {new Date(contribution.month).toLocaleDateString('en-KE', { 
                            month: 'long', 
                            year: 'numeric' 
                          })}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-semibold text-emerald-600">
                          Kshs {contribution.amount.toLocaleString()}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                          {getSavingsTypeLabel(contribution.savingsType || 'ordinary')}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                          <CheckCircle className="h-3 w-3" />
                          {contribution.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-slate-600">
                          {new Date(contribution.paidDate).toLocaleDateString('en-KE')}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs text-slate-400 font-mono">
                          {contribution.receiptNo}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {/* Contribution Modal - With Savings Type Selection */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200 sticky top-0 bg-white rounded-t-3xl">
              <h2 className="text-xl font-bold text-slate-900">Make a Contribution</h2>
              <p className="text-sm text-slate-500">Add funds to your savings account</p>
            </div>

            <form onSubmit={handleContribution} className="p-6 space-y-4">
              {/* Savings Type Selection */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Select Savings Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {savingsTypes.map((type) => {
                    const Icon = type.icon
                    const isSelected = selectedSavingsType === type.id
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedSavingsType(type.id)}
                        className={`p-3 rounded-xl border-2 transition-all text-left ${
                          isSelected
                            ? `border-blue-500 bg-blue-50 shadow-sm`
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className={`inline-flex p-1.5 rounded-lg bg-gradient-to-br ${type.color} mb-1`}>
                          <Icon className="h-4 w-4 text-white" />
                        </div>
                        <p className={`text-xs font-semibold ${isSelected ? 'text-blue-700' : 'text-slate-700'}`}>
                          {type.name}
                        </p>
                        <p className="text-[10px] text-slate-500">Min: Kshs {type.minAmount}</p>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Amount */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Amount (Kshs)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="number"
                    required
                    min={savingsTypes.find(t => t.id === selectedSavingsType)?.minAmount || 500}
                    value={contributionAmount}
                    onChange={(e) => setContributionAmount(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                    placeholder="Enter amount"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Minimum: Kshs {savingsTypes.find(t => t.id === selectedSavingsType)?.minAmount || 500}
                </p>
              </div>

              <div className="bg-blue-50/80 rounded-xl p-3 border border-blue-200/50">
                <p className="text-sm text-blue-800">
                  <strong>Tip:</strong> Regular contributions help you build savings and qualify for loans.
                </p>
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
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all hover:scale-105 disabled:opacity-50"
                >
                  {submitting ? 'Processing...' : 'Confirm Contribution'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}