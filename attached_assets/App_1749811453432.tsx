import React, { useState } from 'react';
import { Menu, X, CheckCircle, Building2, Calculator, BookOpen, Users, MapPin, Phone, Mail, Globe } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const branches = [
    { city: 'Chennai', state: 'Tamilnadu' },
    { city: 'Kolkata', state: 'West Bengal' },
    { city: 'Bangalore', state: 'Karnataka' },
    { city: 'Makrana', state: 'Rajasthan' },
    { city: 'Delhi', state: 'Delhi' },
    { city: 'Hyderabad', state: 'Telangana' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">CVR Corpacs</span>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-red-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden sm:flex sm:items-center">
              <a href="#services" className="px-3 py-2 text-gray-700 hover:text-red-600">Services</a>
              <a href="#contact" className="px-3 py-2 text-gray-700 hover:text-red-600">Contact</a>
              <a href="tel:+919326357129" className="ml-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                +91 9326357129
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-red-600">Services</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-red-600">Contact</a>
              <a href="tel:+919326357129" className="block mx-3 mt-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 text-center">
                Call Us
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-16">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Office"
            className="w-full h-[60vh] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Expert Consulting Solutions</h1>
              <p className="text-xl md:text-2xl">Your trusted partner in business growth</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Direct Tax */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-600">
              <div className="flex items-center mb-4">
                <Calculator className="h-8 w-8 text-red-600" />
                <h3 className="text-xl font-bold ml-2">Direct Tax</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Professional tax advisory and strategic tax planning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Preparation and filing of Corporate tax returns for Companies, Partnership firm and Individual</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Tracking on notices served and support in drafting response</span>
                </li>
              </ul>
            </div>

            {/* Indirect Tax */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-600">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-red-600" />
                <h3 className="text-xl font-bold ml-2">Indirect Tax</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Advisory services for GST, VAT, and related regulations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Timely filing and management of periodic tax compliances</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Support during tax assessments and audits</span>
                </li>
              </ul>
            </div>

            {/* Accounting and MIS */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-600">
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-red-600" />
                <h3 className="text-xl font-bold ml-2">Accounting and MIS</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Efficient account maintenance and reconciliation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Detailed review of debtors and creditors with ageing analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Expert support for all types of audits</span>
                </li>
              </ul>
            </div>

            {/* Business Support Services */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-600">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-red-600" />
                <h3 className="text-xl font-bold ml-2">Business Support Services</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Guidance in business formation and registration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Talent acquisition and professional hiring support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Efficient management of commercial operations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Contact Us</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">CVR CORPACS</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-red-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600">
                    207, Raikar Chambers, Deonar Village Road<br />
                    MUMBAI-400088
                  </p>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                  <div>
                    <a href="tel:+919326357129" className="block text-gray-600 hover:text-red-600">
                      +91 9326357129 (Primary)
                    </a>
                    <a href="tel:+919867840291" className="block text-gray-600 hover:text-red-600">
                      +91 9867840291 (Alternative)
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                  <a href="mailto:info@cvrcorpac.com" className="text-gray-600 hover:text-red-600">
                    info@cvrcorpac.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Globe className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                  <a href="https://www.cvrcorpacs.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600">
                    www.cvrcorpacs.com
                  </a>
                </div>
              </div>
            </div>

            {/* Branches */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Our Branches</h3>
              <div className="grid grid-cols-2 gap-4">
                {branches.map((branch, index) => (
                  <div key={index} className="flex items-start">
                    <MapPin className="h-5 w-5 text-red-600 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{branch.city}</p>
                      <p className="text-gray-600 text-sm">{branch.state}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Building2 className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-xl font-bold">CVR Corpacs</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 CVR Corpacs. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;