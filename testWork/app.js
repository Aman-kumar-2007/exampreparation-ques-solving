// =============================
// TAB SWITCHING
// =============================

const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.content');


tabs.forEach(tab => {

  tab.addEventListener('click', () => {

    tabs.forEach(item => item.classList.remove('active'));
    tab.classList.add('active');

    const target = tab.dataset.tab;

    sections.forEach(section => {
      section.classList.remove('active-section');
    });

    document.getElementById(target)
      .classList.add('active-section');

  });

});


// =============================
// REWARD POINTS REALTIME UPDATE
// =============================

const points = document.getElementById('points');

let currentPoints = 1200;

setInterval(() => {

  currentPoints += Math.floor(Math.random() * 10);

  points.innerText = currentPoints;

}, 3000);


// =============================
// CHART DATA
// =============================

const datasets = {

  weekly: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    data: [12, 19, 10, 15, 22, 18, 25]
  },

  monthly: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    data: [120, 190, 300, 250]
  },

  yearly: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [500, 700, 900, 750, 850, 1000]
  }

};


// =============================
// LINE CHART
// =============================

const lineCtx = document.getElementById('lineChart');

const lineChart = new Chart(lineCtx, {

  type: 'line',

  data: {
    labels: datasets.weekly.labels,

    datasets: [{
      label: 'Workout Activity',
      data: datasets.weekly.data,
      borderColor: '#00e5ff',
      backgroundColor: 'rgba(0,229,255,0.2)',
      tension: 0.4,
      fill: true
    }]
  },

  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: 'white'
        }
      }
    },
    scales: {
      y: {
        ticks: {
          color: 'white'
        }
      },
      x: {
        ticks: {
          color: 'white'
        }
      }
    }
  }

});


// =============================
// DOUGHNUT CHART
// =============================

const doughnutCtx = document.getElementById('doughnutChart');

const doughnutChart = new Chart(doughnutCtx, {

  type: 'doughnut',

  data: {
    labels: ['Used', 'Remaining'],

    datasets: [{
      data: [70, 30],
      backgroundColor: ['#00e5ff', '#1e293b']
    }]
  },

  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: 'white'
        }
      }
    }
  }

});


// =============================
// DATA BUTTONS
// =============================

const dataButtons = document.querySelectorAll('.data-btn');


dataButtons.forEach(button => {

  button.addEventListener('click', () => {

    dataButtons.forEach(btn => {
      btn.classList.remove('active-data');
    });

    button.classList.add('active-data');

    const type = button.dataset.type;

    lineChart.data.labels = datasets[type].labels;

    lineChart.data.datasets[0].data = datasets[type].data;

    lineChart.update();

  });

});


// =============================
// THEME TOGGLE
// =============================

const themeToggle = document.getElementById('themeToggle');


themeToggle.addEventListener('click', () => {

  document.body.classList.toggle('light-mode');

});


// =============================
// REALTIME CHART UPDATE
// =============================

setInterval(() => {

  lineChart.data.datasets[0].data =
    lineChart.data.datasets[0].data.map(value => {
      return value + Math.floor(Math.random() * 5 - 2);
    });

  lineChart.update();

}, 5000);