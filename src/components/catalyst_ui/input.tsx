
import clsx from 'clsx'
import React, { forwardRef } from 'react'

export const Input = forwardRef(function Input(
  { className, ...props }: { className?: string } & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'>,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <input
      ref={ref}
      {...props}
      className={clsx(
        className,
        // Basic layout
        'block w-full rounded-lg border border-zinc-950/10 px-3.5 py-2.5 sm:py-1.5',
        // Text styles
        'text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white',
        // Focus styles
        'focus:outline-none focus:ring-2 focus:ring-blue-500',
        // Invalid state
        'data-invalid:border-red-500 data-invalid:focus:ring-red-500',
        // Disabled state
        'disabled:opacity-50'
      )}
    />
  )
})

export function InputGroup({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'relative flex rounded-lg focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-blue-500',
        // Icon and addon slots
        '[&>*:not(:first-child)]:pl-10',
        '[&>[data-slot=icon]]:pointer-events-none [&>[data-slot=icon]]:absolute [&>[data-slot=icon]]:inset-y-0 [&>[data-slot=icon]]:left-3 [&>[data-slot=icon]]:flex [&>[data-slot=icon]]:items-center'
      )}
    />
  )
}
