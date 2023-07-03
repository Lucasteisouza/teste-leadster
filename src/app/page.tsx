import Biblioteca from "@/app/components/Biblioteca";
import CTACard from "@/app/components/CTACard";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import { NextPageContext } from 'next';

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Biblioteca />
      <CTACard />
      <Footer />
    </>
  )
}
