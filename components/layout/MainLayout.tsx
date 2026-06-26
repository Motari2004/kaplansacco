'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Users, 
  CreditCard, 
  PiggyBank, 
  FileText, 
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  User,
  Home,
  Calculator,
  Receipt
} from 'lucide-react'
import { signOut } from 'next-auth/react'

const menuItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Members', href: '/members', icon: Users },
  { name: 'Loans', href: '/loans', icon: CreditCard },
  { name: 'Contributions', href: '/contributions', icon: PiggyBank },
  { name: 'Reports', href: '/reports', icon: FileText },
]

const quickActions = [
  { name: 'New Member', href: '/members/register', icon: User },
  { name: 'Apply Loan', href: '/loans/apply', icon: Calculator },
  { name: 'Make Payment', href: '/contributions/new', icon: Receipt },
]

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-blue-600">Kaplans SACCO</h1>
                <p className="text-xs text-gray-500">Savings & Credit Co-operative</p>
              </div>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-4 border-b">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Quick Actions</p>
            <div className="grid grid-cols-3 gap-2">
              {quickActions.map((action) => (
                <Link
                  key={action.name}
                  href={action.href}
                  className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                >
                  <action.icon className="h-5 w-5 text-gray-600 group-hover:text-blue-600" />
                  <span className="text-xs text-gray-600 group-hover:text-blue-600 mt-1 text-center">{action.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => {
              const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    flex items-center px-4 py-3 rounded-lg transition-all duration-200
                    ${isActive 
                      ? 'bg-blue-50 text-blue-700 border-r-4 border-blue-600' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }
                  `}
                >
                  <item.icon className={`h-5 w-5 mr-3 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                  <span className="font-medium">{item.name}</span>
                  {isActive && (
                    <span className="ml-auto h-2 w-2 rounded-full bg-blue-600" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* User & Logout */}
          <div className="p-4 border-t">
            <button
              onClick={() => signOut({ callbackUrl: '/login' })}
              className="flex items-center w-full px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <LogOut className="h-5 w-5 mr-3 text-gray-400" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:pl-72 flex flex-col min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white shadow-sm border-b">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <button 
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                <Menu className="h-6 w-6 text-gray-600" />
              </button>
              <h2 className="ml-2 lg:ml-0 text-lg font-semibold text-gray-800">
                {menuItems.find(item => pathname?.startsWith(item.href))?.name || 'Dashboard'}
              </h2>
            </div>

            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>

              {/* User Profile */}
              <div className="flex items-center space-x-3">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-gray-700">Admin User</p>
                  <p className="text-xs text-gray-500">Administrator</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <User className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t px-6 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Kaplans SACCO. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">Head Office: Kisii | Tel: 072 591 1238</p>
          </div>
        </footer>
      </div>
    </div>
  )
}