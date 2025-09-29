import { useState } from 'react';
import FeedbackList from '@/components/FeedbackList';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Users, TrendingUp } from 'lucide-react';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center bg-no-repeat overflow-x-hidden"
      style={{ backgroundImage: "url('/bg1.png')" }}
    >
      {/* Overlay */}
      <div className="min-h-screen w-full bg-black/50 p-4 sm:p-6 md:p-10 space-y-6 sm:space-y-8">
        
        {/* Hero Section */}
        <section className="text-center space-y-4 sm:space-y-6 py-6 sm:py-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Developer Feedback Board
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-full sm:max-w-3xl mx-auto px-2 sm:px-0">
            Share feedback, report bugs, and suggest improvements. Help us build better developer tools together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm sm:text-base text-gray-200 pt-4">
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <span>150+ Feedback</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <span>50+ Contributors</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <span>95% Response Rate</span>
            </div>
          </div>
        </section>

        {/* Auth Toggle */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white truncate">Latest Feedback</h2>
            <Badge variant="secondary" className="text-xs sm:text-sm">
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
        <div className="w-full px-2 sm:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <FeedbackList isLoggedIn={isLoggedIn} />
        </div>
      </div>
    </div>
  );
};

export default Index;
