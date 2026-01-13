import { Camera, Server, DoorOpen } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import PieChartWidget from '@/components/dashboard/PieChartWidget';
import { getSummaryStats } from '@/data/dashboardData';

const Index = () => {
  const stats = getSummaryStats();

  const cameraChartData = [
    { name: 'Active', value: stats.cameras.active, color: 'hsl(142, 72%, 42%)', filterKey: 'active' },
    { name: 'Inactive', value: stats.cameras.inactive, color: 'hsl(0, 72%, 51%)', filterKey: 'inactive' },
    { name: 'Total', value: stats.cameras.total, color: 'hsl(217, 91%, 60%)', filterKey: 'all' },
  ];

  const rsChartData = [
    { name: 'Online', value: stats.recordingServers.online, color: 'hsl(142, 72%, 42%)', filterKey: 'online' },
    { name: 'Offline', value: stats.recordingServers.offline, color: 'hsl(0, 72%, 51%)', filterKey: 'offline' },
    { name: 'Total', value: stats.recordingServers.total, color: 'hsl(217, 91%, 60%)', filterKey: 'all' },
  ];

  const acsChartData = [
    { name: 'Door Open', value: stats.acs.open, color: 'hsl(45, 93%, 47%)', filterKey: 'open' },
    { name: 'Door Closed', value: stats.acs.closed, color: 'hsl(262, 83%, 58%)', filterKey: 'closed' },
    { name: 'Total', value: stats.acs.total, color: 'hsl(217, 91%, 60%)', filterKey: 'all' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="animate-slide-in-left">
          <h1 className="text-2xl font-bold text-foreground">Dashboard Overview</h1>
          <p className="text-muted-foreground mt-1">
            Monitor your security infrastructure in real-time
          </p>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card rounded-xl p-4 card-shadow flex items-center gap-4 animate-fade-in">
            <div className="p-3 rounded-lg bg-success/10">
              <Camera className="w-6 h-6 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Cameras</p>
              <p className="text-2xl font-bold text-foreground">{stats.cameras.total}</p>
            </div>
          </div>
          <div className="bg-card rounded-xl p-4 card-shadow flex items-center gap-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="p-3 rounded-lg bg-info/10">
              <Server className="w-6 h-6 text-info" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Recording Servers</p>
              <p className="text-2xl font-bold text-foreground">{stats.recordingServers.total}</p>
            </div>
          </div>
          <div className="bg-card rounded-xl p-4 card-shadow flex items-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="p-3 rounded-lg bg-warning/10">
              <DoorOpen className="w-6 h-6 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Access Points</p>
              <p className="text-2xl font-bold text-foreground">{stats.acs.total}</p>
            </div>
          </div>
        </div>

        {/* Pie Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <PieChartWidget
            title="Camera Count"
            icon={<Camera className="w-5 h-5" />}
            data={cameraChartData}
            total={stats.cameras.total}
            navigateTo="/cameras"
          />
          <PieChartWidget
            title="Recording Server"
            icon={<Server className="w-5 h-5" />}
            data={rsChartData}
            total={stats.recordingServers.total}
            navigateTo="/recording-servers"
          />
          <PieChartWidget
            title="ACS Status"
            icon={<DoorOpen className="w-5 h-5" />}
            data={acsChartData}
            total={stats.acs.total}
            navigateTo="/access-control"
          />
        </div>

        {/* Instructions */}
        <div className="bg-card rounded-xl p-6 card-shadow animate-fade-in">
          <h3 className="font-semibold text-foreground mb-2">Quick Tips</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Click on any pie chart slice to view detailed information</li>
            <li>• Use the Analytics page for comprehensive reports</li>
            <li>• Data will be dynamically loaded from database in production</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
