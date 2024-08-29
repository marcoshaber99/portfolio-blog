"use client";

import { BlogCard } from "@/components/blog-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import PhotographySection from "@/components/photography-section";
import { ProjectCard } from "@/components/project-card";
import QuoteSection from "@/components/quote-section";
import { ResumeCard } from "@/components/resume-card";
import { TextEffect } from "@/components/text-effect";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SectionLabel from "@/components/ui/section-label";
import SkillBadge from "@/components/ui/skill-badge";
import { DATA } from "@/data/resume";
import { FileText } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-8">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              
              <TextEffect
                preset="fade"
                per="word"
                className="text-3xl font-bold tracking-wide sm:text-5xl xl:text-6xl/none font-soehne italic"
              >
               {DATA.name}
              </TextEffect>
              <BlurFadeText
                className="max-w-[600px] md:text-xl font-testsoehne mt-2"
                text={DATA.description}
              />
               <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <Link href="/resume">
                  <Button variant="outline" size="sm" className="flex items-center gap-2 mt-4">
                    <FileText className="w-4 h-4" />
                    Full Resume
                  </Button>
                </Link>
              </BlurFade>
            </div>
           
            <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="w-28 h-28 border overflow-hidden">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="object-cover" />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
          </div>
        </div>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3 ">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      {/* <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <SkillBadge skill={skill} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section> */}
      <section id="projects">
        <div className="space-y-12 w-full py-8">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <SectionLabel text="My Projects" />

                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My latest projects
                </h2>
               
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                  isPrivate={project.isPrivate}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="blog">
        <div className="space-y-12 w-full py-8">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <SectionLabel text="My Blog" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Thoughts and insights
                </h2>
 
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.blogs.map((blog, id) => (
              <BlurFade
                key={blog.title}
                delay={BLUR_FADE_DELAY * 18 + id * 0.05}
              >
                <BlogCard
                  href={blog.href}
                  title={blog.title}
                  description={blog.description}
                  date={blog.date}
                  image={blog.image}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <PhotographySection />

      <QuoteSection
        quote="You have power over your mind - not outside events. Realize this, and you will find strength."
        author="Marcus Aurelius"
      />

      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <SectionLabel text="Contact" />

              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just send me an email{" "}
                <Link
                  href="mailto:marco.haber@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  marcoshaber99@gmail.com
                </Link>
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}