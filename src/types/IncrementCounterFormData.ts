import { IncrementCounter } from './IncrementCounter';

/**
 * Form data type for IncrementCounter
 * Excludes system fields (id, createdAt, updatedAt)
 */
export type IncrementCounterFormData = Omit<IncrementCounter, 'id' | 'createdAt' | 'updatedAt'>;

/**
 * Convert entity to form data by removing system fields
 */
export const adaptIncrementCounterToFormData = (entity: IncrementCounter): IncrementCounterFormData => {
    const { id, createdAt, updatedAt, ...formData } = entity;
    return formData;
};

/**
 * Convert form data to entity by adding system fields
 */
export const adaptFormDataToIncrementCounter = (
    formData: IncrementCounterFormData,
    existing?: IncrementCounter
): IncrementCounter => {
    return {
        ...formData,
        id: existing?.id || crypto.randomUUID(),
        createdAt: existing?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
};
