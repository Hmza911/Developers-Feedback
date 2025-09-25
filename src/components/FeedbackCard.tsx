import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ThumbsUp, ThumbsDown, Trash2, User } from 'lucide-react';
import { Feedback } from '@/types/feedback';
import { cn } from '@/lib/utils';
import toast from 'react-hot-toast';

interface FeedbackCardProps {
  feedback: Feedback;
  canDelete?: boolean;
  onReaction: (feedbackId: string, type: 'like' | 'dislike') => void;
  onDelete?: (feedbackId: string) => void;
}

const FeedbackCard = ({ feedback, canDelete, onReaction, onDelete }: FeedbackCardProps) => {
  const [localLikes, setLocalLikes] = useState(feedback.likes);
  const [localDislikes, setLocalDislikes] = useState(feedback.dislikes);
  const [localReaction, setLocalReaction] = useState(feedback.userReaction);

  const handleReaction = (type: 'like' | 'dislike') => {
    // Optimistic update
    if (type === 'like') {
      if (localReaction === 'like') {
        setLocalLikes(prev => prev - 1);
        setLocalReaction(null);
      } else {
        setLocalLikes(prev => prev + 1);
        if (localReaction === 'dislike') {
          setLocalDislikes(prev => prev - 1);
        }
        setLocalReaction('like');
      }
    } else {
      if (localReaction === 'dislike') {
        setLocalDislikes(prev => prev - 1);
        setLocalReaction(null);
      } else {
        setLocalDislikes(prev => prev + 1);
        if (localReaction === 'like') {
          setLocalLikes(prev => prev - 1);
        }
        setLocalReaction('dislike');
      }
    }

    onReaction(feedback.id, type);
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(feedback.id);
      toast.success('Feedback deleted successfully');
    }
  };

  return (
    <Card className="group transition-all duration-200 hover:shadow-md hover:shadow-primary/5 animate-slide-up">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold leading-tight line-clamp-2">
            {feedback.title}
          </CardTitle>
          {canDelete && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDelete}
              className="opacity-0 group-hover:opacity-100 transition-opacity text-destructive hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <User className="h-3 w-3" />
            <span>{feedback.author.name}</span>
          </div>
          <span>•</span>
          <span>{feedback.createdAt.toLocaleDateString()}</span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed line-clamp-3">
          {feedback.message}
        </p>
        
        {feedback.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {feedback.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        <div className="flex items-center space-x-2 pt-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleReaction('like')}
            className={cn(
              "transition-colors",
              localReaction === 'like' 
                ? "bg-success/10 text-success hover:bg-success/20" 
                : "hover:bg-success/10"
            )}
          >
            <ThumbsUp className="mr-1 h-4 w-4" />
            {localLikes}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleReaction('dislike')}
            className={cn(
              "transition-colors",
              localReaction === 'dislike' 
                ? "bg-destructive/10 text-destructive hover:bg-destructive/20" 
                : "hover:bg-destructive/10"
            )}
          >
            <ThumbsDown className="mr-1 h-4 w-4" />
            {localDislikes}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedbackCard;