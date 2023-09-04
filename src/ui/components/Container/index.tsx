import React from "react"

import style from "./style.module.scss"

import type { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const Container: FC<Props> = ({ children }) => {
  return <div className={style.container}>{children}</div>
}
