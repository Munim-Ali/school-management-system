"use client";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { assignmentsData, examsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Assignment = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "subject",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teachers",
    accessor: "teacher",
    className: "hidden lg:table-cell",
  },
  {
    header: "Due Date",
    accessor: "date",
  },

  {
    header: "Actions",
    accessor: "actions",
  },
];
const AssignmentsList = () => {
  const renderRow = (item: Assignment) => (
    <tr
      key={item.id}
      className=" border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col ">
          <h3 className="font-semibold">{item.subject}</h3>
        </div>
      </td>
      <td className="">{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="">{item.dueDate}</td>

      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-sky">
              <Image src="/edit.png" alt="view" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-purpleMain">
              <Image src="/delete.png" alt="view" width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <>
      <div className="bg-white rounded-md p-4 flex-1 m-4 mt-0">
        {/* TOP */}
        <div className="flex items-center justify-between">
          <h1 className="hidden md:block text-lg font-semibold">All Exams</h1>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <TableSearch />
            <div className="flex items-center gap-4 self-end">
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellowMain">
                <Image src="/filter.png" width={14} height={14} alt="" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellowMain">
                <Image src="/sort.png" width={14} height={14} alt="" />
              </button>

              {role === "admin" && (
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellowMain">
                  <Image src="/plus.png" width={14} height={14} alt="" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* LIST */}
        <div className="">
          <Table
            columns={columns}
            renderRow={renderRow}
            data={assignmentsData}
          />
        </div>

        {/* PAGINATION */}
        <Pagination />
      </div>
    </>
  );
};

export default AssignmentsList;
