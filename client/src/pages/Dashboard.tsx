import WelcomeDashboard from "@/components/WelcomeDashboard";

export default function Dashboard() {
  // In a real app, this would come from authentication/user context
  const userName = "Business Owner"; // Could be dynamic based on user session

  return (
    <div className="min-h-screen bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WelcomeDashboard userName={userName} />
      </div>
    </div>
  );
}