"use client";

import { useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageCircle,
  ExternalLink,
  Instagram,
  Facebook,
  ThumbsUp,
} from "lucide-react";

type SocialPlatform = "instagram" | "facebook";

type SocialPost = {
  id: string;
  platform: SocialPlatform;
  image: string;
  url: string;
  caption: string;
  likes: number;
  comments: number;
};

const instagramPosts: SocialPost[] = [
  {
    id: "ig-1",
    platform: "instagram",
    image: "/posts/instagram-1.jpg",
    url: "https://www.instagram.com/p/EXAMPLE_1/",
    caption: "Kolejny intensywny dzień na lodzie! 🏒💪",
    likes: 142,
    comments: 23,
  },
  {
    id: "ig-2",
    platform: "instagram",
    image: "/posts/instagram-2.jpg",
    url: "https://www.instagram.com/p/EXAMPLE_2/",
    caption: "Trening z międzynarodowymi trenerami 🌍",
    likes: 97,
    comments: 14,
  },
  {
    id: "ig-3",
    platform: "instagram",
    image: "/posts/instagram-3.jpg",
    url: "https://www.instagram.com/p/EXAMPLE_3/",
    caption: "Atmosfera, rozwój i lód na najwyższym poziomie.",
    likes: 188,
    comments: 19,
  },
];

const facebookPosts: SocialPost[] = [
  {
    id: "fb-1",
    platform: "facebook",
    image: "/posts/facebook-1.jpg",
    url: "https://www.facebook.com/EXAMPLE_POST_1",
    caption: "Drużyna po turnieju — gratulacje! 🏆",
    likes: 218,
    comments: 31,
  },
  {
    id: "fb-2",
    platform: "facebook",
    image: "/posts/facebook-2.jpg",
    url: "https://www.facebook.com/EXAMPLE_POST_2",
    caption: "Śląski Związek Hokeja na Lodzie i kolejny mocny weekend.",
    likes: 264,
    comments: 12,
  },
  {
    id: "fb-3",
    platform: "facebook",
    image: "/posts/facebook-3.jpg",
    url: "https://www.facebook.com/EXAMPLE_POST_3",
    caption: "Zobacz kulisy wydarzenia i relację z Opolu.",
    likes: 189,
    comments: 17,
  },
];

/**
 * Naprzemienne łączenie: IG, FB, IG, FB...
 * Bierze po kolei z obu tablic, dopóki są elementy.
 */
function interleavePosts(
  first: SocialPost[],
  second: SocialPost[],
  limit?: number
): SocialPost[] {
  const result: SocialPost[] = [];
  const maxLength = Math.max(first.length, second.length);

  for (let i = 0; i < maxLength; i += 1) {
    if (i < first.length) result.push(first[i]);
    if (i < second.length) result.push(second[i]);
  }

  return typeof limit === "number" ? result.slice(0, limit) : result;
}

function platformMeta(platform: SocialPlatform) {
  if (platform === "instagram") {
    return {
      label: "Instagram",
      Icon: Instagram,
      accentClass: "text-pink-400",
      statIcon: Heart,
      statLabel: "Polubienia",
    };
  }

  return {
    label: "Facebook",
    Icon: Facebook,
    accentClass: "text-blue-400",
    statIcon: ThumbsUp,
    statLabel: "Reakcje",
  };
}

function PostCard({ post }: { post: SocialPost }) {
  const meta = platformMeta(post.platform);
  const StatIcon = meta.statIcon;

  return (
    <a
      href={post.url}
      target="_blank"
      rel="noreferrer"
      className="group block bg-[#111111] border border-white/5 overflow-hidden hover:border-white/15 transition-all"
      aria-label={`Otwórz post na ${meta.label}`}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={post.image}
          alt={post.caption}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute top-3 left-3 inline-flex items-center gap-2 bg-black/70 border border-white/10 px-2.5 py-1.5 text-xs text-white">
          <meta.Icon className={`w-3.5 h-3.5 ${meta.accentClass}`} />
          <span>{meta.label}</span>
        </div>

        <div className="absolute top-3 right-3 inline-flex items-center justify-center w-9 h-9 bg-black/70 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>

      <div className="p-5">
        <p className="text-gray-300 text-sm mb-3 line-clamp-2">{post.caption}</p>

        <div className="flex items-center gap-4 text-gray-500 text-xs">
          <span className="flex items-center gap-1">
            <StatIcon className="w-3.5 h-3.5" />
            {post.likes}
          </span>

          <span className="flex items-center gap-1">
            <MessageCircle className="w-3.5 h-3.5" />
            {post.comments}
          </span>
        </div>
      </div>
    </a>
  );
}

export default function SocialFeed() {
  const posts = useMemo(
    () => interleavePosts(facebookPosts, instagramPosts, 6),
    []
  );

  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? posts.length - 1 : c - 1));

  const next = () =>
    setCurrent((c) => (c === posts.length - 1 ? 0 : c + 1));

  const currentPost = posts[current];
  const currentMeta = platformMeta(currentPost.platform);
  const CurrentStatIcon = currentMeta.statIcon;

  return (
    <section className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[#00E5FF] text-xs font-bold uppercase tracking-[0.3em] mb-3">
              Social Media
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Aktualności
            </h2>
          </div>

          <div className="hidden md:flex gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
              aria-label="Previous post"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={next}
              className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
              aria-label="Next post"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <div className="md:hidden">
          <a
            href={currentPost.url}
            target="_blank"
            rel="noreferrer"
            className="block bg-[#111111] border border-white/5 overflow-hidden"
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={currentPost.image}
                alt={currentPost.caption}
                className="w-full h-full object-cover"
              />

              <div className="absolute top-3 left-3 inline-flex items-center gap-2 bg-black/70 border border-white/10 px-2.5 py-1.5 text-xs text-white">
                <currentMeta.Icon
                  className={`w-3.5 h-3.5 ${currentMeta.accentClass}`}
                />
                <span>{currentMeta.label}</span>
              </div>
            </div>

            <div className="p-5">
              <p className="text-gray-300 text-sm mb-3">{currentPost.caption}</p>

              <div className="flex items-center gap-4 text-gray-500 text-xs">
                <span className="flex items-center gap-1">
                  <CurrentStatIcon className="w-3.5 h-3.5" />
                  {currentPost.likes}
                </span>

                <span className="flex items-center gap-1">
                  <MessageCircle className="w-3.5 h-3.5" />
                  {currentPost.comments}
                </span>
              </div>
            </div>
          </a>

          <div className="flex justify-center gap-2 mt-4">
            {posts.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? "bg-[#00E5FF]" : "bg-white/20"
                }`}
                aria-label={`Go to post ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}