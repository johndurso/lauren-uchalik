import Link from "next/link";

const IconArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.95,10.707l0.707-0.707L8,4.343L6.586,5.757L10.828,10l-4.242,4.243L8,15.657l4.95-4.95
      H12.95z" />
  </svg>
);

const IconMic = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,12c1.657,0,3-1.343,3-3V5c0-1.657-1.343-3-3-3S7,3.343,7,5v4C7,10.657,8.343,12,10,12z
      M10,3c1.103,0,2,0.897,2,2v4c0,1.103-0.897,2-2,2S8,10.103,8,9V5C8,3.897,8.897,3,10,3z
      M15,9c0,2.757-2.243,5-5,5s-5-2.243-5-5H4c0,3.185,2.327,5.834,5.375,6.373
      C9.617,15.461,9.5,16,9.5,16H7v1h6v-1h-2.5c0,0-0.117-0.539,0.125-0.627
      C13.673,14.834,16,12.185,16,9H15z" />
  </svg>
);

const IconBriefcase = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		<path d="M17.638,6.181h-3.844C13.581,4.273,11.963,2.786,10,2.786c-1.962,0-3.581,1.487-3.793,
    3.395H2.362c-0.233,0-0.424,0.191-0.424,0.424v10.184c0,0.232,0.191,0.424,0.424,0.424h15.276c0.234,
    0,0.425-0.191,0.425-0.424V6.605C18.062,6.372,17.872,6.181,17.638,6.181 M13.395,9.151c0.234,0,0.425,
    0.191,0.425,0.424S13.629,10,13.395,10c-0.232,0-0.424-0.191-0.424-0.424S13.162,9.151,13.395,
    9.151 M10,3.635c1.493,0,2.729,1.109,2.936,2.546H7.064C7.271,4.744,8.506,3.635,10,3.635 M6.605,
    9.151c0.233,0,0.424,0.191,0.424,0.424S6.838,10,6.605,10c-0.233,0-0.424-0.191-0.424-0.424S6.372,
    9.151,6.605,9.151 M17.214,16.365H2.786V7.029h3.395v1.347C5.687,8.552,5.332,9.021,5.332,9.575c0,
    0.703,0.571,1.273,1.273,1.273c0.702,0,1.273-0.57,1.273-1.273c0-0.554-0.354-1.023-0.849-1.199V7.029h5.941v1.347c-0.495,
    0.176-0.849,0.645-0.849,1.199c0,0.703,0.57,1.273,1.272,
    1.273s1.273-0.57,1.273-1.273c0-0.554-0.354-1.023-0.849-1.199V7.029h3.395V16.365z"></path>
	</svg>
);

const IconHeadphones = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,1C5.589,1,2,4.589,2,9v7c0,1.104,0.896,2,2,2h1c1.104,0,2-0.896,2-2v-3
      c0-1.104-0.896-2-2-2H3V9c0-3.86,3.141-7,7-7s7,3.14,7,7v2h-2c-1.104,0-2,0.896-2,2v3
      c0,1.104,0.896,2,2,2h1c1.104,0,2-0.896,2-2V9C18,4.589,14.411,1,10,1z" />
  </svg>
);

const IconMicSmall = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,12c1.657,0,3-1.343,3-3V5c0-1.657-1.343-3-3-3S7,3.343,7,5v4C7,10.657,8.343,12,10,12z
      M10,3c1.103,0,2,0.897,2,2v4c0,1.103-0.897,2-2,2S8,10.103,8,9V5C8,3.897,8.897,3,10,3z
      M15,9c0,2.757-2.243,5-5,5s-5-2.243-5-5H4c0,3.185,2.327,5.834,5.375,6.373
      C9.617,15.461,9.5,16,9.5,16H7v1h6v-1h-2.5c0,0-0.117-0.539,0.125-0.627
      C13.673,14.834,16,12.185,16,9H15z" />
  </svg>
);

