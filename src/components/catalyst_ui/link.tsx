
import React, { forwardRef } from 'react'
import { Link as RouterLink, type LinkProps } from 'react-router-dom'

export const Link = forwardRef(function Link(
  props: LinkProps,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  const { to, ...rest } = props
  return (
    <RouterLink to={to} {...rest} ref={ref} />
  )
})
