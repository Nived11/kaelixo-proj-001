"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Rocket, Users, Globe, Trophy } from 'lucide-react';
import { motion, useInView, animate, useMotionValue, useTransform } from 'framer-motion';

function AnimatedCounter({ to, suffix = "", duration = 2, trigger }: { to: number, suffix?: string, duration?: number, trigger: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    let controls: any;
    let interval: NodeJS.Timeout;

    if (trigger) {
      const startAnim = () => {
        count.set(0);
        controls = animate(count, to, { duration: duration, ease: "easeOut" });
      };
      startAnim();
      interval = setInterval(startAnim, duration * 1000 + 4000);
    } else {
      count.set(0);
    }

    return () => {
      if (controls) controls.stop();
      if (interval) clearInterval(interval);
    };
  }, [trigger, to, duration, count]);

  return (
    <>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </>
  );
}

function TypewriterText({ text, delay = 0, duration = 1, className = "", trigger }: { text: string, delay?: number, duration?: number, className?: string, trigger: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    let controls: any;
    if (trigger) {
      count.set(0);
      controls = animate(count, text.length, {
        type: "tween",
        duration: duration,
        delay: delay,
        ease: "linear",
      });
    } else {
      count.set(0);
    }
    return () => {
      if (controls) controls.stop();
    };
  }, [trigger, text.length, duration, delay, count]);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="invisible">{text}</span>
      <motion.span className={`absolute left-0 top-0 w-full h-full text-left whitespace-pre-wrap ${className}`}>
        {displayText}
      </motion.span>
    </span>
  );
}

