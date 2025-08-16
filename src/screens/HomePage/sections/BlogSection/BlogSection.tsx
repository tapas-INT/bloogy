import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const blogPosts = [
  {
    id: 1,
    image: "/src/images/blog-1.png",
    title: "The Art of Minimalism, Decluttering Your Life",
    description:
      "In today's fast-paced world, it's easy to feel overwhelmed by clutter. Minimalism offers a solution by focusing on the essentials.",
    hasRoundedTop: true,
  },
  {
    id: 2,
    image: "/src/images/blog-2.png",
    title: "The Power of Positive Thinking, Transforming Your Mindset",
    description:
      "Positive thinking can have a profound impact on your mental and emotional well-being. Learn how to cultivate a positive mindset.",
    hasRoundedTop: true,
  },
  {
    id: 3,
    image: "/src/images/blog-3.png",
    title: "Healthy Eating Habits, Fueling Your Body for Success",
    description:
      "Good nutrition is essential for overall health and well-being. Discover the benefits of a healthy diet, tips for making nutritious choices.",
    hasRoundedTop: true,
  },
  {
    id: 4,
    image: "/src/images/blog-4.png",
    title: "Effective Time Management, Maximizing Your Productivity",
    description:
      "Are you feeling overwhelmed by deadlines and commitments? Learn effective time management techniques to improve your productivity.",
    hasRoundedTop: true,
  },
  {
    id: 5,
    image: "/src/images/blog-hub-1.png",
    title: "Effective Time Management, Max Your Productivity",
    description:
      "Good nutrition is essential for overall health and well-being. Discover the benefits of a healthy diet, tips for making nutritious choices.",
    hasRoundedTop: true,
  },
];

export const BlogSection = (): JSX.Element => {
  return (
    <section className="w-full bg-neutralneutral-01 py-[119px]">
      <div className="max-w-[1345px] mx-auto px-4 flex flex-col items-center gap-24">
        <header className="flex flex-col items-center gap-4">
          <h1 className="font-headings-heading-1 font-[number:var(--headings-heading-1-font-weight)] text-neutralneutral-07 text-[length:var(--headings-heading-1-font-size)] text-center tracking-[var(--headings-heading-1-letter-spacing)] leading-[var(--headings-heading-1-line-height)] [font-style:var(--headings-heading-1-font-style)]">
            Bloogy's Blog Hub
          </h1>
          <p className="w-[540px] max-w-full font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-neutralneutral-06 text-[length:var(--body-16px-regular-font-size)] text-center tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] [font-style:var(--body-16px-regular-font-style)]">
            Welcome to the Bloogy Blog Hub, your go-to source for the latest and
            most popular content. Discover stories, reflections, and insights.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="flex flex-col bg-transparent border-none shadow-none"
            >
              <CardContent className="p-0 flex flex-col">
                <img
                  className={`w-full h-[291px] object-cover ${post.hasRoundedTop ? "rounded-[20px_20px_0px_0px]" : ""}`}
                  alt="Blog post image"
                  src={post.image}
                />
                <div className="flex flex-col gap-10 px-8 py-8 mt-[-18px] bg-neutralneutral-02 rounded-[20px]">
                  <div className="flex flex-col gap-4">
                    <h3 className="font-body-24px-regular font-[number:var(--body-24px-regular-font-weight)] text-neutralneutral-07 text-[length:var(--body-24px-regular-font-size)] tracking-[var(--body-24px-regular-letter-spacing)] leading-[var(--body-24px-regular-line-height)] [font-style:var(--body-24px-regular-font-style)]">
                      {post.title}
                    </h3>
                    <p className="font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-neutralneutral-06 text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] [font-style:var(--body-16px-regular-font-style)]">
                      {post.description}
                    </p>
                  </div>
                  <div className="flex">
                    <Button className="h-auto bg-theme-colortheme-color-04 hover:bg-theme-colortheme-color-04/90 text-neutralneutral-08 px-6 py-2 rounded-[100px] font-body-14px-regular font-[number:var(--body-14px-regular-font-weight)] text-[length:var(--body-14px-regular-font-size)] tracking-[var(--body-14px-regular-letter-spacing)] leading-[var(--body-14px-regular-line-height)] [font-style:var(--body-14px-regular-font-style)]">
                      Read More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="p-0 h-[578px]">
              <div className="flex flex-col gap-[72px] px-[45px] py-14 h-full rounded-[20px] bg-[linear-gradient(90deg,rgba(239,223,255,1)_0%,rgba(229,220,255,1)_100%)]">
                <div className="flex flex-col gap-4">
                  <p className="font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-neutralneutral-06 text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] [font-style:var(--body-16px-regular-font-style)]">
                    Start exploring the latest blogs and trends on Bloogy today!
                    Discover new perspectives, gain valuable insights, and
                    connect with like-minded individuals. Whether you're a
                    seasoned.
                  </p>
                </div>
                <div className="flex">
                  <Button className="h-auto bg-theme-colortheme-color-01 hover:bg-theme-colortheme-color-01/90 text-neutralneutral-08 px-7 py-3 rounded-[100px] font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] [font-style:var(--body-16px-regular-font-style)]">
                    Read My All Blog
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
