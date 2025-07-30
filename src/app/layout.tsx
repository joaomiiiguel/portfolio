import DropdownLanguage from "@/components/DropdownLanguage";
import "./globals.css";
import { Providers } from "./provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>João Miguel - Portfólio - Front-end Developer</title>
        <meta
          name="description"
          content="Desde 2018 criando ideias e desenvolvendo soluções em React e React Native, usando criatividade e conhecimento técnico para criar aplicações."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Providers>
          <DropdownLanguage />
          {children}
        </Providers>
      </body>
    </html>
  );
}