export default function ReadyToBuildSection() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: false, amount: 0.2 });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: false, amount: 0.2 });

  return (
    <section className="relative w-full bg-white overflow-hidden py-16 lg:py-20 font-sans">

      {/* Background Image Area */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        {/* The user's mountain/sunrise image with granular responsive controls for precise size and placement */}
        <div
          className="absolute bg-contain bg-[80%_100%] md:bg-right-bottom bg-no-repeat z-0
            bottom-[20%] right-[-15%] w-[130%] h-[70%] 
            sm:bottom-[15%] sm:right-[-5%] sm:w-[90%] sm:h-[70%]
            lg:bottom-[18%] lg:right-[-8%] lg:w-[70%] lg:h-[80%]
            xl:bottom-[18%] xl:right-[-6%] xl:w-[65%] xl:h-[80%]
            2xl:bottom-[20%] 2xl:right-[-5%] 2xl:w-[60%] 2xl:h-[75%]
            [@media(min-width:1920px)]:bottom-[20%] [@media(min-width:1920px)]:right-[-5%] [@media(min-width:1920px)]:w-[55%] [@media(min-width:1920px)]:h-[75%]
          "
          style={{
            backgroundImage: "url('/images/home/person-2.webp')",
            /* Mask to softly fade the top 70% of the container to catch the top crop, and fade left/bottom borders */
            WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 30%, transparent 100%), linear-gradient(to right, transparent 0%, black 25%, black 100%, transparent 100%)',
            WebkitMaskComposite: 'source-in',
            maskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 30%, transparent 100%), linear-gradient(to right, transparent 0%, black 25%, black 100%, transparent 100%)',
            maskComposite: 'intersect'
          }}
        />

        {/* Stronger Left fade for text area, ensuring seamless blend and high readability */}
        <div
          className="absolute inset-y-0 left-0 w-[90%] md:w-[70%] lg:w-[60%] z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, #ffffff 0%, #ffffff 40%, rgba(255,255,255,0.85) 65%, transparent 100%)'
          }}
        />

        {/* Deep Top mist fade with stronger white to bring white shade further down the image */}
        <div
          className="absolute inset-x-0 top-0 h-[50%] z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 20%, rgba(255,255,255,0.9) 55%, transparent 100%)'
          }}
        />

        {/* Subtle Bottom mist fade, just enough to blend into the stats bar */}
        <div
          className="absolute inset-x-0 bottom-0 h-[30%] md:h-[25%] z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, #ffffff 0%, #ffffff 15%, rgba(255,255,255,0.85) 50%, transparent 100%)'
          }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-between h-full">

        {/* Top Content (Text & Buttons) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2, margin: "0px 0px -50px 0px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="w-full lg:w-1/2 pt-8 pb-16 lg:pb-24"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-3 mb-4">
            <span className="text-[#FF0055] font-bold text-[12px] sm:text-[13px] lg:text-[18px] xl:text-[18px] tracking-widest uppercase">
              READY TO BUILD
            </span>
            <div className="w-10 h-[2px] bg-[#FF0055]"></div>
          </motion.div>

          <h2 ref={headingRef} className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] xl:text-[42px] 2xl:text-[46px]  font-extrabold leading-[1.1] mb-6 tracking-tight font-heading">
            <TypewriterText
              text="What's Next"
              delay={0}
              duration={0.5}
              trigger={headingInView}
              className="text-[#0A1024]"
            />
            <br />
            <TypewriterText
              text="for Your "
              delay={0.5}
              duration={0.3}
              trigger={headingInView}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0055] to-[#DD0077]"
            />
            <br className="sm:hidden" />
            <TypewriterText
              text="Business?"
              delay={0.8}
              duration={0.4}
              trigger={headingInView}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#DD0077] to-[#B000B0] pr-2"
            />
          </h2>

          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-slate-700 text-[16px] mb-10 max-w-md leading-relaxed font-medium">
            Let's turn your ideas into real-world impact. Partner with Kaelixo and bring your vision to life.
          </motion.p>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-4">
            <Link
              href="#contact"
              className="group inline-flex min-w-[160px] sm:min-w-0 sm:w-auto items-center justify-center gap-1.5 sm:gap-2 px-6 sm:px-8 py-3 sm:py-3.5 md:px-6 md:py-3 lg:px-6 lg:py-2.5 xl:px-8 xl:py-3.5 rounded-full bg-gradient-to-r from-[#CC0044] to-[#FF0055] border border-[#FF3377] hover:border-[#FF6699] text-white text-[13px] sm:text-[14px] lg:text-[15px] font-medium tracking-wide hover:brightness-110 transition-all duration-300 active:scale-95 whitespace-nowrap cursor-pointer"
            >
              <span>Let's Talk</span> <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-3.5 md:h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex min-w-[160px] sm:min-w-0 sm:w-auto items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 md:px-6 md:py-3 lg:px-6 lg:py-2.5 xl:px-8 xl:py-3.5 rounded-full border border-slate-300 hover:border-[#FF0055] text-[#0A1024] text-[13px] sm:text-[14px] lg:text-[15px] font-semibold bg-white/50 backdrop-blur-sm transition-all hover:bg-white whitespace-nowrap cursor-pointer"
            >
              Explore Our Work
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom Stats Bar */}
        <div ref={statsRef} className="w-full mt-4 sm:mt-8 relative z-20">
          <motion.div
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-y-8 sm:gap-y-10 md:divide-x divide-slate-300/80"
          >

            {/* Stat 1 */}
            <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} className="flex flex-row items-center sm:items-start md:items-center lg:items-start gap-3 sm:gap-4 md:gap-2 lg:gap-3 xl:gap-6 justify-start px-2 sm:px-2 md:px-3 lg:px-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-14 xl:h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-[#FF0055] shadow-sm border border-slate-100">
                <Rocket className="w-5 h-5 sm:w-6 sm:h-6 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-7 xl:h-7 stroke-[1.5]" />
              </div>
              <div className="text-left">
                <h4 className="text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[36px] font-bold text-[#0A1024] tracking-tight font-heading leading-tight mb-0.5 sm:mb-1">
                  <AnimatedCounter to={250} suffix="+" trigger={statsInView} />
                </h4>
                <p className="text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[15px] text-slate-500 font-medium font-sans whitespace-nowrap">Projects Delivered</p>
              </div>
            </motion.div>

            {/* Stat 2 */}
            <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} className="flex flex-row items-center sm:items-start md:items-center lg:items-start gap-3 sm:gap-4 md:gap-2 lg:gap-3 xl:gap-6 justify-start px-2 sm:px-2 md:px-3 lg:px-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-14 xl:h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-[#FF0055] shadow-sm border border-slate-100">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-7 xl:h-7 stroke-[1.5]" />
              </div>
              <div className="text-left">
                <h4 className="text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[36px] font-bold text-[#0A1024] tracking-tight font-heading leading-tight mb-0.5 sm:mb-1">
                  <AnimatedCounter to={120} suffix="+" trigger={statsInView} />
                </h4>
                <p className="text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[15px] text-slate-500 font-medium font-sans whitespace-nowrap">Happy Clients</p>
              </div>
            </motion.div>

            {/* Stat 3 */}
            <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} className="flex flex-row items-center sm:items-start md:items-center lg:items-start gap-3 sm:gap-4 md:gap-2 lg:gap-3 xl:gap-6 justify-start px-2 sm:px-2 md:px-3 lg:px-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-14 xl:h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-[#FF0055] shadow-sm border border-slate-100">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-7 xl:h-7 stroke-[1.5]" />
              </div>
              <div className="text-left">
                <h4 className="text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[36px] font-bold text-[#0A1024] tracking-tight font-heading leading-tight mb-0.5 sm:mb-1">
                  <AnimatedCounter to={10} suffix="+" trigger={statsInView} />
                </h4>
                <p className="text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[15px] text-slate-500 font-medium font-sans whitespace-nowrap">Countries Served</p>
              </div>
            </motion.div>

            {/* Stat 4 */}
            <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} className="flex flex-row items-center sm:items-start md:items-center lg:items-start gap-3 sm:gap-4 md:gap-2 lg:gap-3 xl:gap-6 justify-start md:justify-end px-2 sm:px-2 md:px-3 lg:px-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-14 xl:h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-[#FF0055] shadow-sm border border-slate-100">
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-7 xl:h-7 stroke-[1.5]" />
              </div>
              <div className="text-left">
                <h4 className="text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[36px] font-bold text-[#0A1024] tracking-tight font-heading leading-tight mb-0.5 sm:mb-1">
                  <AnimatedCounter to={98} suffix="%" trigger={statsInView} />
                </h4>
                <p className="text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[15px] text-slate-500 font-medium font-sans whitespace-nowrap">Client Satisfaction</p>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
