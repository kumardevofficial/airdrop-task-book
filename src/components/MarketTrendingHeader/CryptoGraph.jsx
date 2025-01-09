import ReactApexChart from "react-apexcharts";

const CryptoGraph = ({ isUpward }) => {
  const series = [
    {
      data: isUpward ? [1, 3, 6, 9, 15] : [15, 12, 9, 6, 3], // Example data
    },
  ];

  const options = {
    chart: {
      type: "line",
      height: 100,
      sparkline: { enabled: true }, // Compact chart
    },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: [isUpward ? "#00C853" : "#D50000"], // Green for upward, red for downward
    },
    tooltip: { enabled: false },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={100}
    />
  );
};

export default CryptoGraph;
