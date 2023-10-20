import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const option = {
      tooltip: {
        trigger: "item",
        formatter: "{b}: {c} ({d}%)",
      },
      legend: {
        orient: "vertical",
        right: 10,
        top: "35%",
        itemWidth: 25,
        itemHeight: 25,
      },
      color: ["#5589c7", "#87a65f", "#757c7c", "#c38181"],
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["30%", "60%"],
          avoidLabelOverlap: false,
          label: {
            position: "inner",
            fontSize: 10,
            color: "#fff",
            formatter: "{c}",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 400, name: "In Transit" },
            { value: 400, name: "Out for delivery" },
            { value: 700, name: "Consignment Booked" },
            { value: 400, name: "Delivered successfully" },
          ],
        },
      ],
    };

    // Set the chart options
    myChart.setOption(option);

    const resizeChart = () => {
      myChart.resize(); // Resize the chart when the window size changes
    };

    // Use ECharts' responsive option to adapt the legend placement
    const responsiveOption = {
      baseOption: {
        legend: {
          right: 10, // Default right position
          top: "35%",
        },
      },
      media: [
        {
          query: {
            maxWidth: 768, // Adjust the max width as needed
          },
          option: {
            legend: {
              right: 0, // Change right position for smaller screens
            },
          },
        },
      ],
    };

    // Apply the responsive option
    myChart.setOption(responsiveOption);

    // Resize the chart when the window is resized
    window.addEventListener("resize", resizeChart);

    // Clean up the chart and event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", resizeChart);
      myChart.dispose();
    };
  }, []);

  return (
    <div
      ref={chartRef}
      style={{
        height: "400px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
      }}
    />
  );
};

export default PieChart;
