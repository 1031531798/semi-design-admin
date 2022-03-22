import React from "react";

class ClockMap extends React.Component{
  constructor(props){
    super(props)
    this.state={
      list: [],
      ifUrl: 'http://192.168.50.150:8081/?mapType=1'
    }
  }
  
  showSea = () => {
    this.setState({
      ifUrl: 'http://192.168.50.150:8081/?mapType=1'
    })
  }
  showLand = () => {
    console.log('显示陆地')
    this.setState({
      ifUrl: 'http://192.168.50.150:8081/?mapType=2'
    })
  }
  componentDidMount(){
  }
  
  render(){
    return(
      <>
        <button onClick={this.showSea}>海上事件</button>
        <button onClick={this.showLand}>陆地事件</button>
        <iframe title="clockMap" src={this.state.ifUrl} width={800} height={400} name="clockMap"></iframe>
      </>
    )
  } 
}
export default ClockMap; 