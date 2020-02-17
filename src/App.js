import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/card/Card";
import {withService} from './hoc/myHoc'

class App extends React.Component {
  state={
    posts:[],
    isLoaded: false
  }
componentDidMount() {
  const {getPosts} = this.props;
  getPosts().then(data=>this.setState({posts:data,isLoaded:true}))

  }
  renderPosts=(el)=> {
    return (<Card {...el} key={el.id} />)
  }
 // renderPosts=({title,body,id})=>{
 //      return(
 //          <div key={id}>
 //              <h1>{title}</h1>
 //              <p>{body}</p>
 //          </div>
 //      )
 //  }
  render() {
    const {isLoaded,posts} = this.state;
   // console.log(this.state);
    console.log(this.props);
    return (
        <div className="App">
          {isLoaded && posts.map(this.renderPosts)}
        </div>
    );
  }
}

export default withService(App);
