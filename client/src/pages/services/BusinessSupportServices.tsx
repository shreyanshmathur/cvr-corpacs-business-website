import { useState, useEffect } from "react";
import { Users, CheckCircle, ArrowRight, Building2, UserCheck, Package, DollarSign, FileText, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function BusinessSupportServices() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const keyServices = [
    {
      icon: Building2,
      title: "Business Formation & Registration",
      description: "Comprehensive guidance through the entire business formation process, from initial setup to regulatory compliance."
    },
    {
      icon: UserCheck,
      title: "Talent Acquisition",
      description: "Strategic support in hiring skilled professionals tailored to your specific business requirements."
    },
    {
      icon: Package,
      title: "Manpower Supply",
      description: "Flexible manpower solutions designed to meet your operational needs and scale with your business."
    },
    {
      icon: DollarSign,
      title: "Commercial Operations Management",
      description: "Efficient management of accounts receivable, accounts payable, and inventory operations."
    },
    {
      icon: FileText,
      title: "Document Collection & Management",
      description: "Systematic collection of statutory documents including endorsed SEZ invoices and GST payment declarations."
    },
    {
      icon: Clock,
      title: "Debt Recovery Services",
      description: "Professional assistance in recovering outstanding dues to optimize your cash flow management."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We assess your business support needs and create a customized strategy."
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Develop tailored solutions for your specific operational requirements."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute the planned solutions with minimal disruption to your operations."
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Continuous monitoring and support to ensure optimal performance."
    }
  ];

  const benefits = [
    "Streamlined business operations and improved efficiency",
    "Access to skilled professionals and talent pool",
    "Reduced operational costs through optimized processes",
    "Enhanced cash flow management and debt recovery",
    "Comprehensive documentation and compliance support",
    "Scalable solutions that grow with your business"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-purple-500 rounded-full">
                <Users className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Business Support Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive business support solutions designed to streamline your operations, 
              optimize processes, and drive sustainable growth.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
              Our Business Support Services
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-purple-700 rounded mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From business formation to operational management, we provide end-to-end support 
              for all your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-purple-100 rounded-lg mr-4">
                    <service.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
              Our Process
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-purple-700 rounded mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures efficient delivery of business support services 
              tailored to your unique requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-purple-200"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
                Why Choose Our Business Support Services?
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-purple-700 rounded mb-8"></div>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start animate-fadeInUp"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-6 w-6 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="p-4 bg-purple-100 rounded-full inline-block mb-6">
                    <Users className="h-12 w-12 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">
                    Ready to Transform Your Business?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Let our experts help you streamline operations and achieve sustainable growth.
                  </p>
                  <Link href="/contact">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-semibold">
                      Schedule Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Ready to Optimize Your Business Operations?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Contact our business support specialists today for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Get Expert Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg font-semibold">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}