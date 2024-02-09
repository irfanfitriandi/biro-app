import { ReactNode } from 'react'
import { Footer, Header } from '..'

interface ILayout {
  children: ReactNode
}

export const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header isFixed />
      <main>{children}</main>
      <Footer />
    </>
  )
}
