import { useTranslations } from "next-intl";

// Importing shadcn/ui components
import { Particles } from "@/components/ui/particles";

// Importing my components
import NavBar from "./components/NavBar";
import Main from "./components/Main";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div className="w-full flex items-center justify-center bg-background">
      <div className="w-full max-w-screen-md mx-4">
        <NavBar />

        <Main />

        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color={"#000"}
          refresh
        />
      </div>
    </div>
  );
}
