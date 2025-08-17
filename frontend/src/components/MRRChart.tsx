import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MRRData } from '../types/analytics';

interface MRRChartProps {
  data: MRRData[];
}

export function MRRChart({ data }: MRRChartProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatMonth = (month: string) => {
    const date = new Date(month + '-01');
    return date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
  };

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Monthly Recurring Revenue Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="month" 
              tickFormatter={formatMonth}
            />
            <YAxis 
              tickFormatter={formatCurrency}
            />
            <Tooltip 
              formatter={(value: number) => [formatCurrency(value), 'MRR']}
              labelFormatter={(label: string) => formatMonth(label)}
            />
            <Line 
              type="monotone" 
              dataKey="mrr" 
              stroke="#8884d8" 
              strokeWidth={2}
              dot={{ fill: '#8884d8', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
