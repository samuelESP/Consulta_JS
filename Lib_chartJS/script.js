
const GraphIncome = document.getElementById('myChart');
let teste = 5.5;
let Income = new Chart(GraphIncome , {
  type: 'bar',
  data: {
    labels: ['Jan','Fev','Mar','Apr','May'],
    datasets: [{
      label: "USD per thousand",
      data: [1,teste,3,4,teste],
      backgroundColor: ['#d1af52'],
    }]
  },
  options: {
    plugins: {
    }
  }
  
})
console.log(Income.options.plugins.legend.display);//false