import { Link } from "wouter";
import { Building2, Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Building2 className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-xl font-bold font-heading">CVR Corpacs</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Since our inception in 2004, CVR Corpacs has been a steadfast pillar of support for businesses across India. We specialize in Finance, Taxation, and Commercial Activities with a commitment to excellence.
            </p>
            <div className="flex items-center space-x-4">
              <a href="tel:+919326357129" className="text-gray-300 hover:text-red-400 transition-colors">
                <Phone className="h-5 w-5" />
              </a>
              <a href="mailto:info@cvrcorpac.com" className="text-gray-300 hover:text-red-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://www.cvrcorpacs.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-400 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-red-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-red-400 transition-colors">About</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-red-400 transition-colors">Services</Link></li>
              <li><Link href="/team" className="text-gray-300 hover:text-red-400 transition-colors">Team</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-red-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Direct Tax</span></li>
              <li><span className="text-gray-300">Indirect Tax</span></li>
              <li><span className="text-gray-300">Accounting & MIS</span></li>
              <li><span className="text-gray-300">Business Support</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 CVR Corpacs LLP. All rights reserved.
          </div>
          <div className="text-gray-400 text-sm">
            Designed with excellence for professional consulting services.
          </div>
        </div>
      </div>
    </footer>
  );
}
