'use strict';
// resultChartPie
// - Component which is used for showing results in a donut chart.
// - Dependencies (components and directives): *none*.
// TODO: CHANGE WORD "pie" IN COMPONENT/TEMPLATE/CTRL TO "donut".
app.component('resultChartPie', {
    templateUrl: 'result-chart-pie/result-chart-pie.template.html',
    controller: 'ResultChartPieCtrl',
    bindings: { questionindex: '=' }
});
