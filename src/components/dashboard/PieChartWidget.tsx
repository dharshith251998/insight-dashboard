import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface PieSlice {
  name: string;
  value: number;
  color: string;
  filterKey: string;
}

interface PieChartWidgetProps {
  title: string;
  icon: React.ReactNode;
  data: PieSlice[];
  total: number;
  navigateTo: string;
  className?: string;
}

const PieChartWidget = ({ title, icon, data, total, navigateTo, className }: PieChartWidgetProps) => {
  const navigate = useNavigate();

  const handleSliceClick = (entry: PieSlice) => {
    navigate(`${navigateTo}?filter=${entry.filterKey}`);
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="font-medium text-card-foreground">{data.name}</p>
          <p className="text-sm text-muted-foreground">
            Count: <span className="font-semibold text-foreground">{data.value}</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">Click to view details</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className={cn("card-shadow hover:card-shadow-hover transition-all duration-300 animate-fade-in", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
          <div>
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            <p className="text-sm text-muted-foreground">Total: {total}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={3}
                dataKey="value"
                onClick={(_, index) => handleSliceClick(data[index])}
                style={{ cursor: 'pointer' }}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color}
                    className="transition-all duration-200 hover:opacity-80"
                    stroke="transparent"
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                verticalAlign="bottom" 
                height={36}
                formatter={(value: string) => (
                  <span className="text-sm text-foreground">{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PieChartWidget;
