import React from 'react';

class Class extends React.Component {
  constructor(props){
     super(props)
     this.state={
        count:0
     }
  }
  render() {
   const plus=()=>{
      this.setState({count:this.state.count + 1})
    }
    return (
      <div style={{ flex: 1 }}>
        <h1>Class Component</h1>
        {/* <button onClick={this.name}>click me</button> */}
        <h1>Count:{this.state.count}</h1>
        <button onClick={plus}>+</button>
      </div>
    );
  }
}

export default Class;




// class Class extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         count: 0,
//       };
//     }
//     render() {
//       return (
//         <div style={{ flex: 1 }}>
//           <h1>Class Components</h1>
//           <h1>Count: {this.state.count}</h1>
//           <button onClick={() => this.setState({ count: this.state.count - 1 })}>
//             -
//           </button>
//           <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//             +
//           </button>
//         </div>
//       );
//     }
//   }
  
//   export default Class;
  