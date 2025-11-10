import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import ModernFooter from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Novotion - Strategic RPO Partner & Career Support",
  description:
    "Transform your recruitment process with Novotion. RPO services, career support, and specialized recruitment solutions across UK & USA markets.",
  keywords: "RPO, recruitment, career support, talent acquisition, hiring",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="scroll-snap-section">
          <Header />
          {children}
          <ModernFooter />
        </main>
      </body>
    </html>
  );
}
