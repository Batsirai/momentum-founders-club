
import React from 'react'

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12 dark:bg-gray-900">
      <div className="w-full max-w-md space-y-8 px-4 sm:px-6 md:max-w-lg lg:px-8">
        {children}
      </div>
    </div>
  )
}
