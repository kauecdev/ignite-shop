import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import logo from '../assets/logo.svg'
import { Container, Header } from "@/styles/pages/app";
import Image from "next/image";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container className={roboto.className}>
      <Header>
        <Image src={logo} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
