import React, { Component } from 'react';
import FileViewer from 'react-file-viewer'


class TextOutput extends Component {

	constructor(props) {
		super(props);

		this.state = {
			text: ""
		};
	}

	render() {
		return (
			<FileViewer 
				fileType="jpg"
                filePath="/home/selode/Downloads/IMG_20180413_174859.jpg"
                onError={this.onError}
                />
		);
	}

	onError(e) {
    	console.logError(e, 'error in file-viewer');
  }
 
}

export default TextOutput;

