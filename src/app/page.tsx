"use client";
import { useState } from "react";
import { getLength, getUsers } from "./api/users";
import Table from "./components/table";
import Pagination from "./components/pagination";
import SelectLimits from "./components/selectLimits";

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(5);

  const totalPage: number = Math.ceil(getLength() / limit);

  let pageNo = page; 
  if (page <= totalPage){
    pageNo = page;
  } else {
    setPage(totalPage);
    pageNo = page;
  }

  const handlePageChange = (value: number | string) => {
    switch (value) {
      case "&laquo;":
      case "... ":
        setPage(1);
        break;
      case "&lsaquo;":
        setPage((prev) => Math.max(prev - 1, 1));
        break;
      case "&raquo;":
      case " ...":
        setPage(totalPage);
        break;
      case "&rsaquo;":
        setPage((prev) => Math.min(prev + 1, totalPage));
        break;
      default:
        const newPage = parseInt(value as string);
        if (!isNaN(newPage)) {
          setPage(newPage);
        }
        break;
    }
  };

  return (
    <div className="flex flex-col p-5">
      {/* Render Table with paginated users */}
      <Table users={getUsers({ page, limit })} />
      <div className="flex justify-end">
        <SelectLimits onLimitChange={setLimit}/>
        <Pagination
          totalPage={totalPage}
          page={pageNo}
          limit={limit}
          siblings={1}
          onPageChange={handlePageChange}
        />
      </div>

    </div>
  );
}
