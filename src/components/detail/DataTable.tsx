import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Column {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface DataTableProps {
  title: string;
  columns: Column[];
  data: any[];
  className?: string;
}

const DataTable = ({ title, columns, data, className }: DataTableProps) => {
  return (
    <Card className={cn("card-shadow animate-fade-in", className)}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                {columns.map((column) => (
                  <TableHead 
                    key={column.key} 
                    className="text-muted-foreground font-semibold"
                  >
                    {column.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, rowIndex) => (
                <TableRow 
                  key={rowIndex} 
                  className="border-border hover:bg-muted/50 transition-colors"
                >
                  {columns.map((column) => (
                    <TableCell key={column.key} className="py-3">
                      {column.render 
                        ? column.render(row[column.key], row)
                        : row[column.key]
                      }
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {data.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No data available
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export const StatusBadge = ({ status, type }: { status: string; type: 'camera' | 'server' | 'acs' }) => {
  const getVariant = () => {
    switch (type) {
      case 'camera':
        return status === 'active' ? 'success' : 'destructive';
      case 'server':
        return status === 'online' ? 'success' : 'secondary';
      case 'acs':
        return status === 'open' ? 'warning' : 'info';
      default:
        return 'secondary';
    }
  };

  const colorClasses = {
    success: 'bg-success/15 text-success border-success/30',
    destructive: 'bg-destructive/15 text-destructive border-destructive/30',
    warning: 'bg-warning/15 text-warning border-warning/30',
    info: 'bg-info/15 text-info border-info/30',
    secondary: 'bg-muted text-muted-foreground border-border',
  };

  return (
    <Badge 
      variant="outline" 
      className={cn("capitalize font-medium", colorClasses[getVariant()])}
    >
      {status}
    </Badge>
  );
};

export default DataTable;