const IconStar = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,1.375l2.025,6.227h6.551l-5.301,3.851l2.025,6.227L10,13.829
      l-5.301,3.851l2.025-6.227L1.424,7.602h6.551L10,1.375z" />
  </svg>
);

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-crust via-base to-mantle py-28 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-mauve opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal opacity-10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-text mb-6 leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mauve to-pink">
              Lauren
            </span>
            !
          </h1>
          <p className="text-subtext1 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            At the very least, I can make you smile, and maybe book your next dream vacation while I&apos;m at it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/comedy"
              className="inline-flex items-center gap-2 bg-mauve text-crust font-bold px-8 py-3 rounded-xl hover:bg-pink transition-colors text-lg shadow-lg shadow-mauve/20"
            >
              <IconMic className="w-5 h-5" />
              See My Comedy
            </Link>
            <Link
              href="/travel"
              className="inline-flex items-center gap-2 bg-teal text-crust font-bold px-8 py-3 rounded-xl hover:bg-sky transition-colors text-lg shadow-lg shadow-teal/20"
            >
              <IconBriefcase className="w-5 h-5" />
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-subtext1 text-lg leading-relaxed">
          Lauren Uchalik is a Detroit-based stand-up comedian and a travel agent with{" "}
          <a target="_blank" title="Portkey Vacations Travel Agency" className="text-teal font-semibold" href="https://portkeyvacations.com/team/lauren-uchalik/">Portkey Vacations</a>. Whether she&apos;s making audiences laugh
          or helping clients explore the world, she brings the same energy to everything she does.
        </p>
      </section>

      {/* ── TWO FEATURE CARDS ── */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-8">

        {/* Comedy Card */}
        <div className="bg-mantle border border-surface0 rounded-2xl p-8 hover:border-mauve transition-colors group">
          <IconMic className="w-12 h-12 mb-4 text-mauve" />
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
            className="inline-flex items-center gap-2 bg-surface0 text-mauve font-semibold px-6 py-2 rounded-lg hover:bg-mauve hover:text-crust transition-colors"
          >
            More Videos & Shows
            <IconArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Travel Card */}
        <div className="bg-mantle border border-surface0 rounded-2xl p-8 hover:border-teal transition-colors group">
          <IconBriefcase className="w-12 h-12 mb-4 text-teal" />
          <h2 className="text-2xl font-bold text-teal mb-3 group-hover:text-sky transition-colors">
            Travel Agent
          </h2>
          <p className="text-subtext1 mb-6 leading-relaxed">
            As a travel agent with <a target="_blank" title="Portkey Vacations Travel Agency" className="text-teal font-semibold" href="https://portkeyvacations.com/team/lauren-uchalik/">Portkey Vacations</a>, Lauren specializes in crafting unforgettable
            vacations. From theme park adventures to international getaways, she&apos;s got you covered.
          </p>
          <div className="bg-surface0 rounded-xl p-6 mb-6 border border-surface1">
            <p className="inline-flex items-center gap-2 text-yellow font-semibold text-sm uppercase tracking-wide mb-2">
              <IconStar className="w-4 h-4" />
              Ready to explore?
            </p>
            <p className="text-subtext1 text-sm">
              Lauren handles all the details so you can focus on the adventure. Personalized itineraries,
              the best deals, and expert guidance every step of the way.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://app.tern.travel/public/forms/w_NEn_ZKXEve3Ricj8Z0VA/responses/new"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal text-crust font-semibold px-6 py-2 rounded-lg hover:bg-sky transition-colors text-center"
            >
              Book with Lauren
              <IconArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/travel"
              className="inline-flex items-center gap-2 bg-surface0 text-teal font-semibold px-6 py-2 rounded-lg hover:bg-teal hover:text-crust transition-colors text-center"
            >
              Learn More
              <IconArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </section>

      {/* ── PODCAST STRIP ── */}
      <section className="bg-base py-14 px-6 mb-15">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 justify-center text-peach text-sm font-semibold uppercase tracking-widest">
            <IconMicSmall className="w-4 h-4" />
            Podcasts
          </span>
          <h2 className="text-3xl font-bold text-text mt-2 mb-4">Unofficial Universal Orlando Podcast</h2>
          <p className="text-subtext1 mb-8">
            Lauren has appeared on the Unofficial Universal Orlando Podcast. Catch her episodes on Apple Podcasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://podcasts.apple.com/us/podcast/unofficial-universal-orlando-podcast/id431258512?i=1000677520558"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 justify-center bg-surface0 border border-surface1 text-text font-medium px-6 py-3 rounded-xl hover:border-peach hover:text-peach transition-colors"
            >
              <IconHeadphones className="w-5 h-5" />
              Episode 1
            </a>
            <a
              href="https://podcasts.apple.com/us/podcast/unofficial-universal-orlando-podcast/id431258512?i=1000676698570"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 justify-center bg-surface0 border border-surface1 text-text font-medium px-6 py-3 rounded-xl hover:border-peach hover:text-peach transition-colors"
            >
              <IconHeadphones className="w-5 h-5" />
              Episode 2
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}