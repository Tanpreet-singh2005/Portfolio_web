"use client";

import dynamic from "next/dynamic";

// Must be a Client Component to use ssr: false
const ScrollBackground = dynamic(() => import("@/components/ScrollBackground"), {
  ssr: false,
});

export default function ScrollBackgroundLoader() {
  return <ScrollBackground />;
}
