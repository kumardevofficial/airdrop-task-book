const PopUpBox = ({ itemData, setShowPopup }) => {
  const showDiscripton = () => {
    setShowPopup({
      [itemData.thepopupu]: false,
      [itemData.discription]: "",
    });
    console.log(itemData);
  };

  return (
    <div className="flex justify-center items-center">
      {/* Button to trigger pop-up visibility */}
      {/* <button
        onClick={togglePopup}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-5"
      >
        {showPopup ? "Hide Popup" : "Show Popup"}
      </button> */}

      {/* Pop-up Box */}
      {itemData.thepopupu && (
        <div className=" fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-300 p-6 rounded-lg shadow-lg w-64">
            <h2 className="text-2xl font-bold ">Task Discription</h2>
            <p className="mt-2  font-bold">{itemData.discription}</p>
            <div className="flex gap-x-6">
              <button
                onClick={() => showDiscripton("")}
                className="mt-4 bg-gray-600 text-white py-1 px-4 rounded-lg"
              >
                Close
              </button>
              <button
                // onClick={showDiscripton}
                className="mt-4 bg-gray-200 font-bold text-black py-1 px-4 rounded-lg"
              >
                Open Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUpBox;
