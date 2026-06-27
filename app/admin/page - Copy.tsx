'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { 
  Users, 
  CreditCard, 
  PiggyBank, 
  TrendingUp,
  Wallet,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  UserCircle,
  Settings,
  LogOut,
  FileText,
  Bell,
  Trash2  // Added
} from 'lucide-react'

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    totalMembers: 0,
    pendingWithdrawals: 0,
    totalSavings: 0,
    totalLoans: 0,
    activeLoans: 0,
    totalContributions: 0,
  })
  const [recentMembers, setRecentMembers] = useState([])
  const [recentTransactions, setRecentTransactions] = useState([])

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
      fetchDashboardData()
    }
  }, [status, session, router])

  const fetchDashboardData = async () => {
    try {
      const [statsRes, membersRes, transactionsRes] = await Promise.all([
        fetch('/api/admin/stats'),
        fetch('/api/admin/recent-members'),
        fetch('/api/admin/recent-transactions'),
      ])

      const statsData = await statsRes.json()
      const membersData = await membersRes.json()
      const transactionsData = await transactionsRes.json()

      setStats(statsData)
      setRecentMembers(membersData)
      setRecentTransactions(transactionsData)
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent" />
          <p className="mt-4 text-slate-600 text-sm">Loading admin dashboard...</p>
        </div>
      </div>
    )
  }

  if (!session || session.user.role !== 'ADMIN') {
    return null
  }

  const statCards = [
    {
      title: 'Total Members',
      value: stats.totalMembers,
      icon: Users,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      title: 'Pending Withdrawals',
      value: stats.pendingWithdrawals || 0,
      icon: Wallet,
      color: 'text-amber-600',
      bg: 'bg-amber-50'
    },
    {
      title: 'Total Savings',
      value: `Kshs ${(stats.totalSavings || 0).toLocaleString()}`,
      icon: PiggyBank,
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      title: 'Active Loans',
      value: stats.activeLoans,
      icon: CreditCard,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    }
  ]

  const quickActions = [
    { name: 'Members', icon: Users, href: '/admin/members', color: 'text-blue-600', bg: 'bg-blue-50' },
    { name: 'Loans', icon: CreditCard, href: '/admin/loans', color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { name: 'Withdrawals', icon: Wallet, href: '/admin/withdrawals', color: 'text-amber-600', bg: 'bg-amber-50' },
    { name: 'Reports', icon: FileText, href: '/admin/reports', color: 'text-purple-600', bg: 'bg-purple-50' },
    { name: 'Clean Savings', icon: Trash2, href: '/admin/clean-savings', color: 'text-red-600', bg: 'bg-red-50' },
  ]

  return (
    <div className="min-h-screen bg-slate-50/50 p-3 sm:p-4 md:p-6">
      {/* Navigation */}
      <nav className="border-b border-slate-200/50 mb-4 sm:mb-6">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden bg-white border border-slate-200 flex items-center justify-center flex-shrink-0">
                <img src="/images/logo.jpg" alt="Logo" className="w-full h-full object-contain p-1" />
              </div>
              <div>
                <span className="text-sm sm:text-base md:text-xl font-bold text-slate-900">Admin Panel</span>
                <div className="hidden sm:block">
                  <span className="text-[10px] text-slate-500 font-medium">Kaplans SACCO</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button className="relative p-1.5 sm:p-2 rounded-lg hover:bg-slate-100 transition-colors">
                <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600" />
                <span className="absolute top-0.5 right-0.5 h-1.5 w-1.5 bg-red-500 rounded-full" />
              </button>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="text-right hidden xs:block">
                  <p className="text-xs sm:text-sm font-medium text-slate-900 truncate max-w-[80px] sm:max-w-none">
                    {session.user?.name || 'Admin'}
                  </p>
                  <p className="text-[10px] text-slate-500 hidden sm:block">Administrator</p>
                </div>
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <UserCircle className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
                <button
                  onClick={() => signOut({ callbackUrl: '/login' })}
                  className="p-1.5 sm:p-2 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <LogOut className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">Admin Dashboard</h1>
          <p className="text-sm text-slate-600 mt-0.5">Manage your SACCO operations</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6">
          {statCards.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm p-3 sm:p-4 border border-slate-200">
                <div className="flex items-center justify-between mb-1 sm:mb-2">
                  <div className={`p-1.5 sm:p-2 rounded-lg ${stat.bg}`}>
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-600" />
                  </div>
                </div>
                <div className={`text-sm sm:text-base md:text-xl font-bold ${stat.color} truncate`}>
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5">{stat.title}</div>
              </div>
            )
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
          {quickActions.map((action) => {
            const Icon = action.icon
            return (
              <Link
                key={action.name}
                href={action.href}
                className="bg-white p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 border border-slate-200 flex items-center gap-2 sm:gap-3"
              >
                <div className={`p-1.5 sm:p-2 rounded-lg ${action.bg} flex-shrink-0`}>
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-600" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 truncate">{action.name}</p>
                  <p className="text-[10px] text-slate-500 hidden sm:block truncate">
                    {action.name === 'Withdrawals' && stats.pendingWithdrawals > 0 
                      ? `${stats.pendingWithdrawals} pending` 
                      : action.name === 'Clean Savings'
                      ? 'Reset savings'
                      : `Manage ${action.name.toLowerCase()}`}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Recent Members & Transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Recent Members */}
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-slate-200">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">Recent Members</h3>
              <Link href="/admin/members" className="text-xs sm:text-sm text-blue-600 hover:text-blue-700">
                View All →
              </Link>
            </div>
            <div className="space-y-3">
              {recentMembers.length === 0 ? (
                <p className="text-slate-500 text-sm">No recent members</p>
              ) : (
                recentMembers.map((member: any) => (
                  <div key={member.id} className="flex items-center justify-between border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
                        {member.firstName?.[0]}{member.lastName?.[0]}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-semibold text-slate-900 truncate">
                          {member.firstName} {member.lastName}
                        </p>
                        <p className="text-[10px] sm:text-xs text-slate-500">{member.memberNumber}</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                      <p className="text-xs sm:text-sm font-medium text-emerald-600">
                        Kshs {member.savingsBalance?.toLocaleString() || 0}
                      </p>
                      <p className="text-[10px] text-slate-400">
                        {new Date(member.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-slate-200">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">Recent Transactions</h3>
              <Link href="/admin/transactions" className="text-xs sm:text-sm text-blue-600 hover:text-blue-700">
                View All →
              </Link>
            </div>
            <div className="space-y-3">
              {recentTransactions.length === 0 ? (
                <p className="text-slate-500 text-sm">No recent transactions</p>
              ) : (
                recentTransactions.map((transaction: any) => (
                  <div key={transaction.id} className="flex items-center justify-between border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <div className={`p-1.5 sm:p-2 rounded-lg flex-shrink-0 ${
                        transaction.type === 'DEPOSIT' ? 'bg-emerald-50' : 
                        transaction.type === 'WITHDRAWAL' ? 'bg-red-50' : 'bg-blue-50'
                      }`}>
                        {transaction.type === 'DEPOSIT' ? (
                          <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-600" />
                        ) : transaction.type === 'WITHDRAWAL' ? (
                          <ArrowDownRight className="h-3 w-3 sm:h-4 sm:w-4 text-red-600" />
                        ) : (
                          <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-slate-900 truncate">
                          {transaction.type?.replace('_', ' ')}
                        </p>
                        <p className="text-[10px] text-slate-500 truncate">
                          {transaction.user?.firstName} {transaction.user?.lastName}
                        </p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                      <p className={`text-xs sm:text-sm font-semibold ${
                        transaction.type === 'DEPOSIT' ? 'text-emerald-600' : 
                        transaction.type === 'WITHDRAWAL' ? 'text-red-600' : 'text-blue-600'
                      }`}>
                        {transaction.type === 'DEPOSIT' ? '+' : transaction.type === 'WITHDRAWAL' ? '-' : ''}
                        Kshs {transaction.amount?.toLocaleString() || 0}
                      </p>
                      <p className="text-[10px] text-slate-400">
                        {new Date(transaction.createdAt).toLocaleDateString()}
                      </p>
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