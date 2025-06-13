import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, TrendingUp, CheckCircle, ArrowRight, Star } from "lucide-react";
import { Link } from "wouter";

const preferencesSchema = z.object({
  businessType: z.string().optional(),
  industry: z.string().optional(),
  companySize: z.string().optional(),
  primaryConcerns: z.array(z.string()).optional(),
  urgency: z.string().optional(),
  location: z.string().optional(),
});

type PreferencesForm = z.infer<typeof preferencesSchema>;

interface SimpleRecommendation {
  serviceType: string;
  confidence: number;
  reasons: string[];
  priority: number;
}

export default function SimpleRecommendationEngine() {
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [recommendations, setRecommendations] = useState<SimpleRecommendation[]>([]);

  const form = useForm<PreferencesForm>({
    resolver: zodResolver(preferencesSchema),
    defaultValues: {
      primaryConcerns: [],
    },
  });

  const generateRecommendations = (data: PreferencesForm): SimpleRecommendation[] => {
    const recs: SimpleRecommendation[] = [];
    
    // Direct Tax Services
    if (data.businessType === 'MNC' || data.businessType === 'SME' || 
        data.primaryConcerns?.includes('tax-compliance') || 
        data.primaryConcerns?.includes('tax-planning')) {
      recs.push({
        serviceType: 'direct-tax',
        confidence: 85,
        reasons: [
          'Matches your business type requirements',
          'Addresses tax compliance concerns',
          'Professional tax advisory services'
        ],
        priority: 1
      });
    }

    // Indirect Tax Services  
    if (data.industry === 'Manufacturing' || data.industry === 'Trading' ||
        data.primaryConcerns?.includes('gst-compliance') ||
        data.primaryConcerns?.includes('customs-issues')) {
      recs.push({
        serviceType: 'indirect-tax',
        confidence: 80,
        reasons: [
          'GST and VAT compliance expertise',
          'Industry-specific tax solutions',
          'Input tax credit optimization'
        ],
        priority: 2
      });
    }

    // Accounting & MIS
    if (data.companySize === 'Small' || data.companySize === 'Medium' ||
        data.primaryConcerns?.includes('accounting-compliance') ||
        data.primaryConcerns?.includes('financial-reporting')) {
      recs.push({
        serviceType: 'accounting-mis',
        confidence: 75,
        reasons: [
          'Comprehensive accounting solutions',
          'Financial reporting expertise',
          'Perfect for growing businesses'
        ],
        priority: 3
      });
    }

    // Business Support Services
    if (data.businessType === 'Startup' || 
        data.primaryConcerns?.includes('business-formation') ||
        data.primaryConcerns?.includes('manpower-needs')) {
      recs.push({
        serviceType: 'business-support-services',
        confidence: 70,
        reasons: [
          'Startup-friendly services',
          'Business formation assistance',
          'Operational support solutions'
        ],
        priority: 4
      });
    }

    return recs.sort((a, b) => b.confidence - a.confidence).slice(0, 3);
  };

  const mutation = useMutation({
    mutationFn: async (data: PreferencesForm) => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      return generateRecommendations(data);
    },
    onSuccess: (data) => {
      setRecommendations(data);
      setShowRecommendations(true);
    },
  });

  const onSubmit = (data: PreferencesForm) => {
    mutation.mutate(data);
  };

  const getServiceDisplayName = (serviceType: string) => {
    const names: { [key: string]: string } = {
      'direct-tax': 'Direct Tax Services',
      'indirect-tax': 'Indirect Tax Services', 
      'accounting-mis': 'Accounting & MIS',
      'business-support-services': 'Business Support Services'
    };
    return names[serviceType] || serviceType;
  };

  const getServiceDescription = (serviceType: string) => {
    const descriptions: { [key: string]: string } = {
      'direct-tax': 'Professional tax advisory, corporate tax returns, TDS compliance, and assessment support',
      'indirect-tax': 'GST advisory, VAT compliance, customs work, and input tax credit management',
      'accounting-mis': 'Account maintenance, financial reporting, business analysis, and audit support',
      'business-support-services': 'Business formation, talent acquisition, manpower supply, and operations management'
    };
    return descriptions[serviceType] || '';
  };

  const getServiceLink = (serviceType: string) => {
    const links: { [key: string]: string } = {
      'direct-tax': '/services#direct-tax',
      'indirect-tax': '/services#indirect-tax',
      'accounting-mis': '/services#accounting-mis',
      'business-support-services': '/services/business-support-services'
    };
    return links[serviceType] || '/services';
  };

  if (showRecommendations && recommendations.length > 0) {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-green-100 rounded-full">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Personalized Recommendations</h2>
          <p className="text-gray-600 mb-6">Based on your business profile, here are our top service recommendations:</p>
        </div>

        <div className="grid gap-6">
          {recommendations.map((recommendation, index) => (
            <Card key={index} className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Target className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{getServiceDisplayName(recommendation.serviceType)}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {recommendation.confidence}% Match
                        </Badge>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < Math.floor(recommendation.confidence / 20) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline">Priority {recommendation.priority}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-sm">
                  {getServiceDescription(recommendation.serviceType)}
                </CardDescription>
                <div className="space-y-2 mb-4">
                  <h4 className="font-medium text-sm text-gray-900">Why this matches your needs:</h4>
                  <ul className="space-y-1">
                    {recommendation.reasons.map((reason, reasonIndex) => (
                      <li key={reasonIndex} className="text-sm text-gray-600 flex items-start">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={getServiceLink(recommendation.serviceType)}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Learn More About This Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center pt-6">
          <Button 
            variant="outline" 
            onClick={() => {
              setShowRecommendations(false);
              setRecommendations([]);
              form.reset();
            }}
            className="mr-4"
          >
            Start Over
          </Button>
          <Link href="/contact">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 bg-blue-100 rounded-full">
            <Brain className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Your Personalized Recommendations</h2>
        <p className="text-gray-600">Tell us about your business to receive tailored consulting service recommendations.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="mr-2 h-5 w-5" />
            Business Profile
          </CardTitle>
          <CardDescription>
            Help us understand your business needs to provide the most relevant recommendations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="businessType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your business type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Individual">Individual</SelectItem>
                        <SelectItem value="Startup">Startup</SelectItem>
                        <SelectItem value="SME">Small & Medium Enterprise</SelectItem>
                        <SelectItem value="MNC">Large Corporation/MNC</SelectItem>
                        <SelectItem value="Non-Profit">Non-Profit Organization</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Industry</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="Trading">Trading</SelectItem>
                        <SelectItem value="Services">Services</SelectItem>
                        <SelectItem value="Technology">Technology</SelectItem>
                        <SelectItem value="Healthcare">Healthcare</SelectItem>
                        <SelectItem value="Education">Education</SelectItem>
                        <SelectItem value="Finance">Finance</SelectItem>
                        <SelectItem value="Real Estate">Real Estate</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="companySize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Size</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Small">Small (1-50 employees)</SelectItem>
                        <SelectItem value="Medium">Medium (51-250 employees)</SelectItem>
                        <SelectItem value="Large">Large (250+ employees)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="primaryConcerns"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base">Primary Business Concerns</FormLabel>
                      <p className="text-sm text-muted-foreground">
                        Select all that apply to your current business situation.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { id: "tax-compliance", label: "Tax Compliance & Filing" },
                        { id: "tax-planning", label: "Tax Planning & Optimization" },
                        { id: "gst-compliance", label: "GST Compliance" },
                        { id: "customs-issues", label: "Customs & Import/Export" },
                        { id: "accounting-compliance", label: "Accounting & Bookkeeping" },
                        { id: "financial-reporting", label: "Financial Reporting" },
                        { id: "audit-support", label: "Audit Support" },
                        { id: "business-formation", label: "Business Formation" },
                        { id: "manpower-needs", label: "Manpower & Recruitment" },
                        { id: "operational-support", label: "Operational Support" },
                      ].map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="primaryConcerns"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value || [], item.id])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== item.id
                                            )
                                          )
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">
                                  {item.label}
                                </FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="urgency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Urgency Level</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="How urgent is your need?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Low">Low - Planning for future</SelectItem>
                        <SelectItem value="Medium">Medium - Within next few months</SelectItem>
                        <SelectItem value="High">High - Immediate assistance needed</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? (
                  "Generating Recommendations..."
                ) : (
                  <>
                    <Brain className="mr-2 h-4 w-4" />
                    Get My Recommendations
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}