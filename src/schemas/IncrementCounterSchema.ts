import * as yup from 'yup';

export const incrementCounterSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .trim()
    .min(1, 'Name cannot be empty')
});

export type IncrementCounterFormData = yup.InferType<typeof incrementCounterSchema>;