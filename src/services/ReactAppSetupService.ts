export interface ReactAppSetup {
  id: string;
  name: string;
  description?: string;
  framework: string;
  buildTool: string;
  dependencies: string[];
  devDependencies: string[];
  scripts: Record<string, string>;
  createdAt: string;
  updatedAt: string;
}

export interface ReactAppSetupFormData {
  name: string;
  description?: string;
  framework: string;
  buildTool: string;
  dependencies: string[];
  devDependencies: string[];
  scripts: Record<string, string>;
}