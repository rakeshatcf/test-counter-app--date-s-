/**
 * IncrementCounter entity interface
 */
export interface IncrementCounter {
  /** Unique identifier for the increment counter */
  id: string;
  
  /** Name of the increment counter */
  name: string;
  
  /** ISO string timestamp when the counter was created */
  createdAt: string;
  
  /** ISO string timestamp when the counter was last updated */
  updatedAt: string;
}

/**
 * IncrementCounter interface for list views
 * Contains essential fields for displaying in lists
 */
export interface IncrementCounterListItem {
  /** Unique identifier for the increment counter */
  id: string;
  
  /** Name of the increment counter */
  name: string;
  
  /** ISO string timestamp when the counter was last updated */
  updatedAt: string;
}

/**
 * IncrementCounter interface for display views
 * Contains all fields formatted for display
 */
export interface IncrementCounterDisplayItem {
  /** Unique identifier for the increment counter */
  id: string;
  
  /** Name of the increment counter */
  name: string;
  
  /** Formatted creation date */
  createdAt: string;
  
  /** Formatted last updated date */
  updatedAt: string;
}

/**
 * Input interface for creating a new IncrementCounter
 * Excludes auto-generated fields
 */
export interface CreateIncrementCounterInput {
  /** Name of the increment counter */
  name: string;
}

/**
 * Input interface for updating an existing IncrementCounter
 * All fields are optional except id
 */
export interface UpdateIncrementCounterInput {
  /** Unique identifier for the increment counter */
  id: string;
  
  /** Name of the increment counter */
  name?: string;
}