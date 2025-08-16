import React from "react";
import { AboutMeSection } from "./sections/AboutMeSection/AboutMeSection";
import { BlogSection } from "./sections/BlogSection/BlogSection";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { FeaturedPostsSection } from "./sections/FeaturedPostsSection/FeaturedPostsSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { ReaderFeedbackSection } from "./sections/ReaderFeedbackSection/ReaderFeedbackSection";

export const HomePage = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full relative bg-neutralneutral-01">
      <HeroSection />
      <FeaturedPostsSection />
      <AboutMeSection />
      <ReaderFeedbackSection />
      <BlogSection />
      <CallToActionSection />
      <FooterSection />
    </main>
  );
};
