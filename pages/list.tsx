import type { NextPage } from 'next'
import Header from '../components/common/Header'
import core from '../components/common/core'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useRouter } from 'next/router'
import { observer } from 'mobx-react'


const columns: GridColDef[] = [
  { field: 'properties.title', headerName: 'Park', width: 150, valueGetter: params => params.row.properties.title},
  {
    field: 'properties.description',
    headerName: 'Description',
    width: 400,
    valueGetter: params => params.row.properties.description
  },
]

const List: NextPage = observer(() => {
  const router = useRouter()
  return (
    <>
      <Header />
      <DataGrid onRowClick={(row) => {

        core.selectPark(row.row)
        router.push('/')
      }} columns={columns} rows={core.dataSource?.features.map(f => f) || []} autoHeight />
    </>
  )
})

export default List

