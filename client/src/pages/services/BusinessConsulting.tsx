import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Users, CheckCircle, Lightbulb, Target, Briefcase, TrendingUp, Shield, Globe, Award, Zap, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BusinessConsulting() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "Business Strategy & Planning",
      description: "Strategic guidance to help businesses navigate growth challenges and market opportunities.",
      features: [
        "Business model development and optimization",
        "Market analysis and competitive positioning",
        "Growth strategy formulation",
        "Financial planning and budgeting",
        "Risk assessment and mitigation strategies"
      ],
      icon: Target
    },
    {
      title: "Regulatory Compliance Advisory",
      description: "Comprehensive compliance guidance across various regulatory frameworks and industry standards.",
      features: [
        "Regulatory requirement analysis",
        "Compliance framework development",
        "Policy and procedure documentation",
        "Training and awareness programs",
        "Audit and monitoring systems"
      ],
      icon: Shield
    },
    {
      title: "Corporate Restructuring",
      description: "Expert guidance on organizational restructuring to optimize efficiency and compliance.",
      features: [
        "Merger and acquisition advisory",
        "Corporate entity restructuring",
        "Due diligence support",
        "Valuation and financial modeling",
        "Integration planning and execution"
      ],
      icon: Settings
    },
    {
      title: "International Business Setup",
      description: "End-to-end support for businesses expanding into international markets.",
      features: [
        "Foreign market entry strategies",
        "International entity formation",
        "Cross-border compliance guidance",
        "Tax optimization structures",
        "Partnership and joint venture advisory"
      ],
      icon: Globe
    }
  ];

  const consultingAreas = [
    {
      title: "Startup Advisory",
      description: "Comprehensive guidance for new businesses",
      services: [
        "Business plan development",
        "Funding strategy and investor relations",
        "Legal structure optimization",
        "Operational setup guidance",
        "Market entry strategies"
      ],
      icon: Lightbulb,
      color: "bg-yellow-500"
    },
    {
      title: "Growth Strategy",
      description: "Strategic planning for business expansion",
      services: [
        "Market expansion analysis",
        "Product diversification strategies",
        "Acquisition opportunities",
        "Technology adoption planning",
        "Performance optimization"
      ],
      icon: TrendingUp,
      color: "bg-green-500"
    },
    {
      title: "Digital Transformation",
      description: "Technology-driven business modernization",
      services: [
        "Digital strategy development",
        "Process automation guidance",
        "Technology stack optimization",
        "Change management support",
        "Digital compliance frameworks"
      ],
      icon: Zap,
      color: "bg-blue-500"
    }
  ];

  const industries = [
    { name: "Manufacturing", expertise: "Supply chain optimization, quality management" },
    { name: "Technology", expertise: "Digital transformation, IP strategy" },
    { name: "Healthcare", expertise: "Regulatory compliance, quality assurance" },
    { name: "Financial Services", expertise: "Risk management, regulatory compliance" },
    { name: "Retail & E-commerce", expertise: "Market expansion, digital strategies" },
    { name: "Real Estate", expertise: "Investment strategies, regulatory compliance" }
  ];

  const benefits = [
    {
      title: "Expert Guidance",
      description: "20+ years of cross-industry consulting experience",
      icon: Award,
      color: "bg-purple-500"
    },
    {
      title: "Tailored Solutions",
      description: "Customized strategies for your unique business needs",
      icon: Target,
      color: "bg-blue-500"
    },
    {
      title: "Proven Results",
      description: "Track record of successful business transformations",
      icon: TrendingUp,
      color: "bg-green-500"
    },
    {
      title: "Ongoing Support",
      description: "Continuous partnership throughout implementation",
      icon: Users,
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-900 to-amber-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-12 left-12 w-60 h-60 bg-orange-400 opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-12 right-12 w-80 h-80 bg-amber-400 opacity-10 rounded-full animate-float"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <Link href="/services" className="inline-flex items-center text-orange-200 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Services
            </Link>
            
            <div className="flex items-center mb-6">
              <div className="bg-orange-600 p-4 rounded-xl mr-6">
                <Users className="h-12 w-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">
                  Business Consulting
                </h1>
                <p className="text-xl md:text-2xl text-orange-100">
                  Strategic advisory and business transformation solutions
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
              Strategic Business Advisory
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your business with our comprehensive consulting services designed to drive growth, 
              ensure compliance, and optimize operational efficiency.
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
                      <div className="bg-orange-100 p-3 rounded-lg mr-4">
                        <IconComponent className="h-8 w-8 text-orange-600" />
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

        {/* Specialized Consulting Areas */}
        <section className={`mb-20 ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Specialized Consulting Areas
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Focused expertise in key business transformation areas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {consultingAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Card 
                  key={index}
                  className={`card-hover ${
                    isVisible ? 'animate-fadeInUp' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader className="text-center">
                    <div className={`${area.color} p-4 rounded-full w-fit mx-auto mb-4`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {area.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm">{area.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {area.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Industry Expertise */}
        <section className={`mb-20 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Industry Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deep sector knowledge across diverse industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card 
                key={index}
                className={`card-hover text-center ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-gray-600 text-sm">{industry.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className={`mb-20 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Why Choose Our Consulting Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded mx-auto"></div>
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
          <Card className="bg-gradient-to-r from-orange-600 to-amber-600 text-white border-0">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-orange-100 mb-8 text-lg max-w-2xl mx-auto">
                Partner with our experienced consultants to unlock your business potential 
                and achieve sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-50">
                    Schedule Strategy Session
                  </Button>
                </Link>
                <Link href="/team">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                    Meet Our Experts
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