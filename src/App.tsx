import React, { useState } from "react"

// Photos
import hayleyPhoto from "@/imports/Hayley-compressed.jpg"
import zinniasGarden from "@/imports/zinnias-garden-compressed.jpg"

// Botanical illustrations by Janet Rutherford
import orangeZinnia from "@/imports/orange-zinnia-janet-rutherford-crop.png"
import pinkZinnia from "@/imports/pink-zinnia-janet-rutherford.png"
import pinkZinniaPhoto from "@/imports/pink-zinnia-crop-compressed-1.png"
import wateringCan from "@/imports/watering-can-janet-rutherford.png"
import jrInitials from "@/imports/jr-initials.png"

// Roots & Rivers covers
import rr2025 from "@/imports/Roots___Rivers_2025_Annual_Report.jpg"
import rr2024 from "@/imports/Roots___Rivers_2024_Annual_Report.jpg"
import rr2023 from "@/imports/Roots___Rivers_2023_Annual_Report.jpg"
import rr2022 from "@/imports/Roots___Rivers_2022_Annual_Report.jpg"
import rr20182021 from "@/imports/Roots___Rivers_2018-2021_Impact_Repor.jpg"

// WGSI covers
import wgsiOAECommunique from "@/imports/WGSI_OpenAccess-Energy-Communique_2016_EN.png"
import wgsiOAEBrief from "@/imports/WGSI_OpenAccess-Energy-Brief_2016_EN.png"
import wgsiOAEBlueprint from "@/imports/WGSI_OpenAccess-Energy-Blueprint_2017_EN.png"
import wgsiOAECop22 from "@/imports/WGSI_OpenAccess-Energy-COP22-Brief_2016_EN.png"
import wgsiGenSDGBlueprint from "@/imports/WGSI_Generation-SDG-Blueprint_2018_EN.png"
import wgsiGenSDGCommunique from "@/imports/WGSI_Generation-SDG-Communique_2018_EN.png"
import wgsiNRCan from "@/imports/NRCan-WGSI-WISE_Frontier-Science-Roundtable-Brief_2017_EN.png"
import wgsiYouth from "@/imports/WGSI-SDSNCanada-TIG-YCL_SDSN-Canada-Youth-Consultation-on-Youth-Engagement_2019_EN.png"
import wgsiTogether from "@/imports/TogetherEnsemble2020_ConferenceReport_EN.png"
import aNewWave from "@/imports/A_New_Wave.jpg"
import generationSdg from "@/imports/generation-sdg-summit.jpg"
import openAccessEnergy from "@/imports/open-access-energy-summit.jpg"

// Hayley Rutherford Consulting covers
import hrNationalGathering from "@/imports/SI-Canada_Social-R-and-D-National-Gathering-Report_2021_EN.png"
import hrInvestmentReadiness from "@/imports/Social_RD_for_Investment_Readiness_Brief.png"

// ─── Data ─────────────────────────────────────────────────────────────────────

