import type { Metadata } from "next";
import AnimatedHeading from "@/components/AnimatedHeading";

export const metadata: Metadata = {
  title: "Travel | Lauren Uchalik",
  description:
    "Book your next vacation with Lauren Uchalik, travel agent at Portkey Vacations. Specializing in theme parks, international travel, and custom itineraries.",
};

const IconCastle = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M2,2h2v2H2V2z M6,2h2v2H6V2z M10,2h2v2h-2V2z M1,5h4v2H1V5z M8,5h3v2H8V5z M14,2h2v2h-2V2z
      M13,5h4v2h-4V5z M5,5h2v2H5V5z M0,8h20v10H0V8z M8,12v4h4v-4H8z M2,10v2h3v-2H2z
      M15,10v2h3v-2H15z" />
  </svg>
);

const IconGlobe = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,0.4C4.698,0.4,0.4,4.698,0.4,10C0.4,15.302,4.698,19.6,10,19.6
      c5.301,0,9.6-4.298,9.6-9.6C19.6,4.698,15.301,0.4,10,0.4z M18.544,9.5h-2.958
      c-0.091-2.037-0.62-3.956-1.456-5.48C16.56,5.163,18.198,7.145,18.544,9.5z
      M10.5,1.456c1.18,0.951,2.326,2.943,2.702,6.044H10.5V1.456z M9.5,1.456v6.044H6.798
      C7.174,4.399,8.32,2.407,9.5,1.456z M9.5,8.5v2H6.69C6.745,9.566,6.837,9.02,6.95,8.5H9.5z
      M9.5,11.5v2H6.95c-0.113-0.52-0.205-1.066-0.26-2H9.5z M9.5,14.5v4.044
      C8.32,17.593,7.174,15.601,6.798,12.5H9.5z M10.5,18.544V14.5h2.702
      C12.826,17.601,11.68,19.593,10.5,18.544z M10.5,13.5v-2h2.55c-0.055,0.934-0.147,1.48-0.26,2H10.5z
      M10.5,10.5V8.5h2.55c0.113,0.52,0.205,1.066,0.26,2H10.5z M13.87,7.5
      c-0.376-3.101-1.522-5.093-2.702-6.044c2.237,0.535,4.077,2.021,5.13,4.025
      C15.693,6.228,14.826,6.963,13.87,7.5z M3.87,5.481C4.923,3.477,6.763,1.991,9,1.456
      C7.82,2.407,6.674,4.399,6.298,7.5C5.342,6.963,4.475,6.228,3.87,5.481z
      M3.87,14.519c0.605-0.747,1.472-1.482,2.428-2.019c0.376,3.101,1.522,5.093,2.702,6.044
      C6.763,18.009,4.923,16.523,3.87,14.519z M13.702,18.544c1.18-0.951,2.326-2.943,2.702-6.044
      c0.956,0.537,1.823,1.272,2.428,2.019C17.777,16.523,15.937,18.009,13.702,18.544z
      M16.13,11.5c0.113-0.52,0.205-1.066,0.26-2h2.958c-0.091,0.934-0.347,1.814-0.728,2.619
      C17.894,11.848,17.027,11.619,16.13,11.5z M1.456,9.5h2.958c0.055,0.934,0.147,1.48,0.26,2
      c-0.897,0.119-1.764,0.348-2.49,0.619C1.803,11.314,1.547,10.434,1.456,9.5z
      M1.456,10.5c0.346,2.355,1.984,4.337,4.414,5.48c-0.836-1.524-1.365-3.443-1.456-5.48H1.456z" />
  </svg>
);

const IconShip = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.5,1v8H2L9.5,1z M10.5,1v8H18L10.5,1z M1,10.5l1.5,6h15l1.5-6H1z
      M4,12h12v1H4V12z M5,14h10v1H5V14z" />
  </svg>
);

