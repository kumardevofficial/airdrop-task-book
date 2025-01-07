import React, { useState } from "react";

const ReportPopup = ({ reportPopup }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [message, setMessage] = useState("");

  const { isOpen, setIsOpen } = reportPopup;

  const reportOptions = [
    "Scam project",
    "Phishing Link",
    "Wrong Information",
    "Hacked",
  ];

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Options:", selectedOptions);
    console.log("Message:", message);

    // Add your API submission logic here
    setIsOpen(false);
    setSelectedOptions([]);
    setMessage("");
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Report Issue</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                {reportOptions.map((option) => (
                  <label
                    key={option}
                    className="flex items-center mb-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedOptions.includes(option)}
                      onChange={() => handleCheckboxChange(option)}
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div className="mb-4">
                <textarea
                  className="w-full border border-gray-300 rounded p-2"
                  rows="4"
                  placeholder="Add your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ReportPopup;
