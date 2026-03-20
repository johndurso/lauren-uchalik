import Link from "next/link";
import { podcastEpisodes } from "@/data/podcasts";
import {
  IconArrowRight,
  IconMic,
  IconBriefcase,
  IconHeadphones,
  IconStar,
  IconExternal,
  IconSpotify,
} from "@/components/icons";

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section
        aria-labelledby="hero-heading"
        className="relative bg-gradient-to-br from-crust via-base to-mantle py-28 px-6 text-center overflow-hidden"
      >
        <div aria-hidden="true" className="absolute top-0 left-1/4 w-96 h-96 bg-mauve opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div aria-hidden="true" className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal opacity-10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto">
          <h1 id="hero-heading" className="text-5xl md:text-7xl font-extrabold text-text mb-6 leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mauve to-pink">
              Lauren
            </span>
            !
          </h1>
          <p className="text-subtext1 text-[1rem] sm:text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            At the very least, I can make you smile, and maybe book your next dream vacation while I&apos;m at it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/comedy"
              className="inline-flex mt-5 sm:mt-0 m-auto min-w-[225px] items-center gap-2 bg-mauve text-crust font-bold px-8 py-3 rounded-xl hover:bg-pink transition-colors text-lg shadow-lg shadow-mauve/20"
            >
              <IconMic aria-hidden="true" className="w-5 h-5" />
              See My Comedy
            </Link>
            <Link
              href="/travel"
              className="inline-flex mt-5 sm:mt-0 m-auto min-w-[225px] items-center gap-2 bg-teal text-crust font-bold px-8 py-3 rounded-xl hover:bg-sky transition-colors text-lg shadow-lg shadow-teal/20"
            >
              <IconBriefcase aria-hidden="true" className="w-5 h-5" />
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section aria-label="About Lauren" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-subtext1 text-lg leading-relaxed">
          Lauren Uchalik is a Detroit-based stand-up comedian and a travel agent with{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portkey Vacations Travel Agency, opens in a new tab"
            className="text-teal font-semibold"
            href="https://portkeyvacations.com/team/lauren-uchalik/"
          >
            Portkey Vacations
          </a>. Whether she&apos;s making audiences laugh or helping clients explore the world, she brings the same energy to everything she does.
        </p>
      </section>

      {/* ── TWO FEATURE CARDS ── */}
      <section aria-label="Featured sections" className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-8">

        {/* Comedy Card */}
        <div className="bg-mantle border border-surface0 rounded-2xl p-8 hover:border-mauve transition-colors group">
          <IconMic aria-hidden="true" className="w-12 h-12 mb-4 text-mauve" />
          <h2 className="text-2xl font-bold text-mauve mb-3 group-hover:text-pink transition-colors">
            Stand-Up Comedy
          </h2>
          <p className="text-subtext1 mb-6 leading-relaxed">
            Lauren has been performing stand-up comedy across Michigan and beyond. Catch her latest sets,
            watch her videos, and find out where she&apos;s performing next.
          </p>
          <div className="video-wrapper mb-6">
            <iframe
              src="https://www.youtube.com/embed/lbVfPng05jE"
              title="Lauren Uchalik Stand-Up Comedy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <Link
            href="/comedy"
            aria-label="More videos and shows from Lauren's comedy page"
            className="inline-flex items-center gap-2 bg-surface0 text-mauve font-semibold px-6 py-2 rounded-lg hover:bg-mauve hover:text-crust transition-colors"
          >
            More Videos &amp; Shows
            <IconArrowRight aria-hidden="true" className="w-5 h-5" />
          </Link>
        </div>

        {/* Travel Card */}
        <div className="bg-mantle border border-surface0 rounded-2xl p-8 hover:border-teal transition-colors group">
          <IconBriefcase aria-hidden="true" className="w-12 h-12 mb-4 text-teal" />
          <h2 className="text-2xl font-bold text-teal mb-3 group-hover:text-sky transition-colors">
            Travel Agent
          </h2>
          <p className="text-subtext1 mb-6 leading-relaxed">
            As a travel agent with{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Portkey Vacations Travel Agency, opens in a new tab"
              className="text-teal font-semibold"
              href="https://portkeyvacations.com/team/lauren-uchalik/"
            >
              Portkey Vacations
            </a>, Lauren specializes in crafting unforgettable vacations. From theme park adventures to international getaways, she&apos;s got you covered.
          </p>
          <div className="bg-surface0 rounded-xl p-6 mb-6 border border-surface1">
            <p className="inline-flex items-center gap-2 text-yellow font-semibold text-sm uppercase tracking-wide mb-2">
              <IconStar aria-hidden="true" className="w-4 h-4" />
              Ready to explore?
            </p>
            <p className="text-subtext1 text-sm">
              Lauren handles all the details so you can focus on the adventure. Personalized itineraries,
              the best deals, and expert guidance every step of the way.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <a
              href="https://app.tern.travel/public/forms/w_NEn_ZKXEve3Ricj8Z0VA/responses/new"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a trip with Lauren, opens in a new tab"
              className="inline-flex m-auto items-center gap-2 bg-teal text-crust font-semibold px-6 py-2 rounded-lg hover:bg-sky transition-colors text-center"
            >
              Book with Lauren
              <IconExternal aria-hidden="true" className="w-5 h-5" />
            </a>
            <Link
              href="/travel"
              aria-label="Learn more about Lauren's travel services"
              className="inline-flex m-auto items-center gap-2 bg-surface0 text-teal font-semibold px-6 py-2 rounded-lg hover:bg-teal hover:text-crust transition-colors text-center"
            >
              Learn More
              <IconArrowRight aria-hidden="true" className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </section>

      {/* ── PODCAST STRIP ── */}
      <section aria-labelledby="podcast-heading" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <span aria-hidden="true" className="text-peach text-sm font-semibold uppercase tracking-widest">
          Travel &amp; Entertainment
        </span>
        <h2 id="podcast-heading" className="text-3xl font-bold text-text mt-2 mb-4">
          Unofficial Universal Orlando Podcast
        </h2>
        <p className="text-subtext1 mb-10 max-w-xl mx-auto">
          Lauren&apos;s love of travel extends to her podcast appearances. Listen to her appearances on the Unofficial Universal Orlando Podcast.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {podcastEpisodes.map((ep) => (
            <div
              key={ep.label}
              className="flex-1 bg-mantle border border-surface0 rounded-2xl p-6 text-left hover:border-peach transition-colors"
            >
              <p className="text-peach text-xs font-semibold uppercase tracking-widest mb-1">{ep.label}</p>
              <p className="text-text font-semibold mb-4 leading-snug">{ep.title}</p>
              <div className="flex flex-col gap-2">
                <a
                  href={ep.apple}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Listen to ${ep.title} on Apple Podcasts, opens in a new tab`}
                  className="inline-flex items-center gap-2 bg-surface0 border border-surface1 text-text text-sm font-medium px-4 py-2 rounded-xl hover:border-[#ffffff] hover:text-[#ffffff] transition-colors"
                >
                  <IconHeadphones aria-hidden="true" className="w-4 h-4 shrink-0" />
                  Listen on Apple Podcasts
                  <IconExternal aria-hidden="true" className="w-4 h-4 shrink-0" />
                </a>
                <a
                  href={ep.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Listen to ${ep.title} on Spotify, opens in a new tab`}
                  className="inline-flex items-center gap-2 bg-surface0 border border-surface1 text-text text-sm font-medium px-4 py-2 rounded-xl hover:border-green hover:text-green transition-colors"
                >
                  <IconSpotify aria-hidden="true" className="w-4 h-4 shrink-0" />
                  Listen on Spotify
                  <IconExternal aria-hidden="true" className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}