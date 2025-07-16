import Image from "next/image";

export default function Home() {
  return (
    <div className="main-container flex flex-col items-center justify-center min-h-screen text-center">
      <div className="max-w-2xl w-full flex flex-col items-center gap-8 py-16">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">APAI</h1>
          <p className="text-lg text-text-secondary mb-6">
            Effortlessly monitor your APIs, track uptime, performance, and get instant alerts—all in a modern, beautiful dashboard with APAI.
          </p>
        </div>
        <div className="flex items-center justify-center mb-8">
          {/* Minimalist square pie logo with a slice cut out and a crumb */}
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            {/* Square background */}
            <rect x="8" y="8" width="48" height="48" rx="12" fill="#23272e" />
            {/* Pie shape (3/4 circle) */}
            <path d="M32 32 L32 16 A16 16 0 1 1 16 32 Z" fill="#7ee787" />
            {/* Missing slice (wedge) */}
            <path d="M32 32 L32 16 A16 16 0 0 1 48 32 Z" fill="#23272e" />
            {/* Crumb (small circle near the missing slice) */}
            <circle cx="52" cy="20" r="2.5" fill="#7ee787" />
          </svg>
        </div>
        <a
          href="/dashboard"
          className="inline-block bg-accent text-[#18181b] font-semibold rounded px-8 py-3 text-lg shadow transition hover:bg-accent-muted focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Go to Dashboard
        </a>
      </div>
      <footer className="mt-auto text-text-secondary text-sm py-8 opacity-70">
        &copy; {new Date().getFullYear()} APAI. All rights reserved.
      </footer>
    </div>
  );
}
