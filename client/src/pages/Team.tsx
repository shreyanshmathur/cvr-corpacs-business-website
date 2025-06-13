import { Link } from "wouter";
import { ArrowRight, Linkedin, Mail, Phone } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      position: "Senior Tax Consultant",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
      description: "Specializes in corporate taxation and regulatory compliance with over 12 years of experience in the field. Expert in direct tax planning and assessment proceedings.",
      specializations: ["Corporate Tax", "Tax Planning", "Regulatory Compliance", "Assessment Proceedings"]
    },
    {
      name: "Priya Sharma",
      position: "Accounting Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b2ad4de8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
      description: "Expert in financial reporting and MIS with comprehensive knowledge of accounting standards and practices. Leads our accounting and audit services division.",
      specializations: ["Financial Reporting", "MIS", "Audit Services", "Accounting Standards"]
    },
    {
      name: "Amit Patel",
      position: "Business Advisor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
      description: "Focuses on business development and strategic planning with extensive experience in startup ecosystems and business formation processes.",
      specializations: ["Business Development", "Strategic Planning", "Startup Consulting", "Business Formation"]
    },
    {
      name: "Meera Reddy",
      position: "GST Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
      description: "Dedicated GST expert with deep knowledge of indirect tax regulations and compliance requirements. Handles complex GST advisory services.",
      specializations: ["GST Compliance", "Indirect Tax", "VAT Advisory", "Tax Reconciliation"]
    },
    {
      name: "Vikram Singh",
      position: "Operations Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
      description: "Oversees operational excellence across all branches and ensures quality service delivery. Expert in process optimization and team management.",
      specializations: ["Operations Management", "Process Optimization", "Quality Assurance", "Team Leadership"]
    },
    {
      name: "Neha Gupta",
      position: "Legal Advisor",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
      description: "Provides legal advisory services and ensures regulatory compliance across all business operations. Specializes in corporate law and compliance.",
      specializations: ["Corporate Law", "Legal Compliance", "Contract Review", "Regulatory Advisory"]
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

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1">
                <img 
                  src={member.image}
                  alt={`Professional headshot of ${member.name}`}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-md"
                />
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">{member.name}</h3>
                <p className="text-red-600 font-medium mb-4">{member.position}</p>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">{member.description}</p>
                
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Specializations:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specializations.map((spec, specIndex) => (
                      <span key={specIndex} className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center space-x-4 mt-6">
                  <button className="text-gray-400 hover:text-red-600 transition-colors">
                    <Mail className="h-5 w-5" />
                  </button>
                  <button className="text-gray-400 hover:text-red-600 transition-colors">
                    <Phone className="h-5 w-5" />
                  </button>
                  <button className="text-gray-400 hover:text-red-600 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Our Departments
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Specialized teams working together to provide comprehensive business solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {dept.memberCount}
                </div>
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">{dept.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Why Choose Our Team
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 p-4 rounded-full w-fit mx-auto mb-4">
                <div className="text-2xl font-bold text-red-600">10+</div>
              </div>
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">Years of Experience</h3>
              <p className="text-gray-600">Our team brings over a decade of combined expertise across various domains.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 p-4 rounded-full w-fit mx-auto mb-4">
                <div className="text-2xl font-bold text-red-600">23+</div>
              </div>
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">Expert Professionals</h3>
              <p className="text-gray-600">Certified professionals across tax, accounting, legal, and business domains.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 p-4 rounded-full w-fit mx-auto mb-4">
                <div className="text-2xl font-bold text-red-600">6</div>
              </div>
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">City Presence</h3>
              <p className="text-gray-600">Local expertise with teams across major Indian business centers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career CTA */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Are you a passionate professional looking to make a difference? We're always looking for talented individuals to join our team of experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center"
            >
              Send Your Resume
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a 
              href="mailto:careers@cvrcorpac.com" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center"
            >
              careers@cvrcorpac.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
