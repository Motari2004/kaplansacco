'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError('Invalid email or password')
      } else {
        router.push('/dashboard')
        router.refresh()
      }
    } catch (error) {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

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
        <div className="p-8 rounded-3xl border shadow-2xl" style={{
          background: 'linear-gradient(145deg, rgba(167, 167, 167, 0.95), rgba(184, 184, 184, 0.95))',
          borderColor: 'rgba(255,255,255,0.3)',
          backdropFilter: 'blur(20px)'
        }}>
          {/* Header with Logo */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-40"></div>
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-white p-2 shadow-lg border border-blue-200/50">
                  <img
                    src="/images/logo.jpg"
                    alt="Kaplans SACCO Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            <h2 className="text-xl font-bold text-slate-800">KAPLANS SAVINGS AND CREDIT</h2>
            <h3 className="text-md font-semibold text-slate-700">CO-OPERATIVE SOCIETY LTD</h3>
            <p className="text-slate-500 mt-2">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-blue-200/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none bg-white/70 backdrop-blur-sm text-slate-800 placeholder-slate-400"
                  placeholder="Email address"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 rounded-xl border border-blue-200/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none bg-white/70 backdrop-blur-sm text-slate-800 placeholder-slate-400"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-slate-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-slate-400" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="rounded-xl p-3 text-sm text-center border bg-red-50/80 border-red-200/50 text-red-600 backdrop-blur-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="relative w-full group overflow-hidden py-3.5 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 group-hover:scale-110 transition-transform duration-300"></div>
              <span className="relative z-10 flex items-center justify-center">
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Signing in...
                  </>
                ) : (
                  'Sign In'
                )}
              </span>
            </button>

            <div className="text-center">
              <Link 
                href="/register" 
                className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
              >
                Don't have an account?{' '}
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Register now</span>
              </Link>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-blue-200/30" />
              </div>
              <div className="relative flex justify-center text-xs">

              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}