'use strict';

// resultChartLineSingle
// - Component which is used for showing results in a single line chart.
// - Dependencies (components and directives): *none*.
app.component('resultChartLineSingle', {
    templateUrl: 'result-chart-line-single/result-chart-line-single.template.html',
    controller: 'ResultChartLineSingleCtrl',
    bindings: { questionindex: '=' }
});