const PUB_CATEGORIES: {
  label: string
  items: {
    title: string
    year: string
    type: string
    role: string
    cover: string
    url?: string
    categoryOverride?: string
  }[]
}[] = [
  {
    label: "Roots & Rivers",
    items: [
      {
        title: "Annual Report 2025",
        year: "2025",
        type: "Annual Report",
        role: "Author",
        cover: rr2025,
        url: "https://drive.proton.me/urls/848YYPFQSM#omRBaW1oxZLC",
      },
      {
        title: "Annual Report 2024",
        year: "2024",
        type: "Annual Report",
        role: "Author",
        cover: rr2024,
        url: "https://drive.proton.me/urls/1PS1G2WBM8#CwCREBJGLw9u",
      },
      {
        title: "Annual Report 2023",
        year: "2023",
        type: "Annual Report",
        role: "Author",
        cover: rr2023,
        url: "https://drive.proton.me/urls/6NH46TVVJ8#BIOES6XZv88q",
      },
      {
        title: "Annual Report 2022",
        year: "2022",
        type: "Annual Report",
        role: "Author",
        cover: rr2022,
        url: "https://drive.proton.me/urls/Q1V5JH7W74#Rmr4HohvzHz2",
      },
      {
        title: "Impact Report 2018–2021",
        year: "2021",
        type: "Impact Report",
        role: "Author",
        cover: rr20182021,
        url: "https://drive.proton.me/urls/DSJGPTB82G#q2YrvRCgLUVC",
      },
    ],
  },
  {
    label: "WGSI",
    items: [
      {
        title: "Together / Ensemble Conference Report",
        year: "2020",
        type: "Conference Report",
        role: "Author",
        cover: wgsiTogether,
        url: "https://drive.proton.me/urls/MRYFDCNC5C#jQCA11LNpMTz",
      },
      {
        title: "Youth Consultation on Youth Engagement",
        year: "2019",
        type: "Report",
        role: "Author",
        cover: wgsiYouth,
        url: "https://drive.proton.me/urls/CCS5JN43VW#BQWs86O1WeJ9",
      },
      {
        title: "Generation SDG Blueprint",
        year: "2018",
        type: "Blueprint",
        role: "Editor",
        cover: wgsiGenSDGBlueprint,
        url: "https://drive.proton.me/urls/RX5Y86TP1R#4wFzwnDhbeet",
      },
      {
        title: "Generation SDG Communiqué",
        year: "2018",
        type: "Conference Report",
        role: "Editor",
        cover: wgsiGenSDGCommunique,
        url: "https://drive.proton.me/urls/JGQRYN597C#0BaTByxdsQ2v",
      },
      {
        title: "Frontier Science Roundtable",
        year: "2017",
        type: "Conference Report",
        role: "Author",
        cover: wgsiNRCan,
        url: "https://drive.proton.me/urls/0N8DXQZYAG#OXYxhypMgUxa",
        categoryOverride: "WGSI · WISE · NRCan",
      },
      {
        title: "Open Access Energy Blueprint",
        year: "2017",
        type: "Blueprint",
        role: "Editor",
        cover: wgsiOAEBlueprint,
        url: "https://drive.proton.me/urls/RFVZ3PKV5M#PJm927XsLSqY",
      },
      {
        title: "Open Access Energy Brief",
        year: "2016",
        type: "Brief",
        role: "Editor",
        cover: wgsiOAEBrief,
        url: "https://drive.proton.me/urls/ZS9W6RGVDC#q8TT9FGGySoN",
      },
      {
        title: "Open Access Energy COP22 Brief",
        year: "2016",
        type: "Event Brief",
        role: "Editor",
        cover: wgsiOAECop22,
        url: "https://drive.proton.me/urls/R7X0YZ7SCR#bCjYzZcohxez",
      },
      {
        title: "Open Access Energy Communiqué",
        year: "2016",
        type: "Conference Report",
        role: "Editor",
        cover: wgsiOAECommunique,
        url: "https://drive.proton.me/urls/G98KP4SEAR#pwoNwhPVcLEm",
      },
    ],
  },
  {
    label: "SI Canada · Hayley Rutherford Consulting",
    items: [
      {
        title: "Social R&D for Investment Readiness",
        year: "2021",
        type: "Event Brief",
        role: "Author",
        cover: hrInvestmentReadiness,
        url: "https://drive.proton.me/urls/V39G3SCQTM#AVa4KlY9Kcmz",
      },
      {
        title: "Social R&D National Gathering Report",
        year: "2021",
        type: "Conference Report",
        role: "Author",
        cover: hrNationalGathering,
        url: "https://drive.proton.me/urls/YH2PSWPV50#WqjcjoHsoQth",
      },
    ],
  },
]

