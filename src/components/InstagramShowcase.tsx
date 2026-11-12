import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Instagram, ArrowUpRight, Heart, Sparkles, ChevronLeft, ChevronRight, X, Layers, MessageCircle, MessageSquare } from "lucide-react";
import post1 from "@/assets/instagram-post-1.jpg";
import post2 from "@/assets/instagram-post-2.jpg";
import post3 from "@/assets/instagram-post-3.jpg";
import post4 from "@/assets/instagram-post-4.jpg";

interface InstagramPostItem {
  id: string | number;
  image: string;
  photos: string[];
  title: string;
  subtitle: string;
  fullCaption: string;
  permalink: string;
  likeCount?: number;
  commentsCount?: number;
  timestamp?: string;
  isCarousel?: boolean;
}

const DEFAULT_BEHOLD_FEED = "https://feeds.behold.so/zRM6gORsAcNPhT0OOBld";

const FALLBACK_POSTS: InstagramPostItem[] = [
  {
    id: 1,
    image: post1,
    photos: [post1],
    title: "The Art of Sitting Well",
    subtitle: "Curated comfort, character, and craftsmanship for Hyderabad homes.",
    fullCaption: "The Art of Sitting Well. Curated comfort, character, and craftsmanship for Hyderabad homes. Solid teak wood frames and high density cushioning.",
    permalink: "https://www.instagram.com/sri_aditya_enterprises/",
    likeCount: 14,
  },
  {
    id: 2,
    image: post2,
    photos: [post2],
    title: "Timeless Craftsmanship",
    subtitle: "Some materials never go out of style. Solid teak wood headboard.",
    fullCaption: "Some materials never go out of style. Solid teak wood headboard handcrafted by Sri Aditya Enterprises artisans.",
    permalink: "https://www.instagram.com/sri_aditya_enterprises/",
    likeCount: 18,
  },
  {
    id: 3,
    image: post3,
    photos: [post3],
    title: "Welcome to Sri Aditya Enterprises",
    subtitle: "Serving Hyderabad families with trusted furniture since 1990.",
    fullCaption: "Serving Hyderabad families with trusted furniture since 1990. Your Trust Is Our Asset.",
    permalink: "https://www.instagram.com/sri_aditya_enterprises/",
    likeCount: 22,
  },
  {
    id: 4,
    image: post4,
    photos: [post4],
    title: "Things You Should Know",
    subtitle: "Essential design and care tips before bringing new furniture home.",
    fullCaption: "Essential design and care tips before bringing new furniture home. Choose today, relax now.",
    permalink: "https://www.instagram.com/sri_aditya_enterprises/",
    likeCount: 16,
  },
  {
    id: 5,
    image: post1,
    photos: [post1],
    title: "Direct Teak Manufacturer",
    subtitle: "Lifetime durability with authentic Burma and CP teak wood frames.",
    fullCaption: "Direct manufacturer pricing and 36 years of woodworking mastery in Hyderabad.",
    permalink: "https://www.instagram.com/sri_aditya_enterprises/",
    likeCount: 20,
  },
  {
    id: 6,
    image: post2,
    photos: [post2],
    title: "Bespoke Royal Interiors",
    subtitle: "Custom built to fit your room dimensions and lifestyle needs.",
    fullCaption: "Transform your home with signature handcrafted luxury furniture by Sri Aditya Enterprises.",
    permalink: "https://www.instagram.com/sri_aditya_enterprises/",
    likeCount: 25,
  },
];

