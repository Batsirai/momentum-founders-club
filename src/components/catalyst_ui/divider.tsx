
import clsx from 'clsx'
import React from 'react'

export function Divider({ className, ...props }: React.ComponentPropsWithoutRef<'hr'>) {
  return (
    <hr
      {...props}
      className={clsx(
        className,
        'border-t border-zinc-950/10 dark:border-white/10 forced-colors:border-[CanvasText]'
      )}
    />
  )
}
