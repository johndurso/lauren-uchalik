import type { Metadata } from "next";
import { podcastEpisodes } from "@/data/podcasts";
import AnimatedHeading from "@/components/AnimatedHeading";
import {
  IconArrowRight,
  IconCastle,
  IconGlobe,
  IconShip,
  IconGroup,
  IconSun,
  IconHeart,
  IconHeadphones,
  IconSpotify,
  IconExternal,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Travel | Lauren Uchalik",
  description:
    "Book your next vacation with Lauren Uchalik, travel agent at Portkey Vacations. Specializing in theme parks, international travel, and custom itineraries.",
};

const highlights = [
  {
    Icon: IconCastle,
    title: "Theme Park Vacations",
    description:
      "Universal Orlando, Walt Disney World, and beyond. Lauren knows the parks inside and out, and can help you plan the perfect trip.",
    color: "text-mauve",
    border: "hover:border-mauve",
  },
  {
    Icon: IconGlobe,
    title: "International Travel",
    description:
      "From European adventures to tropical getaways, Lauren crafts personalized international itineraries tailored to your travel style.",
    color: "text-teal",
    border: "hover:border-teal",
  },
  {
    Icon: IconShip,
    title: "Cruises",
    description:
      "Set sail with confidence. Lauren will find the right cruise line, itinerary, and cabin for your perfect voyage.",
    color: "text-sapphire",
    border: "hover:border-sapphire",
  },
  {
    Icon: IconGroup,
    title: "Group & Event Travel",
    description:
      "Planning a bachelorette, family reunion, or corporate retreat? Lauren specializes in group travel logistics.",
    color: "text-peach",
    border: "hover:border-peach",
  },
  {
    Icon: IconSun,
    title: "All-Inclusive Resorts",
    description:
      "Relax and let Lauren handle every detail of your all-inclusive resort vacation.",
    color: "text-green",
    border: "hover:border-green",
  },
  {
    Icon: IconHeart,
    title: "Honeymoons & Romance",
    description:
      "Make your honeymoon unforgettable. Lauren creates romantic, personalized trips for couples at every stage.",
    color: "text-pink",
    border: "hover:border-pink",
  },
];

