import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

const ProjectChart = () => {
  const fileUploadTrendOpts: ApexOptions = {
    chart: {
      height: 300,
      type: "line",
      toolbar: { show: false },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.4,
        gradientToColors: ["#A5C8FF"],
        inverseColors: false,
        opacityFrom: 0.6,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
    series: [
      {
        name: "File Uploads",
        data: [20, 30, 25, 40, 35, 50, 45, 60],
      },
    ],
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      labels: { style: { colors: "#6B7280", fontSize: '12px' } }
    },
    colors: ["#3B82F6"],
  };

  const reportsGenerationTrendsOpts: ApexOptions = {
    chart: {
      height: 300,
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: "50%",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        gradientToColors: ["#9B72FF"],
        opacityFrom: 0.9,
        opacityTo: 0.4,
        stops: [0, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: "Reports Generated",
        data: [10, 15, 20, 25, 30, 35, 40, 45],
      },
    ],
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      labels: { style: { colors: "#6B7280", fontSize: '12px' } }
    },
    colors: ["#8B5CF6"],
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* File Upload Chart */}
      <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-xl p-6 shadow-md">
        <div className="flex justify-between items-center mb-3">
          <div>
            <p className="text-xs text-gray-500">Volume of File Uploaded</p>
            <h2 className="text-2xl font-bold text-gray-900">File upload Trend</h2>
          </div>
          <select className="text-sm text-blue-600 rounded-full font-semibold bg-transparent">
            <option defaultChecked>Month</option>
            <option value="1">Week</option>
            <option value="2">Year</option>
          </select>
        </div>
        <ReactApexChart
          options={fileUploadTrendOpts}
          series={fileUploadTrendOpts.series}
          type="line"
          height={300}
        />
      </div>

      {/* Report Generation Chart */}
      <div className="bg-gradient-to-br from-white via-purple-50 to-indigo-100 rounded-xl p-6 shadow-md">
        <div className="flex justify-between items-center mb-3">
          <div>
            <p className="text-xs text-gray-500">Volume of file Generated</p>
            <h2 className="text-2xl font-bold text-gray-900">Reports Generation Trends</h2>
          </div>
          <select className="text-sm text-blue-600 rounded-full font-semibold bg-transparent">
            <option defaultChecked>Month</option>
            <option value="1">Week</option>
            <option value="2">Year</option>
          </select>
        </div>
        <ReactApexChart
          options={reportsGenerationTrendsOpts}
          series={reportsGenerationTrendsOpts.series}
          type="bar"
          height={300}
        />
      </div>
    </div>
  );
};

export default ProjectChart;
