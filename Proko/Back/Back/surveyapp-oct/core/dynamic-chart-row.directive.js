// TODO: TEST AND ENABLE
'use strict';

app.directive('dynamicChartRow', function ($compile) {
    return {
        restrict: 'E',
        scope: {
            chartsperrow: '=chartsperrow',
            chartcomponents: '&chartcomponents',
            firstchartcomponent: '=firstchartcomponent'
        },
        link: function ($scope, $element) {
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

            console.log("dynamic-chart-row started!");
            var chartsPerRow = $scope.chartsperrow; // TODO: angular.isNumber
            var chartComponents = angular.isFunction($scope.chartcomponents) ? $scope.chartcomponents() : [];
            var firstChartComponent = $scope.firstchartcomponent;
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
                // $compile(rowElement)($scope);
                rowElements.push(rowElement);
            }
            $element.replaceWith(rowElements);
        }
    };
});