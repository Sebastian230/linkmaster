import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero"
import Projecta from "@/components/main/Projecta";




export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <div className="relative z-30 flex flex-col">
        <Hero/>
        <Projecta/>
        <Footer/>
        
      </div>
    </main>
  );
}
