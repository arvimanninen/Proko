'use strict';
// dynamicChartRow
// - Creates dynamic chart row based on chart count per row (chartsperrow),
//   chart component names (chartcomponents) and optional first chart component name (firstchartcomponent).
// - Example: chartsperrow = 3, chartcomponents = [A, B, C, D, E, F, G], firstchartcomponent = H
// - dynamic-chart-row (dynamicChartRow in JS) HTML element is replaced with elements:
//   H A B
//   C D E
//   F G
// - Every element gets questionindex HTML attribute based on their index number,
//   so in example above, attributes are H questionindex = 0, A questionindex = 1 etc.
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
            // - Iterates all rows
            for (var i = 0; i < rowCount; i++) {
                // - Row element creation and setting correct class attribute to the row element
                var rowElement = document.createElement("div");
                rowElement.setAttribute("class", "row results-div");
                // - Iterates all charts that will be added to current row
                for (var j = 0; j < chartsPerRow; j++) {
                    if (chartIndex < chartComponents.length) {
                        // - Chart element creation based on component name
                        var chartElement = document.createElement(chartComponents[chartIndex]);
                        // - If there is no optional first chart component injected, 
                        //   or current chart component isn't first in chartComponents,
                        //   questionindex-attribute is set to chartElement, using chartIndex as
                        //   a attribute value.
                        if (firstChartComponent == null || firstChartInArray === false) {
                            chartElement.setAttribute("questionindex", chartIndex);
                            chartIndex++;
                        } else {
                        // - Else, first item in chartComponents-array is removed.
                            chartComponents.shift();
                        }
                        // - chartElement is added to rowElement as its child
                        rowElement.appendChild(chartElement);
                        // - firstChartInArray is always false after the first
                        //   row iteration
                        firstChartInArray = false;
                    } else {
                        break;
                    }
                }
                // Compiles rowElement
                $compile(rowElement)($scope);
                rowElements.push(rowElement);
            }
            // - After all rows with child chart elements (rowElements array) are created and compiled,
            //   dynamic-chart-row HTML element is replaced with rowElements
            $element.replaceWith(rowElements);
        }
    };
});