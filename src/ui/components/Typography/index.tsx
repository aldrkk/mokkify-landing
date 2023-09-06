import cn from "classnames"
import React from "react"

import style from "./style.module.scss"

import type { FC } from "react"

type Props = {
  text: string
  type: "thin" | "light" | "regular" | "bold"
  color: "black" | "white"
  className?: string
}

export const Typography: FC<Props> = ({ text, type, color, className }) => (
  <p
    className={cn(className, {
      [style.black]: color === "black",
      [style.white]: color === "white",
      [style.thin]: type === "thin",
      [style.light]: type === "light",
      [style.regular]: type === "regular",
      [style.bold]: type === "bold"
    })}
  >
    {text}
  </p>
)
