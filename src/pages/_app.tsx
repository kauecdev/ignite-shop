import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import logo from '../assets/logo.svg'
import Image from "next/image";
import { CartProvider } from "use-shopping-cart";
import Link from "next/link";
import { Container, Header } from "@/styles/pages/app";
import { useState } from "react";
import { Cart } from "@/components/cart";
import { CartList } from "@/components/cart-list";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [showCartList, setShowCartList] = useState(false)

  function handleToggleShowCartList(show: boolean) {
    setShowCartList(show)
  }
  
  const stripePublicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string

  return (
    <Container className={roboto.className}>
      <CartProvider
        shouldPersist
        cartMode="checkout-session"
        stripe={stripePublicKey}
        currency="BRL"
      >
        <Header>
          <Link href="/">
            <Image height={48} src={logo} alt="" />
          </Link>
          <Cart onClick={() => handleToggleShowCartList(true)} />
        </Header>
        <Component {...pageProps} />
        <CartList show={showCartList} onClose={() => handleToggleShowCartList(false)} />
      </CartProvider>
    </Container>
  );
}