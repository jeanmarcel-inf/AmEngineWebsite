import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import OurProducts from "@/components/OurProducts";
import { Button } from "@/components/ui/button";

export default function Home()
{
  return (
    <>
      <Hero />
      <OurProducts />
      <AboutUs />
    </>
  )
}
