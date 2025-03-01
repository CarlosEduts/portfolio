"use client";
import { useState, useEffect } from "react";

// Icons taber icons
import {
  IconSun,
  IconMoon,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { Link } from "@/i18n/routing";

export default function NavBar() {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = (): void => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="top-0 left-0 fixed w-full flex items-center justify-center px-4 py-4 ">
      <div className="w-full max-w-screen-md h-14 bg-background/20 flex items-center justify-between border border-foreground/10 px-4 rounded-sm backdrop-blur-md">
        <div className="flex gap-2 items-center">
          <button
            title="Page theme"
            onClick={() => {
              toggleTheme();
            }}
          >
            {theme === "dark" ? (
              <IconSun
                stroke={2}
                className="text-primary hover:opacity-60 w-7 h-7"
              />
            ) : (
              <IconMoon
                stroke={2}
                className="text-primary hover:opacity-60 w-7 h-7"
              />
            )}
          </button>

          <div className="flex gap-1 bg-foreground/10 px-3 py-0.5 rounded-full text-primary">
            <Link href="en" className="font-bold hover:opacity-60">
              en
            </Link>
            <p className="text-foreground">|</p>
            <Link href="pt" className="font-bold hover:opacity-60">
              pt
            </Link>
          </div>
        </div>

        <div className="flex gap-2 text-primary">
          <a
            href="https://github.com/CarlosEduts"
            title="GitHub"
            target="_blank"
            className="hover:opacity-60"
          >
            <IconBrandGithub stroke={2} className="w-7 h-7" />
          </a>

          <a
            href="https://www.linkedin.com/in/carlos-eduardo-464206336"
            target="_blank"
            title="LinkedIn"
            className="hover:opacity-60"
          >
            <IconBrandLinkedin stroke={2} className="w-7 h-7" />
          </a>

          <a
            href="https://www.instagram.com/carloseduti"
            title="Instagram"
            target="_blank"
            className="hover:opacity-60"
          >
            <IconBrandInstagram stroke={2} className="w-7 h-7" />
          </a>
        </div>
      </div>
    </div>
  );
}
