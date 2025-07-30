// Utility functions for project components

/**
 * Sort projects by various criteria
 * @param projects - Array of projects to sort
 * @param sortBy - Sort criteria
 * @param sortOrder - Sort direction
 * @returns Sorted projects array
 */
export const sortProjects = <T extends { 
  name: string; 
  completedDate?: string; 
  category?: string; 
  status?: string 
}>(
  projects: T[],
  sortBy: 'name' | 'category' | 'status' | 'completedDate',
  sortOrder: 'asc' | 'desc' = 'desc'
): T[] => {
  return [...projects].sort((a, b) => {
    let comparison = 0;
    
    switch (sortBy) {
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'category':
        comparison = (a.category || '').localeCompare(b.category || '');
        break;
      case 'status':
        comparison = (a.status || '').localeCompare(b.status || '');
        break;
      case 'completedDate':
        comparison = new Date(a.completedDate || '').getTime() - new Date(b.completedDate || '').getTime();
        break;
      default:
        return 0;
    }
    
    return sortOrder === 'asc' ? comparison : -comparison;
  });
};

/**
 * Filter projects by criteria
 * @param projects - Array of projects to filter
 * @param filters - Filter criteria
 * @returns Filtered projects array
 */
export const filterProjects = <T extends { 
  name: string; 
  description: string;
  category?: string; 
  status?: string;
  technologies?: string[];
}>(
  projects: T[],
  filters: {
    category?: string;
    status?: string;
    searchTerm?: string;
  }
): T[] => {
  return projects.filter(project => {
    // Category filter
    if (filters.category && project.category !== filters.category) {
      return false;
    }
    
    // Status filter
    if (filters.status && filters.status !== 'all' && project.status !== filters.status) {
      return false;
    }
    
    // Search term filter
    if (filters.searchTerm && filters.searchTerm.trim()) {
      const searchTerm = filters.searchTerm.toLowerCase().trim();
      const searchableText = [
        project.name,
        project.description,
        project.category || '',
        ...(project.technologies || [])
      ].join(' ').toLowerCase();
      
      if (!searchableText.includes(searchTerm)) {
        return false;
      }
    }
    
    return true;
  });
};

/**
 * Get unique values from projects for filter options
 * @param projects - Array of projects
 * @param field - Field to extract unique values from
 * @returns Array of unique values
 */
export const getUniqueProjectValues = <T extends Record<string, unknown>>(
  projects: T[],
  field: keyof T
): string[] => {
  const values = projects
    .map(item => item[field])
    .filter((value): value is T[keyof T] & string => 
      Boolean(value) && typeof value === 'string'
    ) as string[];
    
  return [...new Set(values)].sort();
};

/**
 * Format project completion date
 * @param dateString - ISO date string
 * @param format - Display format ('year' | 'short' | 'long')
 * @returns Formatted date string
 */
export const formatProjectDate = (
  dateString: string,
  format: 'year' | 'short' | 'long' = 'year'
): string => {
  try {
    const date = new Date(dateString);
    
    if (isNaN(date.getTime())) {
      return "TBD";
    }
    
    if (format === 'year') {
      return date.getFullYear().toString();
    }
    
    if (format === 'long') {
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  } catch {
    return "TBD";
  }
};

/**
 * Get project status display properties
 * @param status - Project status
 * @returns Object with display label and CSS classes
 */
export const getProjectStatusDisplay = (status?: string) => {
  switch (status) {
    case 'completed':
      return {
        label: 'Completed',
        className: 'bg-green-100 text-green-800'
      };
    case 'in-progress':
      return {
        label: 'In Progress',
        className: 'bg-blue-100 text-blue-800'
      };
    default:
      return {
        label: 'Unknown',
        className: 'bg-gray-100 text-gray-800'
      };
  }
};

/**
 * Truncate project description for consistent card layouts
 * @param description - Project description
 * @param maxLength - Maximum length (default: 120)
 * @returns Truncated description
 */
export const truncateProjectDescription = (
  description: string,
  maxLength: number = 120
): string => {
  if (description.length <= maxLength) {
    return description;
  }
  
  const truncated = description.slice(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(' ');
  
  if (lastSpaceIndex > maxLength * 0.8) {
    return truncated.slice(0, lastSpaceIndex) + '...';
  }
  
  return truncated + '...';
};
