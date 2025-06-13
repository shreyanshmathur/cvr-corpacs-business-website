import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Building2, CheckCircle, BarChart3, PieChart, TrendingUp, FileSpreadsheet, Calculator, DollarSign, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AccountingMIS() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "Financial Accounting & Bookkeeping",
      description: "Comprehensive accounting services to maintain accurate financial records and ensure regulatory compliance.",
      features: [
        "Daily transaction recording and posting",
        "Bank reconciliation and cash flow management",
        "Accounts payable and receivable management",
        "Fixed asset accounting and depreciation",
        "Month-end and year-end closing procedures"
      ],
      icon: Calculator
    },
    {
      title: "Management Information Systems",
      description: "Strategic MIS reporting to provide insights for informed business decision-making.",
      features: [
        "Financial performance dashboards",
        "Budget vs actual variance analysis",
        "Cash flow forecasting and planning",
        "Key performance indicator tracking",
        "Custom reporting solutions"
      ],
      icon: BarChart3
    },
    {
      title: "Financial Analysis & Reporting",
      description: "In-depth financial analysis to evaluate business performance and identify opportunities.",
      features: [
        "Profit and loss analysis",
        "Balance sheet review and analysis",
        "Working capital management",
        "Cost center and project profitability",
        "Trend analysis and benchmarking"
      ],
      icon: PieChart
    },
    {
      title: "Audit Support & Compliance",
      description: "Comprehensive audit preparation and compliance assistance for various regulatory requirements.",
      features: [
        "Internal audit coordination",
        "Statutory audit preparation",
        "Tax audit documentation",
        "Compliance checklist management",
        "Documentation and record maintenance"
      ],
      icon: FileSpreadsheet
    }
  ];

  const misReports = [
    {
      category: "Financial Reports",
      reports: [
        "Monthly P&L statements",
        "Balance sheet analysis",
        "Cash flow statements",
        "Trial balance reports",
        "General ledger summaries"
      ]
    },
    {
      category: "Operational Reports", 
      reports: [
        "Sales performance analytics",
        "Inventory management reports",
        "Expense analysis by category",
        "Budget variance reports",
        "Department-wise profitability"
      ]
    },
    {
      category: "Strategic Reports",
      reports: [
        "Financial ratio analysis",
        "Break-even analysis",
        "ROI and ROE calculations",
        "Working capital analysis",
        "Future projection models"
      ]
    }
  ];

  const benefits = [
    {
      title: "Accurate Records",
      description: "Precise financial data with zero discrepancies",
      icon: CheckCircle,
      color: "bg-green-500"
    },
    {
      title: "Real-time Insights",
      description: "Up-to-date financial information for quick decisions",
      icon: Clock,
      color: "bg-blue-500"
    },
    {
      title: "Cost Control",
      description: "Identify cost savings and efficiency opportunities",
      icon: DollarSign,
      color: "bg-purple-500"
    },
    {
      title: "Business Growth",
      description: "Strategic insights to drive business expansion",
      icon: TrendingUp,
      color: "bg-orange-500"
    }
  ];

  const process = [
    {
      step: "01",
      title: "System Setup",
      description: "Configure accounting systems and chart of accounts"
    },
    {
      step: "02",
      title: "Data Entry",
      description: "Record all financial transactions systematically"
    },
    {
      step: "03",
      title: "Reconciliation",
      description: "Match and verify all account balances"
    },
    {
      step: "04",
      title: "Analysis",
      description: "Generate insights from financial data"
    },
    {
      step: "05",
      title: "Reporting",
      description: "Deliver comprehensive MIS reports"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-16 right-16 w-56 h-56 bg-purple-400 opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-16 left-16 w-72 h-72 bg-pink-400 opacity-10 rounded-full animate-float"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <Link href="/services" className="inline-flex items-center text-purple-200 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Services
            </Link>
            
            <div className="flex items-center mb-6">
              <div className="bg-purple-600 p-4 rounded-xl mr-6">
                <Building2 className="h-12 w-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">
                  Accounting & MIS
                </h1>
                <p className="text-xl md:text-2xl text-purple-100">
                  Financial management and strategic business insights
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
              Comprehensive Accounting Solutions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your financial data into actionable business intelligence with our accounting and MIS services.
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
                      <div className="bg-purple-100 p-3 rounded-lg mr-4">
                        <IconComponent className="h-8 w-8 text-purple-600" />
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

        {/* MIS Reports */}
        <section className={`mb-20 ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Management Information Reports
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive reporting solutions to monitor performance and drive strategic decisions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {misReports.map((category, index) => (
              <Card 
                key={index}
                className={`card-hover ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900 text-center">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.reports.map((report, reportIndex) => (
                      <li key={reportIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{report}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Flow */}
        <section className={`mb-20 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Our Systematic Approach
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <div 
                key={index}
                className={`text-center ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className={`mb-20 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Key Benefits
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded mx-auto"></div>
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
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Transform Your Financial Management
              </h2>
              <p className="text-purple-100 mb-8 text-lg max-w-2xl mx-auto">
                Get comprehensive accounting solutions and strategic insights to drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-50">
                    Request Consultation
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                    View All Services
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