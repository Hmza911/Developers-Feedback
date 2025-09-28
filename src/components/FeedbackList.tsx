import { useState, useEffect, useRef, useCallback } from 'react';
import FeedbackCard from './FeedbackCard';
import SkeletonCard from './SkeletonCard';
import { Feedback } from '@/types/feedback';
import { mockFeedbackData } from '@/lib/mockData';
import toast from 'react-hot-toast';
import useFeedbackStore from '@/stores/useFeedbackStore';

interface FeedbackListProps {
  isLoggedIn?: boolean;
}

const ITEMS_PER_PAGE = 6;

const FeedbackList = ({ isLoggedIn = false }: FeedbackListProps) => {

  const { fetchFeedbacks, loading, feedbacks } = useFeedbackStore();

  useEffect(() => {
    fetchFeedbacks();
  }, [fetchFeedbacks]);

  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerTarget = useRef<HTMLDivElement>(null);

  const handleReaction = async (feedbackId: string, type: 'like' | 'dislike') => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 200));
      
      setFeedback(prev => prev.map(item => {
        if (item.id === feedbackId) {
          const currentReaction = item.userReaction;
          let newLikes = item.likes;
          let newDislikes = item.dislikes;
          let newReaction: 'like' | 'dislike' | null = type;

          if (type === 'like') {
            if (currentReaction === 'like') {
              newLikes -= 1;
              newReaction = null;
            } else {
              newLikes += 1;
              if (currentReaction === 'dislike') {
                newDislikes -= 1;
              }
            }
          } else {
            if (currentReaction === 'dislike') {
              newDislikes -= 1;
              newReaction = null;
            } else {
              newDislikes += 1;
              if (currentReaction === 'like') {
                newLikes -= 1;
              }
            }
          }

          return {
            ...item,
            likes: newLikes,
            dislikes: newDislikes,
            userReaction: newReaction
          };
        }
        return item;
      }));
    } catch (error) {
      toast.error('Failed to update reaction');
    }
  };

  const handleDelete = async (feedbackId: string) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 300));
      
      setFeedback(prev => prev.filter(item => item.id !== feedbackId));
    } catch (error) {
      toast.error('Failed to delete feedback');
    }
  };

  return (
    <div className="space-y-6">
      {loading && Array.from({ length: 3 }).map((_, index) => (
        <SkeletonCard key={`skeleton-${index}`} />
      ))}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {feedbacks.map((item) => (
          <FeedbackCard
            key={item.id}
            feedback={item}
            canDelete={isLoggedIn}
            onReaction={handleReaction}
            onDelete={handleDelete}
          />
        ))}
        
        {loading && Array.from({ length: 3 }).map((_, index) => (
          <SkeletonCard key={`skeleton-${index}`} />
        ))}
      </div>
      
      <div ref={observerTarget} className="h-4" />
      
      {!hasMore && feedback.length > 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No more feedback to load</p>
        </div>
      )}
    </div>
  );
};

export default FeedbackList;