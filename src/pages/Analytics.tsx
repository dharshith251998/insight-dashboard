import { Camera, Server, DoorOpen, TrendingUp, TrendingDown, Activity } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getSummaryStats, monthlyData } from '@/data/dashboardData';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  Legend
} from 'recharts';

const Analytics = () => {
  const stats = getSummaryStats();

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="font-medium text-card-foreground mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: <span className="font-semibold">{entry.value}</span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Calculate trends (mock calculation)
  const cameraUptime = ((stats.cameras.active / stats.cameras.total) * 100).toFixed(1);
  const serverUptime = ((stats.recordingServers.online / stats.recordingServers.total) * 100).toFixed(1);
  const doorSecure = ((stats.acs.closed / stats.acs.total) * 100).toFixed(1);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="animate-slide-in-left">
          <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground mt-1">
            Comprehensive overview of your security systems
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="card-shadow animate-fade-in">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-muted-foreground">Camera Uptime</p>
                  <p className="text-3xl font-bold text-foreground mt-1">{cameraUptime}%</p>
                  <div className="flex items-center gap-1 mt-2">
                    <TrendingUp className="w-4 h-4 text-success" />
                    <span className="text-sm text-success">+2.5%</span>
                    <span className="text-sm text-muted-foreground">vs last month</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-success/10">
                  <Camera className="w-6 h-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-shadow animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-muted-foreground">Server Uptime</p>
                  <p className="text-3xl font-bold text-foreground mt-1">{serverUptime}%</p>
                  <div className="flex items-center gap-1 mt-2">
                    <TrendingDown className="w-4 h-4 text-destructive" />
                    <span className="text-sm text-destructive">-1.2%</span>
                    <span className="text-sm text-muted-foreground">vs last month</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-info/10">
                  <Server className="w-6 h-6 text-info" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-muted-foreground">Doors Secured</p>
                  <p className="text-3xl font-bold text-foreground mt-1">{doorSecure}%</p>
                  <div className="flex items-center gap-1 mt-2">
                    <Activity className="w-4 h-4 text-warning" />
                    <span className="text-sm text-muted-foreground">Normal activity</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-warning/10">
                  <DoorOpen className="w-6 h-6 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Combined Chart */}
        <Card className="card-shadow animate-fade-in">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">System Overview - 12 Month Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={monthlyData.cameras} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis 
                    dataKey="month" 
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                    axisLine={{ stroke: 'hsl(var(--border))' }}
                  />
                  <YAxis 
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                    axisLine={{ stroke: 'hsl(var(--border))' }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="active" name="Active Cameras" fill="hsl(142, 72%, 42%)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="inactive" name="Inactive Cameras" fill="hsl(0, 72%, 51%)" radius={[4, 4, 0, 0]} />
                  <Line 
                    type="monotone" 
                    dataKey="active" 
                    name="Active Trend" 
                    stroke="hsl(220, 70%, 50%)" 
                    strokeWidth={2}
                    dot={false}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Area Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="card-shadow animate-fade-in">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Recording Server Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={monthlyData.recordingServers} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis 
                      dataKey="month" 
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
                    />
                    <YAxis tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area 
                      type="monotone" 
                      dataKey="online" 
                      stackId="1"
                      stroke="hsl(199, 89%, 48%)" 
                      fill="hsl(199, 89%, 48%)" 
                      fillOpacity={0.6}
                      name="Online"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="offline" 
                      stackId="1"
                      stroke="hsl(220, 10%, 50%)" 
                      fill="hsl(220, 10%, 50%)" 
                      fillOpacity={0.6}
                      name="Offline"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="card-shadow animate-fade-in">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Access Control Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={monthlyData.acs} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis 
                      dataKey="month" 
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
                    />
                    <YAxis tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area 
                      type="monotone" 
                      dataKey="closed" 
                      stackId="1"
                      stroke="hsl(262, 83%, 58%)" 
                      fill="hsl(262, 83%, 58%)" 
                      fillOpacity={0.6}
                      name="Closed"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="open" 
                      stackId="1"
                      stroke="hsl(38, 92%, 50%)" 
                      fill="hsl(38, 92%, 50%)" 
                      fillOpacity={0.6}
                      name="Open"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
