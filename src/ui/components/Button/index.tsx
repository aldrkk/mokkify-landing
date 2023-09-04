import Link from "next/link"
import React from "react"

import style from "./style.module.scss"

import type { FC } from "react"

type Props = {
  href: string
  text: string
}

export const Button: FC<Props> = ({ href, text }) => {
  return (
    <Link target="_blank" className={style.button} href={href}>
      {text}
    </Link>
  )
}
