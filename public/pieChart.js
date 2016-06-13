var PieChart = function(hero, data){

  var container = document.getElementById('piechart');

  var chart = new Highcharts.Chart({
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 5
      },
      renderTo: container
    },
    title: {
      text: hero
    },
    series: [
      {
        name: "No. of Comics appeared in:",
        data: data
      }
    ]
  })

}