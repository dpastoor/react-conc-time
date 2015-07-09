/**
 *
 * Created by devin on 7/9/2015.
 */
import React from 'react';
import {LineChart} from 'react-d3';
class IndConcTime extends React.Component {

    render() {
        var styles = {
                padding: '25px'
            };
                return (
            <div className="col-md-4 col-offset-2" style={styles}>
                <LineChart
                    legend={this.props.legend}
                    data={this.props.data}
                    width={this.props.width}
                    height={this.props.height}
                    />
            </div>
        );
    }
}
export default IndConcTime;
