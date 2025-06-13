import { Link } from "wouter";
import { ArrowRight, Calculator, Scale, TrendingUp, BookOpen, Users, Award, Mail } from "lucide-react";

export default function Team() {
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
              Meet Our Expert Team
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At CVR Corpacs LLP, we take immense pride in our team of dedicated professionals, which includes Chartered Accountants, Advocates, MBAs, and graduates. With a diverse blend of expertise and experience, our team is united by a shared passion for delivering excellence.
            </p>
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