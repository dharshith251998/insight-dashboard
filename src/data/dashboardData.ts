// Static data - will be replaced with dynamic database data later

export interface Camera {
  id: string;
  deviceName: string;
  deviceIp: string;
  location: string;
  status: 'active' | 'inactive';
  lastSeen: string;
  model: string;
}

export interface RecordingServer {
  id: string;
  serverName: string;
  serverIp: string;
  status: 'online' | 'offline';
  capacity: string;
  usedStorage: string;
  lastBackup: string;
}

export interface AccessControlDevice {
  id: string;
  doorName: string;
  deviceIp: string;
  location: string;
  status: 'open' | 'closed';
  lastAccess: string;
  accessType: string;
}

export const cameraData: Camera[] = [
  { id: 'CAM001', deviceName: 'Front Gate Camera', deviceIp: '192.168.1.101', location: 'Main Entrance', status: 'active', lastSeen: '2024-01-15 10:30:00', model: 'Hikvision DS-2CD2143G0-I' },
  { id: 'CAM002', deviceName: 'Parking Lot Camera A', deviceIp: '192.168.1.102', location: 'Parking Area A', status: 'active', lastSeen: '2024-01-15 10:29:55', model: 'Dahua IPC-HDW2431T' },
  { id: 'CAM003', deviceName: 'Lobby Camera', deviceIp: '192.168.1.103', location: 'Main Lobby', status: 'inactive', lastSeen: '2024-01-14 23:45:00', model: 'Axis P3245-V' },
  { id: 'CAM004', deviceName: 'Server Room Camera', deviceIp: '192.168.1.104', location: 'Server Room', status: 'active', lastSeen: '2024-01-15 10:30:01', model: 'Hikvision DS-2CD2143G0-I' },
  { id: 'CAM005', deviceName: 'Back Exit Camera', deviceIp: '192.168.1.105', location: 'Back Exit', status: 'inactive', lastSeen: '2024-01-13 18:20:00', model: 'Dahua IPC-HFW2431S' },
  { id: 'CAM006', deviceName: 'Warehouse Camera 1', deviceIp: '192.168.1.106', location: 'Warehouse', status: 'active', lastSeen: '2024-01-15 10:29:58', model: 'Axis M3106-L' },
  { id: 'CAM007', deviceName: 'Warehouse Camera 2', deviceIp: '192.168.1.107', location: 'Warehouse', status: 'active', lastSeen: '2024-01-15 10:30:02', model: 'Axis M3106-L' },
  { id: 'CAM008', deviceName: 'Reception Camera', deviceIp: '192.168.1.108', location: 'Reception', status: 'inactive', lastSeen: '2024-01-12 09:00:00', model: 'Hikvision DS-2CD2143G0-I' },
  { id: 'CAM009', deviceName: 'Cafeteria Camera', deviceIp: '192.168.1.109', location: 'Cafeteria', status: 'active', lastSeen: '2024-01-15 10:29:50', model: 'Dahua IPC-HDW2431T' },
  { id: 'CAM010', deviceName: 'Loading Dock Camera', deviceIp: '192.168.1.110', location: 'Loading Dock', status: 'active', lastSeen: '2024-01-15 10:29:45', model: 'Axis P3245-V' },
];

export const recordingServerData: RecordingServer[] = [
  { id: 'RS001', serverName: 'Primary Recording Server', serverIp: '192.168.2.10', status: 'online', capacity: '10TB', usedStorage: '7.2TB', lastBackup: '2024-01-15 06:00:00' },
  { id: 'RS002', serverName: 'Backup Recording Server', serverIp: '192.168.2.11', status: 'online', capacity: '10TB', usedStorage: '5.8TB', lastBackup: '2024-01-15 06:00:00' },
  { id: 'RS003', serverName: 'Archive Server', serverIp: '192.168.2.12', status: 'offline', capacity: '20TB', usedStorage: '18.5TB', lastBackup: '2024-01-14 06:00:00' },
  { id: 'RS004', serverName: 'Cloud Sync Server', serverIp: '192.168.2.13', status: 'online', capacity: '5TB', usedStorage: '3.2TB', lastBackup: '2024-01-15 08:00:00' },
  { id: 'RS005', serverName: 'Edge Recording Unit 1', serverIp: '192.168.2.14', status: 'online', capacity: '2TB', usedStorage: '1.5TB', lastBackup: '2024-01-15 07:30:00' },
  { id: 'RS006', serverName: 'Edge Recording Unit 2', serverIp: '192.168.2.15', status: 'offline', capacity: '2TB', usedStorage: '0.8TB', lastBackup: '2024-01-13 06:00:00' },
];

