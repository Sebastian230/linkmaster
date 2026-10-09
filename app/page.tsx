import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero"
import Marquee from "@/components/main/Marquee";
import Projecta from "@/components/main/Projecta";
import Services from "@/components/main/Services";
import Sidebar from "@/components/main/Sidebar";
import Tech from "@/components/main/Tech";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden lg:pl-52">
      <Sidebar/>
      <div className="relative z-30 flex flex-col">
        <Hero/>
        <Marquee/>
        <Services/>
        <Tech/>
        <Projecta/>
        <Footer/>
      </div>
    </main>
  );
}
