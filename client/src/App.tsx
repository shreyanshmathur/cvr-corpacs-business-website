import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Team from "@/pages/Team";
import Contact from "@/pages/Contact";
import KnowledgePool from "@/pages/KnowledgePool";
import DirectTax from "@/pages/services/DirectTax";
import IndirectTax from "@/pages/services/IndirectTax";
import AccountingMIS from "@/pages/services/AccountingMIS";
import BusinessConsulting from "@/pages/services/BusinessConsulting";
import BusinessSupportServices from "@/pages/services/BusinessSupportServices";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/services/direct-tax" component={DirectTax} />
        <Route path="/services/indirect-tax" component={IndirectTax} />
        <Route path="/services/accounting-mis" component={AccountingMIS} />
        <Route path="/services/business-consulting" component={BusinessConsulting} />
        <Route path="/services/business-support-services" component={BusinessSupportServices} />
        <Route path="/team" component={Team} />
        <Route path="/contact" component={Contact} />
        <Route path="/knowledge-pool" component={KnowledgePool} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
