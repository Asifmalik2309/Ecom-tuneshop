// app/(web)/layout.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "TuneShop",
  description: "Official music store",
};

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
 <div>
        <Navbar />
        <main className="min-h-screen px-4 py-8">{children}</main>
        <Footer />
        </div>
  );
}
