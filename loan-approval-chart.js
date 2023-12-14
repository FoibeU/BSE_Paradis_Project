const data = [
  { month: "Jan", value: 5000 },
  { month: "Feb", value: 7000 },
  { month: "Mar", value: 10000 },
];

const chartContainer = document.getElementById("chart");

const chart = new Chart(chartContainer, {
  type: "line",
  data: {
    labels: data.map(d => d.month),
    datasets: [
      {
        label: "Loan Approvals",
        data: data.map(d => d.value),
        borderColor: "#007bff",
        pointBackgroundColor: "#007bff",
      },
    ],
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
  },
});
