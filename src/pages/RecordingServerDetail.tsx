import { useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DashboardLayout from '@/components/layout/DashboardLayout';
import MonthlyChart from '@/components/detail/MonthlyChart';
import DataTable, { StatusBadge } from '@/components/detail/DataTable';
import { recordingServerData, monthlyData } from '@/data/dashboardData';

const RecordingServerDetail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const filter = searchParams.get('filter');

  const filteredData = filter && filter !== 'all'
    ? recordingServerData.filter(server => server.status === filter)
    : recordingServerData;

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'serverName', label: 'Server Name' },
    { key: 'serverIp', label: 'Server IP' },
    { key: 'capacity', label: 'Capacity' },
    { key: 'usedStorage', label: 'Used Storage' },
    { 
      key: 'status', 
      label: 'Status',
      render: (value: string) => <StatusBadge status={value} type="server" />
    },
    { key: 'lastBackup', label: 'Last Backup' },
  ];

  const chartConfig = {
    dataKey1: 'online',
    dataKey2: 'offline',
    color1: 'hsl(199, 89%, 48%)',
    color2: 'hsl(220, 10%, 50%)',
    label1: 'Online',
    label2: 'Offline',
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
            <div className="p-2 rounded-lg bg-info/10 text-info">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Recording Server Details</h1>
              <p className="text-muted-foreground">
                {filter === 'all' ? 'All servers' : filter ? `Showing ${filter} servers` : 'All servers'} • {filteredData.length} servers
              </p>
            </div>
          </div>
        </div>

        {/* Monthly Chart */}
        <MonthlyChart
          title="Monthly Server Status Report"
          data={monthlyData.recordingServers}
          config={chartConfig}
          filter={filter}
        />

        {/* Data Table */}
        <DataTable
          title="Recording Server List"
          columns={columns}
          data={filteredData}
        />
      </div>
    </DashboardLayout>
  );
};

export default RecordingServerDetail;
