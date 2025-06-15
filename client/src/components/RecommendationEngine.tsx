import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Brain, Target, TrendingUp, CheckCircle, ArrowRight, Star } from "lucide-react";
import { Link } from "wouter";
import type { Recommendation } from "@shared/schema";

// Generate a session ID for tracking
const getSessionId = () => {
  let sessionId = localStorage.getItem('recommendation_session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('recommendation_session_id', sessionId);
  }
  return sessionId;
};

const preferencesSchema = z.object({
  sessionId: z.string(),
  businessType: z.string().optional(),
  industry: z.string().optional(),
  companySize: z.string().optional(),
  primaryConcerns: z.array(z.string()).optional(),
  budget: z.string().optional(),
  urgency: z.string().optional(),
  location: z.string().optional(),
});

type PreferencesForm = z.infer<typeof preferencesSchema>;

export default function RecommendationEngine() {
  const [showRecommendations, setShowRecommendations] = useState(false);
  const sessionId = getSessionId();

  const form = useForm<PreferencesForm>({
    resolver: zodResolver(preferencesSchema),
    defaultValues: {
      sessionId,
      primaryConcerns: [],
    },
  });

  // Check for existing preferences
  const { data: existingPreferences } = useQuery({
    queryKey: ['/api/preferences', sessionId],
  });

  // Get recommendations
  const { data: recommendations, refetch: refetchRecommendations } = useQuery({
    queryKey: ['/api/recommendations', sessionId],
    enabled: showRecommendations,
  });

  // Save preferences mutation
  const savePreferencesMutation = useMutation({
    mutationFn: async (data: PreferencesForm) => {
      const response = await apiRequest('POST', '/api/preferences', data);
      return await response.json();
    },
    onSuccess: () => {
      setShowRecommendations(true);
      queryClient.invalidateQueries({ queryKey: ['/api/recommendations', sessionId] });
    },
  });

  // Track interaction mutation
  const trackInteractionMutation = useMutation({
    mutationFn: async (data: { serviceType: string; interactionType: string; metadata?: any }) => {
      const response = await apiRequest('POST', '/api/interactions', {
        sessionId,
        ...data,
      });
      return await response.json();
    },
  });

  // Mark recommendation viewed
  const markViewedMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await apiRequest('POST', `/api/recommendations/${id}/viewed`);
      return await response.json();
    },
  });

  // Mark recommendation clicked
  const markClickedMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await apiRequest('POST', `/api/recommendations/${id}/clicked`);
      return await response.json();
    },
  });

  useEffect(() => {
    if (existingPreferences && typeof existingPreferences === 'object') {
      const prefs = existingPreferences as any;
      form.reset({
        sessionId,
        businessType: prefs.businessType || undefined,
        industry: prefs.industry || undefined,
        companySize: prefs.companySize || undefined,
        primaryConcerns: prefs.primaryConcerns || [],
        budget: prefs.budget || undefined,
        urgency: prefs.urgency || undefined,
        location: prefs.location || undefined,
      });
      setShowRecommendations(true);
    }
  }, [existingPreferences, form, sessionId]);

  const onSubmit = (data: PreferencesForm) => {
    savePreferencesMutation.mutate(data);
  };

  const handleRecommendationClick = (recommendation: Recommendation) => {
    markClickedMutation.mutate(recommendation.id);
    trackInteractionMutation.mutate({
      serviceType: recommendation.serviceType,
      interactionType: 'click',
      metadata: { recommendationId: recommendation.id },
    });
  };

  const getServiceDisplayName = (serviceType: string) => {
    const names: { [key: string]: string } = {
      'direct-tax': 'Direct Tax Services',
      'indirect-tax': 'Indirect Tax Services',
      'accounting-mis': 'Accounting & MIS',
      'business-support-services': 'Business Support Services',
    };
    return names[serviceType] || serviceType;
  };

  const getServiceUrl = (serviceType: string) => {
    return `/services/${serviceType}`;
  };

  const concernsOptions = [
    { value: 'tax-compliance', label: 'Tax Compliance' },
    { value: 'tax-planning', label: 'Tax Planning' },
    { value: 'gst-compliance', label: 'GST Compliance' },
    { value: 'accounting-compliance', label: 'Accounting Compliance' },
    { value: 'financial-reporting', label: 'Financial Reporting' },
    { value: 'audit-support', label: 'Audit Support' },
    { value: 'business-formation', label: 'Business Formation' },
    { value: 'operational-support', label: 'Operational Support' },
    { value: 'manpower-needs', label: 'Manpower Requirements' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Brain className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">
          Personalized Service Recommendations
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get customized consulting service recommendations based on your business needs and preferences.
        </p>
      </div>

      {!showRecommendations ? (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-5 w-5 mr-2 text-blue-600" />
              Tell Us About Your Business
            </CardTitle>
            <CardDescription>
              Help us understand your needs to provide personalized recommendations.
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
                          <SelectItem value="MNC">Multinational Corporation</SelectItem>
                          <SelectItem value="SME">Small & Medium Enterprise</SelectItem>
                          <SelectItem value="Startup">Startup</SelectItem>
                          <SelectItem value="Individual">Individual/Freelancer</SelectItem>
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
                          <SelectItem value="IT">Information Technology</SelectItem>
                          <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="Trading">Trading</SelectItem>
                          <SelectItem value="Services">Services</SelectItem>
                          <SelectItem value="Healthcare">Healthcare</SelectItem>
                          <SelectItem value="Education">Education</SelectItem>
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
                          <SelectItem value="Medium">Medium (51-200 employees)</SelectItem>
                          <SelectItem value="Large">Large (200+ employees)</SelectItem>
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
                      <FormLabel>Primary Concerns (Select all that apply)</FormLabel>
                      <div className="grid grid-cols-2 gap-3">
                        {concernsOptions.map((concern) => (
                          <FormField
                            key={concern.value}
                            control={form.control}
                            name="primaryConcerns"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={concern.value}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(concern.value)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, concern.value])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== concern.value
                                              )
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-normal">
                                    {concern.label}
                                  </FormLabel>
                                </FormItem>
                              );
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
                      <FormLabel>Urgency</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="How urgent is your need?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="High">High - Need assistance immediately</SelectItem>
                          <SelectItem value="Medium">Medium - Within next month</SelectItem>
                          <SelectItem value="Low">Low - Just exploring options</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={savePreferencesMutation.isPending}
                >
                  {savePreferencesMutation.isPending ? (
                    "Generating Recommendations..."
                  ) : (
                    <>
                      <TrendingUp className="mr-2 h-4 w-4" />
                      Get My Recommendations
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <Brain className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">AI-Powered Service Recommendations</h3>
            </div>
            <p className="text-gray-600 mb-4">Generated by DeepSeek AI based on your specific business profile and requirements</p>
            
            {recommendations && recommendations.length > 0 && (() => {
              try {
                const firstRec = recommendations[0];
                const metadata = typeof firstRec.metadata === 'string' 
                  ? JSON.parse(firstRec.metadata) 
                  : firstRec.metadata;
                
                return metadata?.overallStrategy && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
                    <div className="flex items-start">
                      <Target className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-1">Strategic Recommendation</h4>
                        <p className="text-sm text-blue-800">{metadata.overallStrategy}</p>
                      </div>
                    </div>
                  </div>
                );
              } catch {
                return null;
              }
            })()}
          </div>

          {recommendations && recommendations.length > 0 ? (
            <div className="grid gap-6">
              {recommendations.map((recommendation: Recommendation, index: number) => (
                <Card
                  key={recommendation.id}
                  className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500"
                  onMouseEnter={() => !recommendation.isViewed && markViewedMutation.mutate(recommendation.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <Star className="h-5 w-5 text-yellow-500 mr-1" />
                          <span className="text-sm font-medium text-gray-600">
                            {recommendation.confidence}% Match
                          </span>
                        </div>
                        <Badge variant={index === 0 ? "default" : "secondary"}>
                          {index === 0 ? "Top Pick" : `#${index + 1} Recommendation`}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Priority {recommendation.priority}</div>
                      </div>
                    </div>
                    <CardTitle className="text-xl">
                      {getServiceDisplayName(recommendation.serviceType)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Why we recommend this:</h4>
                        <ul className="space-y-2">
                          {(() => {
                            try {
                              const reasons = typeof recommendation.reasons === 'string' 
                                ? JSON.parse(recommendation.reasons) 
                                : recommendation.reasons;
                              return Array.isArray(reasons) ? reasons.map((reason, idx) => (
                                <li key={idx} className="flex items-start">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700 text-sm">{reason}</span>
                                </li>
                              )) : [];
                            } catch {
                              return [(
                                <li key="fallback" className="flex items-start">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700 text-sm">Recommended based on your business profile</span>
                                </li>
                              )];
                            }
                          })()}
                        </ul>
                      </div>

                      {(() => {
                        try {
                          const metadata = typeof recommendation.metadata === 'string' 
                            ? JSON.parse(recommendation.metadata) 
                            : recommendation.metadata;
                          
                          return metadata?.aiGenerated && (
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200">
                              <div className="flex items-center mb-2">
                                <Brain className="h-4 w-4 text-blue-600 mr-2" />
                                <span className="text-sm font-medium text-blue-900">DeepSeek AI Analysis</span>
                              </div>
                              {metadata.businessImpact && (
                                <div className="mb-2">
                                  <span className="text-xs font-medium text-gray-700">Expected Impact: </span>
                                  <span className="text-xs text-gray-600">{metadata.businessImpact}</span>
                                </div>
                              )}
                              {metadata.timeline && (
                                <div className="mb-2">
                                  <span className="text-xs font-medium text-gray-700">Timeline: </span>
                                  <span className="text-xs text-gray-600">{metadata.timeline}</span>
                                </div>
                              )}
                              {metadata.synergies && metadata.synergies.length > 0 && (
                                <div className="mb-2">
                                  <span className="text-xs font-medium text-gray-700">Complements: </span>
                                  <span className="text-xs text-gray-600">
                                    {metadata.synergies.map((s: string) => getServiceDisplayName(s)).join(', ')}
                                  </span>
                                </div>
                              )}
                            </div>
                          );
                        } catch {
                          return null;
                        }
                      })()}

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center space-x-4">
                          <div className="text-sm text-gray-500">
                            {recommendation.confidence}% AI Match
                          </div>
                          <div className="flex items-center">
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full" 
                                style={{ width: `${recommendation.confidence}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <Link href={getServiceUrl(recommendation.serviceType)}>
                          <Button
                            onClick={() => handleRecommendationClick(recommendation)}
                            className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all"
                          >
                            Explore Service
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="text-center py-8">
                <Brain className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No specific recommendations yet
                </h3>
                <p className="text-gray-600 mb-4">
                  We need more information about your business to provide personalized recommendations.
                </p>
                <Button
                  onClick={() => setShowRecommendations(false)}
                  variant="outline"
                >
                  Update Your Preferences
                </Button>
              </CardContent>
            </Card>
          )}

          <div className="text-center">
            <Button
              onClick={() => setShowRecommendations(false)}
              variant="outline"
              className="mr-4"
            >
              Update Preferences
            </Button>
            <Link href="/contact">
              <Button className="bg-green-600 hover:bg-green-700">
                Get Expert Consultation
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}