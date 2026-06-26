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
  Crown,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  UserCircle,
  Settings,
  LogOut,
  Building2,
  BarChart3,
  Calendar,
  DollarSign,
  UserPlus,
  FileText,
  Bell,
  Search,
  Filter,
  ChevronDown,
  Eye,
  Edit,
  Trash2,
  ClipboardList
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

    fetchDashboardData()
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent relative"></div>
          </div>
          <p className="mt-4 text-slate-600 font-medium">Loading admin dashboard...</p>
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
      color: 'from-blue-500 to-indigo-500',
      change: '+12%',
      trend: 'up'
    },
    {
      title: 'Pending Withdrawals',
      value: stats.pendingWithdrawals || 0,
      icon: Wallet,
      color: 'from-amber-500 to-orange-500',
      change: stats.pendingWithdrawals > 0 ? '⚠️ Needs review' : '',
      trend: stats.pendingWithdrawals > 0 ? 'down' : 'up'
    },
    {
      title: 'Total Savings',
      value: `Kshs ${(stats.totalSavings || 0).toLocaleString()}`,
      icon: PiggyBank,
      color: 'from-purple-500 to-pink-500',
      change: '+15%',
      trend: 'up'
    },
    {
      title: 'Active Loans',
      value: stats.activeLoans,
      icon: CreditCard,
      color: 'from-emerald-500 to-teal-500',
      change: '-3%',
      trend: 'down'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                <img src="/images/logo.jpg" alt="Logo" className="w-full h-full object-contain p-1.5" />
              </div>
              <div>
                <span className="text-xl font-bold text-slate-900">Admin Panel</span>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-slate-500 font-medium">Kaplans SACCO</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors">
                <Bell className="h-5 w-5 text-slate-600" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-slate-900">{session.user?.name || 'Admin'}</p>
                  <p className="text-xs text-slate-500">Administrator</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <UserCircle className="h-6 w-6 text-white" />
                </div>
                <button
                  onClick={() => signOut({ callbackUrl: '/login' })}
                  className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <LogOut className="h-5 w-5 text-slate-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
          <p className="text-slate-600 mt-1">Manage your SACCO operations from one place</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                </div>
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500 mt-1">{stat.title}</div>
              </div>
            )
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Link
            href="/admin/members"
            className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
          >
            <div className="bg-blue-50 p-3 rounded-xl">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Members</p>
              <p className="text-xs text-slate-500">Manage members</p>
            </div>
          </Link>
          <Link
            href="/admin/loans"
            className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
          >
            <div className="bg-emerald-50 p-3 rounded-xl">
              <CreditCard className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Loans</p>
              <p className="text-xs text-slate-500">Manage loans</p>
            </div>
          </Link>
          <Link
            href="/admin/withdrawals"
            className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
          >
            <div className="bg-amber-50 p-3 rounded-xl">
              <Wallet className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Withdrawals</p>
              <p className="text-xs text-slate-500">Approve/Reject</p>
              {stats.pendingWithdrawals > 0 && (
                <span className="inline-flex items-center px-2 py-0.5 mt-1 text-xs font-medium bg-amber-500 text-white rounded-full">
                  {stats.pendingWithdrawals} pending
                </span>
              )}
            </div>
          </Link>
          <Link
            href="/admin/reports"
            className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
          >
            <div className="bg-purple-50 p-3 rounded-xl">
              <FileText className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Reports</p>
              <p className="text-xs text-slate-500">Generate reports</p>
            </div>
          </Link>
        </div>

        {/* Recent Members & Transactions */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Members */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900">Recent Members</h3>
              <Link href="/admin/members" className="text-sm text-blue-600 hover:text-blue-700">
                View All →
              </Link>
            </div>
            <div className="space-y-4">
              {recentMembers.length === 0 ? (
                <p className="text-slate-500 text-sm">No recent members</p>
              ) : (
                recentMembers.map((member: any) => (
                  <div key={member.id} className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                        {member.firstName?.[0]}{member.lastName?.[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{member.firstName} {member.lastName}</p>
                        <p className="text-xs text-slate-500">{member.memberNumber}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-emerald-600">Kshs {member.savingsBalance?.toLocaleString() || 0}</p>
                      <p className="text-xs text-slate-400">{new Date(member.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900">Recent Transactions</h3>
              <Link href="/admin/transactions" className="text-sm text-blue-600 hover:text-blue-700">
                View All →
              </Link>
            </div>
            <div className="space-y-4">
              {recentTransactions.length === 0 ? (
                <p className="text-slate-500 text-sm">No recent transactions</p>
              ) : (
                recentTransactions.map((transaction: any) => (
                  <div key={transaction.id} className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        transaction.type === 'DEPOSIT' ? 'bg-emerald-50' : 
                        transaction.type === 'WITHDRAWAL' ? 'bg-red-50' : 'bg-blue-50'
                      }`}>
                        {transaction.type === 'DEPOSIT' ? (
                          <ArrowUpRight className="h-4 w-4 text-emerald-600" />
                        ) : transaction.type === 'WITHDRAWAL' ? (
                          <ArrowDownRight className="h-4 w-4 text-red-600" />
                        ) : (
                          <TrendingUp className="h-4 w-4 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">{transaction.type?.replace('_', ' ')}</p>
                        <p className="text-xs text-slate-500">{transaction.user?.firstName} {transaction.user?.lastName}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-semibold ${
                        transaction.type === 'DEPOSIT' ? 'text-emerald-600' : 
                        transaction.type === 'WITHDRAWAL' ? 'text-red-600' : 'text-blue-600'
                      }`}>
                        {transaction.type === 'DEPOSIT' ? '+' : transaction.type === 'WITHDRAWAL' ? '-' : ''}
                        Kshs {transaction.amount?.toLocaleString() || 0}
                      </p>
                      <p className="text-xs text-slate-400">{new Date(transaction.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}