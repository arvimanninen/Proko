// TODO: TEST AND ENABLE
'use strict';
// dynamicChartRow
// - Creates dynamic chart row based on chart count per row (chartsperrow),
//   chart component names (chartcomponents) and optional first chart component name (firstchartcomponent).
// - Example: chartsperrow = 3, chartcomponents = [A, B, C, D, E, F, G], firstchartcomponent = H
// - dynamicChartRow directive is replaced with components:
//   H A B
//   C D E
//   F G
// @param {Number} chartsperrow
// @param {Array<String>} chartcomponents
// @param {String} firstchartcomponent
app.directive('dynamicChartRow', function ($compile) {
    return {
        restrict: 'E',
        scope: {
            chartsperrow: '=chartsperrow',
            chartcomponents: '&chartcomponents',
            firstchartcomponent: '=firstchartcomponent'
        },
        link: function ($scope, $element) {

            // calculateRowCount()
            // - Function calculates correct row count based on component count (componentCount) and
            //   target number of components in row, and returns the row count (rowCount).
            //   @param {Number} componentCount
            //   @param {Number} componentsPerRow
            //   @return {Number} rowCount
            var calculateRowCount = function (componentCount, componentsPerRow) {
                var rowCount = 1;
                if (componentCount <= componentsPerRow) {
                    return rowCount;
                } else {
                    rowCount = componentCount / componentsPerRow;
                }
                console.log("ResultsCtrl.calculateRowCount().(rowCount % componentsPerRow" + rowCount % componentsPerRow);
                if (rowCount % componentsPerRow > 0) {
                    var roundedRowCount = Math.round(rowCount);
                    if (roundedRowCount - rowCount < 0) {
                        rowCount = roundedRowCount + 1;
                    } else {
                        rowCount = roundedRowCount;
                    }
                }
                console.log("rowCount: " + rowCount);
                return rowCount;
            };
            
            var chartsPerRow = $scope.chartsperrow; // TODO: angular.isNumber
            var chartComponents = angular.isFunction($scope.chartcomponents) ? $scope.chartcomponents() : [];
            var firstChartComponent = $scope.firstchartcomponent;
            // If firstChartComponent is not null (loose definition - null, undefined, NaN etc),
            // firstChartComponent is added as first component in chartComponents
            if (firstChartComponent != null) {
                chartComponents.unshift(firstChartComponent);
            }
            console.log("dynamic-chart-row.chartsPerRow: " + chartsPerRow);
            console.log("dynamic-chart-row.chartComponents.length: " + chartComponents.length);

            var rowCount = calculateRowCount(chartComponents.length, chartsPerRow);

            console.log("dynamic-chart-row.rowCount: " + rowCount);
            
            for (var k = 0; k < chartComponents.length; k++) {
                console.log("dynamic-chart-row.chartComponents[" + k + "]:" + chartComponents[k]);
            }

            var chartIndex = 0;
            var rowElements = [];
            var firstChartInArray = true;
            // row element creation starts
            for (var i = 0; i < rowCount; i++) {
                var rowElement = document.createElement("div");
                rowElement.setAttribute("class", "row results-div");
                for (var j = 0; j < chartsPerRow; j++) {
                    if (chartIndex < chartComponents.length) {
                        var chartElement = document.createElement(chartComponents[chartIndex]);
                        // SIC! == ===
                        if (firstChartComponent == null || firstChartInArray === false) {
                            chartElement.setAttribute("questionindex", chartIndex);
                            chartIndex++;
                        } else {
                            chartComponents.shift();
                        }
                        rowElement.appendChild(chartElement);
                        firstChartInArray = false;
                    } else {
                        break;
                    }
                }
                $compile(rowElement)($scope);
                rowElements.push(rowElement);
            }
            $element.replaceWith(rowElements);
        }
    };
});