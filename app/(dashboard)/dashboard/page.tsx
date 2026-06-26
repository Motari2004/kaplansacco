'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { 
  LayoutDashboard, 
  CreditCard, 
  PiggyBank, 
  TrendingUp,
  Wallet,
  Crown,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Calendar,
  Bell,
  UserCircle,
  Settings,
  LogOut,
  Building2,
  FileText,
  Eye,
  CircleDollarSign,
  Receipt,
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
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent relative z-10" />
          </div>
          <p className="mt-4 text-slate-600 font-medium text-sm">Loading...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  const savingsChange = userStats.currentBalance > 0 ? '+12.5%' : '0%'
  const savingsTrend = userStats.currentBalance > 0 ? 'up' : 'down'

  const stats = [
    { 
      label: 'Total Savings', 
      value: `Kshs ${userStats.currentBalance.toLocaleString()}`,
      change: savingsChange, 
      trend: savingsTrend,
      icon: Wallet,
      gradient: 'from-emerald-500 to-teal-500'
    },
    { 
      label: 'Active Loans', 
      value: loanStats.activeLoans.toString(), 
      change: loanStats.activeLoans > 0 ? '+Active' : 'No Active',
      trend: loanStats.activeLoans > 0 ? 'up' : 'down',
      icon: CreditCard,
      gradient: 'from-blue-500 to-indigo-500'
    },
    { 
      label: 'Pending Apps', 
      value: loanStats.pendingLoans.toString(), 
      change: loanStats.pendingLoans > 0 ? 'Pending' : 'None',
      trend: 'up',
      icon: Clock,
      gradient: 'from-amber-500 to-orange-500'
    },
    { 
      label: 'Total Loans', 
      value: `Kshs ${loanStats.totalAmount.toLocaleString()}`, 
      change: '+Borrowed',
      trend: 'up',
      icon: TrendingUp,
      gradient: 'from-purple-500 to-pink-500'
    }
  ]

  const quickActions = [
    { name: 'Apply Loan', icon: CreditCard, href: '/loans/apply', color: 'from-blue-500 to-indigo-500' },
    { name: 'Contribute', icon: PiggyBank, href: '/contributions', color: 'from-emerald-500 to-teal-500' },
    { name: 'My Loans', icon: ClipboardList, href: '/loans', color: 'from-purple-500 to-pink-500' },
    { name: 'Withdraw', icon: Wallet, href: '/withdraw', color: 'from-amber-500 to-orange-500' },
    { name: 'Reports', icon: FileText, href: '/reports', color: 'from-cyan-500 to-blue-500' },
  ]

  return (
    <div className="min-h-screen bg-slate-50/50 p-3 sm:p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 mb-4 sm:mb-6 md:mb-8 border border-slate-200/50">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-xl opacity-50 animate-pulse" />
                <div className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <UserCircle className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-base sm:text-lg md:text-2xl font-bold text-slate-800 truncate">
                  Welcome back, {session.user?.name || 'Member'}!
                </h1>
                <div className="flex flex-wrap items-center gap-1.5 mt-1">
                  <div className="flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded-full">
                    <Crown className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-amber-500" />
                    <span className="text-[10px] sm:text-xs font-medium text-slate-600">Premium</span>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded-full">
                    <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-blue-500" />
                    <span className="text-[10px] sm:text-xs font-medium text-slate-600">
                      {userStats.memberSince ? new Date(userStats.memberSince).getFullYear() : '2024'}
                    </span>
                  </div>
                  {userStats.pendingWithdrawals > 0 && (
                    <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                      <Clock className="h-2.5 w-2.5 text-amber-600" />
                      <span className="text-[10px] font-medium text-amber-600">{userStats.pendingWithdrawals} pending</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button className="bg-slate-50 p-2 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative border border-slate-200">
                <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600" />
                <span className="absolute -top-0.5 -right-0.5 h-2 w-2 bg-red-500 rounded-full border border-white" />
              </button>
              <button className="bg-slate-50 p-2 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-slate-200">
                <Settings className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600" />
              </button>
              <button
                onClick={() => signOut({ callbackUrl: '/login' })}
                className="bg-slate-50 p-2 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-red-500 hover:text-red-600 border border-slate-200"
              >
                <LogOut className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid - Mobile: 2 columns, Desktop: 4 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-4 md:p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-slate-200/50">
                <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                  <div className={`inline-flex p-1.5 sm:p-2 md:p-2.5 rounded-lg sm:rounded-xl bg-gradient-to-br ${stat.gradient}`}>
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
                  </div>
                  <div className={`flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 rounded-full ${
                    stat.trend === 'up' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {stat.trend === 'up' ? (
                      <ArrowUpRight className="h-2.5 w-2.5" />
                    ) : (
                      <ArrowDownRight className="h-2.5 w-2.5" />
                    )}
                    <span className="hidden sm:inline">{stat.change}</span>
                  </div>
                </div>
                <div className="text-sm sm:text-base md:text-2xl font-bold text-slate-800 truncate">{stat.value}</div>
                <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Quick Actions & Recent Activity - Mobile: stacked, Desktop: 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 border border-slate-200/50">
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-800 mb-3 sm:mb-4 flex items-center gap-2">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500" />
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {quickActions.map((action) => {
                const Icon = action.icon
                return (
                  <Link
                    key={action.name}
                    href={action.href}
                    className="group p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-50 hover:bg-slate-100/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className={`inline-flex p-1.5 sm:p-2 md:p-2.5 rounded-lg sm:rounded-xl bg-gradient-to-br ${action.color} mb-2 sm:mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
                    </div>
                    <p className="text-[10px] sm:text-xs md:text-sm font-medium text-slate-700">{action.name}</p>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 border border-slate-200/50">
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-800 mb-3 sm:mb-4 flex items-center gap-2">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
              Recent Activity
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {recentActivities.length === 0 ? (
                <div className="text-center py-4 text-slate-500 text-xs sm:text-sm">
                  <Clock className="h-8 w-8 mx-auto mb-2 text-slate-300" />
                  <p>No recent activity</p>
                </div>
              ) : (
                recentActivities.map((activity: any) => (
                  <div key={activity.id} className="flex items-center justify-between p-2 sm:p-3 rounded-lg sm:rounded-xl bg-slate-50 hover:bg-slate-100/60 transition-colors">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                      <div className={`h-8 w-8 sm:h-10 sm:w-10 rounded-full ${getActivityColor(activity.type)} flex items-center justify-center flex-shrink-0`}>
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs sm:text-sm font-medium text-slate-700 truncate">{activity.title}</p>
                        <p className="text-[10px] sm:text-xs text-slate-500 flex items-center gap-1">
                          <Clock className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                          {formatTimeAgo(activity.createdAt)}
                        </p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                      <p className={`text-xs sm:text-sm font-semibold ${activity.amount > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                        {activity.amount > 0 ? '+' : ''}Kshs {Math.abs(activity.amount).toLocaleString()}
                      </p>
                      <span className={`text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full ${getStatusColor(activity.status)}`}>
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
        <div className="mt-6 sm:mt-8 text-center text-[10px] sm:text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Kaplans SACCO. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}