import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoEarthOutline } from "react-icons/io5";

const DropListBox = ({
  index,
  itemData,
  popUpDisplay,
  popUpDis,
  setShowPopup,
  taskArray,
}) => {
  const [expand, setExpand] = useState(false);

  const showDiscripton = (value, tlink) => {
    setShowPopup({
      thepopupu: true,
      discription: value,
      popUpTaskLink: tlink,
    });
  };

  const toggleExpand = () => {
    setExpand((prev) => !prev);
  };

  return (
    <>
      <div
        key={index}
        className=" rounded-2xl  w-[16rem] flex flex-col items-center gap-y-3 bg-gray-300 py-3 shadow-lg shadow-black heading-text-shadow"
      >
        {/* Project Name */}
        <div className="font-bold text-2xl text-center">
          {itemData.projectName}
        </div>

        {/* Project Logo */}
        <div>
          <img
            src={itemData.projectImage}
            alt={itemData.projectName}
            className="w-10 h-10"
          />
        </div>

        {/* Icons */}
        <div className="w-[95%] h-6 flex justify-center gap-x-4 text-2xl ">
          <a
            href={itemData.xlink}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <FaXTwitter />
          </a>
          <a
            href={itemData.discordLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <FaDiscord />
          </a>
          <a
            href={itemData.telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <FaTelegramPlane />
          </a>
          <a
            href={itemData.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <IoEarthOutline />
          </a>
        </div>

        {/* Expandable Content */}
        <div
          className={`w-[95%] px-2 bg-gray-300 font-bold rounded-md box-border overflow-hidden transition-all duration-700 ease-in-out ${
            expand ? "max-h-[30rem] pt-2 pb-3" : "max-h-[5rem] pt-0 pb-0"
          }`}
        >
          {/* "More.." Button at Top */}
          {!expand && (
            <div
              className="cursor-pointer text-center py-1 bg-gray-300"
              onClick={toggleExpand}
            >
              More..
            </div>
          )}

          {/* Expanded Content */}
          {expand && (
            <div className="mt-2 flex flex-wrap gap-x-2 gap-3 text-sm ">
              {taskArray.map((task, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className="shadow-md shadow-black bg-gray-200 p-2 rounded-xl cursor-pointer"
                      onClick={() => {
                        showDiscripton(task.taskDescription, task.taskLink);
                      }}
                      title={task.taskDescription}
                    >
                      {task.taskName}
                      {/* <a
                        href={task.taskLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        
                      </a> */}
                    </div>
                  </>
                );
              })}
            </div>
          )}

          {/* "Less.." Button at Bottom */}
          {expand && (
            <div
              className="cursor-pointer text-center mt-auto py-1 "
              onClick={toggleExpand}
            >
              Less..
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DropListBox;
