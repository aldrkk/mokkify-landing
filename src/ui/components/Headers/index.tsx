import cn from "classnames"
import React from "react"

import style from "./style.module.scss"

import type { FC } from "react"

type Props = {
  text: string
  className?: string
}

const H1: FC<Props> = ({ text, className }) => <h1 className={cn(className, style.h1)}>{text}</h1>
const H2: FC<Props> = ({ text, className }) => <h2 className={cn(className, style.h2)}>{text}</h2>
const H3: FC<Props> = ({ text, className }) => <h3 className={cn(className, style.h3)}>{text}</h3>

export const Headers = {
  H1,
  H2,
  H3
}
