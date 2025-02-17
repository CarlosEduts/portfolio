import { Particles } from "@/components/ui/particles";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div className="dark">
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
