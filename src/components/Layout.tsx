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
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 w-full h-16 z-50 bg-background/80  backdrop-blur-md border-b shadow-sm">
        <div className="flex items-center justify-between h-16 px-8 container">
          {/* Logo + Name */}
          <Link to="/" className="flex items-center space-x-2">
            <MessageSquare className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">Developer Feedback</span>
          </Link>

          {/* Nav Buttons */}
          <nav className="flex items-center space-x-3">
            <Button
              variant={location.pathname === '/' ? 'default' : 'ghost'}
              size="sm"
              asChild
              className="rounded-full"
            >
              <Link to="/">Feedback</Link>
            </Button>

            <Button
              variant={location.pathname === '/add' ? 'default' : 'outline'}
              size="sm"
              asChild
              className="rounded-full"
            >
              <Link to="/add">
                <Plus className="mr-2 h-4 w-4" />
                Add Feedback
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="container pt-20 pb-8">{children}</main>
    </div>
  );
};

export default Layout;
