import { useState, useEffect } from "react";
import RecommendationEngine from "@/components/RecommendationEngine";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Brain, Zap, Users, Target } from "lucide-react";

export default function Recommendations() {
  const [sessionId] = useState(() => {
    let id = localStorage.getItem('recommendation_session_id');
    if (!id) {
      id = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('recommendation_session_id', id);
    }
    return id;
  });

  // Track page visit
  const trackInteractionMutation = useMutation({
    mutationFn: async (data: { serviceType: string; interactionType: string; metadata?: any }) => {
      return await apiRequest('/api/interactions', {
        method: 'POST',
        body: JSON.stringify({
          sessionId,
          ...data,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
    },
  });

  useEffect(() => {
    // Track page visit
    trackInteractionMutation.mutate({
      serviceType: 'recommendation-engine',
      interactionType: 'view',
      metadata: { page: 'recommendations' },
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-500 rounded-full">
                <Brain className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Smart Service Recommendations
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Get personalized consulting service recommendations powered by AI, 
              tailored specifically for your business needs and industry requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">
              How Our Recommendation Engine Works
            </h2>
            <p className="text-lg text-gray-600">
              Advanced algorithms analyze your business profile to suggest the most relevant services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="p-3 bg-blue-100 rounded-lg inline-block mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Analysis</h3>
              <p className="text-gray-600">
                We analyze your business type, industry, size, and specific concerns to understand your unique needs.
              </p>
            </div>

            <div className="text-center">
              <div className="p-3 bg-green-100 rounded-lg inline-block mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Matching</h3>
              <p className="text-gray-600">
                Our AI engine matches your profile with our service offerings using advanced scoring algorithms.
              </p>
            </div>

            <div className="text-center">
              <div className="p-3 bg-purple-100 rounded-lg inline-block mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Results</h3>
              <p className="text-gray-600">
                Receive ranked recommendations with confidence scores and detailed explanations for each suggestion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendation Engine */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RecommendationEngine />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">
              Why Use Our Recommendation Engine?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">30s</div>
              <div className="text-sm text-gray-600">Quick Assessment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
              <div className="text-sm text-gray-600">Service Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Available Anytime</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}