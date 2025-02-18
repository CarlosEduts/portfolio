import { useTranslations } from "next-intl";

// Importing shadcn/ui components
import { Particles } from "@/components/ui/particles";

// Importing my components
import NavBar from "./components/NavBar";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div>
      <NavBar></NavBar>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={"#000"}
        refresh
      />
    </div>
  );
}
