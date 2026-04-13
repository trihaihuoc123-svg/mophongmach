let ctx = document.getElementById('chart');

let data = {
  labels: [],
  datasets: [{
    label: 'Dòng (A)',
    data: []
  }]
};

let chart = new Chart(ctx, {
  type: 'line',
  data: data
});

setInterval(() => {
  let val = Math.random() * 10;

  data.labels.push("");
  data.datasets[0].data.push(val);

  if (data.labels.length > 20) {
    data.labels.shift();
    data.datasets[0].data.shift();
  }

  chart.update();
}, 1000);
