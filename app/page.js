"use client"
import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import React, { useState } from "react";
import ThisCantBeReached from "./components/thisSiteCanBeReached/site-reach";
import Footer from './components/footer';
import Navbar from './components/navbar';
// async function getData() {
//   const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   const data = await res.json();
//   console.log(data)

//   const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

//   return filtered;
// };


export default function Home() {
  const [showThisCantBeReached, setShowThisCantBeReached] = useState(true);

  // const blogs = await getData();

  setTimeout(() => {
    setShowThisCantBeReached(false);
  }, 5400);

  return (
    <>
      {showThisCantBeReached ? (
        <ThisCantBeReached />
      ) : (<>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Blog />
        <ContactSection />
        <Footer />
      </>)}
    </>
  );
}