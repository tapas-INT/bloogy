import React from "react";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Review", href: "#" },
  { label: "Contact", href: "#" },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[1008px] bg-neutralneutral-02 overflow-hidden">
      <div className="relative w-full h-full">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background"
          src="/src/images/icons/bg.svg"
        />

        <div className="absolute w-[1172px] h-[137px] top-[636px] left-[-276px] rounded-[309px] rotate-[-48.64deg] blur-[198.45px] bg-[linear-gradient(90deg,rgba(132,80,255,1)_0%,rgba(255,77,246,1)_100%)] opacity-30" />

        <div className="absolute w-[1172px] h-[137px] top-[306px] right-[-338px] rounded-[309px] rotate-[-48.64deg] blur-[198.45px] bg-[linear-gradient(90deg,rgba(132,80,255,1)_0%,rgba(255,77,246,1)_100%)] opacity-30" />

        <div className="relative z-10 max-w-[1344px] mx-auto px-4">
          <nav className="flex items-center justify-between pt-10 pb-8">
            <div className="flex items-center justify-center gap-2">
              <h1 className="[font-family:'Nexa-ExtraLight',Helvetica] font-extralight text-neutralneutral-08 text-[32px] leading-[38.4px]">
                Bloogy
              </h1>
            </div>

            <div className="flex items-center gap-[72px]">
              <div className="flex items-center gap-12">
                {navigationItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-neutralneutral-07 text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] [font-style:var(--body-16px-regular-font-style)] hover:text-neutralneutral-08 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                <h2 className="font-headings-display-1 font-[number:var(--headings-display-1-font-weight)] text-neutralneutral-07 text-[length:var(--headings-display-1-font-size)] tracking-[var(--headings-display-1-letter-spacing)] leading-[var(--headings-display-1-line-height)] [font-style:var(--headings-display-1-font-style)]">
                  Welcome to Bloogy
                </h2>

                <p className="max-w-[833px] font-body-18px-ragular font-[number:var(--body-18px-ragular-font-weight)] text-neutralneutral-06 text-[length:var(--body-18px-ragular-font-size)] tracking-[var(--body-18px-ragular-letter-spacing)] leading-[var(--body-18px-ragular-line-height)] [font-style:var(--body-18px-ragular-font-style)]">
                  Welcome to my digital diary! I'm excited to share my thoughts
                  and experiences. This space reflects my growth, challenges,
                  and triumphs. Together, we'll explore various topics, from
                  daily life to profound insights. Grab a coffee, get
                  comfortable, and let's dive into this adventure!
                </p>
              </div>

              <div className="flex items-center">
                <Button className="h-auto bg-[#c6b3ff] hover:bg-[#b8a3ff] text-neutralneutral-08 px-10 py-4 rounded-[100px] font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] [font-style:var(--body-16px-regular-font-style)]">
                  Read My Blog's
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                className="w-full max-w-[605px] h-auto"
                alt="Welcome image"
                src="/src/images/hero-image.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
