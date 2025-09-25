import { Feedback } from '@/types/feedback';

export const mockFeedbackData: Feedback[] = [
  {
    id: '1',
    title: 'Add Dark Mode Support',
    message: 'It would be great to have a dark mode option for better accessibility and reduced eye strain during late-night coding sessions. Many developers prefer dark themes.',
    tags: ['enhancement', 'accessibility', 'ui'],
    likes: 42,
    dislikes: 3,
    userReaction: null,
    author: {
      name: 'Sarah Chen',
      avatar: '/avatar1.jpg'
    },
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    title: 'Performance Issues with Large Datasets',
    message: 'The application becomes sluggish when handling datasets with more than 10,000 records. We need better pagination or virtualization.',
    tags: ['bug', 'performance', 'data'],
    likes: 28,
    dislikes: 1,
    userReaction: 'like',
    author: {
      name: 'Alex Rodriguez',
      avatar: '/avatar2.jpg'
    },
    createdAt: new Date('2024-01-14')
  },
  {
    id: '3',
    title: 'Keyboard Shortcuts for Power Users',
    message: 'Adding keyboard shortcuts would significantly improve productivity. Common actions like search, filter, and navigation should be accessible via keyboard.',
    tags: ['enhancement', 'productivity', 'keyboard'],
    likes: 35,
    dislikes: 2,
    userReaction: null,
    author: {
      name: 'Mike Johnson',
      avatar: '/avatar3.jpg'
    },
    createdAt: new Date('2024-01-13')
  },
  {
    id: '4',
    title: 'Mobile Responsive Design Needed',
    message: 'The current interface doesn\'t work well on mobile devices. We should implement a responsive design that works across all screen sizes.',
    tags: ['mobile', 'responsive', 'ui'],
    likes: 18,
    dislikes: 0,
    userReaction: null,
    author: {
      name: 'Emily Watson',
      avatar: '/avatar4.jpg'
    },
    createdAt: new Date('2024-01-12')
  },
  {
    id: '5',
    title: 'Better Error Messages',
    message: 'Current error messages are too technical. We need user-friendly error messages that help users understand what went wrong and how to fix it.',
    tags: ['ux', 'errors', 'messaging'],
    likes: 22,
    dislikes: 1,
    userReaction: 'dislike',
    author: {
      name: 'David Park',
      avatar: '/avatar5.jpg'
    },
    createdAt: new Date('2024-01-11')
  },
  {
    id: '6',
    title: 'Export Data to CSV/Excel',
    message: 'Users should be able to export their data in various formats like CSV and Excel for external analysis and reporting.',
    tags: ['feature', 'export', 'data'],
    likes: 31,
    dislikes: 4,
    userReaction: null,
    author: {
      name: 'Lisa Thompson',
      avatar: '/avatar6.jpg'
    },
    createdAt: new Date('2024-01-10')
  },
  {
    id: '7',
    title: 'Real-time Notifications',
    message: 'Implement real-time notifications for important events like system updates, new messages, or when someone reacts to your feedback.',
    tags: ['feature', 'notifications', 'realtime'],
    likes: 16,
    dislikes: 2,
    userReaction: null,
    author: {
      name: 'James Wilson',
      avatar: '/avatar7.jpg'
    },
    createdAt: new Date('2024-01-09')
  },
  {
    id: '8',
    title: 'Search and Filter Improvements',
    message: 'The search functionality is basic. We need advanced filtering options by tags, date ranges, author, and full-text search capabilities.',
    tags: ['search', 'filter', 'improvement'],
    likes: 39,
    dislikes: 1,
    userReaction: 'like',
    author: {
      name: 'Maria Garcia',
      avatar: '/avatar8.jpg'
    },
    createdAt: new Date('2024-01-08')
  },
  {
    id: '9',
    title: 'API Rate Limiting Documentation',
    message: 'We need clear documentation about API rate limits, including current limits, how to handle rate limit errors, and best practices for API usage.',
    tags: ['documentation', 'api', 'limits'],
    likes: 14,
    dislikes: 0,
    userReaction: null,
    author: {
      name: 'Chris Brown',
      avatar: '/avatar9.jpg'
    },
    createdAt: new Date('2024-01-07')
  },
  {
    id: '10',
    title: 'Bulk Actions Support',
    message: 'Allow users to perform bulk actions like delete, archive, or tag multiple items at once instead of having to do them one by one.',
    tags: ['feature', 'bulk', 'productivity'],
    likes: 27,
    dislikes: 3,
    userReaction: null,
    author: {
      name: 'Anna Lee',
      avatar: '/avatar10.jpg'
    },
    createdAt: new Date('2024-01-06')
  },
  {
    id: '11',
    title: 'Better Loading States',
    message: 'Current loading indicators are not informative. We should add skeleton loaders and progress indicators to improve user experience.',
    tags: ['ux', 'loading', 'indicators'],
    likes: 20,
    dislikes: 1,
    userReaction: null,
    author: {
      name: 'Tom Anderson',
      avatar: '/avatar11.jpg'
    },
    createdAt: new Date('2024-01-05')
  },
  {
    id: '12',
    title: 'Collaborative Features',
    message: 'Add features for team collaboration like commenting on feedback, assigning tasks, and tracking progress on feature requests.',
    tags: ['collaboration', 'team', 'features'],
    likes: 33,
    dislikes: 2,
    userReaction: 'like',
    author: {
      name: 'Jennifer Davis',
      avatar: '/avatar12.jpg'
    },
    createdAt: new Date('2024-01-04')
  },
  {
    id: '13',
    title: 'Integration with GitHub Issues',
    message: 'It would be helpful to have integration with GitHub Issues so that feedback can be automatically converted to issues in our repository.',
    tags: ['integration', 'github', 'workflow'],
    likes: 25,
    dislikes: 0,
    userReaction: null,
    author: {
      name: 'Robert Taylor',
      avatar: '/avatar13.jpg'
    },
    createdAt: new Date('2024-01-03')
  },
  {
    id: '14',
    title: 'Custom Themes Support',
    message: 'Allow users to customize the theme beyond just dark/light mode. Support for custom colors, fonts, and layout preferences.',
    tags: ['themes', 'customization', 'ui'],
    likes: 19,
    dislikes: 4,
    userReaction: null,
    author: {
      name: 'Michelle White',
      avatar: '/avatar14.jpg'
    },
    createdAt: new Date('2024-01-02')
  },
  {
    id: '15',
    title: 'Offline Support',
    message: 'The application should work offline and sync data when connection is restored. This is crucial for users with unreliable internet.',
    tags: ['offline', 'sync', 'reliability'],
    likes: 41,
    dislikes: 2,
    userReaction: 'like',
    author: {
      name: 'Kevin Martinez',
      avatar: '/avatar15.jpg'
    },
    createdAt: new Date('2024-01-01')
  }
];