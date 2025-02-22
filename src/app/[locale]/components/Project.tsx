"use client";

import * as React from "react";
import { Minus, Plus } from "lucide-react";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { IconBrandGithub, IconPlayerPlay } from "@tabler/icons-react";

type ProjectProps = {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  tecnologies: string;
  deployUrl: string;
  gitHubUrl: string;
};

export function Project({
  imageSrc,
  title,
  subtitle,
  description,
  tecnologies,
  deployUrl,
  gitHubUrl,
}: ProjectProps) {
  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Drawer>
      <DrawerTrigger className="w-full">
        <div className="w-full flex  gap-4 bg-foreground/10 items-center justify-between rounded-md px-4 py-5 hover:bg-foreground/5 mb-4">
          <div className="flex gap-2">
            <Image
              src={imageSrc}
              width={150}
              height={150}
              alt={`${title} project image`}
              className="w-16 h-16 rounded-sm"
            />

            <div>
              <h3 className="text-left text-lg text-foreground font-bold">
                {title}
              </h3>
              <p className=" text-left text-lg text-foreground/80">
                {subtitle}
              </p>
            </div>
          </div>

          <div className="bg-foreground/10 px-4 py-2 rounded-full text-primary hover:bg-primary hover:text-background hover:text-white transition-all duration-200">
            <IconPlayerPlay stroke={2} />
          </div>
        </div>
      </DrawerTrigger>

      <DrawerContent className="max-w-3xl">
        <DrawerHeader>
          <Image
            src={imageSrc}
            width={150}
            height={150}
            alt={`${title} project image`}
            className="bg-foreground w-full h-full max-w-48 rounded-md mx-auto"
          />

          <DrawerTitle className="text-center">{title}</DrawerTitle>

          <DrawerDescription className="text-center text-base">
            {description}
          </DrawerDescription>

          <DrawerDescription className="text-base bg-primary/10 w-fit mx-auto px-3 rounded">
            {tecnologies}
          </DrawerDescription>
        </DrawerHeader>

        <DrawerFooter>
          <div className="flex items-center justify-center gap-3">
            <Button className="bg-foreground/10 px-4 py-2 rounded-full text-primary hover:text-white font-bold" onClick={() => {
                  openLink(gitHubUrl);
                }}>
              <IconBrandGithub
                stroke={2}
                
              />{" "}
              GitHub
            </Button>

            <Button className="bg-foreground/10 px-4 py-2 rounded-full text-primary hover:text-white font-bold" onClick={() => {
                  openLink(deployUrl);
                }}>
              <IconPlayerPlay
                stroke={2}
                
              />{" "}
              Deploy
            </Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
