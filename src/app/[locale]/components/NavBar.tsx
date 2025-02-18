// Icons taber icons
import {
  IconSun,
  IconWorld,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";

export default function NavBar() {
  return (
    <div className="top-0 left-0 fixed w-full flex items-center justify-center px-4 py-4">
      <div className="w-full max-w-screen-md h-14 flex items-center justify-between border border-foreground/20 px-4 rounded-full backdrop-blur-md">
        <div className="flex gap-2 items-center">
          <IconSun stroke={2} />

          <div className="flex gap-1 bg-foreground/10 px-2 py-0.5 rounded-sm">
            <IconWorld stroke={2} />
            <p className="font-bold">en</p>
          </div>
        </div>

        <div className="flex gap-1">
          <a
            href="https://github.com/CarlosEduts"
            title="GitHub"
            target="_blank"
          >
            <IconBrandGithub stroke={2} />
          </a>

          <a
            href="https://www.linkedin.com/in/carlos-eduardo-464206336"
            target="_blank"
            title="LinkedIn"
          >
            <IconBrandLinkedin stroke={2} />
          </a>

          <a
            href="https://www.instagram.com/carloseduti"
            title="Instagram"
            target="_blank"
          >
            <IconBrandInstagram stroke={2} />
          </a>
        </div>
      </div>
    </div>
  );
}
