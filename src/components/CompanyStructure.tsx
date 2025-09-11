import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Users, Building, MapPin, TrendingUp } from "lucide-react";

const CompanyStructure = () => {
  const stats = [
    {
      icon: Users,
      number: "2",
      label: "Directors",
      description: "Experienced leadership team"
    },
    {
      icon: Users,
      number: "20",
      label: "Staff Members",
      description: "Dedicated professionals"
    },
    {
      icon: Building,
      number: "1",
      label: "Base Office",
      description: "Lucknow headquarters"
    },
    {
      icon: MapPin,
      number: "3",
      label: "Branch Offices",
      description: "Strategic locations"
    }
  ];

  const offices = [
    {
      name: "Base Office - Lucknow",
      status: "Operational",
      description: "Our headquarters managing overall operations and strategic planning",
      type: "primary"
    },
    {
      name: "Noida Transport Nagar",
      status: "Operational",
      description: "Fully operational branch serving North India region",
      type: "operational"
    },
    {
      name: "Ludhiana",
      status: "Upcoming",
      description: "New branch office expanding our Punjab operations",
      type: "upcoming"
    }
  ];

  return (
    <section id="structure" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Company <span className="text-logistics-orange">Structure</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A well-structured organization built for growth and efficiency
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="border-0 shadow-corporate hover:shadow-accent transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-accent transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-logistics-orange mb-2">{stat.number}</div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{stat.label}</h3>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Office Locations */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-foreground text-center mb-12">Office Locations</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <Card 
                  key={index} 
                  className={`border-0 shadow-corporate hover:shadow-accent transition-all duration-300 ${
                    office.type === 'primary' ? 'ring-2 ring-corporate-blue/20' : ''
                  } ${
                    office.type === 'upcoming' ? 'opacity-80' : ''
                  }`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-foreground">{office.name}</h4>
                      <span 
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          office.status === 'Operational' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {office.status}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{office.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Capital Investment */}
          <Card className="border-0 shadow-corporate bg-gradient-primary text-primary-foreground">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <TrendingUp className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Strong Financial Foundation</h3>
                  <p className="text-primary-foreground/90 mb-4">
                    Established as a Private Limited company with a robust initial capital investment to support our expansion plans.
                  </p>
                  <ul className="space-y-2 text-primary-foreground/80">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-logistics-orange rounded-full mr-3"></div>
                      Initial capital of ₹20 lakhs
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-logistics-orange rounded-full mr-3"></div>
                      Strategic investment in infrastructure
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-logistics-orange rounded-full mr-3"></div>
                      Expansion-ready financial planning
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold text-logistics-orange mb-4">₹20L</div>
                  <div className="text-xl font-semibold">Initial Capital</div>
                  <div className="text-primary-foreground/80 mt-2">Driving growth and expansion</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CompanyStructure;