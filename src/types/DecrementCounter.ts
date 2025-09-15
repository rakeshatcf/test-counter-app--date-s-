/**
 * DecrementCounter entity interface
 */
export interface DecrementCounter {
  /** Unique identifier for the decrement counter */
  id: string;
  
  /** Name of the decrement counter */
  name: string;
  
  /** ISO string timestamp when the counter was created */
  createdAt: string;
  
  /** ISO string timestamp when the counter was last updated */
  updatedAt: string;
}

/**
 * DecrementCounter list item view - minimal fields for list displays
 */
export interface DecrementCounterListItem {
  /** Unique identifier for the decrement counter */
  id: string;
  
  /** Name of the decrement counter */
  name: string;
  
  /** ISO string timestamp when the counter was last updated */
  updatedAt: string;
}

/**
 * DecrementCounter display item view - formatted fields for detailed displays
 */
export interface DecrementCounterDisplayItem {
  /** Unique identifier for the decrement counter */
  id: string;
  
  /** Name of the decrement counter */
  name: string;
  
  /** Formatted creation date */
  createdAt: string;
  
  /** Formatted last updated date */
  updatedAt: string;
}

/**
 * Input type for creating a new DecrementCounter
 */
export type CreateDecrementCounterInput = Omit<DecrementCounter, 'id' | 'createdAt' | 'updatedAt'>;

/**
 * Input type for updating an existing DecrementCounter
 */
export type UpdateDecrementCounterInput = Partial<Pick<DecrementCounter, 'name'>>;