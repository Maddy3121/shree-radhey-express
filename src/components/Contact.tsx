import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailContactImage from "@/assets/email-contact.png";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const company = formData.get('company') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;

    // Create email content
    const subject = `Quote Request from ${company || name} - ${service || 'Logistics Services'}`;
    const body = `Dear Shri Radhey Logistics Team,

I am writing to request a quote for your logistics services.

Contact Information:
- Name: ${name}
- Company: ${company || 'N/A'}
- Email: ${email}
- Phone: ${phone}

Service Required: ${service || 'Not specified'}

Message:
${message}

Please provide a detailed quote including pricing, timeline, and terms of service.

Thank you for your time and consideration.

Best regards,
${name}`;

    // Create mailto link
    const mailtoLink = `mailto:info@shriradheylogistics.co.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    toast({
      title: "Opening Email Client",
      description: "Your email application will open with a pre-filled quote request.",
    });
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
      details: "+91 9359001122 / 9140334550",
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@shriradheylogistics.co.in",
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
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-corporate-blue/5 via-background to-logistics-orange/5"></div>
      
      {/* Animated pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-logistics-orange rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-corporate-blue rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-logistics-orange font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Let's Start a <span className="text-transparent bg-clip-text bg-gradient-accent">Conversation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to help streamline your logistics operations with tailored solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Contact Form - Takes 3 columns */}
            <div className="lg:col-span-3">
              <Card className="border-0 shadow-2xl bg-card/50 backdrop-blur-sm hover:shadow-logistics-orange/10 transition-all duration-500 animate-[fade-in_0.8s_ease-out]">
                <CardHeader className="pb-8">
                  <h3 className="text-3xl font-bold text-foreground">Request a Quote</h3>
                  <p className="text-muted-foreground text-lg">Fill out the form and we'll get back to you within 24 hours</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-base">Full Name *</Label>
                        <Input id="name" name="name" placeholder="John Doe" required className="h-12 text-base" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-base">Company Name</Label>
                        <Input id="company" name="company" placeholder="Your Company Ltd." className="h-12 text-base" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-base">Email Address *</Label>
                        <Input id="email" name="email" type="email" placeholder="john@company.com" required className="h-12 text-base" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-base">Phone Number *</Label>
                        <Input id="phone" name="phone" placeholder="+91 98765 43210" required className="h-12 text-base" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-base">Service Required</Label>
                      <select 
                        id="service" 
                        name="service"
                        className="w-full h-12 px-4 text-base border border-input rounded-md bg-background transition-all hover:border-logistics-orange/50 focus:border-logistics-orange focus:ring-2 focus:ring-logistics-orange/20"
                      >
                        <option value="">Select a service</option>
                        <option value="ftl">Full Truck Load (FTL)</option>
                        <option value="ptl">Part Truck Load (PTL)</option>
                        <option value="both">Both FTL & PTL</option>
                        <option value="custom">Custom Solution</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base">Message *</Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        placeholder="Tell us about your logistics requirements, pickup/delivery locations, cargo details, timeline..." 
                        className="min-h-40 text-base resize-none"
                        required 
                      />
                    </div>

                    <Button variant="corporate" size="lg" type="submit" className="w-full h-14 text-lg font-semibold hover:scale-[1.02] transition-transform">
                      Send Message →
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Contact Cards */}
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card 
                    key={index} 
                    className="border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-logistics-orange/20 transition-all duration-300 hover:translate-x-2 animate-[fade-in_0.6s_ease-out]" 
                    style={{animationDelay: `${index * 0.15}s`}}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wide">{info.title}</p>
                          <p className="font-bold text-foreground text-lg mb-1 break-words">{info.details}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* Branch Offices */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-corporate-blue/10 to-logistics-orange/10 backdrop-blur-sm">
                <CardHeader>
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-logistics-orange" />
                    Our Locations
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  {branches.map((branch, index) => (
                    <div key={index} className="p-4 bg-card/80 backdrop-blur-sm rounded-lg border border-border/50 hover:border-logistics-orange/50 transition-all">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-foreground text-lg">{branch.name}</h4>
                        <span 
                          className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                            branch.status === 'Operational' 
                              ? 'bg-green-500/20 text-green-700 dark:text-green-400' 
                              : 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400'
                          }`}
                        >
                          {branch.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{branch.address}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="border-0 shadow-2xl bg-gradient-hero text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-corporate-blue via-logistics-orange/80 to-corporate-blue opacity-90"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <Phone className="w-12 h-12 mx-auto mb-4 animate-pulse" />
                  <h3 className="text-2xl font-bold mb-3">Need Immediate Assistance?</h3>
                  <p className="text-white/90 mb-6 text-lg">
                    Our logistics experts are ready to help you 24/7
                  </p>
                  <a href="tel:+919359001122">
                    <Button variant="outline" size="lg" className="bg-white text-corporate-blue hover:bg-white/90 border-0 text-lg font-bold h-14 px-8">
                      📞 +91 9359001122
                    </Button>
                  </a>
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