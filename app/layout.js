
export const metadata = {
  title: "ResQFood",
  description: "Reduce food waste - An app to find foods having short expiry date and get them at a discounted price",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
