import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-corporate-blue text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">SR</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Shree Radhe Logistics</h3>
                  <p className="text-sm text-primary-foreground/80">Pvt Ltd</p>
                </div>
              </div>
              <p className="text-primary-foreground/90 mb-4 max-w-md">
                With over 15 years of experience, we are your trusted partner for reliable logistics 
                and transportation solutions across India.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-logistics-orange" />
                  <span>Head Office: Lucknow, Uttar Pradesh</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-logistics-orange" />
                  <span>+91 XXXXX XXXXX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-logistics-orange" />
                  <span>info@shreeradhelogistics.com</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-4">Our Services</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Full Truck Load (FTL)</li>
                <li>Part Truck Load (PTL)</li>
                <li>FMCG Transportation</li>
                <li>Food Products Logistics</li>
                <li>Ration Distribution</li>
                <li>Heavy Equipment Transport</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>About Us</li>
                <li>Our Structure</li>
                <li>Strategic Ventures</li>
                <li>Our Vision</li>
                <li>Branch Offices</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>

          <Separator className="mb-8 bg-primary-foreground/20" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-primary-foreground/80 mb-4 md:mb-0">
              © 2024 Shree Radhe Logistics Pvt Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-primary-foreground/80">
              <span>Initial Capital: ₹20 Lakhs</span>
              <span>Directors: 2</span>
              <span>Staff: 20+</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;