import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <div className="max-w-96">
        <h1 className="text-2xl font-bold text-primary">404</h1>
        <h2 className="text-lg font-bold underline decoration-wavy decoration-primary">
          {t("h2")}
        </h2>
        <p className="text-lg text-foreground/80">
          {t("p")}{" "}
          <Link href="/" className="text-primary font-bold">
            {t("link")}
          </Link>
        </p>
      </div>
    </div>
  );
}
