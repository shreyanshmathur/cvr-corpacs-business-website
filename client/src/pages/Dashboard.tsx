import { useState, useEffect } from "react";
import { Link } from "wouter";
import { 
  Calendar, 
  FileText, 
  Calculator, 
  Users, 
  TrendingUp, 
  Bell, 
  Clock, 
  ArrowRight,
  BookOpen,
  Phone,
  MessageSquare,
  Download,
  CheckCircle,
  Star,
  Target
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  const [userName] = useState("Welcome"); // In real app, this would come from auth
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    const visibilityTimer = setTimeout(() => setIsVisible(true), 300);
    
    // Animate stats numbers
    const statsAnimation = setTimeout(() => {
      const targetValues = [32, 20, 100, 6];
      let currentValues = [0, 0, 0, 0];
      
      const animateNumbers = () => {
        const increment = [1.6, 1, 5, 0.3];
        let allReached = true;
        
        currentValues = currentValues.map((current, index) => {
          if (current < targetValues[index]) {
            allReached = false;
            return Math.min(current + increment[index], targetValues[index]);
          }
          return current;
        });
        
        setAnimatedStats([...currentValues]);
        
        if (!allReached) {
          requestAnimationFrame(animateNumbers);
        }
      };
      
      animateNumbers();
    }, 800);
    
    return () => {
      clearInterval(timer);
      clearTimeout(visibilityTimer);
      clearTimeout(statsAnimation);
    };
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const quickActions = [
    {
      title: "Browse Knowledge Pool",
      description: "Access 32+ GST documents and guides",
      icon: BookOpen,
      href: "/knowledge-pool",
      color: "bg-blue-500",
      stats: "32 Documents"
    },
    {
      title: "Contact Expert",
      description: "Get professional consultation",
      icon: MessageSquare,
      href: "/contact",
      color: "bg-green-500",
      stats: "24/7 Support"
    },
    {
      title: "Our Services",
      description: "Explore comprehensive solutions",
      icon: Calculator,
      href: "/services",
      color: "bg-purple-500",
      stats: "4 Core Areas"
    },
    {
      title: "About Our Team",
      description: "Meet our expert professionals",
      icon: Users,
      href: "/team",
      color: "bg-orange-500",
      stats: "20+ Years Exp"
    }
  ];

  const recentActivity = [
    {
      title: "New GST Update",
      description: "Latest compliance requirements published",
      time: "2 hours ago",
      type: "update"
    },
    {
      title: "Document Downloaded",
      description: "Input Tax Credit Mechanism guide",
      time: "1 day ago",
      type: "download"
    },
    {
      title: "Consultation Booked",
      description: "GST registration assistance",
      time: "3 days ago",
      type: "booking"
    }
  ];

  const stats = [
    {
      label: "Documents Available",
      value: Math.floor(animatedStats[0]),
      suffix: "+",
      change: "+2 this month",
      icon: FileText,
      color: "text-blue-600"
    },
    {
      label: "Years Experience",
      value: Math.floor(animatedStats[1]),
      suffix: "+",
      change: "Since 2004",
      icon: Calendar,
      color: "text-green-600"
    },
    {
      label: "Client Satisfaction",
      value: Math.floor(animatedStats[2]),
      suffix: "%",
      change: "Maintained",
      icon: Star,
      color: "text-yellow-600"
    },
    {
      label: "Service Areas",
      value: Math.floor(animatedStats[3]),
      suffix: "+",
      change: "Branches",
      icon: Target,
      color: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Welcome Section */}
      <section className="relative py-12 bg-gradient-to-r from-red-600 to-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              {getGreeting()}! 👋
            </h1>
            <p className="text-xl md:text-2xl text-red-100 mb-6">
              Welcome to CVR Corpacs LLP - Your Trusted Business Partner
            </p>
            <div className="flex items-center justify-center gap-2 text-red-200">
              <Clock className="h-5 w-5" />
              <span className="text-lg">
                {currentTime.toLocaleDateString('en-IN', { 
                  weekday: 'long',
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Overview */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card 
                key={index} 
                className="card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4`}>
                    <IconComponent className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm font-medium text-gray-600 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.change}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className={`mb-12 ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-8 text-center">
            Quick Actions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <Link 
                  key={index} 
                  href={action.href}
                  className="block"
                >
                  <Card className="card-hover h-full transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`${action.color} p-3 rounded-lg mr-4`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {action.stats}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {action.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {action.description}
                      </p>
                      <div className="flex items-center text-red-600 text-sm font-medium">
                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Recent Activity & Quick Links */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <Card className={`${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-red-600" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{activity.title}</h4>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Popular Resources */}
          <Card className={`${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Popular Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div>
                    <h4 className="font-medium text-gray-900">GST Registration Guide</h4>
                    <p className="text-sm text-gray-600">Complete registration process</p>
                  </div>
                  <Badge variant="outline">Most Downloaded</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div>
                    <h4 className="font-medium text-gray-900">Input Tax Credit</h4>
                    <p className="text-sm text-gray-600">ITC mechanism explained</p>
                  </div>
                  <Badge variant="outline">Trending</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div>
                    <h4 className="font-medium text-gray-900">Return Filing</h4>
                    <p className="text-sm text-gray-600">Step-by-step guide</p>
                  </div>
                  <Badge variant="outline">New</Badge>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/knowledge-pool">
                  <Button className="w-full">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Browse All Documents
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className={`mt-12 text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <Card className="bg-gradient-to-r from-red-600 to-red-700 text-white border-0">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold font-heading mb-4">
                Need Expert Assistance?
              </h2>
              <p className="text-red-100 mb-6 text-lg max-w-2xl mx-auto">
                Our experienced team is ready to help you with personalized consultation and comprehensive business solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-50">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Get Consultation
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                    <Calculator className="mr-2 h-5 w-5" />
                    View Services
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}