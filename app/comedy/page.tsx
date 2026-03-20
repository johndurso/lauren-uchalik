import type { Metadata } from "next";
import Link from "next/link";
import {
  IconArrowRight,
  IconBuilding,
  IconYouTube,
  IconMail,
  IconExternal,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Comedy | Lauren Uchalik",
  description: "Watch Lauren Uchalik's stand-up comedy videos and find out where she's performing next.",
};

const videos = [
  {
    id: "lbVfPng05jE",
    title: "Ant Planet: Lauren Uchalik Standup",
    description: "",
  },
  {
    id: "zTc1LXhxbBY",
    title: "50 First Jokes (2018): Lauren Uchalik",
    description: "",
  },
  {
    id: "gOeF3qblB6A",
    title: "Ant Planet: Motor City Comedy Festival",
    description: "",
  },
];

export default function ComedyPage() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section
        aria-labelledby="comedy-hero-heading"
        className="bg-gradient-to-br from-crust via-base to-mantle py-24 px-6 text-center relative overflow-hidden"
      >
        <div aria-hidden="true" className="absolute top-0 right-1/3 w-80 h-80 bg-mauve opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <h1 id="comedy-hero-heading" className="text-4xl md:text-5xl font-extrabold text-text mb-6">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mauve to-pink">
              Comedy
            </span>{" "}
            Page
          </h1>
          <p className="text-subtext1 text-normal sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Lauren Uchalik is a Detroit-based stand-up comedian who has been making Michigan laugh for years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:laurenuchalik@gmail.com"
              aria-label="Email Lauren to book her for stand-up comedy"
              className="inline-flex mt-5 sm:mt-0 m-auto items-center gap-2 justify-center bg-mauve text-crust font-bold px-8 py-3 rounded-xl hover:bg-pink transition-colors text-lg shadow-lg shadow-teal/20"
            >
              <IconMail aria-hidden="true" className="w-5 h-5" />
              Book Lauren
            </a>
            <a
              href="#clips"
              className="inline-flex mt-5 sm:mt-0 m-auto items-center gap-2 justify-center text-mauve font-semibold px-8 py-3 rounded-xl border border-mauve hover:border-pink hover:text-pink transition-colors text-lg"
            >
              View Stand-Up Clips
            </a>
          </div>
        </div>
      </section>

      {/* ── VIDEOS ── */}
      <section id="clips" aria-labelledby="clips-heading" className="max-w-6xl mx-auto px-6 py-20">
        <h2 id="clips-heading" className="text-3xl font-bold text-text mb-2">Stand-up Clips of Lauren</h2>
        <p className="text-subtext1 mb-10">Stand-up sets from Lauren&apos;s YouTube channel.</p>

        <div className="grid grid-col-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-mantle border border-surface0 rounded-2xl overflow-hidden hover:border-mauve transition-colors group"
            >
              <div className="video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-5">
                <h3 className="text-text font-semibold mb-2 group-hover:text-mauve transition-colors">
                  {video.title}
                </h3>
                {video.description && (
                  <p className="text-subtext0 text-sm">{video.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/results?search_query=lauren+uchalik"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Find more of Lauren on YouTube, opens in a new tab"
            className="inline-flex items-center gap-2 bg-mauve text-crust font-bold px-8 py-3 rounded-xl hover:bg-pink transition-colors shadow-lg shadow-mauve/20"
          >
            <IconYouTube aria-hidden="true" className="w-5 h-5" />
            Find more of Lauren on YouTube
            <IconExternal aria-hidden="true" className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* ── MOTOR CITY COMEDY FESTIVAL ── */}
      <section aria-labelledby="mccf-heading" className="bg-mantle border-y border-surface0 py-16 px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <IconBuilding aria-hidden="true" className="w-12 h-12 mx-auto mb-4 text-peach" />
          <h2 id="mccf-heading" className="text-3xl font-bold text-peach mb-4">Motor City Comedy Festival</h2>
          <p className="text-subtext1 text-[0.9rem] sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Lauren is the founder and former board member of the Motor City Comedy Festival, Detroit&apos;s
            premier stand-up comedy festival.
          </p>
          <a
            href="https://motorcitycomedyfestival.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View the Motor City Comedy Festival website, opens in a new tab"
            className="inline-flex items-center gap-2 bg-surface0 border border-surface1 text-text font-medium px-8 py-3 rounded-xl hover:border-peach hover:text-peach transition-colors"
          >
            View festival website
            <IconExternal aria-hidden="true" className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* ── CTA ── */}
      <section aria-labelledby="cta-heading" className="max-w-4xl mx-auto px-6 pb-15 text-center">
        <div className="bg-surface0 border border-surface1 rounded-2xl p-10">
          <h3 id="cta-heading" className="text-lg sm:text-2xl font-bold text-mauve mb-3">
            Looking for a comedian for your event?
          </h3>
          <p className="text-sm sm:text-[1rem] text-subtext1 mb-6">
            Reach out to book Lauren for your next show, corporate event, or private party.
          </p>
          <a
            href="mailto:laurenuchalik@gmail.com"
            aria-label="Email Lauren to book her for your event"
            className="inline-flex items-center gap-2 bg-mauve text-crust font-bold px-8 py-3 rounded-xl hover:bg-pink transition-colors"
          >
            <IconMail aria-hidden="true" className="w-5 h-5" />
            Book Lauren
          </a>
        </div>
      </section>

    </div>
  );
}