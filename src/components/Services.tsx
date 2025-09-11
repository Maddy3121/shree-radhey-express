import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Truck, Package, MapPin, Shield } from "lucide-react";

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
    { name: "Heavy Equipment", description: "Specialized handling of industrial machinery" }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-logistics-orange">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="border-0 shadow-corporate hover:shadow-accent transition-all duration-300 group">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-accent transition-all duration-300">
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
          <Card className="border-0 shadow-corporate mb-16">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Fleet & Partnerships</h3>
                  <p className="text-muted-foreground mb-4">
                    Our success is built on a foundation of strong fleet ownership combined with strategic partnerships with reputed transporters across India.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-logistics-orange rounded-full mr-3"></div>
                      Own fleet of modern, well-maintained vehicles
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-logistics-orange rounded-full mr-3"></div>
                      Strategic partnerships with trusted transporters
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-logistics-orange rounded-full mr-3"></div>
                      Real-time tracking and monitoring systems
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-primary rounded-xl p-6 text-primary-foreground">
                  <h4 className="text-xl font-bold mb-4">Coverage Areas</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>North India</span>
                      <span className="font-semibold">100%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Central India</span>
                      <span className="font-semibold">95%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Western India</span>
                      <span className="font-semibold">90%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Eastern India</span>
                      <span className="font-semibold">85%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Industries Served */}
          <div>
            <h3 className="text-3xl font-bold text-foreground text-center mb-12">Industries We Serve</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <Card key={index} className="border-0 shadow-corporate hover:bg-gradient-primary hover:text-primary-foreground group transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-lg font-bold mb-2 group-hover:text-primary-foreground">{industry.name}</h4>
                    <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">{industry.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;