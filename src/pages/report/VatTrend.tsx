// pages/report/VatTrend.tsx
import React from "react";
import ReactApexChart from "react-apexcharts";

const VatTrend: React.FC = () => {
  // Adjusted data for a more realistic VAT trend
  const spilineAreaOpts = {
    series: [
      {
        name: "VAT Trend",
        data: [12000, 15000, 13000, 18000, 20000, 22000, 19000, 25000, 27000, 30000], // Adjusted for realistic VAT values
      },
    ],
    options: {
      chart: {
        height: 300, // Adjusted height to match the image's proportions
        type: "area",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#3B82F6"], // Blue line color from the image
        width: 2, // Thinner line to match the image
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.6, // Slightly reduced opacity for a softer effect
          opacityTo: 0.1,
          stops: [0, 90, 100],
          colorStops: [
            {
              offset: 0,
              color: "#93C5FD", // Light blue start
              opacity: 0.6,
            },
            {
              offset: 100,
              color: "transparent", // Fade to transparent
              opacity: 0.1,
            },
          ],
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
        labels: {
          style: {
            colors: "#9CA3AF", // Softer gray for x-axis labels
            fontSize: "12px", // Smaller font to match the image
          },
        },
      },
      yaxis: {
        title: {
          text: "Amount ($)",
          style: {
            color: "#9CA3AF",
            fontSize: "12px",
          },
        },
        labels: {
          formatter: (value: number) => `$${value / 1000}k`, // Format as $Xk for readability
          style: {
            colors: "#9CA3AF", // Softer gray for y-axis labels
            fontSize: "12px",
          },
        },
      },
      grid: {
        show: false, // No grid lines, as per the image
      },
      tooltip: {
        y: {
          formatter: (value: number) => `$${value.toLocaleString()}`, // Tooltip shows full amount
        },
      },
    },
  };

  return (
    <div >
      <div className="card">
        <div className="card-header flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-gray-500">VAT Trends</p>
            <h4 className="card-title text-lg font-bold text-gray-800">
              VAT Trend (NET)
            </h4>
            <p className="text-xs text-gray-500">This Month trend</p>
          </div>
          <div>
            <select className="form-select form-select-sm bg-transparent border-0 text-gray-700 focus:ring-0 text-sm">
              <option defaultChecked>Month</option>
              <option value="1">Last Month</option>
              <option value="2">This Year</option>
            </select>
          </div>
        </div>
        <div className="p-4">
          <ReactApexChart
            className="apex-charts"
            options={spilineAreaOpts.options}
            series={spilineAreaOpts.series}
            height={300}
            type="area"
          />
        </div>
      </div>
    </div>
  );
};

export default VatTrend;