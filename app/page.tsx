import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero"
import Projecta from "@/components/main/Projecta";




export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col  gap-20">
        <Hero/>
        <Projecta/>
        <Footer/>
        
      </div>
    </main>
  );
}
