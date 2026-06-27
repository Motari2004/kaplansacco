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
  Info,
  DollarSign,
  Receipt,
  Smartphone,
  Send,
  Loader2,
  Home,
  Shield,
  Clock,
  ChevronRight
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
  const [showFeeScreen, setShowFeeScreen] = useState(false)
  const [memberData, setMemberData] = useState<any>(null)
  const [feePaid, setFeePaid] = useState(false)
  const [mpesaNumber, setMpesaNumber] = useState('')
  const [stkPushSent, setStkPushSent] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState('idle')
  const [showMpesaGuide, setShowMpesaGuide] = useState(false)
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    idNumber: '',
    password: '',
    confirmPassword: '',
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
      const submitData = new FormData()
      submitData.append('firstName', formData.firstName)
      submitData.append('lastName', formData.lastName)
      submitData.append('email', formData.email)
      submitData.append('phone', formData.phone)
      submitData.append('idNumber', formData.idNumber)
      submitData.append('password', formData.password)
      submitData.append('physicalAddress', formData.physicalAddress || '')
      submitData.append('postalAddress', formData.postalAddress || '')
      submitData.append('idFile', uploadedFile)

      const response = await fetch('/api/auth/register', {
        method: 'POST',
        body: submitData,
      })

      const data = await response.json()

      if (response.ok) {
        setMemberData({
          memberNumber: data.memberNumber,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          registrationFee: 1500,
        })
        setMpesaNumber(formData.phone)
        setShowFeeScreen(true)
        setLoading(false)
      } else {
        setError(data.message || 'Registration failed')
        setLoading(false)
      }
    } catch (error) {
      setError('An error occurred. Please try again.')
      setLoading(false)
    }
  }

  const handleMpesaPayment = async () => {
    if (!mpesaNumber || mpesaNumber.length < 10) {
      setError('Please enter a valid M-Pesa phone number')
      return
    }

    setPaymentStatus('processing')
    setError('')
    setStkPushSent(false)

    try {
      const response = await fetch('/api/auth/mpesa-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          memberNumber: memberData.memberNumber,
          amount: 1500,
          phoneNumber: mpesaNumber,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setStkPushSent(true)
        setPaymentStatus('success')
        setSuccess('✅ STK Push sent to your phone! Please check your phone and enter your M-Pesa PIN to complete payment.')
        
        setTimeout(async () => {
          try {
            const confirmResponse = await fetch('/api/auth/confirm-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                memberNumber: memberData.memberNumber,
                transactionId: data.transactionId,
              }),
            })
            
            if (confirmResponse.ok) {
              setFeePaid(true)
              setSuccess('✅ Payment confirmed! Account activated successfully.')
              setTimeout(() => {
                router.push('/login')
              }, 3000)
            }
          } catch (error) {
            setError('Payment confirmation failed. Please contact support.')
          }
        }, 5000)
      } else {
        setError(data.message || 'Payment request failed')
        setPaymentStatus('failed')
      }
    } catch (error) {
      setError('Payment processing failed. Please try again.')
      setPaymentStatus('failed')
    }
  }

  // If showing fee screen
  if (showFeeScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #8b8b8b 0%, #969696 50%, #a7a7a7 100%)'
      }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="w-full max-w-md relative z-10">
          <div className="p-8 rounded-3xl border shadow-2xl relative" style={{
            background: 'linear-gradient(145deg, rgba(167, 167, 167, 0.95), rgba(184, 184, 184, 0.95))',
            borderColor: 'rgba(255,255,255,0.3)',
            backdropFilter: 'blur(20px)'
          }}>
            {/* Home Button */}
            <Link
              href="/"
              className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-white/20 transition-all duration-200"
            >
              <Home className="h-4 w-4 text-slate-600" />
              <span className="text-xs font-medium text-slate-600">Home</span>
            </Link>

            {!feePaid ? (
              <>
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                    <Receipt className="h-8 w-8 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">Complete Registration</h2>
                  <p className="text-sm text-slate-700 mt-1 font-medium">
  Pay registration fee to activate your account
</p>
                </div>








{/* Member Details */}
<div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-200">
  <div className="flex items-center justify-between mb-2">
    <span className="text-sm text-slate-500">Member Number</span>
    <span className="text-sm font-bold text-slate-400">
      {feePaid ? memberData?.memberNumber : 'Pending Payment'}
    </span>
  </div>
  <div className="flex items-center justify-between mb-2">
    <span className="text-sm text-slate-500">Name</span>
    <span className="text-sm font-medium text-slate-900">{memberData?.firstName} {memberData?.lastName}</span>
  </div>
  <div className="flex items-center justify-between">
    <span className="text-sm text-slate-500">Email</span>
    <span className="text-sm font-medium text-slate-900">{memberData?.email}</span>
  </div>
</div>











                {/* Fee Details */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6 border border-blue-200/50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-slate-600">Registration Fee</span>
                    <span className="text-2xl font-bold text-blue-600">Kshs 1,500</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-blue-200/50 flex items-center gap-2 text-xs text-blue-600">
                    <Info className="h-3 w-3" />
                    <span>One-time non-refundable fee</span>
                  </div>
                </div>

                {/* M-Pesa Payment Section */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Smartphone className="h-5 w-5 text-emerald-600" />
                    <h3 className="text-sm font-semibold text-slate-700">Pay with M-Pesa</h3>
                  </div>

                  {/* M-Pesa Input */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      M-Pesa Phone Number
                    </label>
                    <div className="relative">
                      <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        type="tel"
                        value={mpesaNumber}
                        onChange={(e) => setMpesaNumber(e.target.value)}
                        placeholder="0712345678"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none bg-white/70 backdrop-blur-sm"
                      />
                    </div>
                    <p className="text-xs text-slate-700 mt-1 font-medium">
  You will receive an STK Push on this number
</p>
                  </div>

                  {/* M-Pesa Guide */}
                  <button
                    type="button"
                    onClick={() => setShowMpesaGuide(!showMpesaGuide)}
                    className="flex items-center gap-2 text-xs text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Shield className="h-3.5 w-3.5" />
                    How to complete M-Pesa payment
                    <ChevronRight className={`h-3.5 w-3.5 transition-transform ${showMpesaGuide ? 'rotate-90' : ''}`} />
                  </button>

                  {showMpesaGuide && (
                    <div className="mt-3 bg-emerald-50/80 rounded-xl p-4 border border-emerald-200/50">
                      <div className="flex items-start gap-3">
                        <div className="bg-emerald-100 p-2 rounded-lg">
                          <Smartphone className="h-4 w-4 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-emerald-800">M-Pesa STK Push Instructions</p>
                          <ul className="mt-2 space-y-1.5 text-xs text-emerald-700">
                            <li className="flex items-start gap-2">
                              <span className="font-bold">1.</span>
                              <span>Check your phone for an STK Push from <strong>KAPLANS SACCO</strong></span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-bold">2.</span>
                              <span>Enter your M-Pesa PIN when prompted on your phone</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-bold">3.</span>
                              <span>Confirm the payment of <strong>Kshs 1,500</strong></span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-bold">4.</span>
                              <span>Wait for confirmation message on your phone and this page</span>
                            </li>
                          </ul>
                          <div className="mt-2 p-2 bg-emerald-100/50 rounded-lg flex items-center gap-2">
                            <Clock className="h-3.5 w-3.5 text-emerald-600" />
                            <span className="text-xs text-emerald-700">You have <strong>2 minutes</strong> to complete the transaction</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {error && (
                  <div className="rounded-xl p-3 text-sm text-center border bg-red-50/80 border-red-200/50 text-red-600 backdrop-blur-sm mb-4">
                    {error}
                  </div>
                )}

                {success && (
                  <div className="rounded-xl p-3 text-sm text-center border bg-emerald-50/80 border-emerald-200/50 text-emerald-600 backdrop-blur-sm mb-4">
                    {success}
                  </div>
                )}

                {/* STK Push Status */}
                {stkPushSent && (
                  <div className="bg-emerald-50/80 rounded-xl p-4 border border-emerald-200/50 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="animate-pulse">
                        <Send className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-emerald-700">✅ STK Push Sent!</p>
                        <p className="text-xs text-emerald-600">Please check your phone and enter your M-Pesa PIN</p>
                        <div className="mt-1 flex items-center gap-2">
                          <div className="w-16 h-1 bg-emerald-200 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 rounded-full animate-pulse" style={{ width: '100%' }}></div>
                          </div>
                          <span className="text-[10px] text-emerald-500">Waiting for confirmation...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  onClick={handleMpesaPayment}
                  disabled={loading || paymentStatus === 'processing'}
                  className="relative w-full group overflow-hidden py-3 rounded-xl font-semibold text-white shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 group-hover:scale-110 transition-transform duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {paymentStatus === 'processing' ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending STK Push...
                      </>
                    ) : stkPushSent ? (
                      <>
                        <CheckCircle className="h-5 w-5" />
                        Waiting for Payment...
                      </>
                    ) : (
                      <>
                        <Smartphone className="h-5 w-5" />
                        Pay with M-Pesa (Kshs 1,500)
                      </>
                    )}
                  </span>
                </button>



<p className="text-xs text-slate-700 text-center mt-4 font-medium">
  You will receive an STK Push on your M-Pesa registered phone number.
  Enter your PIN to complete the payment.
</p>



              </>
            ) : (
              // Success screen after payment
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-10 w-10 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">🎉 Registration Complete!</h2>
                <p className="text-slate-600 mt-2">Your membership has been activated successfully.</p>
                <div className="bg-slate-50 rounded-xl p-4 mt-4 border border-slate-200 text-left">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-500">Member Number</span>
                    <span className="text-sm font-bold text-slate-900">{memberData?.memberNumber}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Status</span>
                    <span className="text-sm font-medium text-emerald-600">Active ✅</span>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mt-4">Redirecting to login...</p>
                <div className="mt-4 w-full bg-slate-200 rounded-full h-1">
                  <div className="bg-emerald-600 rounded-full h-1 animate-pulse" style={{ width: '100%' }}></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Return to main registration form
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #8b8b8b 0%, #969696 50%, #a7a7a7 100%)'
    }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-2xl relative z-10">
        <div className="p-8 rounded-3xl border shadow-2xl relative" style={{
          background: 'linear-gradient(145deg, rgba(167, 167, 167, 0.95), rgba(184, 184, 184, 0.95))',
          borderColor: 'rgba(255,255,255,0.3)',
          backdropFilter: 'blur(20px)'
        }}>
          {/* Home Button */}
          <Link
            href="/"
            className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-white/20 transition-all duration-200"
          >
            <Home className="h-4 w-4 text-slate-600" />
            <span className="text-xs font-medium text-slate-600">Home</span>
          </Link>

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
                <span>Fill in all required fields</span>
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