import React, { Component } from 'react';

import Dropzone from 'react-dropzone';

class FlieLoader extends Component {


  uploadFile(files){
	var file = document.getElementById('file').files[0];
    var reader  = new FileReader();
    // it's onload event and you forgot (parameters)
    reader.onload = function(e)  {
        var image = document.createElement("img");
        // the result image data
        image.src = e.target.result;
        document.body.appendChild(image);
     }
     // you have to declare the file loading
     reader.readAsDataURL(file);
	}
  

  

  render() {
  	return(
  		<div className="dropzone">
  		<Dropzone 
  		accept=".md, .txt, .rtf, .file" 
  		onDrop={this.uploadFile.bind(this)}>

  			<p>Drop your textfiles(.md, .txt, .rtf, .file) here</p>


  		</Dropzone>
  		</div>
  		



  		);
    }
}

    export default FlieLoader;