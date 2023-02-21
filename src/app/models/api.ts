import { Product } from './product';

export interface APIResponse {
  apiVersion: string;
  data: { machineProducts: Product[] };
  status: 'success' | string; // probally error is in it
}
