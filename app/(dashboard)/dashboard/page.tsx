'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { 
  CreditCard, 
  PiggyBank, 
  TrendingUp,
  Wallet,
  Crown,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Bell,
  UserCircle,
  Settings,
  LogOut,
  FileText,
  ClipboardList
} from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loanStats, setLoanStats] = useState({
    totalLoans: 0,
    activeLoans: 0,
    pendingLoans: 0,
    totalAmount: 0,
    nextPayment: null as string | null
  })
  const [userStats, setUserStats] = useState({
    currentBalance: 0,
    totalContributions: 0,
    totalWithdrawals: 0,
    monthlyContribution: 0,
    shares: 0,
    memberSince: '',
    pendingWithdrawals: 0,
  })
  const [recentActivities, setRecentActivities] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
    if (status === 'authenticated') {
      fetchAllData()
    }
  }, [status, router])

  const fetchAllData = async () => {
    setLoading(true)
    try {
      await Promise.all([
        fetchLoanStats(),
        fetchUserStats(),
        fetchRecentActivity()
      ])
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchLoanStats = async () => {
    try {
      const response = await fetch('/api/user/loans/stats')
      const data = await response.json()
      setLoanStats(data)
    } catch (error) {
      console.error('Failed to fetch loan stats:', error)
    }
  }

  const fetchUserStats = async () => {
    try {
      const profileResponse = await fetch('/api/user/profile')
      const profileData = await profileResponse.json()
      
      const contributionsResponse = await fetch('/api/contributions')
      const contributionsData = await contributionsResponse.json()
      
      setUserStats({
        currentBalance: profileData.savingsBalance || 0,
        totalContributions: contributionsData.totalSaved || 0,
        totalWithdrawals: profileData.totalWithdrawals || 0,
        monthlyContribution: profileData.monthlyContribution || 0,
        shares: profileData.shares || 0,
        memberSince: profileData.createdAt || '',
        pendingWithdrawals: profileData.pendingWithdrawals || 0,
      })
    } catch (error) {
      console.error('Failed to fetch user stats:', error)
    }
  }

  const fetchRecentActivity = async () => {
    try {
      const response = await fetch('/api/user/recent-activity')
      const data = await response.json()
      setRecentActivities(data)
    } catch (error) {
      console.error('Failed to fetch recent activity:', error)
    }
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'LOAN_PAYMENT':
        return <ArrowUpRight className="h-3.5 w-3.5 text-emerald-600" />
      case 'CONTRIBUTION':
        return <PiggyBank className="h-3.5 w-3.5 text-blue-600" />
      case 'LOAN_APPLICATION':
        return <CreditCard className="h-3.5 w-3.5 text-purple-600" />
      case 'WITHDRAWAL':
        return <ArrowDownRight className="h-3.5 w-3.5 text-red-600" />
      default:
        return <TrendingUp className="h-3.5 w-3.5 text-slate-600" />
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'LOAN_PAYMENT':
        return 'bg-emerald-100 text-emerald-700'
      case 'CONTRIBUTION':
        return 'bg-blue-100 text-blue-700'
      case 'LOAN_APPLICATION':
        return 'bg-purple-100 text-purple-700'
      case 'WITHDRAWAL':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
      case 'COMPLETED':
      case 'PAID':
        return 'bg-emerald-100 text-emerald-600'
      case 'Pending':
      case 'PENDING':
        return 'bg-amber-100 text-amber-600'
      case 'Rejected':
      case 'REJECTED':
        return 'bg-red-100 text-red-600'
      default:
        return 'bg-gray-100 text-gray-600'
    }
  }

  const formatTimeAgo = (date: string) => {
    const now = new Date()
    const past = new Date(date)
    const diffInHours = Math.floor((now.getTime() - past.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours}h ago`
    if (diffInHours < 48) return 'Yesterday'
    return `${Math.floor(diffInHours / 24)}d ago`
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent" />
          <p className="mt-4 text-slate-600 text-sm">Loading...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  const stats = [
    { 
      label: 'Total Savings', 
      value: `Kshs ${userStats.currentBalance.toLocaleString()}`,
      icon: Wallet,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    { 
      label: 'Active Loans', 
      value: loanStats.activeLoans.toString(),
      icon: CreditCard,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    { 
      label: 'Pending Apps', 
      value: loanStats.pendingLoans.toString(),
      icon: Clock,
      color: 'text-amber-600',
      bg: 'bg-amber-50'
    },
    { 
      label: 'Total Loans', 
      value: `Kshs ${loanStats.totalAmount.toLocaleString()}`,
      icon: TrendingUp,
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    }
  ]

  const quickActions = [
    { name: 'Apply Loan', icon: CreditCard, href: '/loans/apply', color: 'text-blue-600', bg: 'bg-blue-50' },
    { name: 'Contribute', icon: PiggyBank, href: '/contributions', color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { name: 'My Loans', icon: ClipboardList, href: '/loans', color: 'text-purple-600', bg: 'bg-purple-50' },
    { name: 'Withdraw', icon: Wallet, href: '/withdraw', color: 'text-amber-600', bg: 'bg-amber-50' },
    { name: 'Reports', icon: FileText, href: '/reports', color: 'text-cyan-600', bg: 'bg-cyan-50' },
  ]

  return (
    <div className="min-h-screen bg-slate-50 p-3 sm:p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-4 border border-slate-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                <UserCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-base sm:text-lg font-bold text-slate-800 truncate">
                  Welcome back, {session.user?.name || 'Member'}!
                </h1>
                <div className="flex flex-wrap items-center gap-1.5 mt-0.5">
                  <span className="text-xs bg-slate-100 px-2 py-0.5 rounded-full text-slate-600">Premium</span>
                  <span className="text-xs bg-slate-100 px-2 py-0.5 rounded-full text-slate-600">
                    {userStats.memberSince ? new Date(userStats.memberSince).getFullYear() : '2024'}
                  </span>
                  {userStats.pendingWithdrawals > 0 && (
                    <span className="text-xs bg-amber-50 px-2 py-0.5 rounded-full text-amber-600 border border-amber-200">
                      {userStats.pendingWithdrawals} pending
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button className="bg-slate-100 p-2 rounded-lg hover:bg-slate-200 transition-colors relative border border-slate-200">
                <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600" />
                <span className="absolute -top-0.5 -right-0.5 h-2 w-2 bg-red-500 rounded-full" />
              </button>
              <button className="bg-slate-100 p-2 rounded-lg hover:bg-slate-200 transition-colors border border-slate-200">
                <Settings className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600" />
              </button>
              <button
                onClick={() => signOut({ callbackUrl: '/login' })}
                className="bg-slate-100 p-2 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors border border-slate-200 text-red-500"
              >
                <LogOut className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm p-3 sm:p-4 border border-slate-200">
                <div className="flex items-center gap-2 mb-1">
                  <div className={`p-1.5 rounded-lg ${stat.bg}`}>
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-600" />
                  </div>
                </div>
                <div className={`text-sm sm:text-base md:text-xl font-bold ${stat.color} truncate`}>{stat.value}</div>
                <div className="text-[10px] sm:text-xs text-slate-500">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-5 border border-slate-200">
            <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-amber-500" />
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map((action) => {
                const Icon = action.icon
                return (
                  <Link
                    key={action.name}
                    href={action.href}
                    className="group p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-all duration-200 border border-slate-100"
                  >
                    <div className={`inline-flex p-1.5 rounded-lg ${action.bg} mb-1.5`}>
                      <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-600" />
                    </div>
                    <p className="text-[10px] sm:text-xs font-medium text-slate-700">{action.name}</p>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-5 border border-slate-200">
            <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-500" />
              Recent Activity
            </h3>
            <div className="space-y-2">
              {recentActivities.length === 0 ? (
                <div className="text-center py-4 text-slate-500 text-sm">
                  <p>No recent activity</p>
                </div>
              ) : (
                recentActivities.map((activity: any) => (
                  <div key={activity.id} className="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <div className={`h-8 w-8 rounded-full ${getActivityColor(activity.type)} flex items-center justify-center flex-shrink-0`}>
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium text-slate-700 truncate">{activity.title}</p>
                        <p className="text-[10px] text-slate-500 flex items-center gap-1">
                          <Clock className="h-2.5 w-2.5" />
                          {formatTimeAgo(activity.createdAt)}
                        </p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                      <p className={`text-xs font-semibold ${activity.amount > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                        {activity.amount > 0 ? '+' : ''}Kshs {Math.abs(activity.amount).toLocaleString()}
                      </p>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${getStatusColor(activity.status)}`}>
                        {activity.status}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-[10px] sm:text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Kaplans SACCO. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}