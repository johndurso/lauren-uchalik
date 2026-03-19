"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-mantle border-b border-surface0 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <Link href="/" className="text-mauve font-bold text-xl tracking-tight hover:text-pink transition-colors">
          Lauren Uchalik
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-subtext1 hover:text-mauve transition-colors font-medium">
            Home
          </Link>
          <Link href="/comedy" className="text-subtext1 hover:text-peach transition-colors font-medium">
            Comedy
          </Link>
          <Link href="/travel" className="text-subtext1 hover:text-teal transition-colors font-medium">
            Travel
          </Link>
          <a
            href="https://app.tern.travel/public/forms/w_NEn_ZKXEve3Ricj8Z0VA/responses/new"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-mauve text-crust font-semibold px-4 py-2 rounded-lg hover:bg-pink transition-colors text-sm"
          >
            Book Travel
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-subtext1 hover:text-mauve transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-mantle border-t border-surface0 px-6 pb-4 flex flex-col gap-4">
          <Link href="/" onClick={() => setOpen(false)} className="text-subtext1 hover:text-mauve transition-colors font-medium pt-4">
            Home
          </Link>
          <Link href="/comedy" onClick={() => setOpen(false)} className="text-subtext1 hover:text-peach transition-colors font-medium">
            Comedy
          </Link>
          <Link href="/travel" onClick={() => setOpen(false)} className="text-subtext1 hover:text-teal transition-colors font-medium">
            Travel
          </Link>
          <a
            href="https://app.tern.travel/public/forms/w_NEn_ZKXEve3Ricj8Z0VA/responses/new"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-mauve text-crust font-semibold px-4 py-2 rounded-lg hover:bg-pink transition-colors text-sm text-center"
          >
            Book Travel
          </a>
        </div>
      )}
    </nav>
  );
}