const IconGroup = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,10.9c2.373,0,4.303-1.932,4.303-4.306c0-2.372-1.93-4.302-4.303-4.302
      S5.696,4.222,5.696,6.594C5.696,8.968,7.627,10.9,10,10.9z M10,3.292
      c1.82,0,3.302,1.483,3.302,3.302c0,1.821-1.481,3.306-3.302,3.306
      c-1.82,0-3.303-1.485-3.303-3.306C6.697,4.775,8.18,3.292,10,3.292z
      M16.37,12.898c-0.86-0.298-2.992-0.734-6.37-0.734s-5.511,0.436-6.37,0.734
      C2.545,13.354,2,14.604,2,16.292V18h16v-1.708C18,14.604,17.455,13.354,16.37,12.898z
      M17,17H3v-0.708c0-1.338,0.437-2.179,1.065-2.399C4.952,13.594,6.999,13.164,10,13.164
      s5.047,0.43,5.934,0.729C16.563,14.113,17,14.954,17,16.292V17z" />
  </svg>
);

const IconSun = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,6.5c-1.933,0-3.5,1.567-3.5,3.5s1.567,3.5,3.5,3.5s3.5-1.567,3.5-3.5S11.933,6.5,10,6.5z
      M10,12.5c-1.378,0-2.5-1.121-2.5-2.5s1.122-2.5,2.5-2.5s2.5,1.121,2.5,2.5S11.378,12.5,10,12.5z
      M10,4.5c0.276,0,0.5-0.224,0.5-0.5V2c0-0.276-0.224-0.5-0.5-0.5S9.5,1.724,9.5,2v2
      C9.5,4.276,9.724,4.5,10,4.5z M10,15.5c-0.276,0-0.5,0.224-0.5,0.5v2c0,0.276,0.224,0.5,0.5,0.5
      s0.5-0.224,0.5-0.5v-2C10.5,15.724,10.276,15.5,10,15.5z M4.5,10c0-0.276-0.224-0.5-0.5-0.5H2
      c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h2C4.276,10.5,4.5,10.276,4.5,10z
      M18,9.5h-2c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h2c0.276,0,0.5-0.224,0.5-0.5
      S18.276,9.5,18,9.5z M5.404,5.404c-0.195-0.195-0.512-0.195-0.707,0L3.283,6.818
      c-0.195,0.195-0.195,0.512,0,0.707c0.098,0.098,0.226,0.146,0.354,0.146
      s0.256-0.049,0.354-0.146l1.414-1.414C5.599,5.916,5.599,5.599,5.404,5.404z
      M14.596,14.596c-0.195-0.195-0.512-0.195-0.707,0c-0.195,0.195-0.195,0.512,0,0.707
      l1.414,1.414c0.098,0.098,0.226,0.147,0.354,0.147s0.256-0.049,0.354-0.147
      c0.195-0.195,0.195-0.512,0-0.707L14.596,14.596z M5.404,14.596l-1.414,1.414
      c-0.195,0.195-0.195,0.512,0,0.707c0.098,0.098,0.226,0.147,0.354,0.147
      s0.256-0.049,0.354-0.147l1.414-1.414c0.195-0.195,0.195-0.512,0-0.707
      C5.916,14.401,5.599,14.401,5.404,14.596z M14.596,5.404c0.195-0.195,0.512-0.195,0.707,0
      l1.414,1.414c0.195,0.195,0.195,0.512,0,0.707c-0.098,0.098-0.226,0.146-0.354,0.146
      s-0.256-0.049-0.354-0.146l-1.414-1.414C14.401,5.916,14.401,5.599,14.596,5.404z" />
  </svg>
);

const IconHeart = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,18.673l-0.919-0.845C4.535,13.986,1.5,11.198,1.5,7.773
      C1.5,5.041,3.641,2.9,6.373,2.9c1.544,0,3.024,0.72,3.984,1.86H10
      c0.957-1.14,2.438-1.86,3.982-1.86C16.715,2.9,18.855,5.041,18.855,7.773
      c0,3.425-3.035,6.213-7.581,10.063L10,18.673z" />
  </svg>
);

