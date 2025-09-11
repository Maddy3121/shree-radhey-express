import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: "Lucknow, Uttar Pradesh, India",
      description: "Our main operations center"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 XXXXX XXXXX",
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@shreeradhelogistics.com",
      description: "Send us your requirements"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Sat: 9:00 AM - 6:00 PM",
      description: "Sunday: Emergency services only"
    }
  ];

  const branches = [
    {
      name: "Noida Transport Nagar",
      status: "Operational",
      address: "Transport Nagar, Noida, Uttar Pradesh"
    },
    {
      name: "Ludhiana Branch",
      status: "Coming Soon",
      address: "Ludhiana, Punjab"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact <span className="text-logistics-orange">Us</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to streamline your logistics? Get in touch with our team for customized solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-corporate">
              <CardHeader>
                <h3 className="text-2xl font-bold text-foreground">Get a Quote</h3>
                <p className="text-muted-foreground">Tell us about your logistics requirements</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Your full name" required />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="Your company" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" placeholder="+91 XXXXX XXXXX" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Service Required</Label>
                    <select 
                      id="service" 
                      className="w-full p-3 border border-input rounded-md bg-background"
                    >
                      <option value="">Select a service</option>
                      <option value="ftl">Full Truck Load (FTL)</option>
                      <option value="ptl">Part Truck Load (PTL)</option>
                      <option value="both">Both FTL & PTL</option>
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your logistics requirements, pickup/delivery locations, cargo details, etc." 
                      className="min-h-32"
                      required 
                    />
                  </div>

                  <Button variant="corporate" size="lg" type="submit" className="w-full">
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="border-0 shadow-corporate hover:shadow-accent transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground mb-1">{info.title}</h4>
                            <p className="text-logistics-orange font-semibold mb-1">{info.details}</p>
                            <p className="text-sm text-muted-foreground">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Branch Offices */}
              <Card className="border-0 shadow-corporate">
                <CardHeader>
                  <h3 className="text-xl font-bold text-foreground">Branch Offices</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {branches.map((branch, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-foreground">{branch.name}</h4>
                          <p className="text-sm text-muted-foreground">{branch.address}</p>
                        </div>
                        <span 
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            branch.status === 'Operational' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {branch.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="border-0 shadow-corporate bg-gradient-hero text-primary-foreground">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-primary-foreground/90 mb-6">
                    Our team is ready to provide you with a customized logistics solution. 
                    Contact us today for competitive pricing and reliable service.
                  </p>
                  <Button variant="accent" size="lg">
                    Call Now: +91 XXXXX XXXXX
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;