import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/70" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Ehitame Sinu Tulevikku<br />Ühe Projekti Kaupa
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Professionaalsed ehitustööd enam kui 25-aastase kogemusega elamu- ja ärihoonete projektides
        </p>
        <Button size="lg" onClick={scrollToContact} className="text-lg px-8">
          Tasuta Hinnapakkumine
        </Button>
      </div>
    </section>
  );
};

export default Hero;
