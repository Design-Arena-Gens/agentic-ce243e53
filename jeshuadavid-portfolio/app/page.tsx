"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Clapperboard,
  Film,
  Layers,
  MonitorPlay,
  PenTool,
  Share2,
  Sparkles,
  Workflow,
} from "lucide-react";
import { CinematicScene } from "@/components/CinematicScene";

const heroStats = [
  {
    label: "Narrative Cuts Delivered",
    value: "120+",
    descriptor: "Documentaries, branded films, music videos",
  },
  {
    label: "Average Turnaround",
    value: "48h",
    descriptor: "Agile, feedback-ready editorial workflows",
  },
  {
    label: "Platforms",
    value: "Linear · Social · Immersive",
    descriptor: "Story-first deployments",
  },
];

const featuredProjects = [
  {
    title: "Pulse of Neon City",
    role: "Lead Editor · Creative Finisher",
    year: 2024,
    stat: "1.2M organic views in 72h",
    description:
      "Electric hyperlapse-driven sequence stitching dancer POVs with neon urban top shots. Built tension through rhythmic match cuts and spectral sound design.",
    tags: ["Cyberpunk Festival", "Hybrid Film", "Dolby Vision"],
  },
  {
    title: "Waterline Reverie",
    role: "Narrative Editor · Color Story",
    year: 2023,
    stat: "Sundance Shortlist · 7 festival awards",
    description:
      "Documentary short weaving three generations of freedivers. Alternated archival 16mm texture with airy underwater macro to amplify the lineage.",
    tags: ["Short Documentary", "Archival Restoration", "Dolby Atmos"],
  },
  {
    title: "Signal // Noise",
    role: "Motion Editorial · Live Broadcast Lead",
    year: 2024,
    stat: "Global keynote · 4.3M live viewers",
    description:
      "Rapid narrative intercuts between live stage and pre-rendered volumetric data. Engineered edit suite with live graphics triggers for seamless cues.",
    tags: ["Global Launch", "Volumetric Capture", "Live Switching"],
  },
];

const processPillars = [
  {
    title: "Storyboarding the Emotion",
    body: "Translate raw footage into editorial beats, mapping tension and release across acts before the first cut lands on the timeline.",
    icon: PenTool,
  },
  {
    title: "Cinematic Rhythm Systems",
    body: "Build modular sequences that invite iteration: multi-track arrangements, layered SFX beds, and tempo-adaptive color palettes.",
    icon: Workflow,
  },
  {
    title: "Precision Finish",
    body: "Final polish with color-managed pipelines, motion graphics compositing, and delivery masters across broadcast and social specs.",
    icon: Sparkles,
  },
];

const toolkit = [
  {
    icon: Clapperboard,
    title: "Editorial Suites",
    body: "Adobe Premiere Pro, DaVinci Resolve, AVID Media Composer, Final Cut Pro X.",
  },
  {
    icon: MonitorPlay,
    title: "Motion & Finishing",
    body: "After Effects, Fusion, Cinema 4D, Red Giant, TCAM audio sweetening suites.",
  },
  {
    icon: Layers,
    title: "Color · HDR Pipelines",
    body: "ACES, Dolby Vision, Blackmagic panels, calibrated HDR10 / HLG monitoring.",
  },
  {
    icon: Share2,
    title: "Collaboration Stack",
    body: "Frame.io, Wipster, LucidLink, Live graded reviews, secure client portals.",
  },
];

const reelLinks = [
  {
    label: "2024 Narrative Reel",
    href: "https://vimeo.com/",
  },
  {
    label: "Commercial Montage",
    href: "https://vimeo.com/",
  },
];

const heroVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-primary">
      <div className="pointer-events-none absolute inset-0 gridlines opacity-25" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-28 px-6 pb-28 pt-20 md:px-10 lg:gap-32 lg:px-16">
        <section className="relative flex flex-col gap-16 lg:flex-row lg:items-center">
          <div className="flex-1">
            <motion.span
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-tech text-xs uppercase tracking-[0.6em] text-accent"
            >
              Video Editor · Visual Storyteller
            </motion.span>
            <motion.h1
              variants={heroVariants}
              initial="hidden"
              animate="show"
              className="mt-6 text-balance font-display text-5xl leading-[1.1] text-glow md:text-6xl lg:text-7xl"
            >
              JESHUA DAVID
            </motion.h1>
            <motion.p
              variants={heroVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mt-8 max-w-xl text-lg text-secondary md:text-xl"
            >
              I sculpt editorial experiences that breathe—pairing poetic pacing
              with technical precision. From festival-bound narratives to
              launch-day spectacle, every frame is tuned for emotion, rhythm,
              and resonance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center"
            >
              <a
                href="mailto:hello@jeshuadavid.studio"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-background transition hover:bg-white"
              >
                Begin a Project
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
              <div className="flex flex-wrap gap-3">
                {reelLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.35em] text-secondary transition hover:border-accent hover:text-primary"
                  >
                    <Film className="size-3" />
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 translate-y-10 scale-110 blur-3xl opacity-70">
              <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_50%_20%,rgba(0,209,255,0.5),transparent_60%)]" />
            </div>
            <CinematicScene />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="absolute -bottom-14 right-8 hidden w-64 rounded-2xl border border-white/10 bg-black/60 p-4 font-tech text-xs tracking-[0.22em] text-secondary backdrop-blur-md md:block"
            >
              <div className="flex items-center gap-3 text-accent">
                <Sparkles className="size-4" />
                REAL-TIME PREVIS
              </div>
              <p className="mt-3 text-[11px] leading-relaxed text-secondary/80">
                Dual-timeline workflow for cinematic pacing and client-ready
                reviews within hours.
              </p>
            </motion.div>
          </motion.div>
        </section>

        <section className="grid gap-8 rounded-[32px] border border-white/10 bg-surface/70 p-10 shadow-[0_0_60px_rgba(0,209,255,0.08)] md:grid-cols-3 md:p-14">
          {heroStats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <span className="font-tech text-[10px] uppercase tracking-[0.4em] text-secondary">
                {stat.label}
              </span>
              <span className="font-display text-4xl text-primary">
                {stat.value}
              </span>
              <p className="text-sm text-secondary">{stat.descriptor}</p>
            </motion.div>
          ))}
        </section>

        <section id="work" className="flex flex-col gap-12">
          <header className="flex flex-col gap-3">
            <span className="font-tech text-xs uppercase tracking-[0.45em] text-secondary">
              Featured Editorial Campaigns
            </span>
            <h2 className="font-display text-4xl text-primary md:text-5xl">
              Cinematic narratives crafted frame by frame.
            </h2>
          </header>
          <div className="grid gap-10">
            {featuredProjects.map((project) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.65 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-black/40 p-8 shadow-[0_0_40px_rgba(0,209,255,0.1)] transition hover:border-accent/40 hover:shadow-[0_0_60px_rgba(0,209,255,0.2)] md:p-12"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,209,255,0.2),transparent_60%)]" />
                </div>
                <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-secondary">
                      <span className="font-tech uppercase tracking-[0.28em]">
                        {project.year}
                      </span>
                      <span className="h-0.5 w-10 bg-accent/50" />
                      <span>{project.role}</span>
                    </div>
                    <h3 className="font-display text-3xl text-primary">
                      {project.title}
                    </h3>
                    <p className="max-w-2xl text-base text-secondary">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex gap-2 font-tech text-[10px] uppercase tracking-[0.32em] text-accent">
                    <Clapperboard className="size-4" />
                    {project.stat}
                  </div>
                </div>
                <div className="relative mt-8 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-secondary transition group-hover:border-accent/60 group-hover:text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 rounded-[32px] border border-white/10 bg-black/50 p-10 backdrop-blur-xl md:grid-cols-[1.1fr_1fr] md:gap-16 md:p-14">
          <div>
            <span className="font-tech text-xs uppercase tracking-[0.45em] text-secondary">
              Editorial Methodology
            </span>
            <h2 className="mt-4 font-display text-4xl text-primary md:text-5xl">
              Methodical, cinematic, relentlessly human.
            </h2>
            <p className="mt-6 text-base text-secondary">
              Every engagement is architected around clarity and emotional
              precision—balancing the aesthetics of cinema with the practical
              tempo of agency deliverables.
            </p>
            <div className="mt-10 flex flex-col gap-4 text-sm text-secondary">
              <div className="flex items-center gap-3">
                <div className="size-2 rounded-full bg-accent" />
                Remote-first, on-prem ready. Streamlined cloud dailies and synced
                color-managed handoffs.
              </div>
              <div className="flex items-center gap-3">
                <div className="size-2 rounded-full bg-accent-secondary/70" />
                Trusted collaborator for directors, brands, and agencies looking
                for editorial partners rather than vendors.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {processPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                className="ambient-blur relative overflow-hidden rounded-3xl border border-white/10 p-6"
              >
                <div className="absolute -top-32 right-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(0,209,255,0.08),transparent_70%)]" />
                <pillar.icon className="size-5 text-accent" />
                <h3 className="mt-4 font-display text-2xl text-primary">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm text-secondary">{pillar.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-10">
          <header className="flex flex-col gap-3">
            <span className="font-tech text-xs uppercase tracking-[0.45em] text-secondary">
              Capabilities & Infrastructure
            </span>
            <h2 className="font-display text-4xl text-primary md:text-5xl">
              Built for high-volume, high-touch storytelling.
            </h2>
          </header>
          <div className="grid gap-6 sm:grid-cols-2">
            {toolkit.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="relative overflow-hidden rounded-[26px] border border-white/10 bg-surface/60 p-6 shadow-[0_0_30px_rgba(0,209,255,0.08)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-20" />
                <card.icon className="relative z-10 size-6 text-accent" />
                <div className="relative z-10 mt-4 font-display text-2xl">
                  {card.title}
                </div>
                <p className="relative z-10 mt-3 text-sm text-secondary">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[36px] border border-white/15 bg-black/60 p-12 text-center shadow-[0_0_100px_rgba(0,209,255,0.18)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(0,209,255,0.2),transparent_65%)]" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="font-tech text-xs uppercase tracking-[0.5em] text-secondary">
              Let&apos;s Cut
            </span>
            <h2 className="mt-6 font-display text-4xl text-primary md:text-5xl">
              Ready to craft your next editorial story?
            </h2>
            <p className="mt-4 text-base text-secondary">
              From first assembly to final delivery, I partner with directors,
              producers, and creative leads to orchestrate bold narrative
              experiences that resonate long after the credits roll.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@jeshuadavid.studio"
                className="group inline-flex items-center gap-3 rounded-full border border-accent/60 bg-accent px-8 py-3 font-tech text-xs uppercase tracking-[0.4em] text-background transition hover:bg-white"
              >
                Book Editorial Intensive
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
              <a
                href="https://cal.com/"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-tech text-[10px] uppercase tracking-[0.35em] text-secondary transition hover:border-accent hover:text-primary"
              >
                Schedule Chemistry Call
              </a>
            </div>
          </div>
        </section>

        <footer className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-10 text-xs text-secondary md:flex-row">
          <div className="font-tech uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} JESHUA DAVID
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 font-tech uppercase tracking-[0.3em]">
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://vimeo.com/">Vimeo</a>
            <a href="https://www.imdb.com/">IMDb</a>
            <a href="https://www.linkedin.com/">LinkedIn</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
