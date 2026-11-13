import "./globals.css";

export const metadata = {
  title: "TabNews | Em Construção",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
