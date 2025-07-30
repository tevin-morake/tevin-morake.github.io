// Utility functions for testimonial components

/**
 * Truncate text to specified character limit
 * @param text - The text to truncate
 * @param charLimit - Maximum number of characters (default: 200)
 * @returns Object with truncated text and truncation status
 */
export const truncateText = (text: string, charLimit: number = 200) => {
  if (text.length <= charLimit) {
    return { truncated: text, needsTruncation: false };
  }
  return {
    truncated: text.slice(0, charLimit) + "...",
    needsTruncation: true,
  };
};

/**
 * Create initials from a person's name
 * @param name - Full name string
 * @returns Uppercase initials
 */
export const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
};

/**
 * Get consistent avatar color based on name
 * @param name - Person's name for color consistency
 * @returns Color string
 */
export const getAvatarColor = (): string => {
  return "bg-gradient-to-r from-black to-gray-600";
};

/**
 * Normalize text length for consistent layout
 * @param text - The text to normalize
 * @param targetLength - Target character length (default: 150)
 * @returns Normalized text with consistent length
 */
export const normalizeTextLength = (
  text: string,
  targetLength: number = 150
): string => {
  if (text.length >= targetLength) {
    return text.slice(0, targetLength - 3) + "...";
  }

  // Return the text as-is if it's shorter - let CSS handle the layout
  return text;
};
