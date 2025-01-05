import React from 'react'
import { returnPaginationRange } from '../utils/appUtils'

function Pagination(props:PaginationProps) {
  const array : number[] = returnPaginationRange(props)
  return (
    <div>
        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        <a href="#" onClick={()=>props.onPageChange("&laquo;")} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              &laquo;
            </a>
            <a href="#" onClick={()=>props.onPageChange("&lsaquo;")} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              &lsaquo;
            </a>
            {array.map((value, index) => (
          <a
            key={`${value}-${index}`} // Ensure unique keys
            href="#"
            aria-current={value === props.page ? "page" : undefined}
            className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
              value === props.page
                ? "bg-indigo-600 text-white focus-visible:outline-indigo-600"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => props.onPageChange(value)}
          >
            {value}
          </a>
        ))}
            
            <a href="#" onClick={()=>props.onPageChange("&rsaquo;")} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              &rsaquo;
            </a>
            <a href="#" onClick={()=>props.onPageChange("&raquo;")} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              &raquo;
            </a>
        </nav>
    </div>
  )
}

export default Pagination