const VIDEOS: {
  id: number
  title: string
  event: string
  year: string
  role: string
  duration: string
  thumb: string
  youtubeId: string
  url?: string
  kind?: string
}[] = [
  {
    id: 1,
    title:
      "Building a Survivor-Led Project: Empowered Caregivers Project Development Panel (Process & Lessons)",
    event: "Restorations Second Stage Homes · Roots & Rivers",
    year: "2026",
    role: "Design & Moderator",
    duration: "",
    thumb: "https://img.youtube.com/vi/rR6z1X46pvE/maxresdefault.jpg",
    youtubeId: "rR6z1X46pvE",
  },
  {
    id: 2,
    title: "Interview with Hayley Rutherford",
    event: "SETSI · Roots & Rivers",
    year: "2024",
    role: "Interviewee",
    duration: "",
    thumb: "https://img.youtube.com/vi/C8k7kJq57wM/maxresdefault.jpg",
    youtubeId: "C8k7kJq57wM",
  },
  {
    id: 3,
    title: "Social R&D Booster Pack: Preparing Session",
    event: "Social Innovation Canada · Roots & Rivers",
    year: "2021",
    role: "Design & Facilitation",
    duration: "",
    thumb: "https://img.youtube.com/vi/5QNEjw_GebY/maxresdefault.jpg",
    youtubeId: "5QNEjw_GebY",
  },
  {
    id: 4,
    title: "Social R&D Booster Pack: Thinking Session",
    event: "Social Innovation Canada · Roots & Rivers",
    year: "2021",
    role: "Design & Facilitation",
    duration: "",
    thumb: "https://img.youtube.com/vi/P6qtBTeZfjc/maxresdefault.jpg",
    youtubeId: "P6qtBTeZfjc",
  },
  {
    id: 5,
    title: "CMHC Solutions Lab Series | Reflections from the Lab",
    event: "Social Innovation Canada & CMHC · Hayley Rutherford Consulting",
    year: "2021",
    role: "Moderator",
    duration: "",
    thumb: "https://img.youtube.com/vi/15q6O3IhYbA/maxresdefault.jpg",
    youtubeId: "15q6O3IhYbA",
  },
  {
    id: 6,
    title: "CMHC Solutions Lab Series | Reflections from the Lab",
    event: "Social Innovation Canada & CMHC · Hayley Rutherford Consulting",
    year: "2021",
    role: "Moderator",
    duration: "",
    thumb: "https://img.youtube.com/vi/ajodc4wtg3o/maxresdefault.jpg",
    youtubeId: "ajodc4wtg3o",
  },
  {
    id: 7,
    title:
      "CMHC Solutions Lab Series | Climate Compatible Community and Affordable Housing",
    event: "Social Innovation Canada & CMHC · Hayley Rutherford Consulting",
    year: "2021",
    role: "Moderator",
    duration: "",
    thumb: "https://img.youtube.com/vi/__GzQY27TtY/maxresdefault.jpg",
    youtubeId: "__GzQY27TtY",
  },
  {
    id: 8,
    title: "CMHC Solutions Lab Series | Financialization of Housing",
    event: "Social Innovation Canada & CMHC · Hayley Rutherford Consulting",
    year: "2021",
    role: "Moderator",
    duration: "",
    thumb: "https://img.youtube.com/vi/UnxcUMbrpVM/maxresdefault.jpg",
    youtubeId: "UnxcUMbrpVM",
  },
  {
    id: 9,
    title: "Code for Canada Showcase — Waterloo Region Votes",
    event: "Code for Canada · CivicTechWR",
    year: "2019",
    role: "Presenter",
    duration: "",
    thumb: "https://img.youtube.com/vi/P6dbSsYuhVM/maxresdefault.jpg",
    youtubeId: "P6dbSsYuhVM",
  },
  {
    id: 10,
    title: "Why Aren't People Voting in Municipal Elections?",
    event: "CBC News Network · CivicTechWR",
    year: "2018",
    role: "Interviewee",
    duration: "",
    thumb: "https://img.youtube.com/vi/qEiy_tiN41w/maxresdefault.jpg",
    youtubeId: "qEiy_tiN41w",
  },
  {
    id: 11,
    title: "5 Strategies for Entrepreneurs Who Want to Leave",
    event:
      "Venture for Canada · New Wave of Entrepreneurship Podcast · Roots & Rivers",
    year: "2025",
    role: "Interviewee",
    duration: "",
    thumb: aNewWave,
    youtubeId: "",
    kind: "podcast",
    url: "https://perspectives.ventureforcanada.ca/podcast/5-strategies-entrepreneur-leave-annelies-tjebbes-hayley-rutherford",
  },
]

