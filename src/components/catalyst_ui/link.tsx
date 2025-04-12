
import React, { forwardRef } from 'react'
import { Link as RouterLink, LinkProps } from 'react-router-dom'

export const Link = forwardRef(function Link(
  props: LinkProps,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  return (
    <RouterLink {...props} ref={ref} />
  )
})
