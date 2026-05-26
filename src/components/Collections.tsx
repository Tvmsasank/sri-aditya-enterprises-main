import sofasets from "@/assets/sofas.jpg";
import plastichairs from "@/assets/plastic-chairs.jpg";
import bedroomfurniture from "@/assets/bed-room.jpg";
import livingroom from "@/assets/living-room.jpg";
import sleepwellmattress from "@/assets/sleepwell-mattress.jpg";
import sofacumbed from "@/assets/sofa-cum-bed.jpg";
import furnishings from "@/assets/furnishings.jpg";
import diningtable from "@/assets/dining-table.jpg";
import lockers from "@/assets/godrej-lockers.jpg";
import wardrobe from "@/assets/wardrobe.jpg";
import storagesolution from "@/assets/storage-solutions.jpg";
import miscellaneous from "@/assets/miscellaneous.jpg";

const furnitureItems = [
  {
    name: "Sofa Sets",
    //description: "Elegant comfort for your living room",
    image: sofasets,
  },
  {
    name: "BedRoom Furniture",
    //description: "",
    image: bedroomfurniture,
  },
  {
    name: "Sleepwell Mattress",
    //description: "",
    image: sleepwellmattress,
  },
  {
    name: "Wardrobe",
    //description: "Gather around in style",
    image: wardrobe,
  },
  {
    name: "Living Room",
    //description: "",
    image: livingroom,
  },
  {
    name: "Dining Tables",
    //description: "Gather around in style",
    image: diningtable,
  },
  {
    name: "Sofa - Bed",
    //description: "",
    image: sofacumbed,
  },
  {
    name: "Furnishings",
    //description: "",
    image: furnishings,
  },
  {
    name: "Storage Solutions",
    //description: "",
    image: storagesolution,
  },
  {
    name: "Plastic Chairs",
    //description: "Ergonomic designs for productivity",
    image: plastichairs,
  },
  {
    name: "Godrej Lockers",
    //description: "Spacious storage solutions",
    image: lockers,
  },
  {
    name: "Miscellaneous",
    //decsription: "",
    image: miscellaneous,
  }
];

export const Collections = () => {
  return (
    <section id="collections" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Collections
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover our wide range of products, Designer to elevate every corner of your home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {furnitureItems.map((item, index) => (
            <div
              key={item.name}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
