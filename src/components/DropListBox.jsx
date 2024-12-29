const DropListBox = ({ itemData, itemIndex }) => {
  return (
    <>
      <div className="border-2 rounded-2xl border-black w-[12rem] h-[12rem] flex flex-col items-center justify-center gap-y-3 bg-blue-400">
        <div className="font-bold text-2xl heading-text-shadow">
          {itemData.projectName}
        </div>
        <div>
          <img
            src={itemData.logoUrl}
            alt={itemData.projectName}
            className="w-10 h-10"
          />
        </div>

        <div className="font-bold bg-green-300 w-[5rem] text-center rounded-2xl cursor-pointer ">
          {itemData.projectName}
        </div>

        <div className="font-bold bg-green-300 w-[5rem] text-center rounded-2xl cursor-pointer">
          <a href={itemData.postUrl} target="_blank" rel="noopener noreferrer">
            Open
          </a>
        </div>
      </div>
    </>
  );
};

export default DropListBox;
