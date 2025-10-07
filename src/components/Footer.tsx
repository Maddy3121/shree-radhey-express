import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-corporate-blue text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-logistics-orange rounded-lg flex items-center justify-center shadow-accent">
                  <span className="text-white font-bold text-lg">SR</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Shree Radhe Logistics</h3>
                  <p className="text-sm text-white/80">Pvt Ltd</p>
                </div>
              </div>
              <p className="text-white/90 mb-4 max-w-md">
                With over 15 years of experience, we are your trusted partner for reliable logistics 
                and transportation solutions across India.
              </p>
              <div className="space-y-2 text-sm text-white/90">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-logistics-orange" />
                  <span>Head Office: Lucknow, Uttar Pradesh</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-logistics-orange" />
                  <span>+91 9359001122 / 9140334550</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-logistics-orange" />
                  <span>info@shreeradhelogistics.com</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">Our Services</h4>
              <ul className="space-y-2 text-sm text-white/80">
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
              <h4 className="text-lg font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>About Us</li>
                <li>Our Structure</li>
                <li>Strategic Ventures</li>
                <li>Our Vision</li>
                <li>Branch Offices</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>

          <Separator className="mb-8 bg-white/20" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/80 mb-4 md:mb-0">
              <span>© 2024 Shri Radhey Logistics Pvt Ltd. All rights reserved.</span>
              <div className="flex flex-col md:flex-row gap-4 text-logistics-orange font-medium">
                <span className="hover-scale">📞 9359001122</span>
                <span className="hover-scale">📞 9140334550</span>
              </div>
            </div>
            <div className="flex space-x-6 text-sm text-white/80">
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