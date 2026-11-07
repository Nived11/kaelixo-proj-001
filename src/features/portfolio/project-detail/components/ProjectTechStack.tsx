import Image from "next/image";
import {
  ChartNoAxesColumnIncreasing, Cloud, CodeXml, Database, Headset,
  MonitorSmartphone, PieChart, Server, Settings, ShieldCheck, Users, Zap,
} from "lucide-react";

interface TechItem {
  name: string;
  desc: string;
}

interface GuaranteeItem {
  title: string;
  desc: string;
}

interface TechStackData {
  image?: string;
  subtitle: string;
  technologies: TechItem[];
  guarantees: GuaranteeItem[];
}

const technologyIcons: Record<string, typeof CodeXml> = {
  Python: CodeXml,
  MySQL: Database,
  PostgreSQL: Database,
  "CRM Integration": Users,
  "APIs & Integrations": Settings,
  "Responsive Design": MonitorSmartphone,
  "SEO Structure": ChartNoAxesColumnIncreasing,
  Analytics: PieChart,
  Hosting: Cloud,
  "Google Analytics 4": PieChart,
  "Tailwind CSS": MonitorSmartphone,
};

const guaranteeIcons = [ShieldCheck, Server, Zap, Headset];

export default function ProjectTechStack({ techStack }: { techStack: TechStackData }) {
  return (
    <section className="relative z-20 isolate overflow-hidden bg-[#fafafa] py-16 text-[#080e1e] sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,#fff0f6,transparent_30%),radial-gradient(ellipse_at_bottom_left,#ffedf5,transparent_34%)]" />
      <svg aria-hidden="true" viewBox="0 0 240 110" fill="none" className="pointer-events-none absolute right-0 top-0 -z-10 w-52 text-pink-300">
        <path d="M0 0C100 24 175 88 240 104M75 0C144 18 192 77 240 83M128 0C178 24 199 53 240 57" stroke="currentColor" strokeOpacity=".65" />
      </svg>
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-8 xl:px-12">
        <div className="grid gap-5 lg:grid-cols-[2fr_3fr] lg:gap-4">
          <div className="flex min-w-0 flex-col">
            <p className="flex  items-center gap-4 text-[14px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] [@media(min-width:1920px)]:text-[18px] font-[750] uppercase tracking-[0.24em] text-slate-600 sm:text-xs">
              <span className="h-0.5 w-10 shrink-0 bg-[#ff0055]" />
              Technology &amp; Services Used
            </p>
            <h2 className="mt-5 text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] 2xl:text-[42px] [@media(min-width:1920px)]:text-[42px] font-[750] text-[clamp(2rem,4vw,3.6rem)] leading-[1.02] font-black tracking-tight">
              Built with the Right
              <span className="block text-[#ff0055]">Technology</span>
            </h2>
            <p className="mt-4 max-w-md text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[16px] leading-snug text-slate-700 sm:text-base">
              {techStack.subtitle}
            </p>
            <div className="pointer-events-none relative mt-5 min-h-52 flex-1 overflow-hidden sm:min-h-64 [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_88%,transparent)]">
              <div className="absolute inset-x-0 top-0 aspect-square -translate-y-[29%]">
                <Image
                  src={techStack.image || "/images/portfolio/global-travel.png"}
                  alt=""
                  fill
                  sizes="(min-width: 1400px) 520px, (min-width: 1024px) 40vw, 100vw"
                  className="object-contain [mask-image:linear-gradient(to_right,transparent,black_12%,black_85%,transparent)]"
                />
              </div>
            </div>
          </div>

          <ul className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 md:grid-cols-3 lg:pt-3">
            {techStack.technologies.map((tech) => {
              const Icon = technologyIcons[tech.name] || (tech.name.includes("SEO") ? ChartNoAxesColumnIncreasing : tech.name.includes("Cloud") ? Cloud : tech.name.includes("CMS") ? Database : CodeXml);

              return (
                <li key={tech.name} className="rounded-xl border border-slate-900/[.06] bg-white/75 px-4 py-3 shadow-[0_4px_24px_rgba(15,23,42,.035)] xl:px-5 xl:py-4">
                  <div aria-hidden="true" className="mb-2 grid h-13 w-15 place-items-center rounded-xl bg-[#ff0055]/[.055] text-[#ff0055]">
                    {tech.name === "Django" ? (
                      <span className="text-3xl font-black tracking-tighter text-[#00836c]">dj</span>
                    ) : (
                      <Icon className={`size-8 ${tech.name === "Python" || tech.name === "MySQL" ? "text-sky-600" : ""}`} strokeWidth={1.65} />
                    )}
                  </div>
                  <h3 className="font-heading text-[16px] sm:text-[16px] lg:text-[17px] xl:text-[18px] font-bold leading-tight ">{tech.name}</h3>
                  <p className="mt-1 text-[14px] sm:text-[14px] lg:text-[15px] xl:text-[16px] leading-snug text-slate-600 ">{tech.desc}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="relative mt-3 grid grid-cols-1 gap-y-3 rounded-xl border border-[#ff0055]/10 bg-[#fff6fa]/85 p-3 shadow-[0_8px_25px_rgba(255,0,85,.035)] min-[480px]:grid-cols-2 lg:grid-cols-4 lg:px-0">
          {techStack.guarantees.map((item, index) => {
            const Icon = guaranteeIcons[index] || ShieldCheck;

            return (
              <li key={item.title} className="flex items-center gap-3 px-3 lg:px-5 lg:[&+li]:border-l lg:[&+li]:border-pink-200">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#ff0055]/[.045] text-[#ff0055]">
                  <Icon aria-hidden="true" className="size-7" strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="font-heading text-[16px] sm:text-[16px] lg:text-[17px] xl:text-[18px] font-bold leading-tight ">{item.title}</h3>
                  <p className="mt-1 text-[14px] sm:text-[14px] lg:text-[15px] xl:text-[16px] leading-tight text-slate-600">{item.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
