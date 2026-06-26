'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { 
  ArrowRight, 
  Users, 
  CreditCard, 
  PiggyBank, 
  Shield, 
  Award,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Building2,
  Star,
  ChevronRight,
  Wallet,
  BadgeCheck,
  Phone,
  Mail,
  MapPin,
  Clock,
  Briefcase,
  FileText,
  BarChart3,
  Target,
  Home,
  GraduationCap,
  Building,
  Smartphone,
  Gift,
  Baby,
  Landmark,
  Car,
} from 'lucide-react'

export default function HomePage() {
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === 'authenticated') {
      window.location.href = '/dashboard'
    }
  }, [status])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent relative"></div>
          </div>
          <p className="mt-4 text-slate-600 font-medium">Loading...</p>
        </div>
      </div>
    )
  }

  if (status === 'authenticated') {
    return null
  }

  // Features based on SACCO info
  const features = [
    {
      icon: Users,
      title: 'Member-Focused',
      description: 'Personalized financial solutions tailored to your needs',
      iconBg: 'bg-slate-100',
      iconColor: 'text-slate-700'
    },
    {
      icon: PiggyBank,
      title: 'Savings Options',
      description: 'Ordinary, Jenga Junior, Christmas & more savings plans',
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      icon: CreditCard,
      title: 'Flexible Loans',
      description: 'Loans pegged to 3 times your savings with 3-month history',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Shield,
      title: 'Secure & Regulated',
      description: 'Your finances protected by industry-leading security',
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      icon: Award,
      title: 'Member Benefits',
      description: 'Exclusive perks and dividend payouts for members',
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      icon: TrendingUp,
      title: 'Financial Growth',
      description: 'Achieve your financial goals with expert guidance',
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600'
    }
  ]

  // Savings Products from image
  const savingsProducts = [
    {
      icon: PiggyBank,
      title: 'Ordinary Savings',
      description: 'Minimum monthly contribution of Kshs 500 for individuals and groups',
      bg: 'bg-emerald-50'
    },
    {
      icon: Baby,
      title: 'Jenga Junior Savings',
      description: 'Specially tailored accounts to help minors build financial savings',
      bg: 'bg-blue-50'
    },
    {
      icon: Gift,
      title: 'Christmas Savings',
      description: 'Designated account to facilitate saving for holiday expenses',
      bg: 'bg-amber-50'
    }
  ]

  // Loan Products from image
  const loanProducts = [
    {
      icon: Building,
      title: 'Development Loan',
      description: 'Long-term financing for member projects',
      bg: 'bg-blue-50'
    },
    {
      icon: Briefcase,
      title: 'Biashara Loan',
      description: 'Working capital targeted for businesses',
      bg: 'bg-emerald-50'
    },
    {
      icon: GraduationCap,
      title: 'Emergency/School Fees Loan',
      description: 'Short-term or immediate financial assistance',
      bg: 'bg-amber-50'
    },
    {
      icon: Award,
      title: 'Premium Loan',
      description: 'Higher-tier credit facility based on member deposits',
      bg: 'bg-purple-50'
    },
    {
      icon: Home,
      title: 'Asset & Salient Loans',
      description: 'Specific financing to purchase sound system for churches and church construction',
      bg: 'bg-indigo-50'
    },


    {
      icon: Smartphone,
      title: 'M-KAPLANS',
      description: 'Mobile-based lending for fast, on-the-go financial needs',
      bg: 'bg-cyan-50'
    },



    {
      icon: Car,
      title: 'PASTORS,REVERENDS AND BISHOPS CAR LOANS',
      description: 'Loans for purchasing vehicles, including cars and motorcycles  for the men of GOD',
      bg: 'bg-cyan-50'
    }




  ]






  const stats = [
    { value: '3,000+', label: 'Active Members' },
    { value: 'Kshs 8M+', label: 'Total Savings' },
    { value: 'Kshs 167M+', label: 'Loans Disbursed' },
    { value: '10+', label: 'Years of Service' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl"></div>
      </div>










      {/* Navigation with Logo */}
      <nav className="relative z-50 bg-white border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              {/* Logo Image - Using img tag */}
              <div className="relative w-22 h-22 rounded-xl overflow-hidden bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                <img
                  src="/images/logo.JPG"
                  alt="Kaplans SACCO Logo"
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-slate-900">KAPLANS SACCO</span>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-slate-500 font-medium">Savings & Credit Co-operative</span>
                </div>
              </div>
            </div>













            

            <div className="hidden md:flex items-center space-x-6">
              <Link href="#features" className="text-slate-600 hover:text-slate-900 transition-colors font-medium text-sm">
                Features
              </Link>
              <Link href="#savings" className="text-slate-600 hover:text-slate-900 transition-colors font-medium text-sm">
                Savings
              </Link>
              <Link href="#loans" className="text-slate-600 hover:text-slate-900 transition-colors font-medium text-sm">
                Loans
              </Link>
              <Link href="#about" className="text-slate-600 hover:text-slate-900 transition-colors font-medium text-sm">
                About
              </Link>
              <Link href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors font-medium text-sm">
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <Link
                href="/login"
                className="px-4 py-2 text-sm text-slate-700 font-medium bg-slate-50 rounded-xl hover:bg-slate-100 transition-all duration-300 hover:scale-105 border border-slate-200"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="relative group px-4 py-2 text-sm rounded-xl font-medium text-white overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  Join Now
                  <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Image on Right */}
      <section className="relative pt-12 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 text-sm">
                <span className="text-slate-700">KAPLANS SAVINGS AND CREDIT CO-OPERATIVE</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Financial</span>
                <br />
                <span className="text-slate-900">Growth Partner</span>
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                Kaplans SACCO provides secure, reliable, and member-focused financial 
                services to help you achieve your financial goals.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/register"
                  className="relative group px-6 py-3 rounded-xl font-semibold text-white overflow-hidden text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  href="#features"
                  className="px-6 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-all duration-300 hover:scale-105 flex items-center text-sm border border-slate-200"
                >
                  Learn More
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <div className="flex items-center">
                  <BadgeCheck className="h-4 w-4 text-emerald-500 mr-1.5" />
                  <span>Member-Owned</span>
                </div>
                <div className="flex items-center">
                  <BadgeCheck className="h-4 w-4 text-emerald-500 mr-1.5" />
                  <span>Fully Regulated</span>
                </div>
                <div className="flex items-center">
                  <BadgeCheck className="h-4 w-4 text-emerald-500 mr-1.5" />
                  <span>Est. 2010</span>
                </div>
              </div>
            </div>

            {/* Hero Image - Right */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white p-3 rounded-3xl border border-slate-200 shadow-xl">
                <img
                  src="/images/sacco-hero.jpg"
                  alt="Kaplans SACCO"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500">Join Today</p>
                      <p className="text-sm font-bold text-slate-900">Start Your Journey</p>
                    </div>
                    <Link
                      href="/register"
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-8 border-y border-slate-200/50 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-slate-900">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Image on Left */}
      <section id="features" className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative order-1 lg:order-1">
              <img
                src="/images/sacco-features.jpg"
                alt="Kaplans SACCO Features"
                className="w-full h-56 object-cover rounded-2xl shadow-md"
              />
            </div>
            <div className="order-2">
              <div className="inline-flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 mb-3">
                <Star className="h-3.5 w-3.5 text-amber-500" />
                <span className="text-xs font-medium text-slate-700">Core Features</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-slate-900">Why Choose </span>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Kaplans</span>
              </h2>
              <p className="text-base text-slate-600 mt-2">
                Professional financial services designed for your success
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-white p-5 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-200 group">
                  <div className={`inline-flex p-2 rounded-lg ${feature.iconBg} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-5 w-5 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Savings Section - Image on Right */}
      <section id="savings" className="relative py-12 bg-slate-50/50 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 mb-3">
                <PiggyBank className="h-3.5 w-3.5 text-emerald-500" />
                <span className="text-xs font-medium text-slate-700">Savings Products</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-slate-900">Our </span>
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Savings</span>
                <span className="text-slate-900"> Options</span>
              </h2>
              <p className="text-base text-slate-600 mt-2">
                Review the primary savings option for individuals and groups
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/sacco-savings.jpg"
                alt="Kaplans SACCO Savings"
                className="w-full h-56 object-cover rounded-2xl shadow-md"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {savingsProducts.map((product, index) => {
              const Icon = product.icon
              return (
                <div key={index} className={`${product.bg} p-6 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                  <div className="bg-white p-3 rounded-xl inline-block mb-4 shadow-sm">
                    <Icon className="h-6 w-6 text-slate-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{product.title}</h3>
                  <p className="text-sm text-slate-600">{product.description}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-6 p-4 bg-blue-50/80 rounded-xl border border-blue-200/50 text-center">
            <p className="text-sm text-blue-700">
              <strong>Note:</strong> Loans are generally pegged to 3 times member's savings and require a 3-month savings history with approval based on an appraisal by a loan officer.
            </p>
          </div>
        </div>
      </section>

      {/* Loans Section - Image on Left */}
      <section id="loans" className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative">
              <img
                src="/images/sacco-loans.jpg"
                alt="Kaplans SACCO Loans"
                className="w-full h-56 object-cover rounded-2xl shadow-md"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 mb-3">
                <CreditCard className="h-3.5 w-3.5 text-blue-500" />
                <span className="text-xs font-medium text-slate-700">Loan Products</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-slate-900">Our </span>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Loan</span>
                <span className="text-slate-900"> Products</span>
              </h2>
              <p className="text-base text-slate-600 mt-2">
                Flexible financing options tailored to your needs
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {loanProducts.map((product, index) => {
              const Icon = product.icon
              return (
                <div key={index} className={`${product.bg} p-6 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                  <div className="bg-white p-3 rounded-xl inline-block mb-4 shadow-sm">
                    <Icon className="h-6 w-6 text-slate-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{product.title}</h3>
                  <p className="text-sm text-slate-600">{product.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>














      {/* CTA Section */}
      <section id="about" className="relative py-12 bg-slate-50/50 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl p-8 md:p-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-2xl">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Ready to Grow with Us?
              </h2>
              <p className="text-base text-blue-100 mb-6 max-w-2xl mx-auto">
                Join Kenya's trusted SACCO and start building your financial future today
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/register"
                  className="px-6 py-2.5 bg-white text-slate-800 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center text-sm"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
                <Link
                  href="#contact"
                  className="px-6 py-2.5 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 text-sm"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>




















      {/* Contact Section */}
      <section id="contact" className="relative py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 mb-3">
              <Phone className="h-3.5 w-3.5 text-blue-500" />
              <span className="text-xs font-medium text-slate-700">Contact Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-slate-900">Get In </span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-base text-slate-600 mt-2">
              Have questions? We're here to help
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left side - Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <Building2 className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Head Office</h4>
                  <p className="text-xs text-slate-500">KAPLAN Plaza, Opposite Holy Synagogue Church</p>
                  <p className="text-xs text-slate-500">KISII - KILGORIS ROAD</p>
                  <p className="text-xs text-slate-500">KISII - COUNTY</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <Phone className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Phone</h4>
                  <p className="text-xs text-slate-500">072 591 9238</p>
                  <p className="text-xs text-slate-500">071 766 2528</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <Mail className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Email</h4>
                  <p className="text-xs text-slate-500">kaplannetwork@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <Clock className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Working Hours</h4>
                  <p className="text-xs text-slate-500">Mon-Fri: 8:00 AM - 5:00 PM</p>
                  <p className="text-xs text-slate-500">Sat: 8:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Send a Message</h3>
              <form className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none bg-white text-slate-900 placeholder-slate-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none bg-white text-slate-900 placeholder-slate-400"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Message</label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none bg-white text-slate-900 placeholder-slate-400"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-sm font-semibold py-2.5 rounded-xl text-white transition-all duration-300 hover:scale-105 bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>














      {/* Footer */}
      <footer className="relative bg-slate-900 text-slate-300 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="relative w-15 h-15 rounded-lg overflow-hidden bg-white border border-slate-700 flex items-center justify-center">
                  <img
                    src="/images/logo.JPG"
                    alt="Kaplans SACCO Logo"
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <span className="text-lg font-bold text-white">KAPLANS SACCO</span>
              </div>
              <p className="text-xs text-slate-400">KAPLAN Plaza, Opposite Holy Synagogue Church</p>
              <p className="text-xs text-slate-400">KISII - KILGORIS ROAD, KISII - COUNTY</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-2">Quick Links</h4>
              <ul className="space-y-1.5 text-xs">
                <li><Link href="#features" className="text-slate-400 hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#savings" className="text-slate-400 hover:text-white transition-colors">Savings</Link></li>
                <li><Link href="#loans" className="text-slate-400 hover:text-white transition-colors">Loans</Link></li>
                <li><Link href="#about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-2">Contact</h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>072 591 9238</li>
                <li>071 766 2528</li>
                <li>kaplannetwork@gmail.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-2">Address</h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>KAPLAN Plaza</li>
                <li>Opposite Holy Synagogue Church</li>
                <li>KISII - KILGORIS ROAD</li>
                <li>KISII - COUNTY</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-6 pt-6 text-center text-xs text-slate-400">
            <p>© {new Date().getFullYear()} KAPLANS SAVINGS AND CREDIT CO-OPERATIVE SOCIETY LTD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}