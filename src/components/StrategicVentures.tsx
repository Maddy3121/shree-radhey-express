import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Handshake, Award, Target, Clock } from "lucide-react";
import partnershipImage from "@/assets/partnership.jpg";
import ashokLeylandImage from "@/assets/ashok-leyland.jpg";

const StrategicVentures = () => {
  const partnerships = [
    {
      name: "Ashok Leyland",
      sector: "Heavy Equipment",
      description: "Strategic partnership in the heavy equipment transportation sector, leveraging their industry expertise and our logistics capabilities.",
      status: "Active Partnership",
      icon: Handshake
    }
  ];

  const experiences = [
    {
      title: "NAFED Ration Distribution",
      duration: "Large-scale project",
      description: "Successfully executed ration distribution for NAFED across Uttar Pradesh, demonstrating our capability in government and institutional supply chains.",
      achievement: "State-wide Coverage",
      icon: Target
    },
    {
      title: "Corporate Associations",
      duration: "Ongoing",
      description: "Strong working associations with ICDS (Integrated Child Development Services), Gati, Caper India, and other reputed organizations for extended network coverage.",
      achievement: "Multi-sector Partnerships",
      icon: Handshake
    },
    {
      title: "Biscuit Industry Experience",
      duration: "7 Years",
      description: "Extensive experience working with leading brands such as Priya Gold and Bonbon Industries in the biscuit manufacturing and distribution sector.",
      achievement: "Brand Partnerships",
      icon: Clock
    }
  ];

  return (
    <section id="ventures" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Strategic Ventures & <span className="text-logistics-orange">Associations</span>
        </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building strong partnerships and leveraging proven industry experience
            </p>
          </div>

          {/* Partnerships */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-foreground text-center mb-12">Current Partnerships</h3>
            <div className="grid lg:grid-cols-1 gap-8">
              {partnerships.map((partnership, index) => {
                const IconComponent = partnership.icon;
                return (
                  <Card key={index} className="border-0 shadow-corporate hover:shadow-accent transition-all duration-300 overflow-hidden group">
                    <div className="grid md:grid-cols-2">
                      <div className="relative h-64 md:h-auto">
                        <img 
                          src={ashokLeylandImage} 
                          alt="Ashok Leyland partnership"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-corporate-blue/60 to-transparent"></div>
                      </div>
                      <CardContent className="p-8 flex flex-col justify-center">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                            <IconComponent className="w-8 h-8 text-primary-foreground" />
                          </div>
                          <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">
                            {partnership.status}
                          </Badge>
                        </div>
                        
                        <h4 className="text-3xl font-bold text-foreground mb-3">{partnership.name}</h4>
                        <Badge variant="outline" className="mb-4 w-fit">{partnership.sector}</Badge>
                        <p className="text-muted-foreground mb-6">{partnership.description}</p>
                        
                        <div className="flex items-center gap-3 text-logistics-orange">
                          <div className="text-4xl">🤝</div>
                          <div className="font-semibold text-foreground">Strategic Alliance</div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Industry Experience */}
          <div>
            <h3 className="text-3xl font-bold text-foreground text-center mb-12">Proven Experience</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {experiences.slice(0, 1).map((experience, index) => {
                const IconComponent = experience.icon;
                return (
                  <Card key={index} className="border-0 shadow-corporate hover:shadow-accent transition-all duration-300 group overflow-hidden">
                    <div className="relative h-48">
                      <img 
                        src={partnershipImage} 
                        alt="Partnership collaboration"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center group-hover:shadow-accent transition-all duration-300">
                          <IconComponent className="w-6 h-6 text-accent-foreground" />
                        </div>
                        <Badge variant="outline">{experience.duration}</Badge>
                      </div>
                      <h4 className="text-xl font-bold text-foreground">{experience.title}</h4>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{experience.description}</p>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 text-logistics-orange mr-2" />
                        <span className="text-sm font-semibold text-foreground">{experience.achievement}</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
              {experiences.slice(1).map((experience, index) => {
                const IconComponent = experience.icon;
                return (
                  <Card key={index} className="border-0 shadow-corporate hover:shadow-accent transition-all duration-300 group">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center group-hover:shadow-accent transition-all duration-300">
                          <IconComponent className="w-6 h-6 text-accent-foreground" />
                        </div>
                        <Badge variant="outline">{experience.duration}</Badge>
                      </div>
                      <h4 className="text-xl font-bold text-foreground">{experience.title}</h4>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{experience.description}</p>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 text-logistics-orange mr-2" />
                        <span className="text-sm font-semibold text-foreground">{experience.achievement}</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Achievements Summary */}
          <Card className="mt-16 border-0 shadow-corporate bg-gradient-accent text-accent-foreground">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Track Record of Excellence</h3>
                <p className="text-accent-foreground/90 mb-6 max-w-3xl mx-auto">
                  Our strategic partnerships and industry experience demonstrate our commitment to delivering reliable, 
                  scalable logistics solutions across diverse sectors and challenging projects.
                </p>
                <div className="grid md:grid-cols-4 gap-8">
                  <div>
                    <div className="text-3xl font-bold mb-2">🏭</div>
                    <div className="font-semibold">Heavy Equipment</div>
                    <div className="text-sm text-accent-foreground/80">Ashok Leyland Partnership</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">🌾</div>
                    <div className="font-semibold">Government Projects</div>
                    <div className="text-sm text-accent-foreground/80">NAFED & ICDS</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">🍪</div>
                    <div className="font-semibold">FMCG Brands</div>
                    <div className="text-sm text-accent-foreground/80">7 Years Industry Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">🤝</div>
                    <div className="font-semibold">Corporate Networks</div>
                    <div className="text-sm text-accent-foreground/80">Gati, Caper India & More</div>
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

export default StrategicVentures;