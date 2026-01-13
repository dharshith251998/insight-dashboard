import { useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, DoorOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DashboardLayout from '@/components/layout/DashboardLayout';
import MonthlyChart from '@/components/detail/MonthlyChart';
import DataTable, { StatusBadge } from '@/components/detail/DataTable';
import { acsData, monthlyData } from '@/data/dashboardData';

const AccessControlDetail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const filter = searchParams.get('filter');

  const filteredData = filter 
    ? acsData.filter(device => device.status === filter)
    : acsData;

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'doorName', label: 'Door Name' },
    { key: 'deviceIp', label: 'Device IP' },
    { key: 'location', label: 'Location' },
    { key: 'accessType', label: 'Access Type' },
    { 
      key: 'status', 
      label: 'Status',
      render: (value: string) => <StatusBadge status={value} type="acs" />
    },
    { key: 'lastAccess', label: 'Last Access' },
  ];

  const chartConfig = {
    dataKey1: 'open',
    dataKey2: 'closed',
    color1: 'hsl(38, 92%, 50%)',
    color2: 'hsl(262, 83%, 58%)',
    label1: 'Open',
    label2: 'Closed',
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
            <div className="p-2 rounded-lg bg-warning/10 text-warning">
              <DoorOpen className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Access Control Details</h1>
              <p className="text-muted-foreground">
                {filter ? `Showing ${filter} doors` : 'All doors'} • {filteredData.length} access points
              </p>
            </div>
          </div>
        </div>

        {/* Monthly Chart */}
        <MonthlyChart
          title="Monthly Access Control Status Report"
          data={monthlyData.acs}
          config={chartConfig}
        />

        {/* Data Table */}
        <DataTable
          title="Access Control Device List"
          columns={columns}
          data={filteredData}
        />
      </div>
    </DashboardLayout>
  );
};

export default AccessControlDetail;
