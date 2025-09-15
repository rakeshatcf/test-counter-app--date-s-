import { DisplayCounterValue } from './DisplayCounterValue';

/**
 * Form data type for DisplayCounterValue
 * Excludes system fields (id, createdAt, updatedAt)
 */
export type DisplayCounterValueFormData = Omit<DisplayCounterValue, 'id' | 'createdAt' | 'updatedAt'>;

/**
 * Convert entity to form data by removing system fields
 */
export const adaptDisplayCounterValueToFormData = (entity: DisplayCounterValue): DisplayCounterValueFormData => {
    const { id, createdAt, updatedAt, ...formData } = entity;
    return formData;
};

/**
 * Convert form data to entity by adding system fields
 */
export const adaptFormDataToDisplayCounterValue = (
    formData: DisplayCounterValueFormData,
    existing?: DisplayCounterValue
): DisplayCounterValue => {
    return {
        ...formData,
        id: existing?.id || crypto.randomUUID(),
        createdAt: existing?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
};
