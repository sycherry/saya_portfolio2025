"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const skills = {
  Community: [
    "Community management",
    "Community feedback",
    "User engagement",
    "X / X Pro / Telegram",
    "Instagram / TikTok",
    "note / Luma / Qiita",
    "Event support & coordination",
  ],
  Localization: [
    "Product translation (App & Web)",
    "Content translation",
    "Help center & Blogs",
    "English to Japanese",
    "Promotional materials",
  ],
  Technology: [
    "React / React Native / Next.js",
    "Git (version control)",
    "Agile development",
    "AI-assisted workflows",
    "ChatGPT Pro / Claude / Perplexity",
    "OpenAI API integration",
  ],
  "UI/UX": [
    "UI/UX localization (Figma)",
    "Illustrator",
    "Photoshop",
  ],
  Collaboration: [
    "Slack / Lark / Trello",
    "Miro / Notion",
    "Cross-functional collaboration",
  ],
};

const experiences = [
  {
    role: "Head of Japan Operations",
    company: "Pulse",
    period: "Jul 2025 – Nov 2025",
    description:
      "Responsible for community management and overall operations for a crypto wallet in the Japanese market, sharing market trends and Japanese user feedback with global teams. Planned and proposed Japan-specific initiatives, including campaigns, listing proposals, and product improvement ideas.",
    responsibilities: ["Community management", "Market research", "Product improvement proposals"],
  },
  {
    role: "Japanese Community Lead",
    company: "Pulse",
    period: "Nov 2024 – Jun 2025",
    description:
      "Led cross-functional community operations and localization for a crypto wallet in the Japanese market. Managed official accounts and social media channels, adapting and distributing global content for the Japanese audience.",
    responsibilities: ["Community management", "User engagement", "Localization", "Marketing"],
  },
  {
    role: "Japanese Community Lead",
    company: "Phemex",
    period: "Nov 2024 – Nov 2025",
    description:
      "Led Japanese community operations and end-to-end localization for a crypto exchange (CEX). Built the foundational Japanese terminology and core localization processes across the app, web, social content, and event materials.",
    responsibilities: ["Community management", "User engagement", "Localization", "Marketing"],
  },
  {
    role: "Founder & Web Consultant",
    company: "SayaDesign.Art",
    period: "Apr 2017 – Jan 2023 / Oct 2023 – Present",
    description:
      "Responsible for creating client websites and e-commerce platforms, and collaborating closely with clients on marketing strategies and content structures, with a focus on clear UI text and user-friendly presentation.",
    responsibilities: ["Marketing support", "Website development", "UI/UX design"],
  },
  {
    role: "Frontend Developer & UI/UX Designer",
    company: "LEMO, inc",
    period: "Jul 2024 – Oct 2024",
    description:
      "Responsible for UI/UX design and frontend implementation for a web app serving about 5,000 employees, prioritizing clarity, usability, and user understanding.",
    responsibilities: ["UI implementation", "Web application development", "UI design", "UX design"],
  },
  {
    role: "Frontend Developer",
    company: "Masentic",
    period: "Mar 2024 – Jun 2024",
    description:
      "Responsible for implementing UI features and frontend components for an online gaming platform supporting cryptocurrency payments, working with a multinational team.",
    responsibilities: ["UI implementation", "Web application development", "Testing"],
  },
  {
    role: "Frontend Developer & UI/UX Designer",
    company: "Bokurahatensai",
    period: "Oct 2023 – Jan 2024",
    description:
      "Responsible for developing a cross-platform iOS/Android application, integrating the OpenAI API to support UI/UX refinement and improve usability.",
    responsibilities: ["UI implementation", "Mobile application development", "UI/UX design"],
  },
  {
    role: "Technical Consultant",
    company: "Accenture",
    period: "Jan 2023 – Sep 2023",
    description:
      "Responsible for developing and optimizing large-scale web platforms, with a strong focus on quality assurance through structured testing. Introduced automated testing to improve workflow efficiency and accuracy within the engineering team of a 30+ member project.",
    responsibilities: ["Solution requirement analysis", "Architecture", "Web application development", "Testing"],
  },
  {
    role: "React Native Developer & UI/UX Designer",
    company: "Spiritd",
    period: "Mar 2021 – Jun 2022",
    description:
      "Responsible for developing a multilingual cross-platform iOS/Android app, with an emphasis on localization and clear communication for users in different regions.",
    responsibilities: ["UI implementation", "Mobile application development", "UI/UX design"],
  },
  {
    role: "Community Lead & Developer",
    company: "TRACKS Co., Ltd",
    period: "Mar 2010 – Jan 2017",
    description:
      "Responsible for developing multilingual websites and producing web and marketing visual assets. Also managed a hairstylist community through blogs, Facebook, and YouTube, contributing to increased brand awareness, client growth, and a 20-million-yen revenue increase in the third year.",
    responsibilities: ["Community management", "Web design & development", "UI/UX design", "Graphic design"],
  },
];

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-semibold text-lg">Saya</span>
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-indigo-500 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-indigo-500 transition-colors">
            Skills
          </a>
          <a href="#experience" className="hover:text-indigo-500 transition-colors">
            Experience
          </a>
          <a href="#contact" className="hover:text-indigo-500 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="opacity-0 animate-fade-in-up mb-8">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-indigo-500/20">
            <Image
              src="/saya.jpg"
              alt="Saya"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
        <div className="opacity-0 animate-fade-in-up animation-delay-100">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Saya
          </h1>
        </div>
        <div className="opacity-0 animate-fade-in-up animation-delay-200">
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8">
            Developer Community Lead Japan
          </p>
        </div>
        <div className="opacity-0 animate-fade-in-up animation-delay-400">
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            A Community Lead specializing in localization, with experience adapting global blockchain
            products for the Japanese market, and serving as a bridge between Japanese
            users and global teams to improve community engagement and communication.
          </p>
        </div>
        <div className="opacity-0 animate-fade-in-up animation-delay-600 flex justify-center gap-4 flex-wrap">
          <a
            href="https://github.com/sycherry"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-medium hover:scale-105 transition-transform"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sayadesignart/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-full font-medium hover:scale-105 transition-transform"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded-full font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Skillset
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={category}
              className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-500">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="text-zinc-600 dark:text-zinc-400 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-indigo-500/30 hover:border-indigo-500 transition-colors"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-500 rounded-full" />
              <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <p className="text-indigo-500 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-700 px-3 py-1 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed text-sm">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.responsibilities.map((resp) => (
                    <span
                      key={resp}
                      className="text-xs px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full"
                    >
                      {resp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Education & Languages
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-indigo-500">Education</h3>
            <div>
              <p className="font-medium">Bachelor of Laws (LL.B.)</p>
              <p className="text-zinc-600 dark:text-zinc-400">Doshisha University, Kyoto</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-500">2011</p>
            </div>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-indigo-500">Languages</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span className="font-medium">Japanese</span>
                <span className="text-zinc-600 dark:text-zinc-400">Fluent</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="font-medium">English</span>
                <span className="text-zinc-600 dark:text-zinc-400">Business Level</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12 max-w-xl mx-auto">
          Interested in collaboration or have questions? Feel free to reach out!
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://github.com/sycherry"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-medium hover:scale-105 transition-transform"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sayadesignart/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-full font-medium hover:scale-105 transition-transform"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto text-center text-sm text-zinc-500 dark:text-zinc-400">
        <p>&copy; {new Date().getFullYear()} Saya. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
