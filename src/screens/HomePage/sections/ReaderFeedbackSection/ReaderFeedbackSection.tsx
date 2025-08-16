import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const testimonialData = [
  {
    name: "Brooklyn Simmons",
    title: "Marketing Coordinator",
    image: "/src/images/reviewer-1.png",
    socialIcon: "/src/images/icons/linkedin-icon.png",
    socialAlt: "Linkedin logo",
    testimonial:
      "Reading Bloogy feels like a breath of fresh air. The posts are not only engaging but also filled with personal stories that resonate deeply. I always come away feeling more inspired and ready to tackle.",
  },
  {
    name: "Floyd Miles",
    title: "President of Sales",
    image: "/src/images/reviewer-2.png",
    socialIcon: "/src/images/icons/facebook-icon.png",
    socialAlt: "Facebook",
    testimonial:
      "Bloogy is my go-to blog for inspiration and though hatful content. Every post feels like a conversation with a friend—real, insightful, & always inspiring. Love the variety of topics, and there's always something.",
  },
  {
    name: "Arlene McCoy",
    title: "Medical Assistant",
    image: "/src/images/reviewer-3.png",
    socialIcon: "/src/images/icons/x-icon.png",
    socialAlt: "X",
    testimonial:
      "I've been following Bloogy for a while now, and it never disappoints! The content is so relatable and practical. It's helped me approach life with a fresh perspective, and I look forward to every new post!",
  },
  {
    name: "Savannah Nguyen",
    title: "Medical Assistant",
    image: "/src/images/reviewer-4.png",
    socialIcon: "/src/images/icons/instagram-icon.png",
    socialAlt: "Instagram",
    testimonial:
      "Bloogy has become a daily read for me. The insights and experiences shared here are so authentic and meaningful. It's one of the few blogs where I actually take something valuable away from every post",
  },
  {
    name: "Marvin McKinney",
    title: "Dog Trainer",
    image: "/src/images/reviewer-5.png",
    socialIcon: "/src/images/icons/threads-icon.png",
    socialAlt: "Threads",
    testimonial:
      "I can't recommend Bloogy enough! Whether you're looking for inspiration, tips, or just a good read, this blog covers it all. The writing style is both warm and informative, making it easy to get lost in the content.",
  },
  {
    name: "Ronald Richards",
    title: "Web Designer",
    image: "/src/images/reviewer-6.png",
    socialIcon: "/src/images/icons/Vector-icon.png",
    socialAlt: "Discord",
    testimonial:
      "Bloogy is one of the most refreshing blogs I've come across. The content is always uplifting and thoughtful, with a focus on real-life experiences. It's like getting advice from a trusted friend.",
  },
];

export const ReaderFeedbackSection = (): JSX.Element => {
  return (
    <section className="w-full bg-neutralneutral-02 py-[117px] overflow-hidden">
      <div className="flex flex-col items-center gap-8 max-w-[1400px] mx-auto px-4">
        <header className="flex flex-col items-center gap-4">
          <h2 className="font-headings-heading-1 font-[number:var(--headings-heading-1-font-weight)] text-neutralneutral-07 text-[length:var(--headings-heading-1-font-size)] text-center tracking-[var(--headings-heading-1-letter-spacing)] leading-[var(--headings-heading-1-line-height)] [font-style:var(--headings-heading-1-font-style)]">
            Happy Reader's
          </h2>
          <p className="w-full max-w-[540px] font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-neutralneutral-06 text-[length:var(--body-16px-regular-font-size)] text-center tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] [font-style:var(--body-16px-regular-font-style)]">
            Read real-life success stories from our clients. Don't just take our
            word for it. See what our clients have to say about our products or
            services.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-[1320px]">
          {testimonialData.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white rounded-[20px] backdrop-blur-[10.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10.5px)_brightness(100%)] border-0 shadow-none"
            >
              <CardContent className="p-[39px] flex flex-col gap-7">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-[60px] h-[60px]">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="object-cover"
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col justify-center">
                      <h3 className="font-body-18px-medium font-[number:var(--body-18px-medium-font-weight)] text-neutralneutral-07 text-[length:var(--body-18px-medium-font-size)] tracking-[var(--body-18px-medium-letter-spacing)] leading-[var(--body-18px-medium-line-height)] [font-style:var(--body-18px-medium-font-style)]">
                        {testimonial.name}
                      </h3>
                      <p className="font-body-14px-regular font-[number:var(--body-14px-regular-font-weight)] text-neutralneutral-06 text-[length:var(--body-14px-regular-font-size)] tracking-[var(--body-14px-regular-letter-spacing)] leading-[var(--body-14px-regular-line-height)] [font-style:var(--body-14px-regular-font-style)]">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <img
                    className="h-10 w-auto"
                    alt={testimonial.socialAlt}
                    src={testimonial.socialIcon}
                  />
                </div>

                <Separator className="w-full h-px bg-gray-200" />

                <blockquote className="font-body-18px-ragular font-[number:var(--body-18px-ragular-font-weight)] text-neutralneutral-07 text-[length:var(--body-18px-ragular-font-size)] tracking-[var(--body-18px-ragular-letter-spacing)] leading-[var(--body-18px-ragular-line-height)] [font-style:var(--body-18px-ragular-font-style)]">
                  "{testimonial.testimonial}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
