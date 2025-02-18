import { useTranslations } from "next-intl";
import Image from "next/image";

// Icons taber icons
import { IconBrandLinkedin } from "@tabler/icons-react";

export default function Main() {
  const t = useTranslations("Home");

  return (
    <div className="mt-32 flex flex-col gap-12">
      {/* Header */}
      <header className="flex items-center gap-3">
        <Image
          src="/profile-img.png"
          width={400}
          height={400}
          alt="Profile dev image"
          className="w-full max-w-36 rounded-full shadow-2xl"
        />
        <div>
          <h1 className="text-4xl font-bold text-primary">
            {t("container.header.h1")}
          </h1>
          <p className="max-w-md text-lg text-foreground/80">{t("container.header.p")}</p>
        </div>
      </header>

      {/* About-me */}
      <section>
        <div>
          <h2 className="text-lg font-bold underline decoration-wavy decoration-primary">
            {t("container.about-me.h2")}
          </h2>
          <p className="text-lg text-foreground/80">{t("container.about-me.p")}</p>
        </div>
      </section>

      {/* Skills */}
      <section>
        <div>
          <h2 className="text-lg font-bold underline decoration-wavy decoration-primary">
            {t("container.skills.h2")}
          </h2>
          <p className="text-lg text-foreground/80">{t("container.skills.p")}</p>
        </div>
      </section>

      {/* More about-me */}
      <section>
        <div>
          <h2 className="text-lg font-bold underline decoration-wavy decoration-primary">
            {t("container.more-about-me.h2")}
          </h2>

          <p className="text-lg text-foreground/80">
            {t("container.more-about-me.p-start")}
            <a className="text-primary" href="/doc/cv.html" target="_blank">
              {t("container.more-about-me.a-cv")}
            </a>
            {t("container.more-about-me.p-end")}
            <a
              className="text-primary inline-flex gap-0.5 items-start"
              href="https://www.linkedin.com/in/carlos-eduardo-464206336"
              target="_blank"
            >
              <IconBrandLinkedin stroke={2} className="w-5 h-5" />
              LinkedIn
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
