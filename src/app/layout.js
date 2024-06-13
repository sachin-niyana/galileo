import "./globals.css";

export const metadata = {
  metadataBase: "https://galileo-eight.vercel.app/",
  title: "Galileo",
  description: "Welcome to Galileo page",
  openGraph: {
    title: "Galileo",
    description: "Welcome to Galileo page",
    images: ["/assets/images/png/meta.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
