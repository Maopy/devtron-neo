import { type ColumnDef, useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from '@/components/ui/table'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue> ({ columns, data }: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id} className='h-7'>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id} className='h-7'>
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id} className='h-7 border-b-0'>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id} className='h-7 py-0 text-xs'>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
