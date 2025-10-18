import { Card, CardContent } from "@/components/ui/card";
import { Package, ShoppingCart, Shirt, Zap, Store, ShoppingBag, Wrench } from "lucide-react";
import industryPharma from "@/assets/industry-pharma.jpg";
import industryFmcg from "@/assets/industry-fmcg.jpg";
import industryApparel from "@/assets/industry-apparel.jpg";
import industryElectronics from "@/assets/industry-electronics.jpg";
import industryRetail from "@/assets/industry-retail.jpg";
import industryEcommerce from "@/assets/industry-ecommerce.jpg";
import industryAuto from "@/assets/industry-auto.jpg";

const IndustriesServed = () => {
  const industries = [
    {
      icon: Package,
      name: "Pharmaceuticals & Wellness",
      description: "Temperature-controlled logistics for healthcare products",
      image: industryPharma
    },
    {
      icon: ShoppingCart,
      name: "FMCG",
      description: "Fast-moving consumer goods distribution",
      image: industryFmcg
    },
    {
      icon: Shirt,
      name: "Apparels & Footwear",
      description: "Fashion and textile supply chain solutions",
      image: industryApparel
    },
    {
      icon: Zap,
      name: "Electronics & Electricals",
      description: "Safe handling of sensitive electronic goods",
      image: industryElectronics
    },
    {
      icon: Store,
      name: "Retail Outlets",
      description: "Last-mile delivery for retail chains",
      image: industryRetail
    },
    {
      icon: ShoppingBag,
      name: "E-commerce",
      description: "Fulfillment and distribution for online businesses",
      image: industryEcommerce
    },
    {
      icon: Wrench,
      name: "Auto & Engineering",
      description: "Heavy equipment and automotive parts logistics",
      image: industryAuto
    }
  ];

  return (
    <section id="industries" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Industries We <span className="text-logistics-orange">Serve</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive logistics solutions across diverse industry sectors
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <Card 
                  key={index} 
                  className="border-0 shadow-premium hover:shadow-luxury transition-all duration-500 group overflow-hidden relative"
                >
                  {industry.image && (
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={industry.image} 
                        alt={industry.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-premium-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  )}
                  <CardContent className={industry.image ? "p-6" : "p-6 pt-12"}>
                    <div className="w-14 h-14 bg-gradient-accent rounded-full flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-500 -mt-10 relative z-10 border-4 border-card">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-logistics-orange transition-colors duration-300">{industry.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
