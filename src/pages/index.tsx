import Head from "next/head"
import { useRef } from "react"
import { Autoplay, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import style from "src/styles/mainPage.module.scss"

import MainBackground from "@ui/MainBackground"
import { Button, Card, ContactItem, Container, Footer, Header, Headers, Typography } from "@ui/components"

import { useSwiperNavigationRef } from "@hooks/useSwiperNavigationRef"

import type { NextPage } from "next"
import type { SwiperRef } from "swiper/react"

import "swiper/css"

const cards = [
  {
    title: "Effortless API Endpoint Mocking",
    imageUrl: "./images/cards/time.png",
    description:
      "Save time and resources by simulating API endpoints and responses with just a few clicks. Focus on developing and fine-tuning your application without the need to set up infrastructures."
  },
  {
    title: "Seamless Webhook Testing",
    imageUrl: "./images/cards/pattern.png",
    description:
      "Ensure the reliability of your webhook integrations through our real-time testing tools. Easily manage incoming and outgoing webhooks, adapting them to fit your specific needs."
  },
  {
    title: "Rapid Development and Iteration",
    imageUrl: "./images/cards/dashboard.png",
    description:
      "Accelerate your development process with immediate feedback and iteration capabilities. Adjust server responses configurations effortlessly, allowing you to refine application's performance."
  }
]

const contacts = [
  {
    imageUrl: "./images/contacts/avatars/mike.jpeg",
    name: "Mikhail Kabanov",
    socials: {
      github: "https://github.com/icevl",
      linkedin: "https://www.linkedin.com/in/mikekabanov",
      twitter: "https://twitter.com/icevl"
    }
  },
  {
    imageUrl: "./images/contacts/avatars/alex.png",
    name: "Aleksandr Krupoderov",
    socials: {
      github: "https://github.com/aldrkk",
      linkedin: "https://www.linkedin.com/in/aleksandr-krupoderov"
    }
  }
]

const Homepage: NextPage = () => {
  const [paginationEl, paginationContainerRef] = useSwiperNavigationRef<HTMLDivElement>()

  const sliderRef = useRef<SwiperRef | null>(null)

  const pagination = {
    el: paginationEl,
    bulletClass: style.bullet,
    bulletActiveClass: style.bulletActive,
    clickable: true
  }

  const handleNextSlide = () => sliderRef?.current?.swiper?.slideNext()
  const handlePrevSlider = () => sliderRef?.current?.swiper?.slidePrev()

  return (
    <div>
      <Head>
        <title>Mokkify</title>
      </Head>

      <section className={style.mainSection}>
        <Container>
          <MainBackground className={style.mainImage} />
          <Header />
          <main>
            <Headers.H1 className={style.header} text="Mokkify" />
            <Typography
              className={style.mainSectionDescription}
              text="A user-friendly and efficient service designed to streamline your
            web development process. Mock API endpoints, simulate server responses, test webhooks,
            and fine-tune your web applications with real-time updates"
              type="thin"
              color="white"
            />
            <Button href="https://demo.mokkify.dev/" text="Try it now" />
          </main>
        </Container>
      </section>

      <section className={style.maximizeSection}>
        <Container>
          <Headers.H2 text="Maximize Your Development Efficiency" className={style.maximizeSectionHeader} />
          <Typography
            text="Discover the power of Mokkify - a versatile tool designed to streamline your web
          development process and save you time. Experience a higher level of efficiency and unleash your true
          development potential with Mokkify today!"
            type="regular"
            color="black"
            className={style.maximizeSectionDescription}
          />
          <div className={style.maximizeCards}>
            {cards.map(item => (
              <Card key={item.title} imageUrl={item.imageUrl} title={item.title} description={item.description} />
            ))}
          </div>
        </Container>
      </section>

      <section className={style.sliderSection}>
        <Container>
          <Headers.H2 text="Convenient and intuitive UI" className={style.sliderHeader} />
          <div className={style.sliderWrapper}>
            <div onClick={handlePrevSlider} className={style.leftArrow}>
              <img src="./images/slider/left.svg" alt="left" />
            </div>
            <Swiper
              slidesPerView="auto"
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop
              modules={[Pagination, Autoplay]}
              pagination={pagination}
              ref={sliderRef}
              speed={600}
            >
              <SwiperSlide>
                <img src="./images/slider/1.png" alt="1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/slider/1.png" alt="1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/slider/1.png" alt="1" />
              </SwiperSlide>
            </Swiper>
            <div onClick={handleNextSlide} className={style.rightArrow}>
              <img src="./images/slider/right.svg" alt="right" />
            </div>

            <div className={style.nav} ref={paginationContainerRef} />
          </div>
        </Container>
      </section>

      <section className={style.contacts}>
        <Container>
          <Headers.H3 className={style.contactsHeader} text="Contributors" />

          <div className={style.contactsWrapper}>
            {contacts.map(item => (
              <ContactItem key={item.name} imageUrl={item.imageUrl} name={item.name} socials={item.socials} />
            ))}
          </div>

          <Footer />
        </Container>
      </section>
    </div>
  )
}

export default Homepage
