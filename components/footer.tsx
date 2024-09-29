import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 text-xs block">
        &copy; 2024 Lawton Hogan. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router and Server Actions), TypeScript,
        TailwindCss, Framer Motion, React Email, Resend, Vercel Hosting.
      </p>
    </footer>
  );
}
