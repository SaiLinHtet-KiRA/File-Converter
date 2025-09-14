import React from "react";
import { EmptyDocument, GlobeAlt, ShieldCheck } from "../svg";
import Header from "./Header";

export default function Features() {
  const features = [
    {
      icon: EmptyDocument,
      title: "Online File Converter",
      description:
        "FreeConvert supports more than 1500 file conversions. You can convert videos, images, audio files, or e-books. There are tons of Advanced Options to fine-tune your conversions.",
    },
    {
      icon: GlobeAlt,
      title: "Work On Any Where",
      description:
        "InfiniteConvert is an online file converter. So it works on Windows, Mac, Linux, or any mobile device. All major browsers are supported. Simply upload a file and select a target format.",
    },
    {
      icon: ShieldCheck,
      title: "Best Privacy",
      description:
        "We know that file security and privacy are important to you. That is why we use 256-bit SSL encryption when transferring files and automatically delete them after a few hours.",
    },
  ];
  return (
    <section className="flex gap-10">
      {features.map(({ title, icon, description }) => (
        <div className="w-60 h-fit shadow-md p-5 flex flex-col gap-4 rounded-lg border border-gray-100/80">
          <header className="flex flex-col gap-1.5 items-center justify-center">
            {React.createElement(icon, { className: "size-7" })}
            <h1 className="font-semibold text-sm">{title}</h1>
          </header>
          <article className="text-sm font-light text-justify">
            {description}
          </article>
        </div>
      ))}
    </section>
  );
}
