import { useState } from "react";
import { Link } from "wouter";
import { Brain, X, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface RecommendationWidgetProps {
  currentPage?: string;
}

export default function RecommendationWidget({ currentPage }: RecommendationWidgetProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return null;
  }

  const getPageSpecificMessage = () => {
    switch (currentPage) {
      case 'home':
        return "Get personalized service recommendations based on your business needs";
      case 'services':
        return "Not sure which service is right for you? Let AI help you decide";
      case 'about':
        return "Discover which of our services would benefit your business most";
      case 'team':
        return "Find the right expertise for your business challenges";
      case 'contact':
        return "Before contacting us, see which services match your needs";
      case 'knowledge-pool':
        return "Get targeted recommendations for your learning path";
      default:
        return "Get AI-powered service recommendations tailored for your business";
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isExpanded ? (
        <Button
          onClick={() => setIsExpanded(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <Brain className="h-6 w-6 mr-2" />
          <Sparkles className="h-4 w-4 absolute -top-1 -right-1 text-yellow-300" />
          AI Recommendations
        </Button>
      ) : (
        <Card className="w-80 shadow-xl border-l-4 border-l-blue-500 animate-fadeIn">
          <CardContent className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <Brain className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Smart Recommendations</h3>
                  <div className="flex items-center text-xs text-blue-600">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Powered by DeepSeek AI
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsDismissed(true)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {getPageSpecificMessage()}
            </p>

            <div className="space-y-2">
              <Link href="/recommendations">
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm"
                  onClick={() => setIsExpanded(false)}
                >
                  Get My Recommendations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              <button
                onClick={() => setIsExpanded(false)}
                className="w-full text-xs text-gray-500 hover:text-gray-700 transition-colors py-1"
              >
                Maybe later
              </button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}