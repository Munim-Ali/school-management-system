import React from "react";

type Props = {};

const Announcements = (props: Props) => {
  return (
    <>
      <div className="bg-white p-4 rounded">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold my-4">Announcements</h1>
          <span className="text-xs text-gray-400">view All</span>
        </div>

        <div className="flex flex-col gap-4">
            <div className="bg-skyLight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem ipsum dolor sit</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md p-1">2025-02-01</span>
                    
                </div>
                <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem libero quisquam amet laudantium corrupti quidem!</p>
            </div>
        </div>
        <div className="flex flex-col gap-4">
            <div className="bg-purpleLight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem ipsum dolor sit</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md p-1">2025-02-01</span>
                    
                </div>
                <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem libero quisquam amet laudantium corrupti quidem!</p>
            </div>
        </div>
        <div className="flex flex-col gap-4">
            <div className="bg-yellowLight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem ipsum dolor sit</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md p-1">2025-02-01</span>
                    
                </div>
                <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem libero quisquam amet laudantium corrupti quidem!</p>
            </div>
        </div>

      </div>
    </>
  );
};

export default Announcements;
