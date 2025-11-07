import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  const projects = [
    {
      image: gallery1,
      title: "Modernne Luksuslik Kodu",
      category: "Elamu"
    },
    {
      image: gallery2,
      title: "Commercial Office Building",
      category: "Commercial"
    },
    {
      image: gallery3,
      title: "Köögi renovatsioon",
      category: "Siseviimistlus"
    },
    {
      image: gallery4,
      title: "Vannitoa ümberehitus",
      category: "Vannitoa renovatsioon"
    },
    {
      image: gallery5,
      title: "Home Addition",
      category: "Residential Addition"
    },
    {
      image: gallery6,
      title: "Avatud Kontseptsioon",
      category: "Sisekujundus"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tehtud Tööd</h2>
          <p className="text-xl text-muted-foreground">
            Vaadake üle meie hiljuti valminud projektid
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white w-full">
                    <p className="text-sm font-semibold text-primary mb-1">{project.category}</p>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
