import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, BookOpen, CheckCircle, FileText, TrendingUp, Shield, Clock, Globe, Receipt, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function IndirectTax() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "GST Advisory & Compliance",
      description: "Comprehensive GST services covering registration, filing, and compliance management.",
      features: [
        "GST registration and cancellation",
        "Monthly and quarterly return filing",
        "Input tax credit optimization",
        "GST audit and reconciliation",
        "Rate determination and classification"
      ],
      icon: Receipt
    },
    {
      title: "Custom Duty & Trade Compliance",
      description: "Expert guidance on customs procedures, duty optimization, and international trade compliance.",
      features: [
        "Import/export documentation",
        "Duty drawback schemes",
        "Free trade agreement benefits",
        "Advance authorization schemes",
        "Export promotion schemes"
      ],
      icon: Globe
    },
    {
      title: "Notice Management & Litigation",
      description: "Professional handling of tax notices and representation before authorities.",
      features: [
        "Notice analysis and response",
        "Assessment proceeding support",
        "Appeal and revision applications",
        "Tribunal and court representation",
        "Settlement and compounding"
      ],
      icon: AlertTriangle
    },
    {
      title: "VAT & State Tax Compliance",
      description: "State-specific indirect tax compliance and advisory services.",
      features: [
        "State VAT registration and compliance",
        "Professional tax management",
        "Entry tax and octroi matters",
        "State-specific incentive schemes",
        "Multi-state compliance coordination"
      ],
      icon: FileText
    }
  ];

  const gstServices = [
    {
      title: "GST Registration Services",
      items: [
        "New registration applications",
        "Composition scheme registration",
        "Voluntary registration guidance",
        "Amendment in registration details",
        "Cancellation procedures"
      ]
    },
    {
      title: "GST Return Filing",
      items: [
        "GSTR-1 (Outward supplies)",
        "GSTR-3B (Monthly summary)",
        "GSTR-9 (Annual return)",
        "GSTR-4 (Composition scheme)",
        "CMP-08 (Composition returns)"
      ]
    },
    {
      title: "Input Tax Credit Management",
      items: [
        "ITC reconciliation and optimization",
        "Vendor compliance monitoring",
        "Blocked credit analysis",
        "ITC reversal compliance",
        "E-way bill management"
      ]
    }
  ];

  const benefits = [
    {
      title: "Expert GST Knowledge",
      description: "Specialized expertise in GST law and procedures",
      icon: BookOpen,
      color: "bg-green-500"
    },
    {
      title: "Compliance Accuracy",
      description: "Error-free filing and complete compliance assurance",
      icon: CheckCircle,
      color: "bg-blue-500"
    },
    {
      title: "Cost Efficiency",
      description: "Optimized tax structure to minimize liability",
      icon: TrendingUp,
      color: "bg-purple-500"
    },
    {
      title: "Risk Mitigation",
      description: "Proactive compliance to avoid penalties",
      icon: Shield,
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-48 h-48 bg-green-400 opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-emerald-400 opacity-10 rounded-full animate-float"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <Link href="/services" className="inline-flex items-center text-green-200 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Services
            </Link>
            
            <div className="flex items-center mb-6">
              <div className="bg-green-600 p-4 rounded-xl mr-6">
                <BookOpen className="h-12 w-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">
                  Indirect Tax Services
                </h1>
                <p className="text-xl md:text-2xl text-green-100">
                  GST, Customs, and VAT compliance solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Services */}
        <section className={`mb-20 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Comprehensive Indirect Tax Solutions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Navigate the complex landscape of indirect taxation with our expert guidance on GST, 
              customs duty, VAT, and other regulatory requirements.
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
                >
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="bg-green-100 p-3 rounded-lg mr-4">
                        <IconComponent className="h-8 w-8 text-green-600" />
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

        {/* GST Specialized Services */}
        <section className={`mb-20 ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Specialized GST Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive GST solutions covering all aspects from registration to compliance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {gstServices.map((service, index) => (
              <Card 
                key={index}
                className={`card-hover ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900 text-center">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className={`mb-20 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Why Choose Our Indirect Tax Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded mx-auto"></div>
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

        {/* CTA Section */}
        <section className={`text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Simplify Your Indirect Tax Compliance
              </h2>
              <p className="text-green-100 mb-8 text-lg max-w-2xl mx-auto">
                Let our experts handle your GST, customs, and VAT requirements while you focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-50">
                    Schedule Consultation
                  </Button>
                </Link>
                <Link href="/knowledge-pool">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                    GST Resources
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