'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { 
  ArrowLeft,
  AlertTriangle,
  Trash2,
  Shield,
  Users,
  PiggyBank,
  Wallet,
  Calendar,
  CheckCircle,
  XCircle,
  Clock,
  RefreshCw
} from 'lucide-react'

export default function CleanSavingsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [processing, setProcessing] = useState(false)
  const [confirmText, setConfirmText] = useState('')
  const [step, setStep] = useState(1)
  const [stats, setStats] = useState({
    totalMembers: 0,
    totalContributions: 0,
    totalAmount: 0,
    totalSavings: 0,
    monthsActive: 0,
  })
  const [selectedMembers, setSelectedMembers] = useState<string[]>([])
  const [members, setMembers] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

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
      fetchData()
    }
  }, [status, session, router])

  const fetchData = async () => {
    try {
      const [statsRes, membersRes] = await Promise.all([
        fetch('/api/admin/clean-savings/stats'),
        fetch('/api/admin/members'),
      ])

      const statsData = await statsRes.json()
      const membersData = await membersRes.json()

      setStats(statsData)
      setMembers(membersData)
    } catch (error) {
      console.error('Failed to fetch data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCleanSavings = async () => {
    if (confirmText !== 'CLEAN SAVINGS') {
      setError('Please type "CLEAN SAVINGS" to confirm')
      return
    }

    setProcessing(true)
    setError('')

    try {
      const response = await fetch('/api/admin/clean-savings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          members: selectedMembers.length > 0 ? selectedMembers : 'all',
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(`Savings cleaned successfully! ${data.affectedCount} contributions removed.`)
        setStep(3)
        setTimeout(() => {
          router.push('/admin')
        }, 3000)
      } else {
        setError(data.error || 'Failed to clean savings')
      }
    } catch (error) {
      setError('An error occurred. Please try again.')
    } finally {
      setProcessing(false)
    }
  }

  const toggleMember = (memberId: string) => {
    setSelectedMembers(prev =>
      prev.includes(memberId)
        ? prev.filter(id => id !== memberId)
        : [...prev, memberId]
    )
  }

  const selectAllMembers = () => {
    if (selectedMembers.length === members.length) {
      setSelectedMembers([])
    } else {
      setSelectedMembers(members.map((m: any) => m.id))
    }
  }

  const filteredMembers = members.filter((member: any) => {
    const fullName = `${member.firstName} ${member.lastName}`.toLowerCase()
    const search = searchTerm.toLowerCase()
    return fullName.includes(search) || 
           member.memberNumber.toLowerCase().includes(search) ||
           member.email.toLowerCase().includes(search)
  })

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent" />
          <p className="mt-4 text-slate-600 text-sm">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50/50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link href="/admin" className="p-2 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105 border border-slate-200">
            <ArrowLeft className="h-5 w-5 text-slate-600" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Clean Savings</h1>
            <p className="text-slate-600">Reset and clean member savings contributions</p>
          </div>
        </div>

        {/* Steps */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                step >= 1 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'
              }`}>1</div>
              <span className="text-sm font-medium">Select</span>
            </div>
            <div className="flex-1 h-0.5 bg-slate-200"></div>
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                step >= 2 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'
              }`}>2</div>
              <span className="text-sm font-medium">Confirm</span>
            </div>
            <div className="flex-1 h-0.5 bg-slate-200"></div>
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                step >= 3 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'
              }`}>3</div>
              <span className="text-sm font-medium">Complete</span>
            </div>
          </div>

          {/* Warning Banner */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-red-800">⚠️ Warning: This action is irreversible!</p>
                <ul className="text-sm text-red-700 mt-1 space-y-0.5">
                  <li>• All savings contributions will be permanently deleted</li>
                  <li>• Member savings balances will be reset to zero</li>
                  <li>• This action cannot be undone</li>
                  <li>• Consider backing up data before proceeding</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 1: Select Members */}
          {step === 1 && (
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-4">1. Select Members to Clean</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-slate-50 rounded-xl p-3 text-center">
                  <p className="text-xs text-slate-500">Total Members</p>
                  <p className="text-xl font-bold text-slate-900">{stats.totalMembers}</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 text-center">
                  <p className="text-xs text-slate-500">Total Contributions</p>
                  <p className="text-xl font-bold text-slate-900">{stats.totalContributions}</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 text-center">
                  <p className="text-xs text-slate-500">Total Amount</p>
                  <p className="text-xl font-bold text-slate-900">Kshs {stats.totalAmount.toLocaleString()}</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 text-center">
                  <p className="text-xs text-slate-500">Selected Members</p>
                  <p className="text-xl font-bold text-slate-900">{selectedMembers.length}</p>
                </div>
              </div>

              {/* Search */}
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search members..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Member List */}
              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedMembers.length === members.length && members.length > 0}
                      onChange={selectAllMembers}
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-slate-700">Select All</span>
                  </div>
                  <span className="text-sm text-slate-500">{selectedMembers.length} selected</span>
                </div>

                <div className="max-h-64 overflow-y-auto">
                  {filteredMembers.map((member: any) => (
                    <div key={member.id} className="flex items-center gap-3 px-4 py-2 border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <input
                        type="checkbox"
                        checked={selectedMembers.includes(member.id)}
                        onChange={() => toggleMember(member.id)}
                        className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-900">
                          {member.firstName} {member.lastName}
                        </p>
                        <p className="text-xs text-slate-500">#{member.memberNumber} • Kshs {member.savingsBalance?.toLocaleString() || 0}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-slate-400">{member.contributions || 0} contributions</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setStep(2)}
                  disabled={selectedMembers.length === 0}
                  className="flex-1 px-6 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next: Confirm
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Confirm */}
          {step === 2 && (
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-4">2. Confirm Clean Savings</h3>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
                <p className="text-sm text-amber-800">
                  You are about to clean savings for <strong>{selectedMembers.length === members.length ? 'ALL' : selectedMembers.length}</strong> member(s).
                  {selectedMembers.length === members.length && ' This will clear ALL member savings.'}
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 mb-4">
                <p className="text-sm font-medium text-slate-700 mb-2">Members to clean:</p>
                <div className="max-h-32 overflow-y-auto">
                  {members
                    .filter((m: any) => selectedMembers.includes(m.id))
                    .map((member: any) => (
                      <div key={member.id} className="flex items-center gap-2 text-sm text-slate-600">
                        <span>• {member.firstName} {member.lastName}</span>
                        <span className="text-xs text-slate-400">(#{member.memberNumber})</span>
                      </div>
                    ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Type <strong className="text-red-600">CLEAN SAVINGS</strong> to confirm
                </label>
                <input
                  type="text"
                  value={confirmText}
                  onChange={(e) => setConfirmText(e.target.value)}
                  placeholder="Type CLEAN SAVINGS"
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 font-mono"
                />
                {error && (
                  <p className="text-sm text-red-600 mt-1">{error}</p>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-2.5 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleCleanSavings}
                  disabled={processing || confirmText !== 'CLEAN SAVINGS'}
                  className="flex-1 px-6 py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {processing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Trash2 className="h-4 w-4" />
                      Clean Savings
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Complete */}
          {step === 3 && (
            <div className="text-center py-8">
              {success ? (
                <>
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">✅ Cleaning Complete!</h3>
                  <p className="text-slate-600 mt-2">{success}</p>
                  <p className="text-sm text-slate-500 mt-1">Redirecting to admin dashboard...</p>
                </>
              ) : error ? (
                <>
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                    <XCircle className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">❌ Error</h3>
                  <p className="text-slate-600 mt-2">{error}</p>
                  <button
                    onClick={() => setStep(1)}
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                  >
                    Try Again
                  </button>
                </>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}