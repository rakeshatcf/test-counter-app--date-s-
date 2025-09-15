import * as yup from 'yup';

export const reactAppSetupSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .trim()
    .min(1, 'Name cannot be empty')
});

export type ReactAppSetupFormData = yup.InferType<typeof reactAppSetupSchema>;