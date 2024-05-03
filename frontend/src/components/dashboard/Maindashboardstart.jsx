import React from "react";
import Plot from "react-plotly.js";
function Maindashboardstart() {
  const xArraypie1 = [
    "High level ADHD",
    "Mood disorder ",
    "Mid level depression",
    "Low level anxiety",
  ];
  const yArraypie1 = [55, 49, 44, 24, 15];

  const layout = {
    autosize: true,
    width: 600,
    height: 300,
    margin: {
      l: 0,
      r: 0,
      b: 2,
      t: 2,
      pad: 0,
    },
  };

  const xArray2 = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
  const yArray2 = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];
  const data3 = [
    {
      x: xArray2,
      y: yArray2,
      mode: "lines",
      type: "scatter",
    },
  ];
  const layout3 = {
    xaxis: { range: [40, 160], title: "Square Meters" },
    yaxis: { range: [5, 16], title: "Range" },
    title: "Progress",
    autosize: true,
    width: 600,
    height: 300,
    margin: {
      l: 50,
      r: 50,
      b: 50,
      t: 50,
      pad: 0,
    },
  };

  // bar graph
  const xArray4 = [55, 49, 44, 24, 15];
  const yArray4 = [
    "High level ADHD",
    "Mood disorder ",
    "Mid level depression",
    "Low level anxiety",
  ];

  const data4 = [
    {
      x: xArray4,
      y: yArray4,
      type: "bar",
      orientation: "h",
      marker: { color: "rgba(255,0,0,0.6)" },
    },
  ];

  const layout4 = {
    title: "Your Data",
    autosize: true,
    width: 600,
    height: 300,
    margin: {
      l: 50,
      r: 50,
      b: 50,
      t: 50,
      pad: 0,
    },
  };
  const xArray6 = ["Italy", "France", "Spain", "USA", "Argentina"];
  const yArray6 = [55, 49, 44, 24, 15];

  const data6 = [
    {
      x: xArray6,
      y: yArray6,
      type: "bar",
      orientation: "v",
      marker: { color: "rgba(0,0,255)" },
    },
  ];

  const layout6 = {
    title: "World Health Range",
    autosize: true,
    width: 600,
    height: 300,
    margin: {
      l: 50,
      r: 50,
      b: 50,
      t: 50,
      pad: 0,
    },
  };

  return (
    <div class="maindashboard">
      <div class="item1" id="myPlot">
        <Plot
          data={[{ labels: xArraypie1, values: yArraypie1, hole: 0.5, type: "pie" }]}
          layout={layout}
        />
      </div>
      <div class="item2" id="myPlot2">
        <Plot data={data3} layout={layout3} />
      </div>
      <div class="item3" id="myPlot3">
        <Plot data={data4} layout={layout4} />
      </div>
      <div class="item5" id="myPlot4">
        <Plot data={data6} layout={layout6} />
      </div>
      <div class="item6" id="myPlot6"></div>
      <div class="item4">
        <div class="top"></div>
        <div class="upcomming">
          <h1 id="clinetname">UPCOMMING APPOINTMENT</h1>
          <div class="data">
            <div class="prof">
              <img src="../dashboardimages/hacker.png" alt="" />
              <div class="name">
                <h2 id="appointment">dr. abcd singh</h2>
                <p>emergency</p>
              </div>
            </div>
            <div class="date">tuesday, october 24</div>
          </div>
          <div class="data">
            <div class="prof">
              <img src="../dashboardimages/hacker.png" alt="" />
              <div class=" name">
                <h2 id="appointment">dr. abcd singh</h2>
                <p>emergency</p>
              </div>
            </div>
            <div class="date">tuesday, october 24</div>
          </div>
          <div class="data">
            <div class="prof">
              <img src="../dashboardimages/hacker.png" alt="" />
              <div class=" name">
                <h2 id="appointment">dr. abcd singh</h2>
                <p>emergency</p>
              </div>
            </div>
            <div class="date">tuesday, october 24</div>
          </div>
          <div class="data">
            <div class="prof">
              <img src="../dashboardimages/hacker.png" alt="" />
              <div class=" name">
                <h2 id="appointment">dr. abcd singh</h2>
                <p>emergency</p>
              </div>
            </div>
            <div class="date">tuesday, october 24</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maindashboardstart;