export default function TravelPage() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section
        aria-labelledby="travel-hero-heading"
        className="bg-gradient-to-br from-crust via-base to-mantle py-24 px-6 text-center relative overflow-hidden"
      >
        <div aria-hidden="true" className="absolute bottom-0 left-1/3 w-96 h-96 bg-teal opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <AnimatedHeading />
          <p className="text-subtext1 text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Lauren Uchalik is a travel agent with{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Portkey Vacations Travel Agency, opens in a new tab"
              className="text-teal font-semibold"
              href="https://portkeyvacations.com/team/lauren-uchalik/"
            >
              Portkey Vacations
            </a>, specializing in personalized vacation planning. She handles all the details so you can focus on the adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.tern.travel/public/forms/w_NEn_ZKXEve3Ricj8Z0VA/responses/new"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a trip with Lauren via the travel inquiry form, opens in a new tab"
              className="inline-flex mt-5 sm:mt-0 m-auto items-center gap-2 justify-center bg-teal text-crust font-bold px-8 py-3 rounded-xl hover:bg-sky transition-colors text-lg shadow-lg shadow-teal/20"
            >
              Book with Lauren
              <IconExternal aria-hidden="true" className="w-5 h-5" />
            </a>
            <a
              href="https://portkeyvacations.com/team/lauren-uchalik/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Lauren's profile on Portkey Vacations, opens in a new tab"
              className="inline-flex mt-5 sm:mt-0 m-auto items-center gap-2 justify-center text-teal font-semibold px-8 py-3 rounded-xl border border-teal hover:border-sky hover:text-sky transition-colors text-lg"
            >
              View Portkey Profile
              <IconExternal aria-hidden="true" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY BOOK WITH LAUREN ── */}
      <section aria-labelledby="why-heading" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 id="why-heading" className="text-3xl font-bold text-text mb-4">Why Book with a Travel Agent?</h2>
        <p className="text-subtext1 text-lg leading-relaxed max-w-2xl mx-auto">
          In a world of endless booking sites and overwhelming options, having a real human in your corner
          makes all the difference. Lauren brings personal expertise, insider knowledge, and genuine care
          to every trip she plans.
        </p>
      </section>

      {/* ── SPECIALTIES GRID ── */}
      <section aria-label="Travel specialties" className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className={`bg-mantle border border-surface0 rounded-2xl p-6 transition-colors ${item.border} group`}
            >
              <item.Icon aria-hidden="true" className={`w-10 h-10 mb-4 ${item.color}`} />
              <h3 className={`text-xl font-bold mb-2 ${item.color}`}>{item.title}</h3>
              <p className="text-subtext1 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PORTKEY VACATIONS CALLOUT ── */}
      <section aria-labelledby="portkey-heading" className="bg-mantle border-y border-surface0 py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <span aria-hidden="true" className="text-teal text-sm font-semibold uppercase tracking-widest">Agency</span>
            <h2 id="portkey-heading" className="text-3xl font-bold text-text mt-2 mb-4">Portkey Vacations</h2>
            <p className="text-subtext1 leading-relaxed mb-6">
              Lauren is a proud member of the{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portkey Vacations Travel Agency, opens in a new tab"
                className="text-teal font-semibold"
                href="https://portkeyvacations.com/team/lauren-uchalik/"
              >
                Portkey Vacations
              </a>{" "}
              team: a travel agency dedicated to creating magical, memorable vacation experiences for every client.
            </p>
            <a
              href="https://portkeyvacations.com/team/lauren-uchalik/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Lauren's Portkey Vacations profile, opens in a new tab"
              className="inline-flex items-center gap-2 bg-surface0 border border-teal text-teal font-semibold px-8 py-3 rounded-xl hover:bg-teal hover:text-crust transition-colors"
            >
              Visit Lauren&apos;s Portkey Profile
              <IconExternal aria-hidden="true" className="w-4 h-4" />
            </a>
          </div>
          <div className="flex-1 bg-surface0 border border-surface1 rounded-2xl p-8 text-left md:text-center">
            <h3 className="text-xl font-bold text-yellow mb-2">Ready to Start Planning?</h3>
            <p className="text-subtext1 text-sm mb-6">
              Fill out Lauren&apos;s travel inquiry form and she&apos;ll be in touch to start building your perfect itinerary.
            </p>
            <a
              href="https://app.tern.travel/public/forms/w_NEn_ZKXEve3Ricj8Z0VA/responses/new"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Start your travel inquiry with Lauren, opens in a new tab"
              className="inline-flex items-center justify-center gap-2 bg-teal text-crust font-bold px-8 py-3 rounded-xl hover:bg-sky transition-colors"
            >
              Start Your Inquiry
              <IconExternal aria-hidden="true" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── PODCAST TIE-IN ── */}
      <section aria-labelledby="travel-podcast-heading" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <span aria-hidden="true" className="text-peach text-sm font-semibold uppercase tracking-widest">
          Travel &amp; Entertainment
        </span>
        <h2 id="travel-podcast-heading" className="text-3xl font-bold text-text mt-2 mb-4">
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

      {/* ── FINAL CTA ── */}
      <section aria-labelledby="final-cta-heading" className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-br from-surface0 to-mantle border border-teal rounded-2xl p-10 text-center">
          <h3 id="final-cta-heading" className="text-xl sm:text-2xl font-bold text-teal mb-3">
            Let&apos;s Get You Somewhere Amazing
          </h3>
          <p className="text-sm sm:text-[1rem] m-auto text-subtext1 mb-6 max-w-xl">
            No matter where you want to go, Lauren will help you get there stress-free, on budget,
            and with memories that last a lifetime.
          </p>
          <a
            href="https://app.tern.travel/public/forms/w_NEn_ZKXEve3Ricj8Z0VA/responses/new"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a trip with Lauren today, opens in a new tab"
            className="inline-flex items-center gap-2 justify-center bg-teal text-crust font-bold px-10 py-3 rounded-xl hover:bg-sky transition-colors text-lg shadow-lg shadow-teal/20"
          >
            Book with Lauren Today
            <IconExternal aria-hidden="true" className="w-5 h-5" />
          </a>
        </div>
      </section>

    </div>
  );
}