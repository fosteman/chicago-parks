import type { NextPage } from 'next'
import Header from '../components/common/Header'
import core from '../components/common/core'
import { DataGrid, GridColDef } from '@mui/x-data-grid'


const columns: GridColDef[] = [
  { field: 'title', headerName: 'Park', width: 150 },
  {
    field: 'description',
    headerName: 'Description',
    width: 400
  },
]

const List: NextPage = () => {
  return (
    <>
      <Header />
      <DataGrid columns={columns} rows={core.dataSource?.features.map((f, id) => ({...f.properties, id})) || []} autoHeight />
    </>
  )
}

export default List

