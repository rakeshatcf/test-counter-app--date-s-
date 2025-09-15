import * as yup from 'yup';

export const displayCounterValueSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .trim()
    .min(1, 'Name cannot be empty')
});

export type DisplayCounterValueFormData = yup.InferType<typeof displayCounterValueSchema>;