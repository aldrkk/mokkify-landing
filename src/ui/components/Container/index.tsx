import type {FC, ReactNode} from "react"
import React from "react"

import style from "./style.module.scss"

type Props = {
  children: ReactNode
}

export const Container: FC<Props> = ({children}) => {
  return <div className={style.container}>{children}</div>
}
