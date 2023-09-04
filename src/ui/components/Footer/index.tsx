import React from "react"

import { Typography } from "@ui/components"

import style from "./style.module.scss"

export const Footer = () => {
  return (
    <footer>
      <div className={style.footerWrapper}>
        <img src="./images/contacts/invertedLogo.svg" alt="inverted-logo" />
        <Typography
          text={`Copyright © ${new Date().getFullYear()} Licensed under MIT`}
          color="white"
          type="light"
          className={style.copyright}
        />
      </div>
    </footer>
  )
}

export default Footer