const IconHeadphones = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,1C5.589,1,2,4.589,2,9v7c0,1.104,0.896,2,2,2h1c1.104,0,2-0.896,2-2v-3
      c0-1.104-0.896-2-2-2H3V9c0-3.86,3.141-7,7-7s7,3.14,7,7v2h-2c-1.104,0-2,0.896-2,2v3
      c0,1.104,0.896,2,2,2h1c1.104,0,2-0.896,2-2V9C18,4.589,14.411,1,10,1z" />
  </svg>
);

const IconSpotify = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,0C4.478,0,0,4.478,0,10s4.478,10,10,10s10-4.478,10-10S15.522,0,10,0z
      M14.442,14.443c-0.186,0.305-0.582,0.4-0.886,0.215c-2.428-1.485-5.486-1.82-9.087-0.997
      c-0.347,0.079-0.693-0.137-0.772-0.484c-0.08-0.347,0.136-0.693,0.484-0.772
      c3.941-0.901,7.32-0.513,10.047,1.152C14.532,13.743,14.628,14.138,14.442,14.443z
      M15.678,11.685c-0.233,0.379-0.729,0.497-1.107,0.265c-2.78-1.709-7.018-2.204-10.301-1.205
      c-0.406,0.123-0.835-0.106-0.957-0.511c-0.122-0.406,0.106-0.835,0.511-0.957
      c3.757-1.14,8.429-0.588,11.589,1.374C15.791,10.884,15.911,11.308,15.678,11.685z
      M15.793,8.818c-3.333-1.98-8.834-2.161-12.015-1.196c-0.487,0.148-1.002-0.128-1.15-0.615
      C2.48,6.52,2.756,6.005,3.243,5.857C6.927,4.74,12.98,4.95,16.8,7.226
      c0.438,0.261,0.582,0.826,0.322,1.263C16.861,8.927,16.231,9.079,15.793,8.818z" />
  </svg>
);

const IconArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.95,10.707l0.707-0.707L8,4.343L6.586,5.757L10.828,10l-4.242,4.243L8,15.657l4.95-4.95
      H12.95z" />
  </svg>
);

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

const episodes = [
  {
    label: "Episode 637",
    title: "Universal Studios and Mental Health Part 1",
    apple: "https://podcasts.apple.com/us/podcast/unofficial-universal-orlando-podcast/id431258512?i=1000676698570",
    spotify: "https://open.spotify.com/episode/7ykZw5BG7MdfwYDmBMFf8C?si=bb46bc24f5af4ed7",
  },
  {
    label: "Episode 638",
    title: "Universal Studios and Mental Health Part 2",
    apple: "https://podcasts.apple.com/us/podcast/unofficial-universal-orlando-podcast/id431258512?i=1000677520558",
    spotify: "https://open.spotify.com/episode/2APHtCHu7edwiwzUx9gkhR?si=978be12e6b504b51",
  },
];

