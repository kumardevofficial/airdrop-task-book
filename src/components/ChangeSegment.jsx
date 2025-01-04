const ChangeSegment = ({ changeSeg }) => {
  const changeSegment = (value) => {
    changeSeg(value);
  };

  return (
    <div className="w-[80%] m-auto bg-gray-400 flex list-none justify-between box-border px-10 py-3 mt-5 rounded-2xl font-bold">
      <li
        className="cursor-pointer"
        onClick={() => {
          changeSegment(0);
        }}
      >
        Airdrop
      </li>
      <li
        className="cursor-pointer"
        onClick={() => {
          changeSegment(1);
        }}
      >
        Galxe
      </li>
      <li
        className="cursor-pointer"
        onClick={() => {
          changeSegment(2);
        }}
      >
        Waitlist
      </li>
      <li
        className="cursor-pointer"
        onClick={() => {
          changeSegment(3);
        }}
      >
        ToDo
      </li>
    </div>
  );
};

export default ChangeSegment;
