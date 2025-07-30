// Utility functions for testimonial components

/**
 * Truncate text to specified character limit
 * @param text - The text to truncate
 * @param charLimit - Maximum number of characters (default: 100)
 * @returns Object with truncated text and truncation status
 */
export const truncateText = (text: string, charLimit: number = 100) => {
  if (text.length <= charLimit) {
    return { truncated: text, needsTruncation: false };
  }
  return {
    truncated: text.slice(0, charLimit) + '...',
    needsTruncation: true
  };
};

/**
 * Create initials from a person's name
 * @param name - Full name string
 * @returns Uppercase initials
 */
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase();
};

/**
 * Get consistent avatar gradient color
 * @returns Tailwind gradient classes
 */
export const getAvatarColor = (): string => {
  return 'bg-gradient-to-r from-black to-gray-600';
};
