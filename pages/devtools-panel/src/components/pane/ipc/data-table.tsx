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
          <TableRow key={headerGroup.id} className='h-5 bg-zinc-800'>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id} className='h-5 text-xs text-gray-300 px-2 py-1 border border-zinc-600 hover:bg-zinc-700 border-r-0 last:border-r'>
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id} className='h-5 border-b-0 even:bg-zinc-800 odd:bg-zinc-900 hover:bg-zinc-700'>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id} className='h-5 py-0 text-xs text-ellipsis max-w-3xs overflow-hidden whitespace-nowrap border-r-1 border-zinc-600'>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
