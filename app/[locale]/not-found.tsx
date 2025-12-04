'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">This page could not be found.</p>
        <Link href="/az" className="text-green-600 hover:underline">
          Go to home
        </Link>
      </div>
    </div>
  );
}

