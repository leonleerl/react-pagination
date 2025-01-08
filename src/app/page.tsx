"use client";
import { useState } from "react";
import { getLength } from "./api/users";
import Table from "./components/table";
import Pagination from "./components/pagination";
import SelectLimits from "./components/selectLimits";
import { getQuestions } from "./api/questions";

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(5);

  const [data, setData] = useState<Question[]>([
    {
      name: "Question01_2024",
      category: "Geometry Questions",
      difficulty: "Difficult",
    },
    {
      name: "Question02_2024",
      category: "Algebra Questions",
      difficulty: "Difficult",
    },
    {
      name: "Question03_2024",
      category: "Arithmetic Questions",
      difficulty: "Easy",
    },
    {
      name: "Question04_2024",
      category: "Statistics Questions",
      difficulty: "Medium",
    },
    {
      name: "Question05_2024",
      category: "Calculus Questions",
      difficulty: "Difficult",
    },
    {
      name: "Question06_2024",
      category: "Calculus Questions",
      difficulty: "Difficult",
    },
    {
      name: "Question07_2024",
      category: "Calculus Questions",
      difficulty: "Easy",
    },
    {
      name: "Question08_2024",
      category: "Calculus Questions",
      difficulty: "Difficult",
    },
    {
      name: "Question09_2024",
      category: "Calculus Questions",
      difficulty: "Difficult",
    },
    {
      name: "Question10_2024",
      category: "Calculus Questions",
      difficulty: "Easy",
    },
    {
      name: "Question11_2024",
      category: "Calculus Questions",
      difficulty: "Medium",
    },
    {
      name: "Question12_2024",
      category: "Calculus Questions",
      difficulty: "Difficult",
    },
  ]);

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
      <Table questions={getQuestions({ page, limit })} limit={limit} />
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
