import ThemeProvider from "@/provider/ThemeProvider";
import { SideNav } from "@/components/SideNav";

import "@/styles/globals.css";

export const metadata = {
  title: "Mango Platform",
  description: "Mango User Platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <SideNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
