import Link from "next/link"
import React from "react"

import { Typography } from "@ui/components"

import style from "./style.module.scss"

import type { FC } from "react"

type Props = {
  imageUrl: string
  name: string
  socials?: {
    github?: string
    linkedin?: string
    twitter?: string
  }
}

export const ContactItem: FC<Props> = ({ imageUrl, name, socials }) => {
  return (
    <div className={style.contactWrapper}>
      <img src={imageUrl} alt="avatar" />
      <div>
        <Typography text={name} type="regular" color="white" className={style.name} />
        {socials && (
          <div className={style.socialsWrapper}>
            {socials.github && (
              <Link target="_blank" href={socials.github}>
                <img src="./images/contacts/socials/github.svg" alt="github" />
              </Link>
            )}
            {socials.linkedin && (
              <Link target="_blank" href={socials.linkedin}>
                <img src="./images/contacts/socials/linkedin.svg" alt="linkedin" />
              </Link>
            )}
            {socials.twitter && (
              <Link target="_blank" href={socials.twitter}>
                <img src="./images/contacts/socials/twitter.svg" alt="twitter" />
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