export const InstagramShowcase: React.FC = () => {
  const instaUrl = "https://www.instagram.com/sri_aditya_enterprises/";
  const [posts, setPosts] = useState<InstagramPostItem[]>(FALLBACK_POSTS);
  const [selectedPost, setSelectedPost] = useState<InstagramPostItem | null>(null);
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);
  const carouselTrackRef = useRef<HTMLDivElement>(null);

  // Floating Arrow Visibility State (Liquid frosted glass navigation)
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  const updateScrollArrows = () => {
    if (carouselTrackRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselTrackRef.current;
      setCanScrollLeft(scrollLeft > 15);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);
    }
  };

  useEffect(() => {
    const el = carouselTrackRef.current;
    if (el) {
      updateScrollArrows();
      el.addEventListener("scroll", updateScrollArrows);
      window.addEventListener("resize", updateScrollArrows);
      return () => {
        el.removeEventListener("scroll", updateScrollArrows);
        window.removeEventListener("resize", updateScrollArrows);
      };
    }
  }, [posts]);

  // FIFO Queue: Fetch newest posts from Behold, maintain strictly top 6 posts (newest first, oldest drops out)
  useEffect(() => {
    const feedUrl = import.meta.env.VITE_INSTAGRAM_FEED_URL || DEFAULT_BEHOLD_FEED;
    if (feedUrl) {
      fetch(feedUrl)
        .then((res) => res.json())
        .then((data) => {
          const list = Array.isArray(data)
            ? data
            : (data?.posts && Array.isArray(data.posts) ? data.posts : []);

          if (list.length > 0) {
            // Queue Method: Keep the latest 6 posts (FIFO: newest in front, older than 6 dropped off)
            const topSix = list.slice(0, 6);
            const mapped: InstagramPostItem[] = topSix.map((p: any, idx: number) => {
              const primaryImg =
                p.sizes?.large?.mediaUrl ||
                p.sizes?.medium?.mediaUrl ||
                p.mediaUrl ||
                p.media_url ||
                p.image;

              // Extract all stacked/carousel child photos
              const collectedPhotos: string[] = [];
              if (p.children && Array.isArray(p.children) && p.children.length > 0) {
                p.children.forEach((c: any) => {
                  const childUrl =
                    c.sizes?.large?.mediaUrl ||
                    c.sizes?.medium?.mediaUrl ||
                    c.mediaUrl;
                  if (childUrl) collectedPhotos.push(childUrl);
                });
              }
              if (collectedPhotos.length === 0 && primaryImg) {
                collectedPhotos.push(primaryImg);
              }

              const rawCaption = (p.prunedCaption || p.caption || "").trim();
              const firstLine = rawCaption.split("\n")[0] || `Showroom Post #${idx + 1}`;
              const cleanTitle = firstLine.replace(/[*_#]/g, "").slice(0, 42).trim();
              const cleanSubtitle =
                rawCaption.slice(firstLine.length).replace(/[*_#]/g, "").trim().slice(0, 95) ||
                "Handcrafted furniture curated for Hyderabad homes.";

              return {
                id: p.id || idx,
                image: primaryImg,
                photos: collectedPhotos,
                isCarousel: collectedPhotos.length > 1,
                title: cleanTitle || "Sri Aditya Enterprises",
                subtitle: cleanSubtitle,
                fullCaption: rawCaption || cleanTitle,
                permalink: p.permalink || instaUrl,
                likeCount: p.likeCount,
                commentsCount: p.commentsCount,
                timestamp: p.timestamp,
              };
            });

            setPosts(mapped);
          }
        })
        .catch(() => {
          // Keep elegant fallback posts
        });
    }
  }, []);

  // Prevent background scroll when post lightbox modal is open
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPost]);

  // Keyboard navigation for post lightbox (Escape to close, Left/Right for stacked photos)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPost(null);
      } else if (e.key === "ArrowLeft" && selectedPost && selectedPost.photos.length > 1) {
        setActivePhotoIdx((prev) => (prev - 1 + selectedPost.photos.length) % selectedPost.photos.length);
      } else if (e.key === "ArrowRight" && selectedPost && selectedPost.photos.length > 1) {
        setActivePhotoIdx((prev) => (prev + 1) % selectedPost.photos.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPost]);

  const handleOpenPost = (post: InstagramPostItem) => {
    setSelectedPost(post);
    setActivePhotoIdx(0);
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedPost) return;
    setActivePhotoIdx((prev) => (prev - 1 + selectedPost.photos.length) % selectedPost.photos.length);
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedPost) return;
    setActivePhotoIdx((prev) => (prev + 1) % selectedPost.photos.length);
  };

  const scrollTrack = (direction: "left" | "right") => {
    if (carouselTrackRef.current) {
      const offset = direction === "left" ? -340 : 340;
      carouselTrackRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section id="instagram" className="py-16 sm:py-24 bg-white border-t border-[#e2e7e2] transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c99f52] flex items-center gap-2 mb-1.5">
              <Instagram className="w-3.5 h-3.5 text-[#c99f52]" />
              <span>Connect on Instagram</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-semibold text-[#142019] tracking-tight">
              Follow Our Journey
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#54665c]">
              Real customer homes, new workshop arrivals, festive collections & stacked multi-photo stories.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={instaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1e3b2b] hover:bg-[#294f3a] text-[#faeed4] font-bold text-xs tracking-wider uppercase transition-transform hover:scale-105 active:scale-95 shadow-md"
            >
              <Instagram className="w-4 h-4" />
              <span>@sri_aditya_enterprises ↗</span>
            </a>
          </div>
        </div>

        {/* Dynamic Horizontal Scroll Gallery with Floating Liquid Glow Arrows */}
        <div className="relative group/insta">
          {/* Liquid Frosted Floating Left Arrow */}
          <button
            onClick={() => scrollTrack("left")}
            aria-label="Previous posts"
            className={`absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-[#1e3b2b] border border-[#c99f52]/40 shadow-[0_8px_30px_rgba(201,159,82,0.3)] backdrop-blur-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ${
              canScrollLeft ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-75 pointer-events-none"
            }`}
          >
            <ChevronLeft size={22} className="stroke-[2.5]" />
          </button>

          {/* Liquid Frosted Floating Right Arrow */}
          <button
            onClick={() => scrollTrack("right")}
            aria-label="Next posts"
            className={`absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-[#1e3b2b] border border-[#c99f52]/40 shadow-[0_8px_30px_rgba(201,159,82,0.3)] backdrop-blur-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ${
              canScrollRight ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-75 pointer-events-none"
            }`}
          >
            <ChevronRight size={22} className="stroke-[2.5]" />
          </button>

          <div
            ref={carouselTrackRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory py-3 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar scroll-smooth"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {posts.map((post) => (
              <div
                key={post.id}
                onClick={() => handleOpenPost(post)}
                className="flex-none w-[280px] sm:w-[320px] snap-start group relative rounded-2xl overflow-hidden bg-[#f6f4ed] border border-[#e6e4da] hover:border-[#c99f52] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col cursor-pointer"
              >
                {/* Image Container: 1:1 Aspect Square with perfect edge-to-edge uncropped fit */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#1a201c] flex items-center justify-center">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Stacked Photos Badge for Carousel Posts */}
                  {post.photos.length > 1 && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[10px] font-bold tracking-wider flex items-center gap-1.5 border border-white/20 shadow-md">
                      <Layers size={12} className="text-[#c99f52]" />
                      <span>{post.photos.length} Photos</span>
                    </div>
                  )}

                  {/* Hover Quick Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Instagram className="w-3.5 h-3.5 text-[#c99f52]" />
                      <span>View Stack & React</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

              {/* Caption & Reactions Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-[#fffefa]">
                <div>
                  <h3 className="font-heading text-base font-bold text-[#242820] group-hover:text-[#1e3b2b] transition-colors leading-snug mb-1.5 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-[#6d7168] line-clamp-2 leading-relaxed">
                    {post.subtitle}
                  </p>
                </div>

                <div className="mt-3.5 pt-3 border-t border-[#e6e4da] flex items-center justify-between text-[11px] text-[#b7834b] font-semibold">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#c99f52]" />
                    <span>Sri Aditya</span>
                  </span>

                  <div className="flex items-center gap-2.5">
                    {typeof post.likeCount === "number" && post.likeCount > 0 && (
                      <span className="flex items-center gap-1 text-[#e11d48]">
                        <Heart className="w-3 h-3 fill-current" />
                        <span>{post.likeCount}</span>
                      </span>
                    )}
                    {typeof post.commentsCount === "number" && post.commentsCount > 0 && (
                      <span className="flex items-center gap-1 text-[#54665c]">
                        <MessageSquare className="w-3 h-3" />
                        <span>{post.commentsCount}</span>
                      </span>
                    )}
                    <span className="text-xs text-[#1e3b2b] font-bold">Inspect ↗</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          INTERACTIVE INSTAGRAM POST LIGHTBOX WITH STACKED PHOTOS
          ======================================================== */}
      {selectedPost && typeof document !== "undefined" && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[999999] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-[#c99f52]/40 flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPost(null)}
              aria-label="Close post preview"
              className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-black/60 hover:bg-[#c99f52] text-white hover:text-[#142019] flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
            >
              <X size={18} />
            </button>

            {/* Left Image Area (Displays Active Photo from Stack) */}
            <div className="relative md:w-3/5 bg-[#142019] flex items-center justify-center p-4 sm:p-6 overflow-hidden min-h-[300px] sm:min-h-[420px]">
              <img
                src={selectedPost.photos[activePhotoIdx] || selectedPost.image}
                alt={selectedPost.title}
                className="max-h-[50vh] md:max-h-[72vh] w-auto h-auto object-contain rounded-2xl shadow-2xl transition-all duration-300"
              />

              {/* Stack Photo Counter Badge */}
              {selectedPost.photos.length > 1 && (
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[#c99f52] text-xs font-mono font-bold tracking-wider border border-[#c99f52]/40">
                  Photo {activePhotoIdx + 1} of {selectedPost.photos.length}
                </div>
              )}

              {/* Multi-photo Stack Flip Chevrons */}
              {selectedPost.photos.length > 1 && (
                <>
                  <button
                    onClick={handlePrevPhoto}
                    aria-label="Previous stacked photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-white text-white hover:text-[#142019] flex items-center justify-center transition-all cursor-pointer shadow-lg"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNextPhoto}
                    aria-label="Next stacked photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-white text-white hover:text-[#142019] flex items-center justify-center transition-all cursor-pointer shadow-lg"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Multi-photo Dots Indicator */}
              {selectedPost.photos.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                  {selectedPost.photos.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setActivePhotoIdx(dotIdx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        activePhotoIdx === dotIdx ? "w-5 bg-[#c99f52]" : "w-2 bg-white/50 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Right Details & Live Reaction Section */}
            <div className="md:w-2/5 p-5 sm:p-7 flex flex-col justify-between bg-[#fffefa] overflow-y-auto max-h-[42vh] md:max-h-[92vh]">
              <div>
                {/* Profile Header */}
                <div className="flex items-center gap-2.5 pb-3 border-b border-[#e2e7e2] mb-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#1e3b2b] text-[#faeed4] flex items-center justify-center font-serif font-bold text-xs">
                    SAE
                  </div>
                  <div>
                    <b className="block text-xs font-bold text-[#142019]">sri_aditya_enterprises</b>
                    <span className="text-[10px] text-[#6d7168]">Showroom • Vanasthalipuram</span>
                  </div>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#142019] mb-2 leading-snug">
                  {selectedPost.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4d5f54] leading-relaxed mb-4 whitespace-pre-line max-h-[220px] overflow-y-auto pr-1">
                  {selectedPost.fullCaption}
                </p>

                {/* Live Reactions Metrics */}
                <div className="flex items-center gap-4 py-2.5 px-3 rounded-xl bg-[#f7f5ed] border border-[#e8e2d4] mb-4 text-xs font-bold">
                  {typeof selectedPost.likeCount === "number" && (
                    <div className="flex items-center gap-1.5 text-[#e11d48]">
                      <Heart size={14} className="fill-current" />
                      <span>{selectedPost.likeCount} Likes</span>
                    </div>
                  )}
                  {typeof selectedPost.commentsCount === "number" && (
                    <div className="flex items-center gap-1.5 text-[#3d4d42]">
                      <MessageSquare size={14} />
                      <span>{selectedPost.commentsCount} Comments</span>
                    </div>
                  )}
                  <div className="text-[11px] text-[#8c7456] ml-auto font-medium">
                    Official Channel
                  </div>
                </div>
              </div>

              {/* Action Buttons: React on Instagram & WhatsApp */}
              <div className="space-y-2 pt-2">
                <a
                  href={selectedPost.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md active:scale-98 transition-transform cursor-pointer"
                >
                  <Instagram size={15} />
                  <span>React & Comment on Instagram ↗</span>
                </a>
                <a
                  href={`https://wa.me/918019404140?text=${encodeURIComponent(
                    `Hello Sri Aditya Enterprises 👋, I saw this post on your Instagram: "${selectedPost.title}". Can you share more details/pricing?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#1e3b2b] hover:bg-[#294f3a] text-[#faeed4] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle size={14} />
                  <span>Inquire about this on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};
