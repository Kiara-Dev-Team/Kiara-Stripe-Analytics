export interface MRRData {
  month: string;
  mrr: number;
  growth_rate: number;
}

export interface CustomerMetrics {
  total_customers: number;
  new_customers: number;
  churned_customers: number;
  churn_rate: number;
}

export interface RevenueBreakdown {
  subscription_revenue: number;
  one_time_revenue: number;
  total_revenue: number;
}

export interface DashboardData {
  current_mrr: number;
  mrr_growth: number;
  mrr_history: MRRData[];
  customer_metrics: CustomerMetrics;
  revenue_breakdown: RevenueBreakdown;
}
