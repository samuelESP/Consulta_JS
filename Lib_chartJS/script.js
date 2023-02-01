/*
const Line = document.getElementById('line');
const Bar = document.getElementById('bar');

Line.addEventListener('click', LineChange);
Bar.addEventListener('click', BarChange);
function LineChange() {
  const Tline = 'line';
  Income.config.type = Tline;
  Income.update();

}
function BarChange() {
  const Tbar = 'bar';
  Income.config.type = Tbar;
  Income.update();
}

const m1 = ['J','F','M'];
const m2 = ['A','M']; */

const GraphIncome = document.getElementById('myChart');
let teste = 5.5;
let Income = new Chart(GraphIncome , {
  type: 'bar',
  data: {
    labels: ['Jan','Fev','Mar'],
    datasets: [{
      label: "USD per thousand",
      data: [1,2,3],
      backgroundColor: ['#d1af52'],
    }]
  },
  options: {
    plugins: {
      legend: {
        position: 'bottom',
        align:'start',
      }
      
    }
  }
})

console.log(Income.options.plugins.legend.display);



