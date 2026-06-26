import { theme, cn } from '@/lib/theme'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'bg-slate-800/50 rounded-2xl shadow-lg border border-slate-700/50 p-6',
        hover && 'hover:shadow-xl transition-all duration-300 hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  )
}