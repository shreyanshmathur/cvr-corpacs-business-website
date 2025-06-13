import { Link } from "wouter";
import { CheckCircle, Calculator, BookOpen, Building2, Users, ArrowRight, FileText, TrendingUp, Shield, Briefcase } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Calculator,
      title: "Direct Tax",
      color: "red",
      features: [
        "Professional tax advisory and strategic tax planning",
        "Preparation and filing of Corporate tax returns for Companies, Partnership firm and Individual",
        "Tracking on notices served and support in drafting response",
        "Assistance in assessment proceedings and representation before tax authorities",
        "Litigation support to address complex tax challenges",
        "End-to-end compliance services: Withholding Tax (TDS) returns, Advance tax computation, WHT (TDS) reconciliation"
      ]
    },
    {
      icon: BookOpen,
      title: "Indirect Tax",
      color: "blue",
      features: [
        "Advisory services for GST, VAT, and related regulations",
        "Timely filing and management of periodic tax compliances",
        "Tracking on notices served and support in drafting response",
        "Support during tax assessments and audits",
        "Litigation assistance to protect business interests",
        "Collection, verification of Input Tax Credit (ITC) declarations from vendors",
        "Customs related work"
      ]
    },
    {
      icon: Building2,
      title: "Accounting & MIS",
      color: "green",
      features: [
        "Efficient account maintenance and reconciliation",
        "Business performance analysis – Actual vs targeted business results",
        "Detailed review of debtors and creditors with ageing analysis",
        "Maintenance and management of Fixed Assets Register",
        "Streamlined inventory management processes",
        "Expert support for all types of audits, ensuring compliance and accuracy"
      ]
    },
    {
      icon: Users,
      title: "Business Support Services",
      color: "purple",
      features: [
        "Comprehensive guidance in business formation and regulatory registration",
        "Strategic talent acquisition and professional hiring support services",
        "Efficient management and optimization of commercial business operations",
        "Legal compliance and regulatory filing assistance",
        "Business process optimization and operational efficiency consulting"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: FileText,
      title: "Documentation Services",
      description: "Complete assistance with business documentation, agreements, and legal paperwork."
    },
    {
      icon: TrendingUp,
      title: "Financial Planning",
      description: "Strategic financial planning and investment advisory services for business growth."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies for business protection."
    },
    {
      icon: Briefcase,
      title: "Corporate Governance",
      description: "Corporate governance advisory and board management consulting services."
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "red":
        return {
          bg: "bg-red-100",
          text: "text-red-600",
          border: "border-red-600"
        };
      case "blue":
        return {
          bg: "bg-blue-100",
          text: "text-blue-600",
          border: "border-blue-600"
        };
      case "green":
        return {
          bg: "bg-green-100",
          text: "text-green-600",
          border: "border-green-600"
        };
      case "purple":
        return {
          bg: "bg-purple-100",
          text: "text-purple-600",
          border: "border-purple-600"
        };
      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-600",
          border: "border-gray-600"
        };
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
              Our Professional Services
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive business solutions designed to meet your organization's unique requirements and regulatory obligations with expert guidance every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Core Service Offerings
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded mx-auto mb-6"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const colors = getColorClasses(service.color);
              
              return (
                <div key={index} className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 ${colors.border} transform hover:-translate-y-1`}>
                  <div className="flex items-center mb-6">
                    <div className={`${colors.bg} p-3 rounded-lg mr-4`}>
                      <IconComponent className={`h-8 w-8 ${colors.text}`} />
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-gray-900">{service.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Additional Expertise
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Specialized services to support your business growth and operational excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1">
                  <div className="bg-red-100 p-4 rounded-full w-fit mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Our Service Process
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A structured approach to delivering exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Initial assessment of your business needs and requirements"
              },
              {
                step: "02",
                title: "Strategy",
                description: "Customized solution development based on your specific situation"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Expert execution of services with regular progress updates"
              },
              {
                step: "04",
                title: "Support",
                description: "Ongoing support and maintenance to ensure continued success"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Contact our experts today to discuss your specific requirements and learn how we can help your business succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a 
              href="tel:+919326357129" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center"
            >
              Call +91 9326357129
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