// ─── Shared ───────────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: string }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "0.72rem",
        fontWeight: 500,
        letterSpacing: "0.18em",
        color: "var(--muted-foreground)",
        textTransform: "uppercase",
        marginBottom: "2rem",
      }}
    >
      {children}
    </div>
  )
}

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const links = [
    { label: "About", id: "about" },
    { label: "Work", id: "work-growing" },
    { label: "Publications", id: "publications" },
    { label: "Media", id: "videos" },
    { label: "Connect", id: "connect" },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        className="flex items-center justify-between px-6 py-4"
        style={{ maxWidth: "100%" }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.95rem",
            fontWeight: 400,
            color: "var(--foreground)",
          }}
        >
          Hayley Rutherford
        </span>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-7">
          {links.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  fontWeight: 400,
                  color: "var(--muted-foreground)",
                }}
                className="hover:text-[var(--foreground)] transition-colors duration-200 cursor-pointer"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1.5px",
              background: "var(--foreground)",
              transition: "all 0.2s",
              transform: menuOpen ? "translateY(5px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1.5px",
              background: "var(--foreground)",
              transition: "all 0.2s",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1.5px",
              background: "var(--foreground)",
              transition: "all 0.2s",
              transform: menuOpen ? "translateY(-5px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            background: "rgba(255,255,255,0.98)",
          }}
          className="md:hidden"
        >
          {links.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="w-full text-left px-6 py-4 cursor-pointer hover:bg-[var(--muted)] transition-colors duration-150"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                fontWeight: 300,
                color: "var(--foreground)",
                borderBottom: "1px solid var(--border)",
                display: "block",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="two-col" style={{ minHeight: "100svh" }}>
      {/* Left — text + flowers */}
      <div className="section-pad flex flex-col justify-center py-16">
        <h1
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "var(--foreground)",
            marginBottom: "1.25rem",
            letterSpacing: "-0.01em",
          }}
        >
          Hayley Rutherford
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 2vw, 1.3rem)",
            fontWeight: 300,
            lineHeight: 1.55,
            color: "var(--foreground)",
            maxWidth: "420px",
            marginBottom: "1.25rem",
          }}
        >
          Connector, convenor, and communicator working in service of social
          purpose.
        </p>

        {/* Flower cluster */}
        <div
          className="relative"
          style={{ width: "min(340px, 90vw)", height: "min(340px, 90vw)" }}
        >
          <img
            src={pinkZinniaPhoto}
            alt="Pink zinnia from Hayley's community garden"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "68%",
              height: "68%",
              objectFit: "contain",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "42%",
              left: "38%",
              width: "40%",
              height: "40%",
            }}
          >
            <img
              src={orangeZinnia}
              alt="Orange zinnia illustration by Janet Rutherford"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
            <img
              src={jrInitials}
              alt="JR initials"
              style={{
                position: "absolute",
                bottom: "2%",
                right: "-2%",
                width: "22%",
                opacity: 0.6,
              }}
            />
          </div>
        </div>
      </div>

      {/* Right — portrait */}
      <div
        className="photo-panel relative overflow-hidden"
        style={{ background: "#f0eeeb" }}
      >
        <img
          src={hayleyPhoto}
          alt="Hayley Rutherford smiling, wearing a terracotta orange top"
          className="w-full h-full object-cover object-top"
          style={{ minHeight: "320px" }}
        />
      </div>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="two-col">
      {/* Left — garden photo (top on mobile) */}
      <div
        className="photo-panel relative overflow-hidden"
        style={{ background: "#e8ebe5" }}
      >
        <img
          src={zinniasGarden}
          alt="Zinnias and flowers growing in Hayley's community garden plot"
          className="w-full h-full object-cover object-top"
          style={{ minHeight: "320px" }}
        />
      </div>

      {/* Right — text */}
      <div className="section-pad flex flex-col justify-center py-16">
        <SectionLabel>About</SectionLabel>
        <h2
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1.7rem, 4vw, 3rem)",
            fontWeight: 300,
            lineHeight: 1.2,
            color: "var(--foreground)",
            letterSpacing: "-0.01em",
            marginBottom: "2rem",
          }}
        >
          I am a curiosity-driven connector, convenor, and communicator.
        </h2>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1rem",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "var(--foreground)",
          }}
          className="space-y-5"
        >
          <p>
            Since 2013 I have been in and around social purpose
            organizations, across sectors and sizes. I like knowing what's going
            on and why things are the way they are.
          </p>
          <p>
            That curiosity has led me to strategic planning, evaluation,
            facilitation, business development, strategic partnerships, event
            design, and editorial work.
          </p>
          <p>
            One of the great joys in my life has been using what I have learned
            and who I know to unlock opportunities for others.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── Work: Growing ────────────────────────────────────────────────────────────

