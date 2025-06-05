import { Aside } from "@/components/Aside";
import "./globals.css";

export const metadata = {
  title: "Code Connect",
  description: "Por Gabriel Ghiaroni",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="app-container">
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
