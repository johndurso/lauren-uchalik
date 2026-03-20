import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Comedy | Lauren Uchalik",
  description: "Watch Lauren Uchalik's stand-up comedy videos and find out where she's performing next.",
};

// ── Sparkk-style inline SVG icons (20x20 viewBox) ──────────────────────────

const IconBuilding = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11,0H1C0.447,0,0,0.447,0,1v18c0,0.553,0.447,1,1,1h6v-4h4v4h6c0.553,0,1-0.447,1-1V7
      c0-0.553-0.447-1-1-1h-5V1C12,0.447,11.553,0,11,0z M4,16H2v-2h2V16z M4,12H2v-2h2V12z
      M4,8H2V6h2V8z M4,4H2V2h2V4z M8,16H6v-2h2V16z M8,12H6v-2h2V12z M8,8H6V6h2V8z
      M8,4H6V2h2V4z M18,16h-2v-2h2V16z M18,12h-2v-2h2V12z M14,16h-2v-2h2V16z M14,12h-2v-2h2V12z" />
  </svg>
);

const IconArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.95,10.707l0.707-0.707L8,4.343L6.586,5.757L10.828,10l-4.242,4.243L8,15.657l4.95-4.95
      H12.95z" />
  </svg>
);

const IconYouTube = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.582,5.518c-0.23-0.861-0.908-1.538-1.77-1.769C16.254,3.325,10,3.325,10,3.325
      s-6.254,0-7.812,0.424C1.326,3.98,0.648,4.657,0.418,5.518C0,7.076,0,10.325,0,10.325
      s0,3.249,0.418,4.807c0.23,0.861,0.908,1.538,1.77,1.769C3.746,17.325,10,17.325,10,17.325
      s6.254,0,7.812-0.424c0.862-0.231,1.54-0.908,1.77-1.769C20,13.574,20,10.325,20,10.325
      S20,7.076,19.582,5.518z M8,13.325v-6l5.196,3L8,13.325z" />
  </svg>
);

const IconMail = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18,2H2C0.896,2,0,2.896,0,4v12c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V4
      C20,2.896,19.104,2,18,2z M18,6.118l-8,4.8L2,6.118V4.353l8,4.8l8-4.8V6.118z" />
  </svg>
);

// ── Data ────────────────────────────────────────────────────────────────────

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

// ── Page ────────────────────────────────────────────────────────────────────

export default function ComedyPage() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-crust via-base to-mantle py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-80 h-80 bg-mauve opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-text mb-6">
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
              title="Lauren's email for booking stand-up comedy"
              rel="noopener noreferrer"
              className="inline-flex mt-5 sm:mt-0 m-auto items-center gap-2 justify-center bg-mauve text-crust font-bold px-8 py-3 rounded-xl hover:bg-pink transition-colors text-lg shadow-lg shadow-teal/20"
            >
              <IconMail className="w-5 h-5" />
              Book Lauren
            </a>
            <a
              href="#clips"
              rel="noopener noreferrer"
              title="Link to stand-up clips section"
              className="inline-flex mt-5 sm:mt-0 m-auto items-center gap-2 justify-center text-mauve font-semibold px-8 py-3 rounded-xl border border-mauve hover:border-pink hover:text-pink transition-colors text-lg"
            >
              View Stand-Up Clips
            </a>
          </div>
        </div>
      </section>

      {/* ── VIDEOS ── */}
      <section id="clips" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-text mb-2">Stand-up Clips of Lauren</h2>
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
                <p className="text-subtext0 text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube Channel Link */}
        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/results?search_query=lauren+uchalik"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-mauve text-crust font-bold px-8 py-3 rounded-xl hover:bg-pink transition-colors shadow-lg shadow-mauve/20"
          >
            <IconYouTube className="w-5 h-5" />
            Find more of Lauren on YouTube
          </a>
        </div>
      </section>

      {/* ── MOTOR CITY COMEDY FESTIVAL ── */}
      <section className="bg-mantle border-y border-surface0 py-16 px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <IconBuilding className="w-12 h-12 mx-auto mb-4 text-peach" />
          <h2 className="text-3xl font-bold text-peach mb-4">Motor City Comedy Festival</h2>
          <p className="text-subtext1 text-[0.9rem] sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Lauren is the founder and former board member of the Motor City Comedy Festival, Detroit&apos;s
            premier stand-up comedy festival.
          </p>
          <Link
            href="https://motorcitycomedyfestival.com"
            target="_blank"
            className="inline-flex items-center gap-2 bg-surface0 border border-surface1 text-peach transition-colors font-bold px-8 py-3 rounded-xl hover:border-peach transition-colors"
          >
            View festival website
            <IconArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-4xl mx-auto px-6 pb-15 text-center">
        <div className="bg-surface0 border border-surface1 rounded-2xl p-10">
          <h3 className="text-lg sm:text-2xl font-bold text-mauve mb-3">Looking for a comedian for your event?</h3>
          <p className="text-sm sm:text-[1rem] text-subtext1 mb-6">
            Reach out to book Lauren for your next show, corporate event, or private party.
          </p>
          <Link
            href="mailto:laurenuchalik@gmail.com"
            className="inline-flex items-center gap-2 bg-mauve text-crust font-bold px-8 py-3 rounded-xl hover:bg-pink transition-colors"
          >
            <IconMail className="w-5 h-5" />
            Book Lauren
            <IconArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}