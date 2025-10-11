import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Warehouse, Cpu, Package, TrendingDown, TrendingUp } from "lucide-react";
import warehouseFacility from "@/assets/warehouse-facility.jpg";

const CoreOfferings = () => {
  const offerings = [
    {
      icon: Warehouse,
      title: "End-to-End Supply Chain",
      items: [
        "Warehouse/Storage Solutions - 3PL/4PL services",
        "Fulfilment Centre Services (B2B/B2C/D2C/D2B)",
        "Warehouse Automation (material handling & storage solutions)",
        "E-Commerce Enablement & Management",
        "Contract Logistics",
        "Distribution Services",
        "Custom-bonded Warehousing"
      ]
    },
    {
      icon: Cpu,
      title: "Technology and Innovation",
      items: [
        "Customised Dashboards for Detailed Insights",
        "Control Tower",
        "Warehouse Management Based on Blockchain Data Flow",
        "TMS (Transportation Management System)",
        "Inventory Management",
        "GPS-enabled Fleet for Online Tracking",
        "POS (Point of Sale) System Integration"
      ]
    },
    {
      icon: Package,
      title: "Service Capabilities",
      items: [
        "E-commerce Operations Handling",
        "Quick Commerce Fulfilment",
        "Omni-channel Enablement",
        "Multi-channel Fulfillment",
        "Multi-box Handling",
        "Same Day/ Next Day Delivery",
        "Reverse Logistics"
      ]
    }
  ];

  const costReduction = [
    {
      title: "Network Optimization & Warehouse Efficiency",
      points: [
        "Strategic warehouse placement and network optimization",
        "Reduced inter-warehouse stock transfers",
        "Channel and route optimization for efficient distribution",
        "Decreased last-mile distances and delivery times"
      ]
    },
    {
      title: "Warehouse Utilization and Automation",
      points: [
        "Automation and customized fit-outs for streamlined operations",
        "Effective FIFO (First In, First Out) implementation",
        "Area optimization to maximize storage capacity",
        "Reduced labor costs through optimized processes"
      ]
    },
    {
      title: "Vehicle and Logistics Optimization",
      points: [
        "Optimal selection of truck types for cost-efficient transport",
        "Cross-utilization of B2B-B2C loads for increased efficiency",
        "Efficient route planning and consolidation for milk runs",
        "Maximizing vehicle capacity to reduce transportation costs"
      ]
    }
  ];

  const revenueEnhancement = [
    {
      title: "Extended Reach",
      points: [
        "More than 75 million cu. ft. warehousing capacity",
        "Pan-India reach (19k+ pin codes)",
        "Presence in T2/3/4 locations",
        "Efficient reverse management"
      ]
    },
    {
      title: "Faster Fulfillment",
      points: [
        "Dynamic LTL to FTL conversion",
        "Next-day coverage: Cities within 300 km are served",
        "GPS-enabled fleet management",
        "Flexible delivery: 2-hour, 4-hour, and same-day options"
      ]
    },
    {
      title: "Flexible Operations",
      points: [
        "Ability to scale up capacity quickly",
        "Value added services such as storage, pick, pack, and dispatch",
        "In-plant logistics",
        "Dedicated team working 24/7"
      ]
    }
  ];

  return (
    <section id="offerings" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Core <span className="text-logistics-orange">Offerings</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive logistics solutions that reduce costs and drive revenue
            </p>
          </div>

          {/* Main Offerings */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {offerings.map((offering, index) => {
              const IconComponent = offering.icon;
              return (
                <Card key={index} className="border-0 shadow-corporate hover:shadow-accent transition-all duration-300">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{offering.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {offering.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-logistics-orange rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Cost Reduction & Revenue Enhancement */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Cost Reduction */}
            <Card className="border-0 shadow-corporate">
              <CardHeader className="bg-gradient-primary text-primary-foreground">
                <div className="flex items-center gap-3">
                  <TrendingDown className="w-8 h-8" />
                  <CardTitle className="text-2xl">Cost Reduction</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {costReduction.map((section, index) => (
                    <div key={index}>
                      <h4 className="font-bold text-foreground mb-3">{section.title}</h4>
                      <ul className="space-y-2">
                        {section.points.map((point, idx) => (
                          <li key={idx} className="flex items-start text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-logistics-orange rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Revenue Enhancement */}
            <Card className="border-0 shadow-corporate">
              <CardHeader className="bg-gradient-accent text-accent-foreground">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8" />
                  <CardTitle className="text-2xl">Revenue Enhancement</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {revenueEnhancement.map((section, index) => (
                    <div key={index}>
                      <h4 className="font-bold text-foreground mb-3">{section.title}</h4>
                      <ul className="space-y-2">
                        {section.points.map((point, idx) => (
                          <li key={idx} className="flex items-start text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-corporate-blue rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreOfferings;
