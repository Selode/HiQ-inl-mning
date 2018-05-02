import React, { Component } from 'react';
// Import React FilePond
import FileDrop from './components/FileDrop';
import Output from './components/Output';
import TextOutput from './components/TextOutput';

// Our app
class App extends Component {
    

    render() {
        return (
            // <Output />
            // <TextOutput />
            // <FileLoader />
            <div className="App">
              <FileDrop/>

            </div>
        );
    }
}
export default App;
