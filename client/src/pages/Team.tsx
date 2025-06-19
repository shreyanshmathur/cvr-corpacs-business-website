import { Link } from "wouter";
import { ArrowRight, Calculator, Scale, TrendingUp, BookOpen, Users, Award, Mail, Star, Crown, Zap, Heart, MapPin, Phone, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

export default function Team() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % expertiseAreas.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const expertiseAreas = [
    {
      icon: Calculator,
      title: "Chartered Accountants",
      description: "Our team of experienced CAs provides comprehensive financial expertise, ensuring accuracy in all accounting and taxation matters.",
      skills: ["Financial Reporting", "Tax Planning", "Audit & Assurance", "Corporate Finance"],
      count: "8+ Professionals"
    },
    {
      icon: Scale,
      title: "Legal Advocates",
      description: "Qualified advocates specializing in corporate law, taxation disputes, and regulatory compliance matters.",
      skills: ["Tax Litigation", "Corporate Law", "Regulatory Compliance", "Legal Advisory"],
      count: "4+ Professionals"
    },
    {
      icon: TrendingUp,
      title: "Business Analysts (MBAs)",
      description: "Strategic business minds focused on growth optimization, market analysis, and operational excellence.",
      skills: ["Business Strategy", "Market Analysis", "Process Optimization", "Financial Modeling"],
      count: "5+ Professionals"
    },
    {
      icon: BookOpen,
      title: "Specialized Graduates",
      description: "Domain experts with specialized knowledge in various fields contributing to comprehensive business solutions.",
      skills: ["Research & Analysis", "Compliance Management", "Documentation", "Client Relations"],
      count: "6+ Professionals"
    }
  ];

  const departments = [
    {
      name: "Tax Advisory",
      memberCount: 8,
      description: "Expert tax professionals handling direct and indirect tax matters"
    },
    {
      name: "Accounting & Audit",
      memberCount: 6,
      description: "Certified accountants and audit specialists ensuring financial accuracy"
    },
    {
      name: "Business Consulting",
      memberCount: 5,
      description: "Strategic advisors helping businesses grow and optimize operations"
    },
    {
      name: "Legal & Compliance",
      memberCount: 4,
      description: "Legal experts ensuring regulatory compliance and risk management"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-red-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-40 h-40 bg-blue-100 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-32 right-10 w-32 h-32 bg-red-100 rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-purple-100 rounded-full opacity-25 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-32 right-1/3 w-36 h-36 bg-green-100 rounded-full opacity-20 animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className={`text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Meet Our Expert Team
            </h1>
            <div className={`w-16 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded mx-auto mb-8 transition-all duration-1000 ${isVisible ? 'scale-100' : 'scale-0'}`} style={{transitionDelay: '0.3s'}}></div>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '0.5s'}}>
              At CVR Corpacs LLP, we take immense pride in our team of dedicated professionals, which includes Chartered Accountants, Advocates, MBAs, and graduates. With a diverse blend of expertise and experience, our team is united by a shared passion for delivering excellence.
            </p>
          </div>
          
          {/* Team Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Users, label: "Team Members", value: "25+", color: "from-blue-500 to-blue-600" },
              { icon: Award, label: "Certifications", value: "50+", color: "from-green-500 to-green-600" },
              { icon: Star, label: "Years Experience", value: "200+", color: "from-purple-500 to-purple-600" },
              { icon: Crown, label: "Success Rate", value: "98%", color: "from-red-500 to-red-600" }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{transitionDelay: `${0.7 + index * 0.1}s`}}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="h-7 w-7 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">Our Professional Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse team of qualified professionals working together to deliver exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {expertiseAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-red-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold font-heading text-gray-900">{area.title}</h3>
                        <span className="text-sm font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full">
                          {area.count}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">{area.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {area.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Department Stats */}
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">Our Departments</h3>
              <p className="text-gray-600">Organized teams working across specialized domains</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {departments.map((dept, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-red-600 mb-2">{dept.memberCount}</div>
                    <h4 className="font-semibold text-gray-900 mb-2">{dept.name}</h4>
                    <p className="text-sm text-gray-600">{dept.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our team and shape our approach to client service
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for excellence in every engagement, delivering solutions that exceed expectations and drive measurable results.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-4">Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                Our multidisciplinary approach brings together diverse expertise to provide comprehensive solutions for complex business challenges.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-4">Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                We are committed to continuous learning and professional development, staying ahead of industry trends and regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">Join Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We're always looking for talented professionals who share our commitment to excellence and client success.
            </p>
            
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h3>
              <p className="text-red-100 mb-6 max-w-2xl mx-auto">
                If you're passionate about finance, taxation, and business consulting, we'd love to hear from you. Send your resume and let's explore how you can contribute to our growing team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="mailto:info@cvrcorpacs.com" 
                  className="inline-flex items-center px-6 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Send Resume to info@cvrcorpacs.com
                </a>
                <Link href="/contact" className="inline-flex items-center text-red-100 hover:text-white transition-colors">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}