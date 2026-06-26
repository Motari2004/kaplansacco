'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { 
  User, 
  Mail, 
  Phone, 
  CreditCard, 
  Home, 
  MapPin,
  ArrowLeft,
  Save,
  Info,
  AlertCircle
} from 'lucide-react'
import Link from 'next/link'

export default function RegisterMemberPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  
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
    monthlyContribution: 1000,
    shares: 0,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/members', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(`Member registered successfully! Member Number: ${data.memberNumber}`)
        setTimeout(() => {
          router.push('/members')
        }, 2000)
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
    <div>
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link
          href="/members"
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Register New Member</h1>
          <p className="text-gray-600">Add a new member to the SACCO</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6">
            <div className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <User className="h-5 w-5 mr-2 text-blue-600" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-blue-600" />
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="0712345678"
                    />
                  </div>
                </div>
              </div>

              {/* Identification */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <CreditCard className="h-5 w-5 mr-2 text-blue-600" />
                  Identification
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ID Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.idNumber}
                      onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Home className="h-5 w-5 mr-2 text-blue-600" />
                  Address
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Physical Address
                    </label>
                    <input
                      type="text"
                      value={formData.physicalAddress}
                      onChange={(e) => setFormData({ ...formData, physicalAddress: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Postal Address
                    </label>
                    <input
                      type="text"
                      value={formData.postalAddress}
                      onChange={(e) => setFormData({ ...formData, postalAddress: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* SACCO Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  SACCO Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Monthly Contribution (Kshs) *
                    </label>
                    <select
                      required
                      value={formData.monthlyContribution}
                      onChange={(e) => setFormData({ ...formData, monthlyContribution: Number(e.target.value) })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {Array.from({ length: 50 }, (_, i) => (i + 1) * 1000).map((amount) => (
                        <option key={amount} value={amount}>
                          Kshs {amount.toLocaleString()}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Shares
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={formData.shares}
                      onChange={(e) => setFormData({ ...formData, shares: Number(e.target.value) })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">Kshs 100 per share</p>
                  </div>
                </div>
              </div>

              {/* Password */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Info className="h-5 w-5 mr-2 text-blue-600" />
                  Account Security
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password *
                    </label>
                    <input
                      type="password"
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password *
                    </label>
                    <input
                      type="password"
                      required
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Error/Success Messages */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-red-600">{error}</p>
                </div>
              )}
              {success && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-600">{success}</p>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Registering...
                    </>
                  ) : (
                    <>
                      <Save className="h-5 w-5 mr-2" />
                      Register Member
                    </>
                  )}
                </button>
                <Link
                  href="/members"
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
                >
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Fees & Charges</h3>
            
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 flex items-center">
                  <Info className="h-4 w-4 mr-2" />
                  Application Fee
                </h4>
                <p className="text-yellow-700 mt-1">Kshs 1,000 (Non-refundable)</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 flex items-center">
                  <Info className="h-4 w-4 mr-2" />
                  Monthly Contribution
                </h4>
                <p className="text-blue-700 mt-1">Minimum Kshs 1,000</p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 flex items-center">
                  <Info className="h-4 w-4 mr-2" />
                  Share Capital
                </h4>
                <p className="text-purple-700 mt-1">Kshs 100 per share</p>
                <p className="text-purple-700">Minimum 1 share required</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 flex items-center">
                  <Info className="h-4 w-4 mr-2" />
                  Benefits
                </h4>
                <ul className="text-green-700 mt-1 space-y-1 text-sm">
                  <li>• Access to loans</li>
                  <li>• Annual dividends</li>
                  <li>• Savings growth</li>
                  <li>• Financial security</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}