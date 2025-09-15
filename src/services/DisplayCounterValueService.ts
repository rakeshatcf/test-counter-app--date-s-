export interface DisplayCounterValue {
  id: string;
  name: string;
  value: number;
  description?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface DisplayCounterValueFormData {
  name: string;
  value: number;
  description?: string;
  isActive: boolean;
}