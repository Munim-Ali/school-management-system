import Image from "next/image";
import React from "react";

type Props = {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendence"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
};

const FormModal = ({ table, type, data, id }: Props) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-yellowMain"
      : type === "update"
      ? "bg-sky"
      : "bg-purpleMain";
  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
      >
        <Image src={`/${type}.png`} width={16} height={16} alt="" />
      </button>
    </>
  );
};

export default FormModal;
