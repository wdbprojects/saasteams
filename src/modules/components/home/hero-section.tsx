"use client";

import { AnimatedGroup } from "@/components/motion/animated-group";
import { TextEffect } from "@/components/motion/text-effect";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimationGeneratorType } from "motion/react";
import Link from "next/link";

type MyTransition = {
  type?: AnimationGeneratorType | undefined;
  bounce?: number;
  duration?: number;
};

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      } as MyTransition,
    },
  },
};

const HeroSection = () => {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="text-center sm:mx-auto lg:mt-0 lg:mr-auto">
        <AnimatedGroup variants={transitionVariants}>
          <Link
            href="#link"
            className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
          >
            <span className="text-foreground text-sm">
              Introducing new AI features
            </span>
            <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

            <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
              <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                <span className="flex size-6">
                  <ArrowRight className="m-auto size-3" />
                </span>
                <span className="flex size-6">
                  <ArrowRight className="m-auto size-3" />
                </span>
              </div>
            </div>
          </Link>
        </AnimatedGroup>

        <TextEffect
          preset="fade-in-blur"
          speedSegment={0.3}
          as="h1"
          className="mx-auto mt-8 max-w-4xl text-5xl font-semibold text-balance md:text-5xl lg:mt-12 xl:text-[4rem]"
        >
          The AI-ready home for team communication
        </TextEffect>
        <TextEffect
          per="line"
          preset="fade-in-blur"
          speedSegment={0.3}
          delay={0.5}
          as="p"
          className="mx-auto mt-8 max-w-2xl text-lg text-balance"
        >
          SaasTeams organizes conversations into channels with threads, is
          realtime, and uses AI to keep teams in sync.
        </TextEffect>
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.75,
                },
              },
            },
            ...transitionVariants,
          }}
          className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row"
        >
          <div
            key={1}
            className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] p-0.5"
          >
            <Button asChild size="lg" className="rounded-xl px-5 text-base">
              <Link href="#link">
                <span className="text-nowrap">Get Started</span>
              </Link>
            </Button>
          </div>
          <Button
            key={2}
            asChild
            size="lg"
            variant="outline"
            className="h-10.5 w-full flex-1 rounded-xl px-5"
          >
            <Link href="#link">
              <span className="text-nowrap">Request a demo</span>
            </Link>
          </Button>
        </AnimatedGroup>

        {/* <h2 className="text-4xl font-semibold text-balance lg:text-5xl">
          Start Building
        </h2>
        <p className="mt-4">Lorem ipsum dolor sit amet.</p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/">
              <span>Start Building</span>
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/">
              <span>Request a Demo</span>
            </Link>
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
