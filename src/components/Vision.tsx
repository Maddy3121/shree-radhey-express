import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, MapPin, Clock, Shield } from "lucide-react";

const Vision = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Delivering superior logistics solutions that exceed expectations"
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "Ensuring timely delivery with consistent, dependable service"
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Building lasting relationships through transparency and integrity"
    },
    {
      icon: MapPin,
      title: "Innovation",
      description: "Leveraging technology and partnerships for optimal solutions"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-logistics-orange">Vision</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          </div>

          {/* Vision Statement */}
          <Card className="border-0 shadow-corporate mb-16 bg-gradient-hero text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                To be a leading logistics and transport solutions provider in India
              </h3>
              <p className="text-xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
                By combining our strong industry experience, infrastructure, and strategic partnerships 
                to deliver cost-effective, timely, and reliable services that drive our clients' success 
                and contribute to India's growing economy.
              </p>
            </CardContent>
          </Card>

          {/* Core Values */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-foreground text-center mb-12">Our Core Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="border-0 shadow-corporate hover:shadow-accent transition-all duration-300 group">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-accent transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Growth Strategy */}
          <Card className="border-0 shadow-corporate">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Growth Strategy</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-logistics-orange rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Geographic Expansion</h4>
                        <p className="text-muted-foreground">Extending our reach across India with new branch offices and partnerships</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-logistics-orange rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Technology Integration</h4>
                        <p className="text-muted-foreground">Implementing advanced tracking and management systems for enhanced efficiency</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-logistics-orange rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Service Diversification</h4>
                        <p className="text-muted-foreground">Expanding our service portfolio to meet evolving market demands</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-logistics-orange rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Strategic Partnerships</h4>
                        <p className="text-muted-foreground">Building alliances with industry leaders for mutual growth</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-accent rounded-xl p-6 text-accent-foreground">
                  <h4 className="text-xl font-bold mb-6">Future Milestones</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>5+ Branch Offices</span>
                      <span className="text-2xl font-bold">2025</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Pan-India Coverage</span>
                      <span className="text-2xl font-bold">2026</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>International Operations</span>
                      <span className="text-2xl font-bold">2027</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Vision;