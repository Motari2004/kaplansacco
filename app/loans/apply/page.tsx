'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { 
  ArrowLeft,
  Wallet,
  CreditCard,
  Users,
  Home,
  Briefcase,
  GraduationCap,
  Smartphone,
  Award,
  Building,
  CheckCircle,
  AlertCircle,
  Info,
  Calendar,
  DollarSign,
  Clock,
  FileText,
  Shield,
  ChevronRight,
  Car,
  Church
} from 'lucide-react'

export default function ApplyLoanPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [userData, setUserData] = useState<any>(null)
  const [selectedLoan, setSelectedLoan] = useState<string>('')
  
  const [formData, setFormData] = useState({
    amount: '',
    purpose: '',
    termMonths: 36,
    guarantor1: '',
    guarantor1Phone: '',
    guarantor2: '',
    guarantor2Phone: '',
    isChurchOfficial: false,
    churchName: '',
    churchPosition: '',
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
      setUserData(data)
    } catch (error) {
      console.error('Failed to fetch user data:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    if (!selectedLoan) {
      setError('Please select a loan product')
      setLoading(false)
      return
    }

    if (!formData.amount || parseFloat(formData.amount) < 1000) {
      setError('Minimum loan amount is Kshs 1,000')
      setLoading(false)
      return
    }

    if (!formData.purpose || formData.purpose.length < 10) {
      setError('Please provide a detailed purpose for the loan')
      setLoading(false)
      return
    }

    // Validate church official details for pastors/reverends/bishops loans
    if (selectedLoan === 'church-car') {
      if (!formData.isChurchOfficial) {
        setError('Please confirm you are a church official (Pastor, Reverend, or Bishop)')
        setLoading(false)
        return
      }
      if (!formData.churchName) {
        setError('Please provide your church name')
        setLoading(false)
        return
      }
      if (!formData.churchPosition) {
        setError('Please provide your position in the church')
        setLoading(false)
        return
      }
    }

    try {
      const response = await fetch('/api/loans/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          loanType: selectedLoan,
          amount: parseFloat(formData.amount),
          purpose: formData.purpose,
          termMonths: formData.termMonths,
          guarantor1: formData.guarantor1,
          guarantor1Phone: formData.guarantor1Phone,
          guarantor2: formData.guarantor2,
          guarantor2Phone: formData.guarantor2Phone,
          isChurchOfficial: formData.isChurchOfficial,
          churchName: formData.churchName,
          churchPosition: formData.churchPosition,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(`Loan application submitted successfully! Application ID: ${data.loanId}`)
        setTimeout(() => {
          router.push('/dashboard')
        }, 3000)
      } else {
        setError(data.message || 'Loan application failed')
      }
    } catch (error) {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const loanProducts = [
    {
      id: 'development',
      name: 'Development Loan',
      icon: Building,
      description: 'Long-term financing for member projects',
      maxAmount: 2000000,
      interest: '12%',
      term: 'Up to 60 months',
      color: 'from-blue-600 to-indigo-600',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 'biashara',
      name: 'Biashara Loan',
      icon: Briefcase,
      description: 'Working capital targeted for businesses',
      maxAmount: 1000000,
      interest: '10%',
      term: 'Up to 36 months',
      color: 'from-emerald-600 to-teal-600',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600'
    },
    {
      id: 'emergency',
      name: 'Emergency/School Fees Loan',
      icon: GraduationCap,
      description: 'Short-term or immediate financial assistance',
      maxAmount: 500000,
      interest: '8%',
      term: 'Up to 12 months',
      color: 'from-amber-600 to-orange-600',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600'
    },
    {
      id: 'premium',
      name: 'Premium Loan',
      icon: Award,
      description: 'Higher-tier credit facility based on member deposits',
      maxAmount: 3000000,
      interest: '9%',
      term: 'Up to 48 months',
      color: 'from-purple-600 to-pink-600',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      id: 'asset',
      name: 'Asset & Salient Loans',
      icon: Home,
      description: 'Specific financing to purchase household and electronic items',
      maxAmount: 300000,
      interest: '11%',
      term: 'Up to 24 months',
      color: 'from-indigo-600 to-purple-600',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600'
    },
    {
      id: 'mkaplans',
      name: 'M-KAPLANS',
      icon: Smartphone,
      description: 'Mobile-based lending for fast, on-the-go financial needs',
      maxAmount: 50000,
      interest: '5%',
      term: 'Up to 6 months',
      color: 'from-cyan-600 to-blue-600',
      iconBg: 'bg-cyan-100',
      iconColor: 'text-cyan-600'
    },
    {
      id: 'church-car',
      name: 'PASTORS, REVERENDS & BISHOPS CAR LOANS',
      icon: Car,
      description: 'Loans for purchasing vehicles, including cars and motorcycles for the men of GOD',
      maxAmount: 3000000,
      interest: '8%',
      term: 'Up to 48 months',
      color: 'from-amber-600 to-rose-600',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
      isSpecial: false
    }
  ]

  const selectedLoanData = loanProducts.find(p => p.id === selectedLoan)

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
          <p className="mt-4 text-slate-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link
            href="/dashboard"
            className="p-2 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105"
          >
            <ArrowLeft className="h-5 w-5 text-slate-600" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Loan Application</h1>
            <p className="text-slate-600">Apply for a loan to meet your financial needs</p>
          </div>
        </div>

        {/* Loan Products Selection */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-blue-600" />
            Select a Loan Product
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {loanProducts.map((product) => {
              const Icon = product.icon
              const isSelected = selectedLoan === product.id
              return (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => setSelectedLoan(product.id)}
                  className={`relative p-4 rounded-xl text-center transition-all duration-300 border-2 ${
                    isSelected 
                      ? `border-blue-500 bg-blue-50 shadow-md scale-105` 
                      : 'border-slate-200 bg-slate-50 hover:border-blue-300 hover:bg-blue-50/50'
                  } ${product.isSpecial ? 'ring-2 ring-amber-300/50' : ''}`}
                >
                  {isSelected && (
                    <div className="absolute -top-2 -right-2 bg-blue-500 rounded-full p-0.5">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                  )}
                  {product.isSpecial && (
                    <div className="absolute -top-1 -left-1">
                      <span className="bg-gradient-to-r from-amber-500 to-rose-500 text-white text-[8px] font-bold px-2 py-0.5 rounded-full">
                        SPECIAL
                      </span>
                    </div>
                  )}
                  <div className={`inline-flex p-2 rounded-xl mb-2 ${
                    isSelected ? 'bg-blue-500' : product.iconBg
                  }`}>
                    <Icon className={`h-5 w-5 ${isSelected ? 'text-white' : product.iconColor}`} />
                  </div>
                  <p className={`text-sm font-semibold ${isSelected ? 'text-blue-700' : 'text-slate-800'}`}>
                    {product.name}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {product.interest} • {product.term}
                  </p>
                  {product.isSpecial && (
                    <p className="text-[10px] text-amber-600 font-medium mt-1">
                      ✝️ For Church Officials
                    </p>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Selected Loan Details */}
        {selectedLoanData && (
          <div className={`bg-gradient-to-r ${selectedLoanData.color} rounded-xl p-4 text-white mb-6`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-xl">
                  <selectedLoanData.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm opacity-80">Selected Loan</p>
                  <p className="text-xl font-bold">{selectedLoanData.name}</p>
                  <p className="text-sm opacity-90">{selectedLoanData.description}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm opacity-80">Interest Rate</p>
                <p className="text-2xl font-bold">{selectedLoanData.interest}</p>
                <p className="text-xs opacity-80">{selectedLoanData.term}</p>
              </div>
            </div>
          </div>
        )}

        {/* Church Official Details - Shown only for Church Car Loan */}
        {selectedLoan === 'church-car' && (
          <div className="bg-amber-50/80 rounded-xl p-4 border-2 border-amber-300/50 mb-6">
            <div className="flex items-start gap-3">
              <Church className="h-5 w-5 text-amber-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-amber-800">Church Official Details</p>
                <p className="text-sm text-amber-700 mt-1">
                  This loan product is exclusively for Pastors, Reverends, and Bishops.
                  Please provide your church details below.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Eligibility Info */}
        <div className="bg-blue-50/80 rounded-xl p-4 border border-blue-200/50 mb-6">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-blue-800">Loan Eligibility</p>
              <ul className="text-sm text-blue-700 mt-1 space-y-1">
                <li>• Loans are pegged to 3 times your savings</li>
                <li>• Requires 3-month savings history</li>
                <li>• Approval based on appraisal by a loan officer</li>
                <li>• Two guarantors required</li>
                {selectedLoan === 'church-car' && (
                  <li className="font-semibold text-amber-700">• ✝️ Special rate for Church Officials</li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-600" />
            Application Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Church Official Fields - Only for Church Car Loan */}
            {selectedLoan === 'church-car' && (
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200/50 space-y-4">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="isChurchOfficial"
                    checked={formData.isChurchOfficial}
                    onChange={(e) => setFormData({ ...formData, isChurchOfficial: e.target.checked })}
                    className="w-4 h-4 rounded border-amber-300 text-amber-600 focus:ring-amber-500"
                  />
                  <label htmlFor="isChurchOfficial" className="text-sm font-medium text-amber-800">
                    I am a Pastor, Reverend, or Bishop
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-amber-700 mb-1">
                      Church Name *
                    </label>
                    <input
                      type="text"
                      required={formData.isChurchOfficial}
                      value={formData.churchName}
                      onChange={(e) => setFormData({ ...formData, churchName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none bg-white/70 text-slate-800"
                      placeholder="Enter your church name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-amber-700 mb-1">
                      Position *
                    </label>
                    <select
                      required={formData.isChurchOfficial}
                      value={formData.churchPosition}
                      onChange={(e) => setFormData({ ...formData, churchPosition: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none bg-white/70 text-slate-800"
                    >
                      <option value="">Select position</option>
                      <option value="Pastor">Pastor</option>
                      <option value="Reverend">Reverend</option>
                      <option value="Bishop">Bishop</option>
                      <option value="Archbishop">Archbishop</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Loan Amount (Kshs) *
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="number"
                  required
                  min="1000"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none bg-white/70 text-slate-800"
                  placeholder="Enter amount"
                />
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Minimum: Kshs 1,000 | Maximum: {selectedLoanData ? `Kshs ${selectedLoanData.maxAmount.toLocaleString()}` : 'Based on your savings'}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Loan Purpose *
              </label>
              <textarea
                required
                rows={3}
                value={formData.purpose}
                onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none bg-white/70 text-slate-800"
                placeholder="Describe the purpose of the loan..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Repayment Period (Months)
              </label>
              <select
                value={formData.termMonths}
                onChange={(e) => setFormData({ ...formData, termMonths: Number(e.target.value) })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none bg-white/70 text-slate-800"
              >
                <option value={12}>12 months</option>
                <option value={24}>24 months</option>
                <option value={36}>36 months</option>
                <option value={48}>48 months</option>
                <option value={60}>60 months</option>
              </select>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <h3 className="text-sm font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-600" />
                Guarantors (2 Required)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Guarantor 1 Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.guarantor1}
                    onChange={(e) => setFormData({ ...formData, guarantor1: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none bg-white/70 text-slate-800"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Guarantor 1 Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.guarantor1Phone}
                    onChange={(e) => setFormData({ ...formData, guarantor1Phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none bg-white/70 text-slate-800"
                    placeholder="0712345678"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Guarantor 2 Name
                  </label>
                  <input
                    type="text"
                    value={formData.guarantor2}
                    onChange={(e) => setFormData({ ...formData, guarantor2: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none bg-white/70 text-slate-800"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Guarantor 2 Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.guarantor2Phone}
                    onChange={(e) => setFormData({ ...formData, guarantor2Phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none bg-white/70 text-slate-800"
                    placeholder="0712345678"
                  />
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

            <button
              type="submit"
              disabled={loading || !selectedLoan}
              className="relative w-full group overflow-hidden py-3 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className={`absolute inset-0 ${selectedLoan === 'church-car' ? 'bg-gradient-to-r from-amber-600 to-rose-600' : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600'} group-hover:scale-110 transition-transform duration-300`}></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Submitting Application...
                  </>
                ) : (
                  <>
                    {selectedLoan === 'church-car' ? (
                      <Church className="h-5 w-5" />
                    ) : (
                      <CreditCard className="h-5 w-5" />
                    )}
                    {selectedLoan ? 'Submit Loan Application' : 'Select a Loan Product First'}
                  </>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}