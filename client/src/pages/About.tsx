import { Link } from "wouter";
import { CheckCircle, ArrowRight, Award, Users, Target, Briefcase } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of professional excellence in all our services."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Our clients' success is our priority, and we tailor solutions to meet their unique needs."
    },
    {
      icon: Target,
      title: "Integrity",
      description: "We conduct business with transparency, honesty, and ethical practices."
    },
    {
      icon: Briefcase,
      title: "Expertise",
      description: "Our team brings years of specialized knowledge and industry experience."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
              About CVR Corpacs
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A leading consulting firm dedicated to providing expert business solutions across India with a commitment to excellence and client success.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded mb-8"></div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                CVR Corpacs was founded with a vision to bridge the gap between complex regulatory requirements and business success. With our headquarters strategically located in Mumbai, we have expanded our presence across six major Indian cities to serve businesses of all sizes.
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team of experienced professionals brings together decades of combined expertise in taxation, accounting, and business consulting. We pride ourselves on staying ahead of regulatory changes and industry trends to provide our clients with the most current and effective solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-3" />
                  <span className="text-gray-700 font-medium">10+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-3" />
                  <span className="text-gray-700 font-medium">500+ Satisfied Clients</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-3" />
                  <span className="text-gray-700 font-medium">6 Strategic Locations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-3" />
                  <span className="text-gray-700 font-medium">Expert Team</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional business team in strategic meeting" 
                className="rounded-xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses across India by providing expert consulting services that ensure regulatory compliance, optimize operations, and drive sustainable growth. We are committed to being the trusted partner that businesses rely on for navigating complex challenges and achieving their goals.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-6">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading consulting firm in India, recognized for our expertise, integrity, and innovative solutions. We envision a future where every business, regardless of size, has access to world-class consulting services that enable them to thrive in an ever-changing business environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Our Core Values
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide our work and define our commitment to clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1">
                  <div className="bg-red-100 p-4 rounded-full w-fit mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Our Presence Across India
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Strategically located offices to serve businesses across major Indian cities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { city: "Mumbai", state: "Maharashtra", description: "Our headquarters and main operations center" },
              { city: "Chennai", state: "Tamil Nadu", description: "Southern India operations hub" },
              { city: "Kolkata", state: "West Bengal", description: "Eastern India service center" },
              { city: "Bangalore", state: "Karnataka", description: "Technology and innovation center" },
              { city: "Delhi", state: "Delhi", description: "Northern India regional office" },
              { city: "Hyderabad", state: "Telangana", description: "Expanding our southern presence" }
            ].map((branch, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">{branch.city}</h3>
                <p className="text-red-600 font-medium mb-3">{branch.state}</p>
                <p className="text-gray-600 text-sm">{branch.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our expertise can help your business achieve its goals and navigate regulatory challenges with confidence.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg inline-flex items-center"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
