import React from "react"

import { Typography } from "@ui/components"

import style from "./style.module.scss"

import type { FC } from "react"

type Props = {
  imageUrl: string
  title: string
  description: string
}

export const Card: FC<Props> = ({ imageUrl, description, title }) => {
  return (
    <div className={style.cardWrapper}>
      <div className={style.cardImage}>
        <img src={imageUrl} alt="" />
      </div>
      <Typography text={title} className={style.cardHeader} type="bold" color="black" />
      <Typography className={style.cardDescription} text={description} type="light" color="black" />
    </div>
  )
}
