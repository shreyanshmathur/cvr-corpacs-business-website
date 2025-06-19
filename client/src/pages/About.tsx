import { Link } from "wouter";
import { CheckCircle, ArrowRight, Award, Users, Target, Briefcase, TrendingUp, Clock, Star, Building2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState(0);
  const [counters, setCounters] = useState({ years: 0, clients: 0, projects: 0, branches: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animateCounters = () => {
        const duration = 2000;
        const intervals = 50;
        const steps = duration / intervals;
        
        const targets = { years: 20, clients: 200, projects: 800, branches: 6 };
        
        let step = 0;
        const timer = setInterval(() => {
          step++;
          const progress = step / steps;
          
          setCounters({
            years: Math.floor(targets.years * progress),
            clients: Math.floor(targets.clients * progress),
            projects: Math.floor(targets.projects * progress),
            branches: Math.floor(targets.branches * progress)
          });
          
          if (progress >= 1) {
            clearInterval(timer);
            setCounters(targets);
          }
        }, intervals);
        
        return () => clearInterval(timer);
      };
      
      const timeout = setTimeout(animateCounters, 500);
      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
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
      <section className="pt-20 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-100 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-100 rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-purple-100 rounded-full opacity-25 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className={`text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              About CVR Corpac
            </h1>
            <div className={`w-16 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded mx-auto mb-8 transition-all duration-1000 ${isVisible ? 'scale-100' : 'scale-0'}`} style={{transitionDelay: '0.3s'}}></div>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '0.5s'}}>
              Your Trusted Business Partner Since 2004. A leading consulting firm dedicated to providing expert business solutions across India with unwavering commitment to excellence and client success.
            </p>
          </div>
          
          {/* Animated Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {[
              { icon: Clock, label: "Years Experience", value: counters.years, suffix: "+" },
              { icon: Users, label: "Happy Clients", value: counters.clients, suffix: "+" },
              { icon: Target, label: "Projects Completed", value: counters.projects, suffix: "+" },
              { icon: Building2, label: "Branches", value: counters.branches, suffix: "" }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{transitionDelay: `${0.7 + index * 0.1}s`}}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
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
                Since our inception in 2004, CVR Corpacs LLP has been a steadfast pillar of support for businesses across India. Over the past two decades, we have cultivated strong, enduring relationships with both multinational corporations (MNCs) and Indian corporations (INCs) by delivering innovative, tailor-made solutions that address the unique challenges of modern business.
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our expertise encompasses a comprehensive range of services designed to empower our clients at every level. We ensure timely statutory compliance, maintaining a proactive approach to regulatory requirements that safeguards your operations. Additionally, our commitment to precision in books maintenance guarantees accuracy and transparency in your financial records.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-3" />
                  <span className="text-gray-700 font-medium">20+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-3" />
                  <span className="text-gray-700 font-medium">MNC & INC Clients</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-3" />
                  <span className="text-gray-700 font-medium">Tier 1 & 2 Cities</span>
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
                At CVR Corpac, we are dedicated to being the cornerstone of trust and growth for businesses across industries. Our mission is to empower organizations to reach new heights by delivering exceptional solutions and services that align with their unique needs. As a partner of choice, we pride ourselves on fostering long-term relationships built on a foundation of reliability, excellence, and integrity.
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
                <div 
                  key={index} 
                  className={`p-6 rounded-xl transition-all duration-500 text-center transform cursor-pointer ${
                    activeValue === index 
                      ? 'bg-gradient-to-br from-red-50 to-blue-50 shadow-xl scale-105 border-2 border-red-200' 
                      : 'bg-white shadow-lg hover:shadow-xl hover:-translate-y-2'
                  }`}
                  onMouseEnter={() => setActiveValue(index)}
                >
                  <div className={`p-4 rounded-full w-fit mx-auto mb-4 transition-all duration-300 ${
                    activeValue === index 
                      ? 'bg-gradient-to-br from-red-500 to-red-600 scale-110' 
                      : 'bg-red-100 hover:bg-red-200'
                  }`}>
                    <IconComponent className={`h-8 w-8 transition-colors duration-300 ${
                      activeValue === index ? 'text-white' : 'text-red-600'
                    }`} />
                  </div>
                  <h3 className={`text-xl font-bold font-heading mb-3 transition-colors duration-300 ${
                    activeValue === index ? 'text-red-600' : 'text-gray-900'
                  }`}>
                    {value.title}
                  </h3>
                  <p className={`text-sm leading-relaxed transition-all duration-300 ${
                    activeValue === index ? 'text-gray-700 scale-105' : 'text-gray-600'
                  }`}>
                    {value.description}
                  </p>
                  {activeValue === index && (
                    <div className="mt-4 w-8 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded mx-auto animate-pulse"></div>
                  )}
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
