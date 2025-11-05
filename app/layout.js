import "./globals.css";

export const metadata = {
  title: "株式会社ねこの杜 / Nekonomori Inc.",
  description: "抑止型安全管理システム — Privacy‑Preserving Safety Infrastructure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
