/**
 * ReactAppSetup entity interface
 */
export interface ReactAppSetup {
  /**
   * Unique identifier for the React app setup
   */
  id: string;

  /**
   * Name of the React app setup
   */
  name: string;

  /**
   * ISO string timestamp when the setup was created
   */
  createdAt: string;

  /**
   * ISO string timestamp when the setup was last updated
   */
  updatedAt: string;
}

/**
 * ReactAppSetup interface for list views with minimal data
 */
export interface ReactAppSetupListItem {
  /**
   * Unique identifier for the React app setup
   */
  id: string;

  /**
   * Name of the React app setup
   */
  name: string;

  /**
   * ISO string timestamp when the setup was created
   */
  createdAt: string;
}

/**
 * ReactAppSetup interface for display views with formatted data
 */
export interface ReactAppSetupDisplayItem {
  /**
   * Unique identifier for the React app setup
   */
  id: string;

  /**
   * Name of the React app setup
   */
  name: string;

  /**
   * ISO string timestamp when the setup was created
   */
  createdAt: string;

  /**
   * ISO string timestamp when the setup was last updated
   */
  updatedAt: string;
}

/**
 * Input type for creating a new ReactAppSetup
 */
export type CreateReactAppSetupInput = Omit<ReactAppSetup, 'id' | 'createdAt' | 'updatedAt'>;

/**
 * Input type for updating an existing ReactAppSetup
 */
export type UpdateReactAppSetupInput = Partial<CreateReactAppSetupInput>;