import { h, Fragment } from "preact";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "preact/hooks";
import axios from "axios";

const AnalysisComponent = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  let callDate: string[] = [];
  let callSum: number[] = [];

  const myChart = async () => {
    await axios
      .get(`${import.meta.env.SNOWPACK_PUBLIC_API_URL}/analysis`)
      .then((res) => {
        //console.log(res.data.result);
        for (const dataObj of res.data.result) {
          callDate.push(dataObj.date);
          callSum.push(parseInt(dataObj.calls));
        }

        setChartData({
          labels: callDate,
          datasets: [
            {
              label: "CALLS OVER TIME",
              data: callSum,
              fill: false,
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgba(255, 99, 132, 0.2)",
            },
          ],
        });

        setChartOptions({
          scales: {
            y: {
              title: {
                display: true,
                text: "Calls",
              },
            },
            x: {
              title: {
                display: true,
                text: "Date Called",
              },
            },
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });

    //console.log(callDate);
    //console.log(callSum);
  };

  useEffect(() => {
    myChart();
  }, []);

  return (
    <Fragment>
      <div class="box" id="box">
        <Bar type="bar" data={chartData} options={chartOptions}></Bar>
      </div>
    </Fragment>
  );
};

export { AnalysisComponent };
