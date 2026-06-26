import { theme, cn } from '@/lib/theme'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6',
    lg: 'py-4 px-8 text-lg',
  }

  const variantClasses = {
    primary: `bg-gradient-to-r ${theme.button.primary} text-white hover:shadow-xl transition-all duration-300 hover:scale-105`,
    secondary: `bg-slate-800/50 text-white hover:shadow-xl transition-all duration-300 hover:scale-105 border ${theme.border.light}`,
    outline: `border-2 ${theme.border.light} text-white hover:bg-white/10 transition-all duration-300`,
  }

  return (
    <button
      className={cn(
        'font-semibold rounded-xl transition-all duration-300',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}