function WorkGrowing() {
  return (
    <section id="work-growing" className="two-col">
      {/* Left — text */}
      <div className="section-pad flex flex-col justify-center py-16">
        <SectionLabel>Work</SectionLabel>
        <h2
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "var(--foreground)",
            letterSpacing: "-0.02em",
            marginBottom: "1.25rem",
          }}
        >
          Growing
        </h2>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1rem",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "var(--foreground)",
            maxWidth: "480px",
          }}
          className="space-y-4"
        >
          <p>
            I have spent my career on small teams where wearing many hats is
            what gets things done. I balance ambition with a practical focus
            on what can be achieved now.
          </p>
          <p>
            Rather than doing something to do it once, I look for how work
            can become a sustainable system that supports the team as it grows.
          </p>
        </div>
      </div>

      {/* Right — watering can */}
      <div className="flex items-center justify-center px-8 py-12">
        <img
          src={wateringCan}
          alt="Illustrated yellow watering can, by Janet Rutherford"
          style={{ width: "min(380px, 85%)", objectFit: "contain" }}
        />
      </div>
    </section>
  )
}

// ─── Work: Convening ──────────────────────────────────────────────────────────

function WorkConvening() {
  return (
    <section
      id="work-convening"
      className="two-col"
      style={{ background: "var(--muted)" }}
    >
      {/* Left — text */}
      <div className="section-pad flex flex-col justify-center py-16">
        <SectionLabel>Work</SectionLabel>
        <h2
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "var(--foreground)",
            letterSpacing: "-0.02em",
            marginBottom: "1.25rem",
          }}
        >
          Convening
        </h2>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1rem",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "var(--foreground)",
            maxWidth: "480px",
          }}
          className="space-y-4"
        >
          <p>
            I've worked collaboratively to bring people together in-person and
            online for local, national, and international conferences, summits,
            and other collaborative processes.
          </p>
          <p>
            I bring thought and care to who is invited and how they feel when
            they walk through the door. Through thoughtful co-design,
            recruitment, programming, and the development of pre-event briefs, I
            help build a floor of shared understanding so participants can
            contribute in the ways that are most meaningful to them.
          </p>
          <p>
            Following events, I develop knowledge outputs and strategic
            partnerships to ensure the impact continues.
          </p>
        </div>
      </div>

      {/* Right — two summit photos */}
      <div className="section-pad flex flex-col justify-center gap-4 py-12">
        <div className="overflow-hidden">
          <img
            src={generationSdg}
            alt="Group photo from a WGSI Generation SDG Summit"
            className="w-full object-cover"
            style={{ maxHeight: "280px" }}
          />
        </div>
        <div className="overflow-hidden">
          <img
            src={openAccessEnergy}
            alt="Group photo from a WGSI Open Access Energy Summit"
            className="w-full object-cover"
            style={{ maxHeight: "280px" }}
          />
        </div>
      </div>
    </section>
  )
}

