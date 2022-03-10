import React, {Component} from "react"
import styled from 'styled-components'

const Main = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  height:100vh;
  
`
const ContentMain = styled.div`
  background-color:green;
  color:white;
 
`

export default class app extends Component{
 
  state = {
    points:0,
    up:1,
    up1desc:"50pts",
    up1lock:false
  }

  add =()=>{
    let {points,up} =this.state
    this.setState({
      points:points+up
    })
  }

  up1=()=>{
    let{points,up,up1lock,up1desc} = this.state
    if(points>=50 && up1lock===false){
      this.setState({
        up:up+2,
        points:points-50,
        up1lock:true,
        up1desc:"Obtido"
      })
    }
   
  }

  render(){
    
    return(
      <>
      <Main>
        <ContentMain>
          
        <h1>{this.state.points}</h1>
        <button onClick={this.add}>aumentar</button>
        <button onClick={this.up1}>{this.state.up1desc}</button>
        </ContentMain>
      </Main>
      </>
    )
  }
}