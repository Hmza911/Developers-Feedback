import { useState } from 'react';
import FeedbackList from '@/components/FeedbackList';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Users, TrendingUp } from 'lucide-react';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-4 py-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Developer Feedback Board
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Share feedback, report bugs, and suggest improvements. Help us build better developer tools together.
        </p>
        
        <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground pt-4">
          <div className="flex items-center space-x-2">
            <MessageSquare className="h-4 w-4 text-primary" />
            <span>150+ Feedback</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-primary" />
            <span>50+ Contributors</span>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span>95% Response Rate</span>
          </div>
        </div>
      </section>

      {/* Auth Demo Toggle */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-semibold">Latest Feedback</h2>
          <Badge variant="secondary" className="text-xs">
            {isLoggedIn ? 'Logged In' : 'Guest Mode'}
          </Badge>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="text-sm"
        >
          {isLoggedIn ? 'Sign Out' : 'Sign In'}
        </Button>
      </div>

      {/* Feedback List */}
      <FeedbackList isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default Index;
