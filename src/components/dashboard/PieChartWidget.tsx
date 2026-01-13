import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
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
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
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
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {/* Custom Legend */}
        <div className="mt-4 space-y-2">
          {data.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between cursor-pointer hover:bg-muted/50 rounded px-2 py-1 transition-colors"
              onClick={() => handleSliceClick(item)}
            >
              <div className="flex items-center gap-2">
                <span 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-foreground">{item.name}</span>
              </div>
              <span className="text-sm font-medium text-foreground">{item.value}</span>
            </div>
          ))}
        </div>
        
        <p className="text-xs text-muted-foreground text-center mt-4">Click a slice to view details</p>
      </CardContent>
    </Card>
  );
};

export default PieChartWidget;
