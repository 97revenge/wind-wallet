import { Index as Hero } from "@/components/Hero";
import { Index as Services } from "@/components/Services";

import { Index as Resolution } from "@/components/Resolution";
import { Index as Advantages } from "@/components/Advantages";
import { Index as Testimonials } from "@/components/Testimonials";

export default function Scaffold() {
  return (
    <>
      <Hero />
      <Services />
      <Resolution />
      <Advantages />
      <Testimonials />
    </>
  );
}
