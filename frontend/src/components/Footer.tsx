import React from "react";
import Header from "./Header";
import { GitHub, Instagram, LinkedIn, X } from "../svg";

export default function Footer() {
  const conversionCategories = [
    {
      category: "Video Converter",
      tools: ["Video Converter", "Audio Converter", "Video to Audio"],
    },
    {
      category: "Images",
      tools: ["Images Converter", "Images to PDF"],
    },
    {
      category: "Document",
      tools: ["PDF to Images", "Excel to PDF", "JSON to Excel"],
    },
    {
      category: "GIF",
      tools: ["Images to GIF", "Video to GIF", "GIF to Images"],
    },
  ];
  const menuItems = [
    "About Us",
    "Privacy",
    "Terms",
    "Security and Compliance",
    "Contact",
  ];
  const DeveloperContacts = [
    {
      icon: LinkedIn,
      link: "LinkedIn",
      platform: "LinkedIn",
    },
    {
      icon: GitHub,
      link: "https://github.com/SaiLinHtet-KiRA",
      platform: "GitHub",
    },
    {
      icon: X,
      link: "",
      platform: "X",
    },
    {
      icon: Instagram,
      link: "",
      platform: "Instagram",
    },
  ];
  return (
    <footer className="w-screen px-[8%] py-[4%] bg-cyan-900/80 flex flex-col gap-8">
      <section className="flex justify-between">
        {conversionCategories.map(({ category, tools }) => (
          <section className="flex flex-col gap-1 items-start">
            <header>
              <h1 className="text-white/95 font-medium tracking-wider ">
                <Header text={category} />
              </h1>
            </header>
            <main className="flex flex-col ml-4 gap-1">
              {tools.map((tool) => (
                <a className="text-sm font-medium text-white/95 hover:text-cyan-300 hover:scale-110 ">
                  {tool}
                </a>
              ))}
            </main>
          </section>
        ))}
      </section>
      <section className="flex flex-col gap-2">
        <section className="flex gap-6">
          {menuItems.map((item) => (
            <a className="text-white font-medium text-xs tracking-wider hover:text-cyan-300 hover:scale-110 hover:-translate-y-0.5">
              {item}
            </a>
          ))}
        </section>
        <div className="w-full h-0.5 bg-gray-300/50 " />
        <section className="flex items-center justify-between">
          <div className="size-5 bg-red-400" />
          <span className="text-white/90">
            copy right {new Date(Date.now()).getFullYear()}
          </span>
          <section className="flex gap-3 items-center ">
            <span className="font-medium text-white text-sm">
              Developed By -{" "}
            </span>
            <div className="flex gap-2 items-center">
              {DeveloperContacts.map(({ icon, link, platform }) => (
                <a href={link} target="_blank" className="relative size-6 ">
                  {React.createElement(icon, {
                    className:
                      "absolute  fill-white/90 hover:fill-cyan-300 hover:scale-120 hover:-translate-y-1",
                  })}
                </a>
              ))}
            </div>
          </section>
        </section>
      </section>
    </footer>
  );
}