export default function TravelPage() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-crust via-base to-mantle py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-teal opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">

          <AnimatedHeading />

          <p className="text-subtext1 text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Lauren Uchalik is a travel agent with <a target="_blank" title="Portkey Vacations Travel Agency" className="text-teal font-semibold" href="https://portkeyvacations.com/team/lauren-uchalik/">Portkey Vacations</a>, specializing in personalized
            vacation planning. She handles all the details so you can focus on the adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.tern.travel/public/forms/w_NEn_ZKXEve3Ricj8Z0VA/responses/new"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 justify-center bg-teal text-crust font-bold px-8 py-3 rounded-xl hover:bg-sky transition-colors text-lg shadow-lg shadow-teal/20"
            >
              Book with Lauren
              <IconArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://portkeyvacations.com/team/lauren-uchalik/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 justify-center bg-surface0 border border-surface1 text-teal font-semibold px-8 py-3 rounded-xl hover:border-teal transition-colors text-lg"
            >
              View Portkey Profile
              <IconArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY BOOK WITH LAUREN ── */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-text mb-4">Why Book with a Travel Agent?</h2>
        <p className="text-subtext1 text-lg leading-relaxed max-w-2xl mx-auto">
          In a world of endless booking sites and overwhelming options, having a real human in your corner
          makes all the difference. Lauren brings personal expertise, insider knowledge, and genuine care
          to every trip she plans.
        </p>
      </section>

      {/* ── SPECIALTIES GRID ── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className={`bg-mantle border border-surface0 rounded-2xl p-6 transition-colors ${item.border} group`}
            >
              <item.Icon className={`w-10 h-10 mb-4 ${item.color}`} />
              <h3 className={`text-xl font-bold mb-2 ${item.color}`}>{item.title}</h3>
              <p className="text-subtext1 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PORTKEY VACATIONS CALLOUT ── */}
      <section className="bg-mantle border-y border-surface0 py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <span className="text-teal text-sm font-semibold uppercase tracking-widest">Agency</span>
            <h2 className="text-3xl font-bold text-text mt-2 mb-4">Portkey Vacations</h2>
            <p className="text-subtext1 leading-relaxed mb-6">
              Lauren is a proud member of the <a target="_blank" title="Portkey Vacations Travel Agency" className="text-teal font-semibold" href="https://portkeyvacations.com/team/lauren-uchalik/">Portkey Vacations</a> team: a travel agency dedicated to
              creating magical, memorable vacation experiences for every client.
            </p>
            <a
              href="https://portkeyvacations.com/team/lauren-uchalik/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-surface0 border border-teal text-teal font-semibold px-6 py-2 rounded-lg hover:bg-teal hover:text-crust transition-colors"
            >
              Visit Lauren&apos;s Portkey Profile
              <IconArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="flex-1 bg-surface0 border border-surface1 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-yellow mb-2">Ready to Start Planning?</h3>
            <p className="text-subtext1 text-sm mb-6">
              Fill out Lauren&apos;s travel inquiry form and she&apos;ll be in touch to start building your perfect itinerary.
            </p>
            <a
              href="https://app.tern.travel/public/forms/w_NEn_ZKXEve3Ricj8Z0VA/responses/new"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-teal text-crust font-bold px-8 py-3 rounded-xl hover:bg-sky transition-colors w-full"
            >
              Start Your Inquiry
              <IconArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── PODCAST TIE-IN ── */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <span className="text-peach text-sm font-semibold uppercase tracking-widest">Travel & Entertainment</span>
        <h2 className="text-3xl font-bold text-text mt-2 mb-4">Unofficial Universal Orlando Podcast</h2>
        <p className="text-subtext1 mb-10 max-w-xl mx-auto">
          Lauren&apos;s love of travel extends to her podcast appearances. Listen to her appearances on the Unofficial Universal Orlando Podcast.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {episodes.map((ep) => (
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
                  className="inline-flex items-center gap-2 bg-surface0 border border-surface1 text-text text-sm font-medium px-4 py-2 rounded-lg hover:border-peach hover:text-peach transition-colors"
                >
                  <IconHeadphones className="w-4 h-4 shrink-0" />
                  Listen on Apple Podcasts
                </a>
                <a
                  href={ep.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-surface0 border border-surface1 text-text text-sm font-medium px-4 py-2 rounded-lg hover:border-green hover:text-green transition-colors"
                >
                  <IconSpotify className="w-4 h-4 shrink-0" />
                  Listen on Spotify
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-br from-surface0 to-mantle border border-teal rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-bold text-teal mb-3">Let&apos;s Get You Somewhere Amazing</h3>
          <p className="text-subtext1 mb-6">
            No matter where you want to go, Lauren will help you get there stress-free, on budget,
            and with memories that last a lifetime.
          </p>
          <a
            href="https://app.tern.travel/public/forms/w_NEn_ZKXEve3Ricj8Z0VA/responses/new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 justify-center bg-teal text-crust font-bold px-10 py-3 rounded-xl hover:bg-sky transition-colors text-lg shadow-lg shadow-teal/20"
          >
            Book with Lauren Today
            <IconArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

    </div>
  );
}