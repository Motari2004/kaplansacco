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
        return <ArrowUpRight className="h-4 w-4 text-emerald-600" />
      case 'CONTRIBUTION':
        return <PiggyBank className="h-4 w-4 text-blue-600" />
      case 'LOAN_APPLICATION':
        return <CreditCard className="h-4 w-4 text-purple-600" />
      case 'WITHDRAWAL':
        return <ArrowDownRight className="h-4 w-4 text-red-600" />
      default:
        return <TrendingUp className="h-4 w-4 text-slate-600" />
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
    if (diffInHours < 24) return `${diffInHours} hours ago`
    if (diffInHours < 48) return 'Yesterday'
    return `${Math.floor(diffInHours / 24)} days ago`
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl animate-pulse-glow" />
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent relative z-10" />
          </div>
          <p className="mt-4 text-slate-600 font-medium">Loading premium dashboard...</p>
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
      label: 'Total Savings Balance', 
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
      label: 'Pending Applications', 
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
    { name: 'Make Contribution', icon: PiggyBank, href: '/contributions', color: 'from-emerald-500 to-teal-500' },
    { name: 'My Loans', icon: ClipboardList, href: '/loans', color: 'from-purple-500 to-pink-500' },
    { name: 'Withdraw', icon: Wallet, href: '/withdraw', color: 'from-amber-500 to-orange-500' },
    { name: 'Reports', icon: FileText, href: '/reports', color: 'from-cyan-500 to-blue-500' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 p-6">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-40%] right-[-20%] w-[600px] h-[600px] bg-gradient-to-br from-blue-400/20 via-indigo-400/10 to-purple-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-[-30%] left-[-20%] w-[500px] h-[500px] bg-gradient-to-tr from-emerald-400/20 via-teal-400/10 to-cyan-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="glass rounded-3xl p-6 mb-8 border border-white/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-50 animate-pulse-glow" />
                <div className="relative h-14 w-14 rounded-2xl gradient-primary flex items-center justify-center">
                  <UserCircle className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800">
                  Welcome back, {session.user?.name || 'Member'}!
                </h1>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center gap-1 glass px-3 py-1 rounded-full">
                    <Crown className="h-3 w-3 text-amber-500" />
                    <span className="text-xs font-medium text-slate-600">Premium Member</span>
                  </div>
                  <div className="flex items-center gap-1 glass px-3 py-1 rounded-full">
                    <Sparkles className="h-3 w-3 text-blue-500" />
                    <span className="text-xs font-medium text-slate-600">Member since {userStats.memberSince ? new Date(userStats.memberSince).getFullYear() : '2024'}</span>
                  </div>
                  {userStats.pendingWithdrawals > 0 && (
                    <div className="flex items-center gap-1 glass px-3 py-1 rounded-full bg-amber-50 border-amber-200">
                      <Clock className="h-3 w-3 text-amber-600" />
                      <span className="text-xs font-medium text-amber-600">{userStats.pendingWithdrawals} pending withdrawals</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="glass p-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative">
                <Bell className="h-5 w-5 text-slate-600" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full border-2 border-white" />
              </button>
              <button className="glass p-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <Settings className="h-5 w-5 text-slate-600" />
              </button>
              <button
                onClick={() => signOut({ callbackUrl: '/login' })}
                className="glass p-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-red-500 hover:text-red-600"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="glass p-6 rounded-2xl border border-white/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${stat.gradient}`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full ${
                    stat.trend === 'up' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {stat.trend === 'up' ? (
                      <ArrowUpRight className="h-3 w-3" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3" />
                    )}
                    {stat.change}
                  </div>
                </div>
                <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="glass p-6 rounded-2xl border border-white/30">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action) => {
                const Icon = action.icon
                return (
                  <Link
                    key={action.name}
                    href={action.href}
                    className="group p-4 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${action.color} mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <p className="font-medium text-slate-700 text-sm">{action.name}</p>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Recent Activity - REAL DATA */}
          <div className="glass p-6 rounded-2xl border border-white/30">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-500" />
              Recent Activity
            </h3>
            <div className="space-y-3">
              {recentActivities.length === 0 ? (
                <div className="text-center py-4 text-slate-500 text-sm">
                  <Clock className="h-8 w-8 mx-auto mb-2 text-slate-300" />
                  <p>No recent activity</p>
                </div>
              ) : (
                recentActivities.map((activity: any) => (
                  <div key={activity.id} className="flex items-center justify-between p-3 rounded-xl bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-full ${getActivityColor(activity.type)} flex items-center justify-center`}>
                        {getActivityIcon(activity.type)}
                      </div>
                      <div>
                        <p className="font-medium text-slate-700">{activity.title}</p>
                        <p className="text-xs text-slate-500 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {formatTimeAgo(activity.createdAt)}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${activity.amount > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                        {activity.amount > 0 ? '+' : ''}Kshs {Math.abs(activity.amount).toLocaleString()}
                      </p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(activity.status)}`}>
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
        <div className="mt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Kaplans SACCO. All rights reserved.</p>
          <p className="text-xs mt-1">Powered by Premium Technology</p>
        </div>
      </div>
    </div>
  )
}