import { useRef, useState, useEffect } from "react"

import type { MutableRefObject } from "react"

export const useSwiperNavigationRef = <T extends HTMLElement>(): [T | null, MutableRefObject<T | null>] => {
  const [wrapper, setWrapper] = useState<T | null>(null)
  const ref = useRef<T>(null)

  useEffect(() => {
    if (ref.current) {
      setWrapper(ref.current)
    }
  }, [])

  return [wrapper, ref]
}
