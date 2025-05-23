

import { useNavigate, useParams } from "react-router-dom";
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
DataTable.use(DT);
import { TableHead, TableHeader, TableRow } from "../components/uikit/table"
import { HiOutlinePencil, HiOutlineEye  } from "react-icons/hi";
import { layouts, products } from "../utils/sampleData";
import { useRef } from "react";

const Table  = ({data, headers}) => {
  const params = useParams()
  const nav = useNavigate()
  const tableRef = useRef(null); 

  return (
    <DataTable data={data} className="display "  key={params.option} ref={tableRef} 
    slots={{0: (data) => (
    <div className="justify-center" style={{display: "flex"}}>
        <HiOutlinePencil className="mx-2 cursor-pointer hover:text-blue-500 text-lg my-1 justify-self-center" onClick={()=> nav(`/editor/${data}`)}/>
        <HiOutlineEye className="mx-2 cursor-pointer hover:text-blue-500 text-lg my-1 justify-self-center" onClick={()=> nav(`/editor/${data}`)}/></div>
    )}}>
      <TableHead>
        <TableRow className="justify-center ">
          {headers.map((option)=><TableHeader key={option}>{option}</TableHeader>)}
        </TableRow>
      </TableHead>
      </DataTable> )} 

export function LayoutsTable() {

 const data = layouts.map(item => [item.id, item.name, products.filter(product => product.id == item.idProduct)[0].name, item.modifiedDate])
 const headers = ["Acciones", "Nombre", "Producto",  "Fecha modificación"]
 
  const render = ()=> {
    if(data.length > 0 && headers.length > 0 ){
      return (
        <Table  data={data} headers={headers} />
      )}}

  return (
    <>{ !data.length && !headers.length ? <p>Cargando tabla...</p> : data.length ==0 ? <p>No se encontraron registros</p> :render()}</>)
}