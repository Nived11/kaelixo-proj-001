import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getProjectBySlug,
  getAllProjectSlugs,
} from "@/features/portfolio/data/portfolioProjects";
import ProjectDetailMain from "@/features/portfolio/project-detail/ProjectDetailMain";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Kaelixo",
    };
  }

  return {
    title: `${project.title} — Case Study | Kaelixo`,
    description: project.heroSubtitle || project.description,
    openGraph: {
      title: `${project.title} Case Study | Kaelixo`,
      description: project.heroSubtitle || project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailMain project={project} />;
}
