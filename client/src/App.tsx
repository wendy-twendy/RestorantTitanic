import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import StoryPage from "@/pages/Story";
import { LanguageProvider } from "./hooks/use-language";
import { useBasePath } from "./hooks/use-base-path";
import './lib/i18n'; // Import i18n configuration

// Custom Router that handles the base path for GitHub Pages
function Router() {
  const basePath = useBasePath();
  
  return (
    <Switch>
      <Route path={`${basePath}/`} component={Home} />
      <Route path={`${basePath}/story`} component={StoryPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Router />
        <Toaster />
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
