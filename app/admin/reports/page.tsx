// app/admin/reports/page.tsx
'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { 
  FileText, Download, Filter, Calendar, 
  TrendingUp, Users, CreditCard, Wallet,
  ArrowUpRight, ArrowDownRight
} from 'lucide-react'

export default function ReportsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [dateRange, setDateRange] = useState({ from: '', to: '' })
  const [reportType, setReportType] = useState('all')

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
      // Fetch reports data
      fetchReportsData()
    }
  }, [status, session, router])

  const fetchReportsData = async () => {
    try {
      // Fetch your reports data here
      setLoading(false)
    } catch (error) {
      console.error('Failed to fetch reports:', error)
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50/50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Reports</h1>
            <p className="text-sm text-slate-600">View and export financial reports</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="h-4 w-4" />
            Export Report
          </button>
        </div>

        {/* Report Filters */}
        <div className="bg-white rounded-xl shadow-sm p-4 border border-slate-200 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-slate-500" />
              <select 
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
                className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Reports</option>
                <option value="members">Member Report</option>
                <option value="transactions">Transaction Report</option>
                <option value="loans">Loan Report</option>
                <option value="savings">Savings Report</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-slate-500" />
              <input 
                type="date"
                value={dateRange.from}
                onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
                className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-slate-500">to</span>
              <input 
                type="date"
                value={dateRange.to}
                onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
                className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
              Apply Filters
            </button>
          </div>
        </div>

        {/* Report Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-sm p-4 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Total Members</p>
                <p className="text-2xl font-bold text-slate-900">0</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
          {/* Add more report cards similar to your dashboard */}
        </div>

        {/* Report Table */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">Member</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">Transaction Type</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-slate-500 uppercase">Amount</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-slate-500 uppercase">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td colSpan={4} className="px-4 py-8 text-center text-slate-500">
                    No report data available. Apply filters or check back later.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}