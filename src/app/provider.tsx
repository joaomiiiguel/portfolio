import { LanguageProvider } from "@/context/LanguageContext";
import { HeroUIProvider } from "@heroui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </HeroUIProvider>
  );
}
