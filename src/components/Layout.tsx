import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Plus, MessageSquare } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <MessageSquare className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">Developer Feedback</span>
          </Link>
          
          <nav className="flex items-center space-x-4">
            <Button 
              variant={location.pathname === '/' ? 'default' : 'ghost'}
              asChild
            >
              <Link to="/">Feedback</Link>
            </Button>
            
            <Button 
              variant={location.pathname === '/add' ? 'default' : 'outline'}
              asChild
            >
              <Link to="/add">
                <Plus className="mr-2 h-4 w-4" />
                Add Feedback
              </Link>
            </Button>
          </nav>
        </div>
      </header>
      
      <main className="container py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;