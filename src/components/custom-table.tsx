import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from './ui/table';

type CustomTagProps = {
  children: React.ReactNode | React.ReactNode[] | string;
};

const CustomTable = ({ children }: CustomTagProps) => <Table className="w-fit table border-[1px] border-slate-500 my-2">{children}</Table>;
const CustomTableHeader = ({ children }: CustomTagProps) => <TableHeader>{children}</TableHeader>;
const CustomTableHead = ({ children }: CustomTagProps) => <TableHead className="border-2 border-slate-700">{children}</TableHead>;
const CustomTableBody = ({ children }: CustomTagProps) => <TableBody>{children}</TableBody>;
const CustomTableRow = ({ children }: CustomTagProps) => <TableRow>{children}</TableRow>;
const CustomTableCell = ({ children }: CustomTagProps) => <TableCell className="border-2 border-slate-700">{children}</TableCell>;

export { CustomTable, CustomTableHeader, CustomTableHead, CustomTableBody, CustomTableRow, CustomTableCell };
