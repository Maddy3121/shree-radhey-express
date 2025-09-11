import { Card, CardContent } from "@/components/ui/card";
import warehouseImage from "@/assets/warehouse-ops.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-logistics-orange">Shree Radhe Logistics</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building on a legacy of excellence in logistics and transportation
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Journey</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With over 15 years of experience in the logistics and transportation industry, we have built a strong foundation through our three companies: <strong>Shri Logistic and Courier Services</strong>, <strong>Lakshmi Express</strong> and <strong>Transworld Cargo Movers</strong>.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Over the years, we have successfully catered to diverse client needs with reliability, efficiency, and commitment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                To further scale our operations and bring greater value to our partners, we have now established a new Private Limited firm - <strong className="text-corporate-blue">Shri Radhey Logistics Pvt Ltd</strong> with an initial capital of ₹20 lakhs, driven by a vision to expand across India and beyond.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src={warehouseImage}
                alt="Modern warehouse operations at Shree Radhe Logistics"
                className="rounded-2xl shadow-corporate w-full h-96 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-primary text-primary-foreground p-6 rounded-xl shadow-accent">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Experience Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-corporate hover:shadow-accent transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">3</span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Established Companies</h4>
                <p className="text-muted-foreground">
                  Built through Shri Logistic, Lakshmi Express, and Transworld Cargo Movers
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-corporate hover:shadow-accent transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">₹20L</span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Strong Capital Base</h4>
                <p className="text-muted-foreground">
                  Initial investment driving expansion and infrastructure development
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-corporate hover:shadow-accent transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">∞</span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Commitment to Excellence</h4>
                <p className="text-muted-foreground">
                  Reliability, efficiency, and unwavering commitment to client success
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;