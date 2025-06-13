import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Calculator, CheckCircle, FileText, Users, Award, Target, TrendingUp, Shield, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function DirectTax() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "Tax Advisory & Strategic Planning",
      description: "Comprehensive tax planning strategies to optimize your tax liability while ensuring full compliance with regulations.",
      features: [
        "Annual tax planning and strategy development",
        "Tax-efficient business structure recommendations",
        "Investment planning for tax optimization",
        "Cross-border taxation advice",
        "Merger & acquisition tax planning"
      ],
      icon: Target
    },
    {
      title: "Tax Return Preparation & Filing",
      description: "Professional preparation and timely filing of all types of tax returns with accuracy and compliance.",
      features: [
        "Corporate income tax returns",
        "Partnership firm tax returns", 
        "Individual tax returns (ITR-1 to ITR-7)",
        "Trust and AOP tax returns",
        "Revised and belated return filing"
      ],
      icon: FileText
    },
    {
      title: "Tax Notice & Assessment Support",
      description: "Expert assistance in handling tax notices and representation before tax authorities.",
      features: [
        "Notice analysis and response drafting",
        "Assessment proceeding representation",
        "Appeal filing and follow-up",
        "Penalty mitigation strategies",
        "Settlement commission applications"
      ],
      icon: Shield
    },
    {
      title: "Compliance & TDS Services",
      description: "End-to-end compliance services including withholding tax management and reporting.",
      features: [
        "Monthly TDS return filing",
        "TDS reconciliation and correction",
        "Advance tax computation and payment",
        "Form 16/16A issuance",
        "Lower deduction certificate applications"
      ],
      icon: Calculator
    }
  ];

  const benefits = [
    {
      title: "Expert Knowledge",
      description: "20+ years of experience in direct taxation",
      icon: Award,
      color: "bg-blue-500"
    },
    {
      title: "Compliance Assurance", 
      description: "100% accuracy in tax filings and submissions",
      icon: CheckCircle,
      color: "bg-green-500"
    },
    {
      title: "Time Efficiency",
      description: "Quick turnaround with professional service",
      icon: Clock,
      color: "bg-purple-500"
    },
    {
      title: "Cost Optimization",
      description: "Strategic planning to minimize tax liability",
      icon: TrendingUp,
      color: "bg-orange-500"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Understanding your business structure and tax requirements"
    },
    {
      step: "02", 
      title: "Document Collection",
      description: "Systematic gathering of all necessary financial documents"
    },
    {
      step: "03",
      title: "Analysis & Planning",
      description: "Detailed analysis and strategic tax planning"
    },
    {
      step: "04",
      title: "Implementation",
      description: "Professional execution of tax strategies and filing"
    },
    {
      step: "05",
      title: "Ongoing Support",
      description: "Continuous monitoring and compliance assistance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-indigo-400 opacity-10 rounded-full animate-float"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <Link href="/services" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Services
            </Link>
            
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 p-4 rounded-xl mr-6">
                <Calculator className="h-12 w-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">
                  Direct Tax Services
                </h1>
                <p className="text-xl md:text-2xl text-blue-100">
                  Comprehensive tax solutions for individuals and businesses
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Overview */}
        <section className={`mb-20 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Our Direct Tax Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end direct tax services covering all aspects of income tax compliance, 
              planning, and advisory for individuals, businesses, and organizations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index}
                  className={`card-hover transition-all duration-500 ${
                    isVisible ? 'animate-fadeInUp' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setActiveSection(index)}
                >
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {service.title}
                      </CardTitle>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Benefits Section */}
        <section className={`mb-20 ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Why Choose Our Direct Tax Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card 
                  key={index}
                  className={`text-center card-hover ${
                    isVisible ? 'animate-fadeInUp' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6">
                    <div className={`${benefit.color} p-4 rounded-full w-fit mx-auto mb-4`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Process Section */}
        <section className={`mb-20 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Our Service Process
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our systematic approach ensures comprehensive and efficient tax service delivery
            </p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-5 gap-6">
              {process.map((step, index) => (
                <div 
                  key={index}
                  className={`text-center relative ${
                    isVisible ? 'animate-fadeInUp' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                  
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-200 -translate-x-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Ready to Optimize Your Tax Strategy?
              </h2>
              <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                Let our experienced team help you navigate the complexities of direct taxation 
                and maximize your tax efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-50">
                    Get Expert Consultation
                  </Button>
                </Link>
                <Link href="/knowledge-pool">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    Download Tax Guides
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}