
import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
    // this.onplus = this.onplus.bind(this)
  }
   onplus(){
    this.setState({count:this.state.count + 1})
    console.log(this);
 }
  render() {
    // const onplus = () => {
    //    this.setState({count:this.state.count + 1})
    // }
    return (
      <div>
        <h1>Count:{this.state.count }</h1>
        {/* <button onClick={this.onplus.bind(this)}>+</button> */}
        <button onClick={()=>this.onplus()}>+</button>

      </div>
    )
  }
}
export default Header













// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({favoritecolor: "yellow"})
//     }, 2000)
//   }
//   shouldComponentUpdate() {
//     return false;
//   }
//   changeColor = () => {
//     this.setState({favoritecolor: "blue"});
//   }
//   render() {
//     return (
//       <div>
//         <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       <button type="button" onClick={this.changeColor}>Change color</button>
//       </div>
//     );

//   }
// }
// export default Header