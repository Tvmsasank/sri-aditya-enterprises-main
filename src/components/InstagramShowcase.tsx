import React from "react";
import { Instagram, ArrowUpRight, Heart, Sparkles } from "lucide-react";
import post1 from "@/assets/instagram-post-1.jpg";
import post2 from "@/assets/instagram-post-2.jpg";
import post3 from "@/assets/instagram-post-3.jpg";
import post4 from "@/assets/instagram-post-4.jpg";

interface InstagramPostItem {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const INSTAGRAM_POSTS: InstagramPostItem[] = [
  {
    id: 1,
    image: post1,
    title: "The Art of Sitting Well",
    subtitle: "Curated comfort, character, and craftsmanship for Hyderabad homes.",
  },
  {
    id: 2,
    image: post2,
    title: "Timeless Craftsmanship",
    subtitle: "Some materials never go out of style. Solid teak wood headboard.",
  },
  {
    id: 3,
    image: post3,
    title: "Welcome to Sri Aditya Enterprises",
    subtitle: "Serving Hyderabad families with trusted furniture since 1990.",
  },
  {
    id: 4,
    image: post4,
    title: "Things You Should Know",
    subtitle: "Essential design and care tips before bringing new furniture home.",
  },
];

export const InstagramShowcase: React.FC = () => {
  const instaUrl = "https://www.instagram.com/sri_aditya_enterprises/";

  return (
    <section id="instagram" className="py-20 sm:py-24 bg-[#fffefa] border-t border-[#e6e4da]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#b7834b] flex items-center gap-2 mb-2">
              <Instagram className="w-3.5 h-3.5 text-[#b7834b]" />
              <span>Connect on Instagram</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#242820] tracking-tight">
              Follow Our Journey
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={instaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#344b39] hover:bg-[#263a2b] text-[#f3efe3] font-bold text-xs tracking-wider uppercase transition-transform hover:scale-105 active:scale-95 shadow-md"
            >
              <Instagram className="w-4 h-4" />
              <span>@sri_aditya_enterprises ↗</span>
            </a>
          </div>
        </div>

        {/* 4 Instagram Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={instaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden bg-[#f6f4ed] border border-[#e6e4da] hover:border-[#b7834b] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#242820]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Instagram className="w-3.5 h-3.5 text-pink-400" />
                    <span>View on Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-[#fffefa]">
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[#242820] group-hover:text-[#b7834b] transition-colors leading-snug mb-1">
                    {post.title}
                  </h3>
                  <p className="text-xs text-[#6d7168] line-clamp-2 leading-relaxed">
                    {post.subtitle}
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-[#e6e4da] flex items-center justify-between text-[11px] text-[#b7834b] font-semibold">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Sri Aditya Enterprises</span>
                  </span>
                  <span>Tap to view</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
