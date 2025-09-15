import { ReactAppSetup } from './ReactAppSetup';

/**
 * Form data type for ReactAppSetup
 * Excludes system fields (id, createdAt, updatedAt)
 */
export type ReactAppSetupFormData = Omit<ReactAppSetup, 'id' | 'createdAt' | 'updatedAt'>;

/**
 * Convert entity to form data by removing system fields
 */
export const adaptReactAppSetupToFormData = (entity: ReactAppSetup): ReactAppSetupFormData => {
    const { id, createdAt, updatedAt, ...formData } = entity;
    return formData;
};

/**
 * Convert form data to entity by adding system fields
 */
export const adaptFormDataToReactAppSetup = (
    formData: ReactAppSetupFormData,
    existing?: ReactAppSetup
): ReactAppSetup => {
    return {
        ...formData,
        id: existing?.id || crypto.randomUUID(),
        createdAt: existing?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
};
