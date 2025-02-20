import { useTranslations } from "next-intl";

// Importing shadcn/ui components
import { Particles } from "@/components/ui/particles";

// Importing my components
import NavBar from "./components/NavBar";
import Main from "./components/Main";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div className="w-full min-h-dvh flex items-center justify-center bg-background transition-all duration-300">
      <div className="w-full max-w-screen-md  mx-4 mb-4">
        <NavBar />

        <Main />

        <footer>
          <p className="text-center mt-12 text-sm">
            {" "}
            &copy; 2025 - {t("container.footer")}
          </p>
        </footer>

        <Particles
          className="absolute inset-0 h-full"
          quantity={150}
          ease={80}
          color={"#808080"}
          refresh
        />
      </div>
    </div>
  );
}