export const acsData: AccessControlDevice[] = [
  { id: 'ACS001', doorName: 'Main Entrance Door', deviceIp: '192.168.3.101', location: 'Building A', status: 'closed', lastAccess: '2024-01-15 10:25:00', accessType: 'Card Reader' },
  { id: 'ACS002', doorName: 'Server Room Door', deviceIp: '192.168.3.102', location: 'Building A', status: 'closed', lastAccess: '2024-01-15 09:45:00', accessType: 'Biometric' },
  { id: 'ACS003', doorName: 'Emergency Exit A', deviceIp: '192.168.3.103', location: 'Building A', status: 'closed', lastAccess: '2024-01-14 17:30:00', accessType: 'Push Bar' },
  { id: 'ACS004', doorName: 'Warehouse Gate', deviceIp: '192.168.3.104', location: 'Warehouse', status: 'open', lastAccess: '2024-01-15 10:28:00', accessType: 'Card Reader' },
  { id: 'ACS005', doorName: 'Loading Dock Door', deviceIp: '192.168.3.105', location: 'Warehouse', status: 'open', lastAccess: '2024-01-15 10:20:00', accessType: 'Remote Control' },
  { id: 'ACS006', doorName: 'Office Floor 1', deviceIp: '192.168.3.106', location: 'Building B', status: 'closed', lastAccess: '2024-01-15 10:15:00', accessType: 'Card Reader' },
  { id: 'ACS007', doorName: 'Office Floor 2', deviceIp: '192.168.3.107', location: 'Building B', status: 'closed', lastAccess: '2024-01-15 10:10:00', accessType: 'Card Reader' },
  { id: 'ACS008', doorName: 'Parking Gate', deviceIp: '192.168.3.108', location: 'Parking', status: 'open', lastAccess: '2024-01-15 10:27:00', accessType: 'RFID' },
];

// Monthly data for charts
export const monthlyData = {
  cameras: [
    { month: 'Jan', active: 7, inactive: 3 },
    { month: 'Feb', active: 8, inactive: 2 },
    { month: 'Mar', active: 6, inactive: 4 },
    { month: 'Apr', active: 9, inactive: 1 },
    { month: 'May', active: 8, inactive: 2 },
    { month: 'Jun', active: 7, inactive: 3 },
    { month: 'Jul', active: 9, inactive: 1 },
    { month: 'Aug', active: 8, inactive: 2 },
    { month: 'Sep', active: 7, inactive: 3 },
    { month: 'Oct', active: 8, inactive: 2 },
    { month: 'Nov', active: 9, inactive: 1 },
    { month: 'Dec', active: 7, inactive: 3 },
  ],
  recordingServers: [
    { month: 'Jan', online: 5, offline: 1 },
    { month: 'Feb', online: 6, offline: 0 },
    { month: 'Mar', online: 4, offline: 2 },
    { month: 'Apr', online: 5, offline: 1 },
    { month: 'May', online: 6, offline: 0 },
    { month: 'Jun', online: 5, offline: 1 },
    { month: 'Jul', online: 4, offline: 2 },
    { month: 'Aug', online: 5, offline: 1 },
    { month: 'Sep', online: 6, offline: 0 },
    { month: 'Oct', online: 5, offline: 1 },
    { month: 'Nov', online: 4, offline: 2 },
    { month: 'Dec', online: 4, offline: 2 },
  ],
  acs: [
    { month: 'Jan', open: 2, closed: 6 },
    { month: 'Feb', open: 3, closed: 5 },
    { month: 'Mar', open: 1, closed: 7 },
    { month: 'Apr', open: 4, closed: 4 },
    { month: 'May', open: 2, closed: 6 },
    { month: 'Jun', open: 3, closed: 5 },
    { month: 'Jul', open: 2, closed: 6 },
    { month: 'Aug', open: 1, closed: 7 },
    { month: 'Sep', open: 3, closed: 5 },
    { month: 'Oct', open: 2, closed: 6 },
    { month: 'Nov', open: 4, closed: 4 },
    { month: 'Dec', open: 3, closed: 5 },
  ],
};

// Summary stats
export const getSummaryStats = () => {
  const activeCameras = cameraData.filter(c => c.status === 'active').length;
  const inactiveCameras = cameraData.filter(c => c.status === 'inactive').length;
  
  const onlineServers = recordingServerData.filter(s => s.status === 'online').length;
  const offlineServers = recordingServerData.filter(s => s.status === 'offline').length;
  
  const openDoors = acsData.filter(d => d.status === 'open').length;
  const closedDoors = acsData.filter(d => d.status === 'closed').length;

  return {
    cameras: {
      active: activeCameras,
      inactive: inactiveCameras,
      total: cameraData.length,
    },
    recordingServers: {
      online: onlineServers,
      offline: offlineServers,
      total: recordingServerData.length,
    },
    acs: {
      open: openDoors,
      closed: closedDoors,
      total: acsData.length,
    },
  };
};
