"use client";
import React from "react";
import { HeroParallax } from "../animate-components/hero-parallax";
 import { products } from "@/lib/data";
export default function Hero() {
  return <HeroParallax products={products} />;
}