// ─── Work: Supporting ─────────────────────────────────────────────────────────

function WorkSupporting() {
  return (
    <section id="work-supporting" className="two-col">
      {/* Left — text */}
      <div className="section-pad flex flex-col justify-center py-16">
        <SectionLabel>Work</SectionLabel>
        <h2
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "var(--foreground)",
            letterSpacing: "-0.02em",
            marginBottom: "1.25rem",
          }}
        >
          Supporting
        </h2>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1rem",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "var(--foreground)",
            maxWidth: "480px",
          }}
          className="space-y-4"
        >
          <p>
            I work alongside community organizations, nonprofits, charities, and
            social enterprises at important moments of change. This can include
            strategy, program evaluation, and other organizational supports.
          </p>
          <p>
            My role is to get grounded in each team's realities, bring an
            external perspective, and support people as they make decisions and
            move through the work ahead.
          </p>
        </div>
      </div>

      {/* Right — pink zinnia illustration */}
      <div className="flex items-center justify-center px-8 py-12">
        <div style={{ position: "relative", width: "min(340px, 80%)" }}>
          <img
            src={pinkZinnia}
            alt="Pink zinnia illustration by Janet Rutherford"
            style={{ width: "100%", objectFit: "contain" }}
          />
          <img
            src={jrInitials}
            alt="JR initials"
            style={{
              position: "absolute",
              bottom: "8%",
              right: "16%",
              width: "12%",
              opacity: 0.6,
            }}
          />
        </div>
      </div>
    </section>
  )
}

// ─── Work: Communicating ──────────────────────────────────────────────────────

function WorkCommunicating() {
  return (
    <section id="work-communicating" style={{ background: "var(--muted)" }}>
      <div className="section-pad py-16">
        <SectionLabel>Work</SectionLabel>
        <h2
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "var(--foreground)",
            letterSpacing: "-0.02em",
            marginBottom: "1.25rem",
          }}
        >
          Communicating
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1rem",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "var(--foreground)",
            maxWidth: "560px",
            marginBottom: "1rem",
          }}
        >
          Communication has been part of all of my work, from social media,
          blogs, and newsletters to reports, publications, and event materials.
          I've led writing and editing for organizations and clients.
        </p>

        {/* Publications */}
        <div id="publications" style={{ marginBottom: "4rem" }}>
          <h3
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.4rem",
              fontWeight: 300,
              color: "var(--foreground)",
              marginBottom: "2rem",
              letterSpacing: "-0.01em",
            }}
          >
            Publications
          </h3>
          <Publications />
        </div>

        {/* Videos */}
        <div id="videos">
          <h3
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.4rem",
              fontWeight: 300,
              color: "var(--foreground)",
              marginBottom: "0.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            Speaking &amp; Events
          </h3>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              fontWeight: 300,
              color: "var(--muted-foreground)",
              marginBottom: "2rem",
            }}
          >
            I've represented organizations I've worked and volunteered with by
            moderating panels, hosting events, and media engagement. Sometimes
            this is about showcasing the work of others and at others speaking
            to my experience and expertise.
          </p>
          <Videos />
        </div>
      </div>
    </section>
  )
}

// ─── Publications ─────────────────────────────────────────────────────────────

const ALL_PUBS = PUB_CATEGORIES.flatMap((cat) =>
  cat.items.map((item) => ({
    ...item,
    category: item.categoryOverride ?? cat.label,
  })),
).sort((a, b) => Number(b.year) - Number(a.year))

