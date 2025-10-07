import { Card, CardContent } from "@/components/ui/card";
import { Package, ShoppingCart, Shirt, Zap, Wine, Store, ShoppingBag, Wrench } from "lucide-react";
import industryPharma from "@/assets/industry-pharma.jpg";
import industryFmcg from "@/assets/industry-fmcg.jpg";
import industryApparel from "@/assets/industry-apparel.jpg";

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
      description: "Safe handling of sensitive electronic goods"
    },
    {
      icon: Wine,
      name: "Alcoholic Beverages & Tobacco",
      description: "Secure and compliant transportation"
    },
    {
      icon: Store,
      name: "Retail Outlets",
      description: "Last-mile delivery for retail chains"
    },
    {
      icon: ShoppingBag,
      name: "E-commerce",
      description: "Fulfillment and distribution for online businesses"
    },
    {
      icon: Wrench,
      name: "Auto & Engineering",
      description: "Heavy equipment and automotive parts logistics"
    }
  ];

  const stats = [
    { value: "19,000+", label: "Pin Codes Covered" },
    { value: "76+", label: "Warehouses" },
    { value: "725", label: "Districts Covered" },
    { value: "2,000+", label: "Employees" },
    { value: "150,000+", label: "Retail SKUs Handled" },
    { value: "20+", label: "Global Brands" }
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <Card 
                  key={index} 
                  className="border-0 shadow-corporate hover:shadow-accent transition-all duration-300 group overflow-hidden"
                >
                  {industry.image && (
                    <div className="relative h-32 overflow-hidden">
                      <img 
                        src={industry.image} 
                        alt={industry.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                  )}
                  <CardContent className={industry.image ? "p-6" : "p-6 pt-12"}>
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:shadow-accent transition-all">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{industry.name}</h3>
                    <p className="text-sm text-muted-foreground">{industry.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Statistics */}
          <Card className="border-0 shadow-corporate bg-gradient-hero text-primary-foreground">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-center mb-8">Our Reach & Capabilities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="text-center hover-scale"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-logistics-orange mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
