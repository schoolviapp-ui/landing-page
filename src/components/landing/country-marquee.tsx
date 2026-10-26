import Link from "next/link";

import { Flag } from "@/components/ui/flag";
import type { CountrySeo } from "@/content/countries";
import { cn } from "@/lib/utils";

// Bandeau qui defile : un drapeau, le pays et sa grande ville, vers la page du
// pays. S'arrete au survol ; immobile et sur plusieurs lignes si l'appareil
// demande moins d'animations.

function Pill({ country, hidden }: { country: CountrySeo; hidden?: boolean }) {
  return (
    <Link
      href={`/${country.slug}`}
      tabIndex={hidden ? -1 : undefined}
      className="group flex shrink-0 items-center gap-3 rounded-full border border-stone-300 bg-white py-2.5 pl-3 pr-5 transition-colors hover:border-brand/40 hover:bg-brand-light/40"
    >
      <Flag code={country.code} />
      <span className="text-[16px] font-medium text-ink group-hover:text-brand sm:text-[17px]">{country.name}</span>
      <span className="hidden text-[14px] text-muted-foreground sm:inline">{country.mainCities[0]}</span>
    </Link>
  );
}

export function CountryMarquee({ countries, className }: { countries: CountrySeo[]; className?: string }) {
  // Chaque moitie de la piste doit etre plus large que l'ecran : la liste y
  // est mise deux fois.
  const half = [...countries, ...countries];
  return (
    <div className={cn("marquee overflow-hidden py-1", className)}>
      <div className="marquee-track flex gap-3" style={{ ["--marquee-duration" as string]: `${countries.length * 6}s` }}>
        {half.map((country, i) => (
          <div key={`a${i}`} className="flex" aria-hidden={i >= countries.length ? true : undefined}>
            <Pill country={country} hidden={i >= countries.length} />
          </div>
        ))}
        {half.map((country, i) => (
          <div key={`b${i}`} className="flex" aria-hidden>
            <Pill country={country} hidden />
          </div>
        ))}
      </div>
    </div>
  );
}
