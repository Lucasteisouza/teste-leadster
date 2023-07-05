import Biblioteca from "@/app/components/Biblioteca";
import CTACard from "@/app/components/CTACard";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>Teste Leadster</title>
        <meta name="description" content="Teste prático para a vaga de desenvolvedor front-end na Leadster" />
        <meta name="keywords" content="leadster, leads, midia paga, webinars, agencia, chatbot, marketing digital" />
      </Head> 
      <Header />
      <Hero />
      <Biblioteca />
      <CTACard />
      <Footer />
    </>
  )
}
