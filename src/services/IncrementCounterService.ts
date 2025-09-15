export interface IncrementCounter {
  id: string;
  name: string;
  value: number;
  createdAt: string;
  updatedAt: string;
}

export interface IncrementCounterFormData {
  name: string;
  value: number;
}