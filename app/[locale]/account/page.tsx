"use client";

import { Link } from "@/i18n/routing";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";
import AppHeader from "../../components/AppHeader";
import { countries } from "countries-list";

// Helper function to convert country code to flag emoji
const getFlagEmoji = (countryCode: string): string => {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

export default function AccountPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const router = useRouter();
  const t = useTranslations("createAccount");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    degreeLevel: "",
    country: "",
    focus: "",
  });

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    router.push(`/${locale}/profile`);
  };

  // Separate African countries to prioritize them at the top
  const africanCountries = Object.entries(countries)
    .filter(([_, data]) => data.continent === "AF")
    .sort((a, b) => a[1].name.localeCompare(b[1].name));

  // Get all other countries
  const otherCountries = Object.entries(countries)
    .filter(([_, data]) => data.continent !== "AF")
    .sort((a, b) => a[1].name.localeCompare(b[1].name));

  // Combine with African countries first
  const allCountries = [...africanCountries, ...otherCountries];

  return (
    <div className="min-h-screen bg-[#FAF8F4] text-[#14213D]">
      <AppHeader pageTitle="Create account" />

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-16">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
          <section className="rounded-2xl border border-[#E8E3DA] bg-[#FBF9F5] p-6 md:p-9">
            <div className="mb-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#777A77]">
                Start here · 01
              </p>
              <h1
                className="mt-3 text-3xl md:text-4xl font-semibold text-[#14213D]"
                style={{ fontFamily: "'Newsreader', Georgia, serif" }}
              >
                Create your Provost account
              </h1>
              <p className="mt-2 text-sm text-[#4B5563] max-w-xl">
                Set up your profile once and let Provost surface the right
                scholarships, deadlines, and application support.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#14213D]">
                    Full name
                  </span>
                  <input
                    value={form.fullName}
                    onChange={(event) =>
                      handleChange("fullName", event.target.value)
                    }
                    className="w-full rounded-xl border border-[#E8E3DA] bg-[#F9F7F3] px-4 py-3 text-sm text-[#14213D] outline-none transition focus:border-[#14213D]"
                    placeholder="Your full name"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#14213D]">
                    Email address
                  </span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      handleChange("email", event.target.value)
                    }
                    className="w-full rounded-xl border border-[#E8E3DA] bg-[#F9F7F3] px-4 py-3 text-sm text-[#14213D] outline-none transition focus:border-[#14213D]"
                    placeholder="name@example.com"
                  />
                </label>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#14213D]">
                    Password
                  </span>
                  <input
                    type="password"
                    value={form.password}
                    onChange={(event) =>
                      handleChange("password", event.target.value)
                    }
                    className="w-full rounded-xl border border-[#E8E3DA] bg-[#F9F7F3] px-4 py-3 text-sm text-[#14213D] outline-none transition focus:border-[#14213D]"
                    placeholder="Create a secure password"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#14213D]">
                    {t("degreeLevel")}
                  </span>
                  <select
                    value={form.degreeLevel}
                    onChange={(event) =>
                      handleChange("degreeLevel", event.target.value)
                    }
                    className="w-full rounded-xl border border-[#E8E3DA] bg-[#F9F7F3] px-4 py-3 text-sm text-[#14213D] outline-none transition focus:border-[#14213D]"
                  >
                    <option value="" disabled>
                      {t("selectDegreeLevel")}
                    </option>
                    <option value="undergraduate">{t("undergraduate")}</option>
                    <option value="masters">{t("mastersStudent")}</option>
                    <option value="phd">{t("phdStudent")}</option>
                    <option value="early-career">
                      {t("earlyCareerResearcher")}
                    </option>
                  </select>
                </label>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#14213D]">
                    {t("country")}
                  </span>
                  <select
                    value={form.country}
                    onChange={(event) =>
                      handleChange("country", event.target.value)
                    }
                    className="w-full rounded-xl border border-[#E8E3DA] bg-[#F9F7F3] px-4 py-3 text-sm text-[#14213D] outline-none transition focus:border-[#14213D]"
                  >
                    <option value="">{t("selectCountry")}</option>
                    {/* African countries section */}
                    <optgroup label="🌍 African Countries">
                      {africanCountries.map(([code, data]) => (
                        <option key={code} value={code.toLowerCase()}>
                          {getFlagEmoji(code)} {data.name}
                        </option>
                      ))}
                    </optgroup>
                    {/* Other countries section */}
                    <optgroup label="Other Countries">
                      {otherCountries.map(([code, data]) => (
                        <option key={code} value={code.toLowerCase()}>
                          {getFlagEmoji(code)} {data.name}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#14213D]">
                    Study focus
                  </span>
                  <input
                    value={form.focus}
                    onChange={(event) =>
                      handleChange("focus", event.target.value)
                    }
                    className="w-full rounded-xl border border-[#E8E3DA] bg-[#F9F7F3] px-4 py-3 text-sm text-[#14213D] outline-none transition focus:border-[#14213D]"
                    placeholder="Engineering, climate policy, design..."
                  />
                </label>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <Link
                  href={`/${locale}`}
                  className="text-sm font-medium text-[#4B5563] hover:text-[#14213D]"
                >
                  {t("backToHome")}
                </Link>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-[#14213D] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Create account
                </button>
              </div>
            </form>
          </section>

          <aside className="rounded-2xl border border-[#E8E3DA] bg-[#F5F3EF] p-6 md:p-8">
            <h2
              className="text-2xl font-semibold text-[#14213D]"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              Why students use Provost
            </h2>
            <ul className="mt-6 space-y-4 text-sm text-[#4B5563]">
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#E8F5EE] text-[#1F9D6B] text-[10px] font-bold">
                  ✓
                </span>
                <span>
                  Personalized scholarship matches based on your academic
                  profile.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#E8F5EE] text-[#1F9D6B] text-[10px] font-bold">
                  ✓
                </span>
                <span>
                  Deadline tracking with reminders for each application stage.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#E8F5EE] text-[#1F9D6B] text-[10px] font-bold">
                  ✓
                </span>
                <span>
                  Application workflows that keep documents, letters, and essays
                  organized.
                </span>
              </li>
            </ul>

            <div className="mt-8 rounded-2xl bg-[#14213D] p-5 text-white">
              <p className="text-xs uppercase tracking-[0.18em] text-[#D4DAEA]">
                Starter fit
              </p>
              <div
                className="mt-4 text-3xl font-semibold"
                style={{ fontFamily: "'Newsreader', Georgia, serif" }}
              >
                14 curated matches
              </div>
              <p className="mt-2 text-sm text-[#D4DAEA]">
                Based on your profile, you are likely to qualify for a strong
                mix of funding opportunities.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}