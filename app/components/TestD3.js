/**
 * Created by devin on 7/10/2015.
 */

// note on why it seems to work now:
// the 'trick' was that nv.addGraph takes a callback, which was not fired
// even though the parent 'renderChart' function was, so instead I took out
// the chart creation and then called loadChart so that will create the initial chart
// then on subsequent data changes chart is loaded directly with loadChart.
// May NOT actually even need the call to nv.addGraph?
import React from 'react';
import nv from 'nvd3';
import _ from 'lodash';
class TestD3 extends React.Component {
    componentDidMount(){
        let data = _.map(this.props.data, (d) => {
            {/* nvd3 uses 'key' rather than 'label' for identification of different ids*/}
            d.key = d.label;
            return d;
        });
        console.log(data);
        nv.addGraph(loadChart(data));

        function loadChart(dat) {

            var chart = nv.models.lineChart();
            var fitScreen = false;
            var width = 600;
            var height = 300;
            var zoom = 1;
            var data = dat;


            chart.useInteractiveGuideline(true);
            chart.xAxis
                .axisLabel('Time (hours)')
                .tickFormat(d3.format(',r'));
            chart.yAxis
                .axisLabel('Concentration (ng/mL)')
                .tickFormat(d3.format(',.2f'));
            d3.select('#chart svg')
                .attr('perserveAspectRatio', 'xMinYMid')
                .attr('width', width)
                .attr('height', height)
                .data([data]);
            setChartViewBox();
            resizeChart();
            nv.utils.windowResize(resizeChart);
            d3.select('#zoomIn').on('click', zoomIn);
            d3.select('#zoomOut').on('click', zoomOut);
            function setChartViewBox() {
                var w = width * zoom,
                    h = height * zoom;
                chart
                    .width(w)
                    .height(h);
                d3.select('#chart svg')
                    .attr('viewBox', '0 0 ' + w + ' ' + h)
                    .call(chart);
            }

            function zoomOut() {
                zoom += 0.25;
                setChartViewBox();
            }

            function zoomIn() {
                if (zoom <= 0.5) return;
                zoom -= 0.25;
                setChartViewBox();
            }

            // This resize simply sets the SVG's dimensions, without a need to recall the chart code
            // Resizing because of the viewbox and perserveAspectRatio settings
            // This scales the interior of the chart unlike the above
            function resizeChart() {
                var container = d3.select('#chart');
                var svg = container.select('svg');
                if (fitScreen) {
                    // resize based on container's width AND HEIGHT
                    var windowSize = nv.utils.windowSize();
                    svg.attr("width", windowSize.width);
                    svg.attr("height", windowSize.height);
                } else {
                    // resize based on container's width
                    var aspect = chart.width() / chart.height();
                    var targetWidth = parseInt(container.style('width'));
                    svg.attr("width", targetWidth);
                    svg.attr("height", Math.round(targetWidth / aspect));
                }
            }

            return chart;
        }
    }
  render() {
      return (
          <div id="chart">
              <svg></svg>
          </div>
      );
  }
}
export default TestD3;

