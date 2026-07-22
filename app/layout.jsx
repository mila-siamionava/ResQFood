import PageHeader from "@/components/layout/PageHeader/PageHeader";
import Footer from "@/components/layout/footer/Footer";
import "@/styles/globals.css";

export const metadata = {
  title: "ResQFood",
  description:
    "Reduce food waste - An app to find foods having short expiry date and get them at a discounted price",
  applicationName: "ResQFood",

  appleWebApp: {
    capable: true,
    title: "ResQFood",
    statusBarStyle: "default",
  },
};

export const viewport = {
  themeColor: "#2E7D32",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PageHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
