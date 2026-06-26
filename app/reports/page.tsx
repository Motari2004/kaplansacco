'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  ArrowLeft,
  Download,
  FileText,
  CreditCard,
  PiggyBank,
  TrendingUp,
  DollarSign,
  Calendar,
  BarChart3,
  PieChart,
  Printer,
  Eye,
  ChevronDown,
  Clock,
  CheckCircle,
  Wallet,
  Receipt,
  CalendarDays
} from 'lucide-react'

export default function UserReportsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [reportType, setReportType] = useState('savings')
  const [dateRange, setDateRange] = useState('this-month')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [reportData, setReportData] = useState<any>(null)
  const [generating, setGenerating] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
      return
    }

    if (status === 'authenticated') {
      generateReport()
    }
  }, [status, router, reportType, dateRange])

  const generateReport = async () => {
    setGenerating(true)
    try {
      const params = new URLSearchParams({
        type: reportType,
        range: dateRange,
        start: startDate,
        end: endDate,
      })
      
      const response = await fetch(`/api/user/reports?${params}`)
      const data = await response.json()
      setReportData(data)
    } catch (error) {
      console.error('Failed to generate report:', error)
    } finally {
      setGenerating(false)
      setLoading(false)
    }
  }

  const reportTypes = [
    { id: 'savings', label: 'My Savings', icon: PiggyBank, color: 'from-emerald-500 to-teal-500' },
    { id: 'transactions', label: 'My Transactions', icon: Receipt, color: 'from-blue-500 to-indigo-500' },
    { id: 'contributions', label: 'My Contributions', icon: DollarSign, color: 'from-purple-500 to-pink-500' },
    { id: 'loans', label: 'My Loans', icon: CreditCard, color: 'from-amber-500 to-orange-500' },
  ]

  const dateRanges = [
    { id: 'today', label: 'Today' },
    { id: 'this-week', label: 'This Week' },
    { id: 'this-month', label: 'This Month' },
    { id: 'this-quarter', label: 'This Quarter' },
    { id: 'this-year', label: 'This Year' },
    { id: 'all', label: 'All Time' },
  ]

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
          <p className="mt-4 text-slate-600">Loading your report...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link
            href="/dashboard"
            className="p-2 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105"
          >
            <ArrowLeft className="h-5 w-5 text-slate-600" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">My Reports</h1>
            <p className="text-slate-600">View your financial reports and history</p>
          </div>
        </div>

        {/* Report Type Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {reportTypes.map((type) => {
            const Icon = type.icon
            const isSelected = reportType === type.id
            return (
              <button
                key={type.id}
                onClick={() => setReportType(type.id)}
                className={`p-4 rounded-xl text-center transition-all duration-300 ${
                  isSelected
                    ? `bg-gradient-to-r ${type.color} text-white shadow-lg scale-105`
                    : 'bg-white text-slate-600 hover:shadow-md hover:scale-105'
                }`}
              >
                <Icon className={`h-6 w-6 mx-auto mb-2 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                <p className={`text-sm font-medium ${isSelected ? 'text-white' : 'text-slate-700'}`}>
                  {type.label}
                </p>
              </button>
            )
          })}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex flex-wrap gap-4 items-end">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-slate-700 mb-1">Date Range</label>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none bg-white"
              >
                {dateRanges.map((range) => (
                  <option key={range.id} value={range.id}>{range.label}</option>
                ))}
              </select>
            </div>

            {dateRange === 'custom' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Start Date</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="px-4 py-2 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">End Date</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="px-4 py-2 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none bg-white"
                  />
                </div>
              </>
            )}

            <button
              onClick={generateReport}
              disabled={generating}
              className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-50"
            >
              {generating ? 'Generating...' : 'Generate Report'}
            </button>

            <button
              onClick={() => window.print()}
              className="px-6 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors shadow-sm flex items-center gap-2"
            >
              <Printer className="h-4 w-4" />
              Print
            </button>
          </div>
        </div>

        {/* Report Content */}
        {reportData && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Summary Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border-b border-slate-200">
              <div>
                <p className="text-sm text-slate-500">Total {reportType}</p>
                <p className="text-2xl font-bold text-slate-900">{reportData.total || 0}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Total Amount</p>
                <p className="text-2xl font-bold text-emerald-600">Kshs {reportData.totalAmount?.toLocaleString() || 0}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Average</p>
                <p className="text-2xl font-bold text-blue-600">Kshs {reportData.average?.toLocaleString() || 0}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Last Activity</p>
                <p className="text-sm font-medium text-slate-700">
                  {reportData.lastActivity ? new Date(reportData.lastActivity).toLocaleDateString() : 'N/A'}
                </p>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto p-6">
              {reportData.data && reportData.data.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200">
                        {Object.keys(reportData.data[0]).map((key) => (
                          <th key={key} className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {reportData.data.map((item: any, index: number) => (
                        <tr key={index} className="hover:bg-slate-50 transition-colors">
                          {Object.entries(item).map(([key, value]: [string, any]) => (
                            <td key={key} className="px-4 py-3 text-sm text-slate-600">
                              {typeof value === 'number' ? 
                                value.toLocaleString() : 
                                value instanceof Date ? 
                                  value.toLocaleDateString() : 
                                  value
                              }
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8 text-slate-500">
                  <FileText className="h-12 w-12 mx-auto mb-3 text-slate-300" />
                  <p>No data available for this report</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}