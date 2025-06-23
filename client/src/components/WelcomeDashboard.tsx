import { useState, useEffect } from "react";
import { Link } from "wouter";
import { 
  Calculator, 
  FileText, 
  Users, 
  BookOpen, 
  Phone, 
  Brain, 
  ArrowRight, 
  Clock, 
  Star,
  TrendingUp,
  Shield,
  Award,
  ChevronRight,
  Activity,
  Calendar,
  MessageSquare
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface WelcomeDashboardProps {
  userName?: string;
}

export default function WelcomeDashboard({ userName = "Valued Client" }: WelcomeDashboardProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  const [animationDelay, setAnimationDelay] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => {
      clearInterval(timer);
      clearTimeout(visibilityTimer);
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
      title: "Get Recommendations",
      description: "AI-powered service matching",
      icon: Brain,
      href: "/recommendations",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      delay: 0.1
    },
    {
      title: "Tax Services",
      description: "Direct & indirect tax solutions",
      icon: Calculator,
      href: "/services#direct-tax",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
      delay: 0.2
    },
    {
      title: "Knowledge Pool",
      description: "Access GST resources & documents",
      icon: BookOpen,
      href: "/knowledge-pool",
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
      delay: 0.3
    },
    {
      title: "Contact Expert",
      description: "Schedule consultation",
      icon: Phone,
      href: "/contact",
      color: "bg-red-500",
      hoverColor: "hover:bg-red-600",
      delay: 0.4
    }
  ];

  const recentActivities = [
    { action: "New GST document uploaded", time: "2 hours ago", type: "document" },
    { action: "Tax compliance deadline reminder", time: "1 day ago", type: "reminder" },
    { action: "Business formation guide updated", time: "3 days ago", type: "update" }
  ];

  const upcomingDeadlines = [
    { task: "GST Return Filing", date: "15th Jan", priority: "high" },
    { task: "TDS Compliance Check", date: "20th Jan", priority: "medium" },
    { task: "Annual Audit Planning", date: "28th Jan", priority: "low" }
  ];

  return (
    <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-2xl p-4 mb-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold font-heading mb-1 animate-fadeIn">
                {getGreeting()}, {userName}!
              </h1>
              <p className="text-blue-100 text-base animate-slideInDown" style={{animationDelay: '0.3s'}}>
                Welcome to your CVR Corpacs dashboard
              </p>
            </div>
            <div className="text-right animate-slideInDown" style={{animationDelay: '0.5s'}}>
              <div className="text-sm text-blue-200">
                {currentTime.toLocaleDateString('en-IN', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="text-2xl font-bold">
                {currentTime.toLocaleTimeString('en-IN', { 
                  hour: '2-digit', 
                  minute: '2-digit'
                })}
              </div>
            </div>
          </div>
          
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {[
              { label: "Services", value: "4+", icon: Award },
              { label: "Experience", value: "20+", icon: TrendingUp },
              { label: "Branches", value: "6+", icon: Activity },
              { label: "Satisfaction", value: "100%", icon: Star }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-fadeIn"
                style={{animationDelay: `${0.6 + index * 0.1}s`}}
              >
                <stat.icon className="h-6 w-6 mx-auto mb-2 text-white/80" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12 animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Quick Actions */}
      <div className="mb-4">
        <h2 className="text-xl font-bold font-heading text-gray-900 mb-3 flex items-center">
          <Shield className="h-6 w-6 mr-2 text-blue-600" />
          Quick Actions
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {quickActions.map((action, index) => (
            <Link key={action.title} href={action.href}>
              <Card 
                className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-l-2 border-l-blue-400/60 animate-slideInUp`}
                style={{animationDelay: `${action.delay}s`}}
              >
                <CardHeader className="pb-2">
                  <div className={`w-10 h-10 ${action.color} ${action.hoverColor} rounded-lg flex items-center justify-center transition-colors duration-300 mb-2 group-hover:scale-110 transform`}>
                    <action.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors duration-300">
                    {action.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {action.description}
                  </CardDescription>
                  <ArrowRight className="h-4 w-4 mt-3 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="grid lg:grid-cols-2 gap-4">
        {/* Recent Activities */}
        <Card className="animate-slideInUp" style={{animationDelay: '0.7s'}}>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="h-5 w-5 mr-2 text-green-600" />
              Recent Activities
            </CardTitle>
            <CardDescription>Stay updated with latest changes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500 flex items-center mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      {activity.time}
                    </p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Activities
            </Button>
          </CardContent>
        </Card>

        {/* Upcoming Deadlines */}
        <Card className="animate-slideInUp" style={{animationDelay: '0.9s'}}>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-orange-600" />
              Upcoming Deadlines
            </CardTitle>
            <CardDescription>Important dates to remember</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingDeadlines.map((deadline, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      deadline.priority === 'high' ? 'bg-red-500' :
                      deadline.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{deadline.task}</p>
                      <p className="text-xs text-gray-500">{deadline.date}</p>
                    </div>
                  </div>
                  <Badge variant={deadline.priority === 'high' ? 'destructive' : deadline.priority === 'medium' ? 'default' : 'secondary'}>
                    {deadline.priority}
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              <MessageSquare className="h-4 w-4 mr-2" />
              Set Reminder
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="mt-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 animate-fadeIn" style={{animationDelay: '1.1s'}}>
        <div className="text-center">
          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">
            Need Expert Guidance?
          </h3>
          <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
            Our team of experienced professionals is ready to help you navigate complex business and tax requirements. 
            Schedule a consultation today for personalized solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="h-4 w-4 mr-2" />
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/recommendations">
              <Button size="lg" variant="outline">
                <Brain className="h-4 w-4 mr-2" />
                Get AI Recommendations
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}