/**
 *
 * Created by devin on 7/9/2015.
 */
import React from 'react';
import {LineChart} from 'react-d3-components';
class IndConcTime extends React.Component {

    render() {
        return (
            <div className="col-md-4">
                <LineChart
                    legend={this.props.legend}
                    data={this.props.data}
                    width={this.props.width}
                    height={this.props.height}
                    margin={{top: 10, bottom: 50, left: 50, right: 10}}
                    xAxis={{innerTickSize: 6, label: "Time"}}
                    yAxis={{label: "Concentration"}}
                    />
            </div>
        );
    }
}
export default IndConcTime;
