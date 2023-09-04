import Link from "next/link"
import React from "react"

import type { FC } from "react"

type Props = {
  href: string
  text: string
  isOpenInWindow?: boolean
  className?: string
}

export const LinkComponent: FC<Props> = ({ href, text, isOpenInWindow, className }) => {
  return (
    <Link target={isOpenInWindow ? "_blank" : "_self"} className={className} href={href}>
      {text}
    </Link>
  )
}
