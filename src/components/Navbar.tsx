import Image from "next/image";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* {Search Bar} */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" width={14} height={14} alt="search" />
        <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none"/>
      </div>

      {/* Icons and User */}

      <div className="flex items-center justify-end gap-6 w-full">
        <div className="rounded-full bg-white w-7 h-7 cursor-pointer flex items-center justify-center">
          <Image src="/message.png" width={20} height={20} alt="message" />
        </div>
        <div className="relative rounded-full bg-white w-7 h-7 cursor-pointer flex items-center justify-center">
          <Image
            src="/announcement.png"
            width={20}
            height={20}
            alt="message"
          />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">1</div>
        </div>
        <div className="flex flex-col">
            <span className="text-xs leading-3 font-medium">John Doe</span>
            <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image src="/avatar.png" width={36} height={36} alt="Avatar" className="rounded-full"/>
      </div>
    </div>
  );
};

export default Navbar;
