import * as yup from 'yup';

export const decrementCounterSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .trim()
    .min(1, 'Name cannot be empty')
});

export type DecrementCounterFormData = yup.InferType<typeof decrementCounterSchema>;