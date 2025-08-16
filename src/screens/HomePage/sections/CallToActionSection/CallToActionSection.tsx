import React from "react";
import { Button } from "../../../../components/ui/button";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="w-full bg-neutralneutral-02 py-[130px]">
      <div className="max-w-[1345px] mx-auto px-4">
        <div className="flex items-center gap-20">
          <div className="flex flex-col gap-12 flex-1">
            <div className="flex flex-col gap-4">
              <h1 className="font-headings-heading-1 font-[number:var(--headings-heading-1-font-weight)] text-neutralneutral-07 text-[length:var(--headings-heading-1-font-size)] tracking-[var(--headings-heading-1-letter-spacing)] leading-[var(--headings-heading-1-line-height)] [font-style:var(--headings-heading-1-font-style)]">
                Tell Me Your Story
              </h1>

              <p className="max-w-[542px] font-body-18px-ragular font-[number:var(--body-18px-ragular-font-weight)] text-neutralneutral-06 text-[length:var(--body-18px-ragular-font-size)] tracking-[var(--body-18px-ragular-letter-spacing)] leading-[var(--body-18px-ragular-line-height)] [font-style:var(--body-18px-ragular-font-style)]">
                Welcome to the Bloogy&apos;s content! The where you&apos;ll find
                posts on everything from personal growth to creative musings.
              </p>
            </div>

            <div className="flex items-center">
              <Button className="h-auto bg-theme-colortheme-color-01 hover:bg-theme-colortheme-color-01/90 text-neutralneutral-08 px-10 py-4 rounded-[100px] font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] [font-style:var(--body-16px-regular-font-style)]">
                Share Your Story
              </Button>
            </div>
          </div>

          <div className="flex-shrink-0">
            <img
              className="w-[541px] h-[432px] rounded-[20px] object-cover"
              alt="Image"
              src="/src/images/sory-image.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
