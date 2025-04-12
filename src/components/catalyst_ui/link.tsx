
import React, { forwardRef } from 'react'
import { Link as RouterLink, type LinkProps as RouterLinkProps } from 'react-router-dom'

export interface LinkProps extends Omit<RouterLinkProps, 'to'> {
  href?: string;
  to?: string;
}

export const Link = forwardRef(function Link(
  props: LinkProps,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  const { href, to, ...rest } = props
  // Use either to or href, prioritizing to if both are provided
  const destination = to || href || '/'
  
  return (
    <RouterLink to={destination} {...rest} ref={ref} />
  )
})

