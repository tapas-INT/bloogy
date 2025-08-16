import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturedPostsSection = (): JSX.Element => {
  const featuredPosts = [
    {
      image: "/src/images/blog-hub-2.png",
      title: "The Art of Minimalism, Decluttering Your Life",
      description:
        "In today's fast-paced world, it's easy to feel overwhelmed by clutter. Minimalism offers a solution by focusing on the essentials.",
    },
    {
      image: "/src/images/blog-hub-3.png",
      title: "The Power of Positive Thinking, Transforming Your Mindset",
      description:
        "Positive thinking can have a profound impact on your mental and emotional well-being. Learn how to cultivate a positive mindset.",
    },
    {
      image: "/src/images/blog-hub-4.png",
      title: "Healthy Eating Habits, Fueling Your Body for Success",
      description:
        "Good nutrition is essential for overall health and well-being. Discover the benefits of a healthy diet, tips for making nutritious choices.",
    },
    {
      image: "/src/images/blog-hub-5.png",
      title: "Effective Time Management, Maximizing Your Productivity",
      description:
        "Are you feeling overwhelmed by deadlines and commitments? Learn effective time management techniques to improve your productivity.",
    },
  ];

  return (
    <section className="flex items-center justify-center px-[113px] py-[116px] bg-neutralneutral-01">
      <div className="flex flex-col items-center justify-center gap-24 max-w-[1374px]">
        <header className="flex flex-col items-center gap-4 text-center">
          <h2 className="max-w-[705px] [font-family:'Urbanist',Helvetica] font-light text-neutralneutral-07 text-7xl tracking-[0] leading-[86.4px]">
            Community Favorites
          </h2>
          <p className="max-w-[617px] font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-neutralneutral-06 text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] [font-style:var(--body-16px-regular-font-style)]">
            Explore the posts that have resonated most with our community.
            Discover the articles that have sparked insightful discussions,
            inspired readers to take action.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full max-w-[1374px]">
          {featuredPosts.map((post, index) => (
            <Card
              key={index}
              className="flex flex-col bg-transparent border-none shadow-none"
            >
              <div className="relative">
                <img
                  className="w-full h-[557px] rounded-[30px_30px_0px_0px] object-cover"
                  alt="Featured post image"
                  src={post.image}
                />
                <CardContent className="flex flex-col gap-10 p-10 pr-36 -mt-[30px] bg-neutralneutral-02 rounded-[30px] relative z-10">
                  <div className="flex flex-col gap-4">
                    <h3 className="font-headings-heading-5 font-[number:var(--headings-heading-5-font-weight)] text-neutralneutral-07 text-[length:var(--headings-heading-5-font-size)] tracking-[var(--headings-heading-5-letter-spacing)] leading-[var(--headings-heading-5-line-height)] [font-style:var(--headings-heading-5-font-style)]">
                      {post.title}
                    </h3>
                    <p className="font-body-18px-ragular font-[number:var(--body-18px-ragular-font-weight)] text-neutralneutral-06 text-[length:var(--body-18px-ragular-font-size)] tracking-[var(--body-18px-ragular-letter-spacing)] leading-[var(--body-18px-ragular-line-height)] [font-style:var(--body-18px-ragular-font-style)]">
                      {post.description}
                    </p>
                  </div>
                  <Button className="w-fit h-auto px-6 py-2 bg-theme-colortheme-color-04 hover:bg-theme-colortheme-color-04/90 rounded-[100px] text-neutralneutral-08 font-body-14px-regular font-[number:var(--body-14px-regular-font-weight)] text-[length:var(--body-14px-regular-font-size)] tracking-[var(--body-14px-regular-letter-spacing)] leading-[var(--body-14px-regular-line-height)] [font-style:var(--body-14px-regular-font-style)]">
                    Read More
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <Button className="h-auto px-10 py-4 bg-theme-colortheme-color-01 hover:bg-theme-colortheme-color-01/90 rounded-[100px] text-black font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] [font-style:var(--body-16px-regular-font-style)]">
          View More Blog
        </Button>
      </div>
    </section>
  );
};
