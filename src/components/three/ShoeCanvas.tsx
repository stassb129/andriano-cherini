"use client";

import dynamic from "next/dynamic";

/** Client-only entry so three.js never runs (or ships) on the server. */
const ShoeCanvas = dynamic(() => import("./ShoeScene"), {
  ssr: false,
  loading: () => null,
});

export default ShoeCanvas;
