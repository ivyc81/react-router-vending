import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sodaPng from './bubbles.png';
import './Soda.css';

class Soda extends Component {
    constructor(props){
        super(props);
        this.state={
            left: '',
            top: '',
        }
    }

    componentDidMount(){
        this.bubbleTimer = setInterval(()=>{
            console.log('timer bublezzz')
            this.setState({
                left: `${Math.random()*100}vw`,
                top: `${Math.random()*100}vh`
            })
        }, 500)
    }

    componentWillUnmount(){
        clearInterval(this.bubbleTimer);
    }

  render() {
    // let ranLeft = Math.random()*100;
    // let ranTop = Math.random()*100;
    let style = {
        left: this.state.left,
        top: this.state.top,
    }
    return (
      <div className="Soda">
        <p>Bubblezzz</p>
        <img style={style} src={sodaPng} alt='bubble' />
        <p><Link to='/'>Home </Link></p>
      </div>
    );
  }
}

export default Soda;