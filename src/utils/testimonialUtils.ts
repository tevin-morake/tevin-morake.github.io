// Utility functions for testimonial components

// Constants
export const CHAR_LIMITS = {
  CARD: 200,
  MODAL: 500,
  NORMALIZE: 150,
} as const;

export const AVATAR_COLORS = [
  "bg-gradient-to-r from-blue-500 to-blue-600",
  "bg-gradient-to-r from-green-500 to-green-600",
  "bg-gradient-to-r from-purple-500 to-purple-600",
  "bg-gradient-to-r from-red-500 to-red-600",
  "bg-gradient-to-r from-indigo-500 to-indigo-600",
  "bg-gradient-to-r from-yellow-500 to-yellow-600",
  "bg-gradient-to-r from-pink-500 to-pink-600",
  "bg-gradient-to-r from-black to-gray-600",
] as const;

/**
 * Truncate text to specified character limit with smart word boundary detection
 * @param text - The text to truncate
 * @param charLimit - Maximum number of characters (default: 200)
 * @param useWordBoundary - Whether to break at word boundaries (default: true)
 * @returns Object with truncated text and truncation status
 */
export const truncateText = (
  text: string,
  charLimit: number = CHAR_LIMITS.CARD,
  useWordBoundary: boolean = true
) => {
  if (!text || text.length <= charLimit) {
    return { truncated: text || "", needsTruncation: false };
  }

  let truncated = text.slice(0, charLimit);

  if (useWordBoundary) {
    const lastSpaceIndex = truncated.lastIndexOf(" ");
    if (lastSpaceIndex > charLimit * 0.8) {
      // Only use word boundary if it's not too short
      truncated = truncated.slice(0, lastSpaceIndex);
    }
  }

  return {
    truncated: truncated.trim() + "...",
    needsTruncation: true,
  };
};

/**
 * Create initials from a person's name with improved handling
 * @param name - Full name string
 * @returns Uppercase initials (max 3 characters)
 */
export const getInitials = (name: string): string => {
  if (!name || typeof name !== "string") return "??";

  const words = name
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);

  if (words.length === 0) return "??";
  if (words.length === 1) return words[0].charAt(0).toUpperCase();
  if (words.length === 2)
    return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase();

  // For 3+ words, use first, middle, and last
  return (
    words[0].charAt(0) +
    words[Math.floor(words.length / 2)].charAt(0) +
    words[words.length - 1].charAt(0)
  ).toUpperCase();
};

/**
 * Get consistent avatar color based on name with better distribution
 * @param name - Person's name for color consistency
 * @returns Color string from predefined palette
 */
export const getAvatarColor = (name: string = ""): string => {
  if (!name) return AVATAR_COLORS[AVATAR_COLORS.length - 1]; // Default to black gradient

  // Simple hash function for consistent color assignment
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }

  const colorIndex = Math.abs(hash) % AVATAR_COLORS.length;
  return AVATAR_COLORS[colorIndex];
};

/**
 * Normalize text length for consistent layout with improved handling
 * @param text - The text to normalize
 * @param targetLength - Target character length (default: 150)
 * @param useWordBoundary - Whether to break at word boundaries (default: true)
 * @returns Normalized text with consistent length
 */
export const normalizeTextLength = (
  text: string,
  targetLength: number = CHAR_LIMITS.NORMALIZE,
  useWordBoundary: boolean = true
): string => {
  if (!text) return "";

  if (text.length <= targetLength) {
    return text;
  }

  return truncateText(text, targetLength, useWordBoundary).truncated;
};

/**
 * Format date for display in testimonials
 * @param dateString - ISO date string
 * @param format - Display format ('short' | 'long')
 * @returns Formatted date string
 */
export const formatTestimonialDate = (
  dateString: string,
  format: "short" | "long" = "short"
): string => {
  try {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return "Unknown date";
    }

    if (format === "long") {
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch (error) {
    return (
      "Unknown date" + (error instanceof Error ? `: ${error.message}` : "")
    );
  }
};

/**
 * Sort testimonials by various criteria
 * @param testimonials - Array of testimonials to sort
 * @param sortBy - Sort criteria
 * @param sortOrder - Sort direction
 * @returns Sorted testimonials array
 */
export const sortTestimonials = <
  T extends { name: string; created_at: string; company?: string }
>(
  testimonials: T[],
  sortBy: "date" | "name" | "company",
  sortOrder: "asc" | "desc" = "desc"
): T[] => {
  return [...testimonials].sort((a, b) => {
    let comparison = 0;

    switch (sortBy) {
      case "date":
        comparison =
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        break;
      case "name":
        comparison = a.name.localeCompare(b.name);
        break;
      case "company":
        comparison = (a.company || "").localeCompare(b.company || "");
        break;
      default:
        return 0;
    }

    return sortOrder === "asc" ? comparison : -comparison;
  });
};

/**
 * Filter testimonials by criteria
 * @param testimonials - Array of testimonials to filter
 * @param filters - Filter criteria
 * @returns Filtered testimonials array
 */
export const filterTestimonials = <
  T extends { company?: string; project?: string; name: string }
>(
  testimonials: T[],
  filters: {
    companies?: string[];
    projects?: string[];
    searchTerm?: string;
  }
): T[] => {
  return testimonials.filter((testimonial) => {
    // Company filter
    if (filters.companies && filters.companies.length > 0) {
      if (
        !testimonial.company ||
        !filters.companies.includes(testimonial.company)
      ) {
        return false;
      }
    }

    // Project filter
    if (filters.projects && filters.projects.length > 0) {
      if (
        !testimonial.project ||
        !filters.projects.includes(testimonial.project)
      ) {
        return false;
      }
    }

    // Search term filter
    if (filters.searchTerm && filters.searchTerm.trim()) {
      const searchTerm = filters.searchTerm.toLowerCase().trim();
      const searchableText = [
        testimonial.name,
        testimonial.company || "",
        testimonial.project || "",
      ]
        .join(" ")
        .toLowerCase();

      if (!searchableText.includes(searchTerm)) {
        return false;
      }
    }

    return true;
  });
};

/**
 * Get unique values from testimonials for filter options
 * @param testimonials - Array of testimonials
 * @param field - Field to extract unique values from
 * @returns Array of unique values
 */
export const getUniqueValues = <T extends Record<string, unknown>>(
  testimonials: T[],
  field: keyof T
): string[] => {
  const values = testimonials
    .map((item) => item[field])
    .filter(
      (value): value is T[keyof T] & string =>
        Boolean(value) && typeof value === "string"
    ) as string[];

  return [...new Set(values)].sort();
};
