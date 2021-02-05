// import React from 'react';

// class App extends React.Component{

//   constructor(){
//     super();
//     this.state = {
//       txt: 'This is the state text'
//     }
//   }

//   update(e){
//     this.setState({txt: e.target.value});
//   }

//   render(){
//     let txt = this.state.txt;
//     return (
//       <div>
//         <Widget update={this.update.bind(this)} />
//         <h1>{this.state.txt}</h1>
//       </div>
//     )
//   }
// }


// const Widget = (props) =>
// <input type="text" onChange={props.update}/>
// export default App;

import React from 'react';

class App extends React.Component{
  render(){
    return <Button> <Heart/>React</Button>
  }
}

const Button = (props) =><button>{props.children}</button>


class Heart extends React.Component{
  render(){
    return <span>&hearts;</span>
  }
}
export default App;