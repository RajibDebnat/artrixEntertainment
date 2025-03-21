import type { Metadata } from "next";
import { Roboto, Merriweather, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const roboto = Roboto({
  weight: ["100", "200", "300", "400", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

const bebasNeue = Bebas_Neue({
  weight: ["400"], // Bebas Neue only has 400 weight
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "ARTRIX ENTERTAINMENT",
  description: `Your One-Stop Solution for Live Entertainment, Talent Partnerships, Event Programming, Brand Strategies, and More!
At Artrix Entertainment, we transform ideas into unforgettable experiences. Whether it's live events,
influencer campaigns, or brand activations, we bring passion, creativity, and expertise to every project.`,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} ${merriweather.variable} ${bebasNeue.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          storageKey="theme"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
