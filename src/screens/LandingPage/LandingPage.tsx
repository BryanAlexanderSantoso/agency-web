import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ContactFormSection } from "./sections/ContactFormSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";
import { PortfolioSection } from "./sections/PortfolioSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="w-full max-w-[1440px] relative">
        <div className="flex flex-col w-full bg-[#fbfcfd]">
          <HeaderSection />
          <NavigationSection />
          <HeroSection />
          <ServicesSection />
          <PortfolioSection />
          <TestimonialsSection />
          <CallToActionSection />
          <ContactFormSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
};
