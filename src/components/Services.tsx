import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Truck, Package, MapPin, Shield } from "lucide-react";
import truckImage from "@/assets/truck-pipes.jpg";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Full Truck Load (FTL)",
      description: "Complete truck capacity for your bulk shipments with dedicated vehicle allocation"
    },
    {
      icon: Package,
      title: "Part Truck Load (PTL)",
      description: "Cost-effective solutions for smaller consignments with shared truck space"
    },
    {
      icon: MapPin,
      title: "Pan-India Network",
      description: "Extensive coverage across India with strategic partnerships and strong fleet ownership"
    },
    {
      icon: Shield,
      title: "Industry Expertise",
      description: "Specialized solutions for FMCG, food products, ration distribution, and heavy equipment"
    }
  ];

  const industries = [
    { name: "FMCG Products", description: "Fast-moving consumer goods distribution" },
    { name: "Food Products", description: "Temperature-controlled and safe food transportation" },
    { name: "Ration Distribution", description: "Large-scale government and institutional supply" },
    { name: "Heavy Equipment", description: "Specialized handling with long platform trailers" },
    { name: "ATM Services", description: "ATM transportation & installation services" },
    { name: "Plant Shifting", description: "Specialized project movements & plant relocations" },
    { name: "Infrastructure", description: "Critical and high-value project cargo" },
    { name: "Manufacturing", description: "Precision handling for manufacturing sectors" }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 hover-scale">
              Our <span className="text-logistics-orange">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6 animate-[scale-in_0.8s_ease-out]"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-[fade-in_1.2s_ease-out]">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="border-0 shadow-corporate hover:shadow-accent transition-all duration-300 group hover-scale animate-[fade-in_0.8s_ease-out]" style={{animationDelay: `${index * 0.2}s`}}>
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-accent group-hover:animate-pulse transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Fleet & Partnerships */}
          <Card className="border-0 shadow-corporate mb-16 hover-scale animate-[fade-in_1s_ease-out]">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Fleet & Partnerships</h3>
                  <p className="text-muted-foreground mb-4">
                    Our success is built on a foundation of strong fleet ownership combined with strategic partnerships with reputed transporters across India.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center hover-scale">
                      <div className="w-2 h-2 bg-logistics-orange rounded-full mr-3 animate-pulse"></div>
                      Own fleet of modern, well-maintained vehicles
                    </li>
                    <li className="flex items-center hover-scale">
                      <div className="w-2 h-2 bg-logistics-orange rounded-full mr-3 animate-pulse"></div>
                      Strategic partnerships with trusted transporters
                    </li>
                    <li className="flex items-center hover-scale">
                      <div className="w-2 h-2 bg-logistics-orange rounded-full mr-3 animate-pulse"></div>
                      Real-time tracking and monitoring systems
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <img 
                    src={truckImage} 
                    alt="Heavy equipment transportation truck with pipes" 
                    className="rounded-xl shadow-lg w-full h-64 object-cover hover-scale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-corporate-blue/60 to-transparent rounded-xl flex items-end p-6">
                    <div className="text-white">
                      <h4 className="text-xl font-bold mb-2">Heavy Equipment Transport</h4>
                      <p className="text-sm">Specialized handling of oversized consignments</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Industries Served */}
           <div>
            <h3 className="text-3xl font-bold text-foreground text-center mb-12">Industries & Specialized Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {industries.map((industry, index) => (
                <Card key={index} className="border-0 shadow-corporate hover:bg-gradient-primary hover:text-primary-foreground group transition-all duration-300 hover-scale animate-[fade-in_0.6s_ease-out]" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6 text-center">
                    <h4 className="text-lg font-bold mb-2 group-hover:text-primary-foreground">{industry.name}</h4>
                    <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">{industry.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Specialized Services Highlight */}
            <Card className="mt-12 border-0 shadow-corporate bg-gradient-hero text-primary-foreground">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-center mb-6">Specialized Heavy Equipment Services</h4>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-logistics-orange rounded-full mr-3"></div>
                      Long platform trailer services
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-logistics-orange rounded-full mr-3"></div>
                      Oversized consignment handling
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-logistics-orange rounded-full mr-3"></div>
                      ATM transportation & installation
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-logistics-orange rounded-full mr-3"></div>
                      Plant shifting & relocation
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-logistics-orange rounded-full mr-3"></div>
                      Critical project movements
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-logistics-orange rounded-full mr-3"></div>
                      Skilled handling & planning
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;