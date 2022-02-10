
import './App.css';
import React from 'react'
import Class from './Class';
import Function from './Function';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      Function: false,
      Class: false,
    };
  }
  functioncomp = () => {
    this.setState({
      Function: !this.state.Function,
    });
  };
  classcomp = () => {
    this.setState({
      Class: !this.state.Class,
    });
  };
  render(){
    return(
        <div>
           <h1 className='heading'>Styling Using Functional and Class Component</h1>
           <button onClick={this.functioncomp} className="bttn-1">
              Styling in Functional Component
           </button>
           <button onClick={this.classcomp} className="bttn-2">
              Styling in Class Component
           </button>
           {this.state.Function ? <Function/> : null }
           {this.state.Class ? <Class/> : null}
        </div>
    );
  }
}

export default App;
