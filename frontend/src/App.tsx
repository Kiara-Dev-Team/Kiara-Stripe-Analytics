import { useState, useEffect } from 'react';
import { DashboardData } from './types/analytics';
import { apiService } from './services/api';
import { MetricCard } from './components/MetricCard';
import { MRRChart } from './components/MRRChart';
import { DollarSign, Users, UserPlus, UserMinus, TrendingUp } from 'lucide-react';

function App() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await apiService.getDashboardData();
        setDashboardData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg">Loading dashboard...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-500">No data available</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Stripe Payment Analytics
          </h1>
          <p className="text-gray-600">
            Monitor your Monthly Recurring Revenue and key business metrics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Current MRR"
            value={dashboardData.current_mrr}
            change={dashboardData.mrr_growth}
            changeLabel="from last month"
            icon={<DollarSign className="h-4 w-4" />}
            format="currency"
          />
          
          <MetricCard
            title="Total Customers"
            value={dashboardData.customer_metrics.total_customers}
            icon={<Users className="h-4 w-4" />}
            format="number"
          />
          
          <MetricCard
            title="New Customers"
            value={dashboardData.customer_metrics.new_customers}
            icon={<UserPlus className="h-4 w-4" />}
            format="number"
          />
          
          <MetricCard
            title="Churn Rate"
            value={dashboardData.customer_metrics.churn_rate}
            icon={<UserMinus className="h-4 w-4" />}
            format="percentage"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <MRRChart data={dashboardData.mrr_history} />
          
          <div className="space-y-6">
            <MetricCard
              title="Subscription Revenue"
              value={dashboardData.revenue_breakdown.subscription_revenue}
              icon={<TrendingUp className="h-4 w-4" />}
              format="currency"
            />
            
            <MetricCard
              title="One-time Revenue"
              value={dashboardData.revenue_breakdown.one_time_revenue}
              icon={<DollarSign className="h-4 w-4" />}
              format="currency"
            />
            
            <MetricCard
              title="Total Revenue"
              value={dashboardData.revenue_breakdown.total_revenue}
              icon={<DollarSign className="h-4 w-4" />}
              format="currency"
            />
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-8">
          <p>Dashboard powered by Stripe Analytics API</p>
          <p className="mt-1">Data refreshes automatically</p>
        </div>
      </div>
    </div>
  );
}

export default App;
