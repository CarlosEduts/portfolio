"use client";
import Image from "next/image";
import { IconPlayerPlay, IconBrandGithub } from "@tabler/icons-react";
import { useState } from "react";

type Props = {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  tecnologies: string;
  deployUrl: string;
  codeUrl: string;
};

export default function ProjectCard({
  imageSrc,
  title,
  subtitle,
  description,
  tecnologies,
  deployUrl,
  codeUrl,
}: Props) {
  const [cssClassName, setCssClassName] = useState("project-drawer-closed");

  const openDrawer = () => {
    setCssClassName("project-drawer");
    document.body.style.overflow = "hidden";
  };
  const closeDrawer = () => {
    setCssClassName("project-drawer-closed");
    document.body.style.overflow = "auto";
  };

  return (
    <div className="project-box">
      <div className="project-text" onClick={openDrawer}>
        <Image
          src={imageSrc}
          width={150}
          height={150}
          alt={`${title} project image`}
          className="project-img"
        />
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
      <div className="project-actions" onClick={openDrawer}>
        <button title={`${title} Drawer`}>
          <IconPlayerPlay stroke={2} />
        </button>
      </div>

      {/* Project Drawer */}
      <div className={cssClassName}>
        {/* Ação de fechar a drawer */}
        <div onClick={closeDrawer}></div>
        <div className="project-drawer-content">
          <div className="drawer-mini-bar" onClick={closeDrawer}></div>
          <div className="drawer-project-text">
            <div>
              <Image
                src={imageSrc}
                width={150}
                height={150}
                alt={`${title} project image`}
                className="drawer-project-img"
              />

              <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p className="project-tecnologies">{tecnologies}</p>
              </div>
            </div>
          </div>
          <div className="project-actions drawer-project-actions">
            <a href={codeUrl} target="_blank">
              <IconBrandGithub stroke={2} /> GitHub
            </a>
            <a href={deployUrl} target="_blank">
              <IconPlayerPlay stroke={2} /> Deploy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
