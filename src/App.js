import profileCards from './components/profileCards'

import React, { Component } from 'react'

 class App extends Component {
constructor(){
  super();

  this.handleClick =this.handleClick.bind(this);

  this.state ={
    writers:{
      loading: false,
      list:[]
    }
  };
}
handleClick(){
  this.setState({
    writers:{
      loading:true
    }
  });

setTimeout(async()=>{
  let resp = await fetch("/writers.json");
  let result = await resp.json();

  this.setState({
    writers:{
      loading:false,
      list: result
    }
  });
}, 350);
}
render() {
const {
  writers:{loading,list}
}=this.state;

if(loading){
  return(
    <div>
    <h1>Writers Profile</h1>
    <div className="container">
    <div className="card action">
    <p className="infoText">loading...</p>

    </div>

    </div>


    </div>
  )
}

   


}

  render() {
    return (
      <div>
      <h1>Writers Profile</h1>
      <div className="container">
      {list.length === 0 ? (
       <div className="card action">
       <p className="infoText">Ooops...no writer profile found</p>
       <button className="actionBnt">Get Writers</button>

       </div>
      ):(
        list.map((writers) =>(
          <profileCard key={writers.id} writer={writer}/>
        ))
      )}

      </div>
      </div>
    )
  }
}