function Publications() {
  return (
    <div
      className="grid gap-5"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))" }}
    >
      {ALL_PUBS.map((pub) => (
        <PubCard key={pub.title} pub={pub} />
      ))}
    </div>
  )
}

type PubItem = {
  title: string
  year: string
  type: string
  role: string
  cover: string
  category: string
  url?: string
  categoryOverride?: string
}

function PubCard({ pub }: { pub: PubItem }) {
  const [hovered, setHovered] = useState(false)
  const content = (
    <>
      <div
        style={{
          aspectRatio: "3/4",
          overflow: "hidden",
          background: "var(--border)",
          boxShadow: hovered
            ? "6px 10px 28px rgba(0,0,0,0.22)"
            : "3px 5px 14px rgba(0,0,0,0.12)",
          transform: hovered
            ? "translateY(-5px) rotate(-0.5deg)"
            : "translateY(0) rotate(0)",
          transition: "all 0.3s ease",
          position: "relative",
        }}
      >
        <img
          src={pub.cover}
          alt={`Cover of ${pub.title}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "6px",
            background:
              "linear-gradient(to right, rgba(0,0,0,0.18), transparent)",
            pointerEvents: "none",
          }}
        />
      </div>
      <div>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.6rem",
            letterSpacing: "0.08em",
            color: "var(--muted-foreground)",
            textTransform: "uppercase",
            marginBottom: "0.15rem",
          }}
        >
          {pub.category} · {pub.year}
        </div>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.8rem",
            fontWeight: 400,
            color: "var(--foreground)",
            lineHeight: 1.3,
            marginBottom: "0.2rem",
          }}
        >
          {pub.title}
        </div>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.62rem",
            color:
              pub.role === "Author"
                ? "var(--primary)"
                : "var(--muted-foreground)",
            fontWeight: 500,
          }}
        >
          {pub.role}
        </div>
      </div>
    </>
  )
  const sharedStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
    textDecoration: "none",
  }
  if (pub.url) {
    return (
      <a
        href={pub.url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={sharedStyle}
      >
        {content}
      </a>
    )
  }
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={sharedStyle}
    >
      {content}
    </div>
  )
}

// ─── Videos ───────────────────────────────────────────────────────────────────

function Videos() {
  const [playing, setPlaying] = useState<number | null>(null)
  return (
    <div
      className="grid gap-6"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}
    >
      {[...VIDEOS]
        .sort((a, b) => Number(b.year) - Number(a.year))
        .map((video) => {
          if (video.kind === "podcast") {
            return (
              <a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
                className="group"
              >
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "16/9", background: "#111" }}
                >
                  {video.thumb && (
                    <img
                      src={video.thumb}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      style={{ filter: "brightness(0.82)" }}
                    />
                  )}
                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.58rem",
                      letterSpacing: "0.1em",
                      background: "rgba(0,0,0,0.55)",
                      color: "white",
                      padding: "0.2rem 0.55rem",
                      textTransform: "uppercase",
                    }}
                  >
                    Podcast
                  </div>
                  <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.72rem",
                        color: "white",
                      }}
                    >
                      Listen →
                    </span>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.68rem",
                      letterSpacing: "0.06em",
                      color: "var(--primary)",
                      marginBottom: "0.3rem",
                      textTransform: "uppercase",
                    }}
                  >
                    {video.event} · {video.year}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9rem",
                      fontWeight: 400,
                      color: "var(--foreground)",
                      lineHeight: 1.35,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {video.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.72rem",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {video.role}
                  </div>
                </div>
              </a>
            )
          }

          return (
            <div key={video.id}>
              <div
                className="relative overflow-hidden cursor-pointer"
                style={{ aspectRatio: "16/9", background: "#2d4a2f" }}
                onClick={() =>
                  setPlaying(playing === video.id ? null : video.id)
                }
              >
                {playing === video.id && video.youtubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                    className="w-full h-full"
                    allow="autoplay; fullscreen"
                    title={video.title}
                  />
                ) : (
                  <>
                    <img
                      src={video.thumb}
                      alt={`Thumbnail for ${video.title}`}
                      className="w-full h-full object-cover"
                      style={{ filter: "brightness(0.75)" }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          background: "rgba(255,255,255,0.92)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="#2d4a2f"
                          style={{ marginLeft: "2px" }}
                        >
                          <polygon points="3,1 15,8 3,15" />
                        </svg>
                      </div>
                    </div>
                    {video.duration && (
                      <div
                        style={{
                          position: "absolute",
                          bottom: "8px",
                          right: "8px",
                          fontFamily: "var(--font-body)",
                          fontSize: "0.6rem",
                          background: "rgba(0,0,0,0.65)",
                          color: "white",
                          padding: "0.15rem 0.45rem",
                        }}
                      >
                        {video.duration}
                      </div>
                    )}
                  </>
                )}
              </div>
              <div style={{ marginTop: "0.75rem" }}>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.68rem",
                    letterSpacing: "0.06em",
                    color: "var(--primary)",
                    marginBottom: "0.3rem",
                    textTransform: "uppercase",
                  }}
                >
                  {video.event} · {video.year}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    fontWeight: 400,
                    color: "var(--foreground)",
                    lineHeight: 1.35,
                    marginBottom: "0.25rem",
                  }}
                >
                  {video.title}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.72rem",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {video.role}
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

// ─── Connect ──────────────────────────────────────────────────────────────────

function Connect() {
  return (
    <section id="connect" className="two-col">
      {/* Left — text */}
      <div
        className="section-pad flex flex-col justify-between py-16"
        style={{ minHeight: "480px" }}
      >
        <div>
          <h2
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              color: "var(--foreground)",
              letterSpacing: "-0.02em",
              marginBottom: "2.5rem",
            }}
          >
            Let's connect
          </h2>
          <div className="space-y-3">
            <a
              href="mailto:hello@hayleyrutherford.com"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                fontWeight: 300,
                color: "var(--foreground)",
                display: "block",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
              className="hover:text-[var(--primary)] transition-colors duration-200"
            >
              hello@hayleyrutherford.com
            </a>
            <a
              href="https://linkedin.com/in/hayleyrutherford"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                fontWeight: 300,
                color: "var(--foreground)",
                display: "block",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
              className="hover:text-[var(--primary)] transition-colors duration-200"
            >
              linkedin.com/in/hayleyrutherford
            </a>
          </div>
        </div>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.8rem",
            fontWeight: 300,
            lineHeight: 1.65,
            color: "var(--muted-foreground)",
            maxWidth: "360px",
            marginTop: "3rem",
          }}
        >
          Flower photos are my own and feature my plot at the community garden.
          <br />
          The illustrations are by my very talented mom.
        </p>
      </div>

      {/* Right — flower cluster */}
      <div
        className="relative flex items-center justify-center px-8 py-16"
        style={{ background: "var(--card)", minHeight: "360px" }}
      >
        <div
          className="relative"
          style={{ width: "min(320px, 80vw)", height: "min(360px, 90vw)" }}
        >
          <img
            src={pinkZinniaPhoto}
            alt="Pink zinnia from Hayley's community garden"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "72%",
              height: "72%",
              objectFit: "contain",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "4%",
              width: "54%",
              height: "54%",
            }}
          >
            <img
              src={orangeZinnia}
              alt="Orange zinnia illustration by Janet Rutherford"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
            <img
              src={jrInitials}
              alt="JR initials"
              style={{
                position: "absolute",
                bottom: "8%",
                right: "6%",
                width: "18%",
                opacity: 0.6,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div style={{ background: "var(--background)" }}>
      <Nav />
      <div style={{ paddingTop: "57px" }}>
        <Hero />
        <About />
        <WorkGrowing />
        <WorkConvening />
        <WorkSupporting />
        <WorkCommunicating />
        <Connect />
      </div>
    </div>
  )
}
