import { DashboardData, MRRData, CustomerMetrics, RevenueBreakdown } from '../types/analytics';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

class ApiService {
  private async fetchData<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }
    return response.json();
  }

  async getDashboardData(): Promise<DashboardData> {
    return this.fetchData<DashboardData>('/api/dashboard');
  }

  async getMRRHistory(): Promise<MRRData[]> {
    return this.fetchData<MRRData[]>('/api/mrr');
  }

  async getCustomerMetrics(): Promise<CustomerMetrics> {
    return this.fetchData<CustomerMetrics>('/api/customers');
  }

  async getRevenueBreakdown(): Promise<RevenueBreakdown> {
    return this.fetchData<RevenueBreakdown>('/api/revenue');
  }
}

export const apiService = new ApiService();
