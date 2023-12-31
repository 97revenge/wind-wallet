// import { Index as Options } from "@/components/Options";
import { Index as Hero } from "@/components/Hero";
import { Index as Services } from "@/components/Services";
import { Index as Resolution } from "@/components/Resolution";
import { Index as Advantages } from "@/components/Advantages";
import { Index as Testimonials } from "@/components/Testimonials";
import { Index as Contact } from "@/components/contact";
import { Index as Pricing } from "@/components/pricing";
import { Index as Footer } from "@/components/footer";
import { Index as Options } from "@/components/Options";

export default function Scaffold() {
  return (
    <>
      <Options />
      <Hero />
      <Services />
      <Resolution />
      <Advantages />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
