export interface DecrementCounter {
  id: string;
  name: string;
  currentValue: number;
  decrementAmount: number;
  minValue: number;
  createdAt: string;
  updatedAt: string;
}

export interface DecrementCounterFormData {
  name: string;
  currentValue: number;
  decrementAmount: number;
  minValue: number;
}