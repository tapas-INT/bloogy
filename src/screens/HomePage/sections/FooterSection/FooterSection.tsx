import { SendIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const FooterSection = (): JSX.Element => {
  const navigationLinks = [
    { label: "View Blog", href: "#" },
    { label: "Blog Details", href: "#" },
  ];

  return (
    <footer className="w-full bg-neutralneutral-01 py-[200px]">
      <div className="max-w-[1344px] mx-auto px-4 flex flex-col gap-24">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <h2 className="[font-family:'Nexa-ExtraLight',Helvetica] font-extralight text-neutralneutral-08 text-[32px] leading-[38.4px]">
              Bloogy
            </h2>
          </div>

          <nav className="flex items-center gap-12">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-neutralneutral-07 text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] [font-style:var(--body-16px-regular-font-style)] hover:text-neutralneutral-08 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center">
            <div className="flex items-center bg-neutralneutral-02 rounded-[100px] border border-solid border-black">
              <Input
                type="email"
                placeholder="Enter Your Email Address"
                className="bg-transparent border-0 px-6 py-4 text-neutralneutral-06 font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] [font-style:var(--body-16px-regular-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0 rounded-[100px] min-w-[200px]"
              />
              <Button
                size="icon"
                className="bg-neutralneutral-02 hover:bg-neutralneutral-05 border border-solid border-black rounded-[36px] h-auto p-[17px] m-1"
              >
                <SendIcon className="w-6 h-6 text-neutralneutral-08" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12 w-full">
          <div className="w-full h-px bg-neutralneutral-05"></div>

          <div className="flex items-end justify-between w-full">
            <p className="font-body-14px-regular font-[number:var(--body-14px-regular-font-weight)] text-[#5b5753] text-[length:var(--body-14px-regular-font-size)] tracking-[var(--body-14px-regular-letter-spacing)] leading-[var(--body-14px-regular-line-height)] [font-style:var(--body-14px-regular-font-style)]">
              Copyright © 2024, All Rights Reserved By FramerWebPro
            </p>

            <img
              className="h-[41.79px]"
              alt="Social media links"
              src="/src/images/icons/links.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
