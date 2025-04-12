
import clsx from 'clsx'
import type React from 'react'
import { Link as RouterLink, type LinkProps } from 'react-router-dom'

export function Text({ className, ...props }: React.ComponentPropsWithoutRef<'p'>) {
  return (
    <p
      {...props}
      data-slot="text"
      className={clsx(
        className,
        'text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400 forced-colors:text-[CanvasText]'
      )}
    />
  )
}

export function TextLink({ className, ...props }: React.ComponentPropsWithoutRef<'a'> & LinkProps) {
  return (
    <RouterLink
      {...props}
      data-slot="link"
      className={clsx(
        className,
        'font-semibold text-zinc-950 underline decoration-zinc-950/50 underline-offset-2 data-hover:decoration-zinc-950 dark:text-white dark:decoration-white/50 dark:data-hover:decoration-white forced-colors:text-[LinkText] forced-colors:decoration-[LinkText]'
      )}
    />
  )
}

export function InlineLink({ className, ...props }: React.ComponentPropsWithoutRef<typeof RouterLink>) {
  return (
    <RouterLink
      {...props}
      className={clsx(
        className,
        'font-medium text-zinc-950 underline decoration-zinc-950/50 underline-offset-2 data-hover:decoration-zinc-950 dark:text-white dark:decoration-white/50 dark:data-hover:decoration-white forced-colors:text-[LinkText] forced-colors:decoration-[LinkText]'
      )}
    />
  )
}
