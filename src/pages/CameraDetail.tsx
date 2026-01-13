import { useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DashboardLayout from '@/components/layout/DashboardLayout';
import MonthlyChart from '@/components/detail/MonthlyChart';
import DataTable, { StatusBadge } from '@/components/detail/DataTable';
import { cameraData, monthlyData } from '@/data/dashboardData';

const CameraDetail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const filter = searchParams.get('filter');

  const filteredData = filter && filter !== 'all'
    ? cameraData.filter(camera => camera.status === filter)
    : cameraData;

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'deviceName', label: 'Device Name' },
    { key: 'deviceIp', label: 'Device IP' },
    { key: 'location', label: 'Location' },
    { key: 'model', label: 'Model' },
    { 
      key: 'status', 
      label: 'Status',
      render: (value: string) => <StatusBadge status={value} type="camera" />
    },
    { key: 'lastSeen', label: 'Last Seen' },
  ];

  const chartConfig = {
    dataKey1: 'active',
    dataKey2: 'inactive',
    color1: 'hsl(142, 72%, 42%)',
    color2: 'hsl(0, 72%, 51%)',
    label1: 'Active',
    label2: 'Inactive',
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4 animate-slide-in-left">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate('/')}
            className="hover:bg-muted"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Camera Details</h1>
              <p className="text-muted-foreground">
                {filter === 'all' ? 'All cameras' : filter ? `Showing ${filter} cameras` : 'All cameras'} • {filteredData.length} devices
              </p>
            </div>
          </div>
        </div>

        {/* Monthly Chart */}
        <MonthlyChart
          title="Monthly Camera Status Report"
          data={monthlyData.cameras}
          config={chartConfig}
        />

        {/* Data Table */}
        <DataTable
          title="Camera List"
          columns={columns}
          data={filteredData}
        />
      </div>
    </DashboardLayout>
  );
};

export default CameraDetail;
