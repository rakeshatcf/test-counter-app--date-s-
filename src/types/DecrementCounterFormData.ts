import { DecrementCounter } from './DecrementCounter';

/**
 * Form data type for DecrementCounter
 * Excludes system fields (id, createdAt, updatedAt)
 */
export type DecrementCounterFormData = Omit<DecrementCounter, 'id' | 'createdAt' | 'updatedAt'>;

/**
 * Convert entity to form data by removing system fields
 */
export const adaptDecrementCounterToFormData = (entity: DecrementCounter): DecrementCounterFormData => {
    const { id, createdAt, updatedAt, ...formData } = entity;
    return formData;
};

/**
 * Convert form data to entity by adding system fields
 */
export const adaptFormDataToDecrementCounter = (
    formData: DecrementCounterFormData,
    existing?: DecrementCounter
): DecrementCounter => {
    return {
        ...formData,
        id: existing?.id || crypto.randomUUID(),
        createdAt: existing?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
};
