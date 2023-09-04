import React from "react"

import { Logo, LinkComponent } from "@ui/components"

import style from "./style.module.scss"

export const Header = () => {
  const onContactsClick = () => {
    if (window) {
      window.scrollTo({ top: 9999, behavior: "smooth" })
    }
  }

  return (
    <header className={style.headerWrapper}>
      <Logo />
      <nav>
        <LinkComponent className={style.link} href="/" text="Home " />
        <LinkComponent className={style.link} href="https://github.com/icevl/mokkify" text="Github" isOpenInWindow />
        <div className={style.link} onClick={onContactsClick}>
          Contacts
        </div>
      </nav>
    </header>
  )
}
