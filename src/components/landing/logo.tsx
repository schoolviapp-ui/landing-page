import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="Schoolvi - accueil" className={cn("inline-flex items-center", className)}>
      <Image src="/brand/logo.png" alt="Schoolvi" width={787} height={317} priority className="h-10 w-auto sm:h-12" />
    </Link>
  );
}
