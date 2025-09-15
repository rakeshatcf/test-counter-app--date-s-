/**
 * DisplayCounterValue entity interface
 */
export interface DisplayCounterValue {
  /**
   * Unique identifier for the display counter value
   */
  id: string;

  /**
   * Name of the display counter value
   */
  name: string;

  /**
   * ISO string timestamp when the record was created
   */
  createdAt: string;

  /**
   * ISO string timestamp when the record was last updated
   */
  updatedAt: string;
}

/**
 * DisplayCounterValue interface for list views
 * Contains only essential fields for displaying in lists
 */
export interface DisplayCounterValueListItem {
  /**
   * Unique identifier for the display counter value
   */
  id: string;

  /**
   * Name of the display counter value
   */
  name: string;

  /**
   * ISO string timestamp when the record was created
   */
  createdAt: string;
}

/**
 * DisplayCounterValue interface for detailed display views
 * Contains all fields for comprehensive display
 */
export interface DisplayCounterValueDisplayItem extends DisplayCounterValue {
  // Inherits all fields from DisplayCounterValue
}

/**
 * Type for creating a new DisplayCounterValue
 * Excludes auto-generated fields
 */
export type CreateDisplayCounterValue = Omit<DisplayCounterValue, 'id' | 'createdAt' | 'updatedAt'>;

/**
 * Type for updating an existing DisplayCounterValue
 * Makes all fields optional except id
 */
export type UpdateDisplayCounterValue = Partial<Omit<DisplayCounterValue, 'id'>> & {
  id: string;
};