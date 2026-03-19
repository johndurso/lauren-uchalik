export default function Footer() {
  return (
    <footer className="bg-mantle border-t border-surface0 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-subtext0 text-sm">
          © {new Date().getFullYear()} Lauren Uchalik. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm">
          <a
            href="https://portkeyvacations.com/team/lauren-uchalik/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal hover:text-sky transition-colors"
          >
            Portkey Vacations
          </a>
          <a
            href="https://www.youtube.com/results?search_query=lauren+uchalik"
            target="_blank"
            title="Find Lauren Uchalik on YouTube"
            rel="noopener noreferrer"
            className="text-peach hover:text-yellow transition-colors"
          >
            YouTube
          </a>
          <a
            href="https://app.tern.travel/public/forms/w_NEn_ZKXEve3Ricj8Z0VA/responses/new"
            target="_blank"
            title="Book your next vacation with Lauren"
            rel="noopener noreferrer"
            className="text-mauve hover:text-pink transition-colors"
          >
            Book Travel
          </a>
        </div>
      </div>
    </footer>
  );
}