import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <Navbar className="absolute inset-x-0 top-0 z-20 bg-transparent pt-4 xl:pt-5" />
      {children}
      <Footer />
    </div>
  );
}
