import React from 'react'
import { returnPaginationRange } from '../utils/appUtils'

function Pagination(props:PaginationProps) {
  const array : number[] = returnPaginationRange(props)
  return (
    <div>
        <nav className="space-x-2 isolate inline-flex rounded-md shadow-sm" aria-label="Pagination">
          <a href="#" onClick={()=>props.onPageChange("&laquo;")} className="bg-yellow-400 w-9 h-9 text-lg justify-center rounded-lg relative inline-flex items-center px-2 py-2 text-black focus:z-20 focus:outline-offset-0">
                &laquo;
              </a>
              <a href="#" onClick={()=>props.onPageChange("&lsaquo;")} className="bg-yellow-400 w-9 h-9 text-lg justify-center rounded-lg relative inline-flex items-center px-2 py-2 text-black focus:z-20 focus:outline-offset-0">
                &lsaquo;
              </a>
              {array.map((value, index) => (
            <a
              key={`${value}-${index}`}
              href="#"
              aria-current={value === props.page ? "page" : undefined}
              className={`w-9 h-9 justify-center relative rounded-lg z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                value === props.page
                  ? "bg-yellow-400 text-white "
                  : "bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => props.onPageChange(value)}
            >
              {value}
            </a>
          ))}
              
              <a href="#" onClick={()=>props.onPageChange("&rsaquo;")} className="bg-yellow-400 w-9 h-9 text-lg justify-center rounded-lg relative inline-flex items-center px-2 py-2 text-black focus:z-20 focus:outline-offset-0">
                &rsaquo;
              </a>
              <a href="#" onClick={()=>props.onPageChange("&raquo;")} className="bg-yellow-400 w-9 h-9 text-lg justify-center rounded-lg relative inline-flex items-center px-2 py-2 text-black focus:z-20 focus:outline-offset-0">
                &raquo;
              </a>
        </nav>
    </div>
  )
}

export default Pagination
