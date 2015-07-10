import React from 'react';
import IndConcTime from './IndConcTime';
import _ from 'lodash';

class ConcTimeGroup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					values: [{x:0,y:0},{x:0.25,y:8.61},{x:0.5,y:19.44},{x:1,y:34.01},{x:2,y:30.23},{x:3,y:31.3},
						{x:4,y:24.98},{x:6,y:23.38},{x:8,y:23.51},{x:12,y:14.68},{x:16,y:9.07},{x:24,y:5.3}] ,
					label: "ID1",
					color: "#ff7f0e"
				},
				{
					values:[{"x":0,"y":0},{"x":0.25,"y":30.4},{"x":0.5,"y":47.63},{"x":1,"y":64.43},{"x":2,"y":100.18},{"x":3,"y":92.56},{"x":4,"y":65.27},
						{"x":6,"y":49.26},{"x":8,"y":60.29},{"x":12,"y":44.25},{"x":16,"y":41.85},{"x":24,"y":32.9}] ,
					label: "ID2",
					color: "#2ca02c"
				},
				{
					values:[{"x":0,"y":0},{"x":0.25,"y":30.4},{"x":0.5,"y":47.63},{"x":1,"y":64.43},{"x":2,"y":100.18},{"x":3,"y":92.56},{"x":4,"y":65.27},
						{"x":6,"y":49.26},{"x":8,"y":60.29},{"x":12,"y":44.25},{"x":16,"y":41.85},{"x":24,"y":32.9}] ,
					label: "ID3",
					color: "#2ca02c"
				},
				{
					values:[{"x":0,"y":0},{"x":0.25,"y":30.4},{"x":0.5,"y":47.63},{"x":1,"y":64.43},{"x":2,"y":100.18},{"x":3,"y":92.56},{"x":4,"y":65.27},
						{"x":6,"y":49.26},{"x":8,"y":60.29},{"x":12,"y":44.25},{"x":16,"y":41.85},{"x":24,"y":32.9}] ,
					label: "ID4",
					color: "#2ca02c"
				},
				{
					values:[{"x":0,"y":0},{"x":0.25,"y":30.4},{"x":0.5,"y":47.63},{"x":1,"y":64.43},{"x":2,"y":100.18},{"x":3,"y":92.56},{"x":4,"y":65.27},
						{"x":6,"y":49.26},{"x":8,"y":60.29},{"x":12,"y":44.25},{"x":16,"y":41.85},{"x":24,"y":32.9}] ,
					label: "ID5",
					color: "#2ca02c"
				},
				{
					values:[{"x":0,"y":0},{"x":0.25,"y":31.4},{"x":0.5,"y":42.63},{"x":1,"y":69.43},{"x":2,"y":91.18},{"x":3,"y":84.56},{"x":4,"y":66.27},
						{"x":6,"y":52.26},{"x":8,"y":62.29},{"x":12,"y":41.25},{"x":16,"y":38.85},{"x":24,"y":31.9}] ,
					label: "ID6",
					color: "#4ecdc4"
				}
			]
		};
	}
	render() {
		return (
            <div>
				<IndConcTime data={this.state.data} legend={true} width={1000} height={600} />
			</div>
		);
	}
}
export default ConcTimeGroup;
