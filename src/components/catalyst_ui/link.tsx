
import * as Headless from '@headlessui/react'
import { Link as RouterLink, type LinkProps as RouterLinkProps } from 'react-router-dom'
import React, { forwardRef } from 'react'

export const Link = forwardRef(function Link(
  props: RouterLinkProps & React.ComponentPropsWithoutRef<'a'>,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  return (
    <Headless.DataInteractive as="span">
      <RouterLink {...props} ref={ref} />
    </Headless.DataInteractive>
  )
})
