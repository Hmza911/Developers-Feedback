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
    <Card
      className="group transition-all duration-200 hover:shadow-lg hover:shadow-primary/10 animate-slide-up 
      bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 
      w-[420px] min-h-[180px] mx-auto"
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold leading-tight line-clamp-2 text-white">
            {feedback.title}
          </CardTitle>
          {canDelete && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDelete}
              className="opacity-0 group-hover:opacity-100 transition-opacity text-red-400 hover:text-red-500"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-gray-300">
          <div className="flex items-center space-x-1">
            <User className="h-3 w-3" />
            <span>{feedback.title}</span>
          </div>
          <span>{feedback.createdAt.toLocaleString()}</span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <p className="text-gray-200 leading-relaxed line-clamp-3 text-sm">
          {feedback.message}
        </p>
        
        {feedback.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {feedback.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs bg-white/20 text-gray-100">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        <div className="flex items-center space-x-2 pt-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleReaction('like')}
            className={cn(
              "transition-colors text-gray-200",
              localReaction === 'like' 
                ? "bg-green-500/20 text-green-400 hover:bg-green-500/30" 
                : "hover:bg-green-500/10"
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
              "transition-colors text-gray-200",
              localReaction === 'dislike' 
                ? "bg-red-500/20 text-red-400 hover:bg-red-500/30" 
                : "hover:bg-red-500/10"
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
