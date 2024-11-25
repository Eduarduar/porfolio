import React from 'react'
import _ from 'lodash'
import { twMerge } from 'tailwind-merge'

interface ButtonProps {
  as?: React.ElementType
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'pending'
    | 'danger'
    | 'dark'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-warning'
    | 'outline-pending'
    | 'outline-danger'
    | 'outline-dark'
    | 'soft-primary'
    | 'soft-secondary'
    | 'soft-success'
    | 'soft-warning'
    | 'soft-pending'
    | 'soft-danger'
    | 'soft-dark'
    | 'facebook'
    | 'twitter'
    | 'instagram'
    | 'linkedin'
  elevated?: boolean
  size?: 'sm' | 'lg'
  rounded?: boolean
  className?: string
  children?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  href?: string
  target?: string
  rel?: string
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({
  as: Component = 'button',
  variant,
  elevated,
  size,
  rounded,
  ...props
}) => {
  const generalStyles = [
    'transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer',
    'focus:ring-4 focus:ring-primary focus:ring-opacity-20',
    'focus-visible:outline-none',
    'dark:focus:ring-slate-700 dark:focus:ring-opacity-50',
    '[&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90',
    '[&:not(button)]:text-center',
    'disabled:opacity-70 disabled:cursor-not-allowed'
  ]

  const small = ['text-xs py-1.5 px-2']
  const large = ['text-lg py-1.5 px-4']

  const primary = ['bg-primary border-primary text-white dark:border-primary']
  const secondary = [
    'bg-secondary/70 border-secondary/70 text-slate-500',
    'dark:border-darkmode-400 dark:bg-darkmode-400 dark:text-slate-300',
    '[&:hover:not(:disabled)]:bg-slate-100 [&:hover:not(:disabled)]:border-slate-100',
    '[&:hover:not(:disabled)]:dark:border-darkmode-300/80 [&:hover:not(:disabled)]:dark:bg-darkmode-300/80'
  ]
  const success = ['bg-success border-success text-slate-900', 'dark:border-success']
  const warning = ['bg-warning border-warning text-slate-900', 'dark:border-warning']
  const pending = ['bg-pending border-pending text-white', 'dark:border-pending']
  const danger = ['bg-danger border-danger text-white', 'dark:border-danger']
  const dark = [
    'bg-dark border-dark text-white',
    'dark:bg-darkmode-800 dark:border-transparent dark:text-slate-300',
    '[&:hover:not(:disabled)]:dark:dark:bg-darkmode-800/70'
  ]

  const facebook = ['bg-[#3b5998] border-[#3b5998] text-white dark:border-[#3b5998]']
  const twitter = ['bg-[#4ab3f4] border-[#4ab3f4] text-white dark:border-[#4ab3f4]']
  const instagram = ['bg-[#517fa4] border-[#517fa4] text-white dark:border-[#517fa4]']
  const linkedin = ['bg-[#0077b5] border-[#0077b5] text-white dark:border-[#0077b5]']

  const outlinePrimary = [
    'border-primary text-primary',
    'dark:border-primary',
    '[&:hover:not(:disabled)]:bg-primary/10'
  ]
  const outlineSecondary = [
    'border-secondary text-slate-500',
    'dark:border-darkmode-100/40 dark:text-slate-300',
    '[&:hover:not(:disabled)]:bg-secondary/20',
    '[&:hover:not(:disabled)]:dark:bg-darkmode-100/10'
  ]
  const outlineSuccess = [
    'border-success text-success',
    'dark:border-success',
    '[&:hover:not(:disabled)]:bg-success/10'
  ]
  const outlineWarning = [
    'border-warning text-warning',
    'dark:border-warning',
    '[&:hover:not(:disabled)]:bg-warning/10'
  ]
  const outlinePending = [
    'border-pending text-pending',
    'dark:border-pending',
    '[&:hover:not(:disabled)]:bg-pending/10'
  ]
  const outlineDanger = [
    'border-danger text-danger',
    'dark:border-danger',
    '[&:hover:not(:disabled)]:bg-danger/10'
  ]
  const outlineDark = [
    'border-dark text-dark',
    'dark:border-darkmode-800 dark:text-slate-300',
    '[&:hover:not(:disabled)]:bg-darkmode-800/30',
    '[&:hover:not(:disabled)]:dark:bg-opacity-30'
  ]

  const softPrimary = [
    'bg-primary border-primary bg-opacity-20 border-opacity-5 text-primary',
    'dark:border-opacity-100 dark:bg-opacity-20 dark:border-primary',
    '[&:hover:not(:disabled)]:bg-opacity-10 [&:hover:not(:disabled)]:border-opacity-10',
    '[&:hover:not(:disabled)]:dark:border-opacity-60'
  ]
  const softSecondary = [
    'bg-slate-300 border-secondary bg-opacity-20 text-slate-500',
    'dark:bg-darkmode-100/20 dark:border-darkmode-100/30 dark:text-slate-300',
    '[&:hover:not(:disabled)]:bg-opacity-10',
    '[&:hover:not(:disabled)]:dark:bg-darkmode-100/10 [&:hover:not(:disabled)]:dark:border-darkmode-100/20'
  ]
  const softSuccess = [
    'bg-success border-success bg-opacity-20 border-opacity-5 text-success',
    'dark:border-success dark:border-opacity-20',
    '[&:hover:not(:disabled)]:bg-opacity-10 [&:hover:not(:disabled)]:border-opacity-10'
  ]
  const softWarning = [
    'bg-warning border-warning bg-opacity-20 border-opacity-5 text-warning',
    'dark:border-warning dark:border-opacity-20',
    '[&:hover:not(:disabled)]:bg-opacity-10 [&:hover:not(:disabled)]:border-opacity-10'
  ]
  const softPending = [
    'bg-pending border-pending bg-opacity-20 border-opacity-5 text-pending',
    'dark:border-pending dark:border-opacity-20',
    '[&:hover:not(:disabled)]:bg-opacity-10 [&:hover:not(:disabled)]:border-opacity-10'
  ]
  const softDanger = [
    'bg-danger border-danger bg-opacity-20 border-opacity-5 text-danger',
    'dark:border-danger dark:border-opacity-20',
    '[&:hover:not(:disabled)]:bg-opacity-10 [&:hover:not(:disabled)]:border-opacity-10'
  ]
  const softDark = [
    'bg-dark border-dark bg-opacity-20 border-opacity-5 text-dark',
    'dark:bg-darkmode-800/30 dark:border-darkmode-800/60 dark:text-slate-300',
    '[&:hover:not(:disabled)]:bg-opacity-10 [&:hover:not(:disabled)]:border-opacity-10',
    '[&:hover:not(:disabled)]:dark:bg-darkmode-800/50 [&:hover:not(:disabled)]:dark:border-darkmode-800'
  ]

  const computedClass = twMerge([
    generalStyles,
    size === 'sm' && small,
    size === 'lg' && large,
    variant === 'primary' && primary,
    variant === 'secondary' && secondary,
    variant === 'success' && success,
    variant === 'warning' && warning,
    variant === 'pending' && pending,
    variant === 'danger' && danger,
    variant === 'dark' && dark,
    variant === 'outline-primary' && outlinePrimary,
    variant === 'outline-secondary' && outlineSecondary,
    variant === 'outline-success' && outlineSuccess,
    variant === 'outline-warning' && outlineWarning,
    variant === 'outline-pending' && outlinePending,
    variant === 'outline-danger' && outlineDanger,
    variant === 'outline-dark' && outlineDark,
    variant === 'soft-primary' && softPrimary,
    variant === 'soft-secondary' && softSecondary,
    variant === 'soft-success' && softSuccess,
    variant === 'soft-warning' && softWarning,
    variant === 'soft-pending' && softPending,
    variant === 'soft-danger' && softDanger,
    variant === 'soft-dark' && softDark,
    variant === 'facebook' && facebook,
    variant === 'twitter' && twitter,
    variant === 'instagram' && instagram,
    variant === 'linkedin' && linkedin,
    rounded && 'rounded-full',
    elevated && 'shadow-md',
    typeof props.className === 'string' && props.className
  ])

  return (
    <Component className={computedClass} {..._.omit(props, 'className')}>
      {props.children}
    </Component>
  )
}

export default Button
