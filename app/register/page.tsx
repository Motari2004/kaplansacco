'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  User, 
  Mail, 
  Lock, 
  Phone, 
  CreditCard,
  Eye, 
  EyeOff,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Upload,
  Info
} from 'lucide-react'

export default function RegisterPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    idNumber: '',
    password: '',
    confirmPassword: '',
    monthlyContribution: 500,
    physicalAddress: '',
    postalAddress: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    if (!agreeToTerms) {
      setError('Please agree to the terms and conditions')
      setLoading(false)
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (!uploadedFile) {
      setError('Please upload your ID document')
      setLoading(false)
      return
    }

    try {
      // Create FormData for file upload
      const submitData = new FormData()
      submitData.append('firstName', formData.firstName)
      submitData.append('lastName', formData.lastName)
      submitData.append('email', formData.email)
      submitData.append('phone', formData.phone)
      submitData.append('idNumber', formData.idNumber)
      submitData.append('password', formData.password)
      submitData.append('monthlyContribution', formData.monthlyContribution.toString())
      submitData.append('physicalAddress', formData.physicalAddress || '')
      submitData.append('postalAddress', formData.postalAddress || '')
      submitData.append('idFile', uploadedFile)

      const response = await fetch('/api/auth/register', {
        method: 'POST',
        body: submitData, // Don't set Content-Type header - browser will set it with boundary
      })

      const data = await response.json()

      if (response.ok) {
        let successMessage = `Member registered successfully! Member Number: ${data.memberNumber}`
        if (data.idUploaded) {
          successMessage += ' ✅ ID uploaded successfully!'
        }
        setSuccess(successMessage)
        setTimeout(() => {
          router.push('/login')
        }, 3000)
      } else {
        setError(data.message || 'Registration failed')
      }
    } catch (error) {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #f0f4ff 0%, #e8eeff 50%, #f0f0ff 100%)'
    }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-2xl relative z-10">
        <div className="p-8 rounded-3xl border shadow-2xl" style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(248,250,255,0.95))',
          borderColor: 'rgba(255,255,255,0.3)',
          backdropFilter: 'blur(20px)'
        }}>
          {/* Header with Logo */}
          <div className="flex items-center gap-4 mb-6">
            <Link
              href="/"
              className="p-2 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-colors border border-blue-200/30 shadow-sm"
            >
              <ArrowLeft className="h-5 w-5 text-slate-600" />
            </Link>
            <div className="flex-1 text-center">
              <div className="flex justify-center mb-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-xl opacity-40"></div>
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white p-1.5 shadow-lg border border-blue-200/50">
                    <img
                      src="/images/logo.JPG"
                      alt="Kaplans SACCO Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
              <h2 className="text-lg font-bold text-slate-800">KAPLANS SAVINGS AND CREDIT</h2>
              <h3 className="text-md font-semibold text-slate-700">CO-OPERATIVE SOCIETY LTD</h3>
              <p className="text-sm text-slate-500">Membership Application</p>
            </div>
          </div>

          {/* Requirements */}
          <div className="mb-6 p-4 rounded-xl border bg-blue-50/80 border-blue-200/50">
            <h4 className="font-semibold text-blue-800 flex items-center gap-2 text-sm">
              <Info className="h-4 w-4" />
              Requirements
            </h4>
            <ul className="mt-2 space-y-1.5 text-sm text-blue-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-600" />
                <span>Original and copy of national identification card or any other legal form of identification</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-600" />
                <span>Non-refundable registration fee of <strong>Kshs 1,500</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-600" />
                <span>Minimum monthly contribution of <strong>Kshs 500</strong></span>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">First Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-blue-200/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none bg-white/70 backdrop-blur-sm text-slate-800 text-sm placeholder-slate-400"
                    placeholder="First name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Last Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-blue-200/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none bg-white/70 backdrop-blur-sm text-slate-800 text-sm placeholder-slate-400"
                    placeholder="Last name"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-blue-200/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none bg-white/70 backdrop-blur-sm text-slate-800 text-sm placeholder-slate-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone *</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-blue-200/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none bg-white/70 backdrop-blur-sm text-slate-800 text-sm placeholder-slate-400"
                    placeholder="0712345678"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">ID Number *</label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  required
                  value={formData.idNumber}
                  onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-blue-200/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none bg-white/70 backdrop-blur-sm text-slate-800 text-sm placeholder-slate-400"
                  placeholder="ID number"
                />
              </div>
              <p className="text-xs text-slate-500 mt-1">Original and copy of national identification card required</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Physical Address</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={formData.physicalAddress}
                    onChange={(e) => setFormData({ ...formData, physicalAddress: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-blue-200/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none bg-white/70 backdrop-blur-sm text-slate-800 text-sm placeholder-slate-400"
                    placeholder="Physical address"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Postal Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={formData.postalAddress}
                    onChange={(e) => setFormData({ ...formData, postalAddress: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-blue-200/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none bg-white/70 backdrop-blur-sm text-slate-800 text-sm placeholder-slate-400"
                    placeholder="P.O. Box"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Monthly Contribution (Kshs) *</label>
              <select
                required
                value={formData.monthlyContribution}
                onChange={(e) => setFormData({ ...formData, monthlyContribution: Number(e.target.value) })}
                className="w-full px-4 py-2.5 rounded-xl border border-blue-200/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none bg-white/70 backdrop-blur-sm text-slate-800 text-sm"
              >
                {Array.from({ length: 50 }, (_, i) => (i + 1) * 500).map((amount) => (
                  <option key={amount} value={amount}>
                    Kshs {amount.toLocaleString()}
                  </option>
                ))}
              </select>
              <p className="text-xs text-slate-500 mt-1">Minimum monthly contribution of Kshs 500</p>
            </div>

            {/* ID Upload with Checkmark */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Upload ID (Original & Copy) *</label>
              <div className="relative">
                <div className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors bg-white/50 backdrop-blur-sm ${
                  uploadedFile
                    ? 'border-emerald-400 bg-emerald-50/50'
                    : 'border-blue-200/50 hover:border-blue-400'
                }`}>
                  {uploadedFile ? (
                    <>
                      <CheckCircle className="h-8 w-8 text-emerald-500 mx-auto mb-2" />
                      <p className="text-sm font-medium text-emerald-700">{uploadedFile.name}</p>
                      <p className="text-xs text-emerald-500 mt-0.5">
                        {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB — ready to submit
                      </p>
                      <button
                        type="button"
                        onClick={() => setUploadedFile(null)}
                        className="text-xs text-red-400 hover:text-red-600 mt-2"
                      >
                        Remove
                      </button>
                    </>
                  ) : (
                    <>
                      <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                      <p className="text-sm text-slate-600">Upload your ID document</p>
                      <p className="text-xs text-slate-400">PNG, JPG, PDF (Max 5MB)</p>
                    </>
                  )}
                  <input
                    type="file"
                    accept=".png,.jpg,.jpeg,.pdf"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file && file.size <= 5 * 1024 * 1024) {
                        setUploadedFile(file)
                        setError('')
                      } else if (file) {
                        setError('File must be under 5MB')
                        e.target.value = ''
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Password *</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-blue-200/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none bg-white/70 backdrop-blur-sm text-slate-800 text-sm placeholder-slate-400"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-slate-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-slate-400" />
                    )}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Confirm Password *</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-blue-200/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none bg-white/70 backdrop-blur-sm text-slate-800 text-sm placeholder-slate-400"
                    placeholder="Confirm password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-slate-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-slate-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border" style={{
              background: 'linear-gradient(145deg, rgba(251, 191, 36, 0.1), rgba(245, 158, 11, 0.05))',
              borderColor: 'rgba(251, 191, 36, 0.2)'
            }}>
              <h4 className="font-semibold text-amber-700 flex items-center gap-2 text-sm">
                <AlertCircle className="h-4 w-4" />
                Membership Fees
              </h4>
              <ul className="mt-2 space-y-1.5 text-sm text-amber-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3" />
                  <span>Non-refundable registration fee: <strong className="text-amber-700">Kshs 1,500</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3" />
                  <span>Monthly contribution: As selected above (Minimum Kshs 500)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3" />
                  <span>Share capital: Kshs 100 per share</span>
                </li>
              </ul>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-blue-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="terms" className="text-sm text-slate-600">
                I hereby make application for membership and agree to conform to the by-laws and amendment(s) of KAPLAN SACCO *
              </label>
            </div>

            {error && (
              <div className="rounded-xl p-3 text-sm text-center border bg-red-50/80 border-red-200/50 text-red-600 backdrop-blur-sm">
                {error}
              </div>
            )}

            {success && (
              <div className="rounded-xl p-3 text-sm text-center border bg-emerald-50/80 border-emerald-200/50 text-emerald-600 backdrop-blur-sm">
                {success}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="relative w-full group overflow-hidden py-3 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 group-hover:scale-110 transition-transform duration-300"></div>
              <span className="relative z-10 flex items-center justify-center">
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting Application...
                  </>
                ) : (
                  'Submit Application'
                )}
              </span>
            </button>

            <div className="text-center">
              <Link 
                href="/login" 
                className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
              >
                Already have an account?{' '}
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Sign in</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}