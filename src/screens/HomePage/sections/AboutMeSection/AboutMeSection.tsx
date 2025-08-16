import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutMeSection = (): JSX.Element => {
  return (
    <section className="w-full bg-neutralneutral-01 pb-[120px]">
      <div className="max-w-[1345px] mx-auto px-8">
        <div className="flex flex-col items-center gap-24">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="font-headings-heading-1 font-[number:var(--headings-heading-1-font-weight)] text-neutralneutral-07 text-[length:var(--headings-heading-1-font-size)] tracking-[var(--headings-heading-1-letter-spacing)] leading-[var(--headings-heading-1-line-height)] [font-style:var(--headings-heading-1-font-style)]">
              A Bit About Me
            </h2>
            <p className="max-w-md font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-neutralneutral-06 text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] [font-style:var(--body-16px-regular-font-style)]">
              Hey! I'm Maya, and I'm excited to share my journey with you. Let's
              connect and discover something new together.
            </p>
          </div>

          <div className="flex items-center gap-14 w-full">
            <div
              className="flex-1 h-[744px] rounded-[30px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url(/src/images/about-me.png)" }}
            />

            <Card className="flex-1 h-[744px] bg-theme-colortheme-color-02 rounded-[30px] border-0">
              <CardContent className="h-full flex flex-col justify-between p-16">
                <p className="font-body-28px-regular font-[number:var(--body-28px-regular-font-weight)] text-neutralneutral-07 text-[length:var(--body-28px-regular-font-size)] tracking-[var(--body-28px-regular-letter-spacing)] leading-[var(--body-28px-regular-line-height)] [font-style:var(--body-28px-regular-font-style)]">
                  Hey! I'm Maya, and I'm excited to share my journey with you.
                  Let's connect and discover something new together. I've always
                  been a curious person, always seeking new experiences. I love
                  to explore different cultures, try new foods, and meet new
                  people. I'm also a big fan of your hobbies or interests. I
                  believe that everyone has a story. I hope you'll join me on
                  this journey discovery and exploration.
                </p>

                <Button className="bg-theme-colortheme-color-01 hover:bg-theme-colortheme-color-01/90 text-neutralneutral-08 rounded-full px-10 py-4 h-auto font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] [font-style:var(--body-16px-regular-font-style)] w-fit">
                  Read My Story
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
