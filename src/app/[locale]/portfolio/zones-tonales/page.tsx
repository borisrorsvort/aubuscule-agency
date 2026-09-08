import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ZonesTonalesPage } from "@/components/portfolio/ZonesTonalesPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "zonesTonales.meta" });

  return {
    title: t("title"),
    description: t("desc"),
    alternates: {
      canonical: `/${locale}/portfolio/zones-tonales`,
      languages: {
        fr: "/fr/portfolio/zones-tonales",
        en: "/en/portfolio/zones-tonales",
        nl: "/nl/portfolio/zones-tonales",
        "x-default": "/fr/portfolio/zones-tonales",
      },
    },
  };
}

export default async function ZonesTonalesRoute() {
  return (
    <main id="main-content">
      <div className="wrap">
        <ZonesTonalesPage />
      </div>
    </main>
  );
}
