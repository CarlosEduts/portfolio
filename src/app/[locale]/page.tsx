import { useTranslations } from "next-intl";

// Importing shadcn/ui components
import { Particles } from "@/components/ui/particles";

// Importing my components
import NavBar from "./components/NavBar";
import Main from "./components/Main";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div className="relative w-full min-h-dvh flex items-center justify-center bg-background transition-all duration-300">
      <Particles
        className="absolute inset-0 w-full h-full"
        quantity={200}
        ease={80}
        color={"#808080"}
        refresh
      />

      <div className="w-full relative  max-w-screen-md  mx-4 mb-4">
        <NavBar />

        <Main />

        <footer>
          <p className="text-center mt-12 text-sm">
            {" "}
            &copy; 2025 - {t("container.footer")}
          </p>
        </footer>
      </div>
    </div>
  );
}
