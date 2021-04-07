import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import img from '../assets/man.png';
import img2 from '../assets/woman.jpg';
import img3 from '../assets/unknown.png';
import UserList from '../components/UserList';
import UserAddForm from '../components/UserAddForm';
import PostList from '../components/PostList';

class HomePage extends React.Component{
    constructor(){
        super();
    
        this.state = {
    
          bgColor: "white",
    
          txColor: "black",
    
          users: [
            {
              name: "Adrian Mihaescu",
              email: "adrian.mihaescu23@gmail.com",
              salary: "2252 RON",
              isGoldClient: false,
              image: img
            },
          
            {
              name: "Daria Voinea",
              email: "daria.voinea46@gmail.com",
              salary: "3450 RON",
              isGoldClient: true,
              image: img2
            }
          ],
    
          posts: [],
          list: "users"
    
        }
      }
      
      componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(postList => {this.setState({posts: postList});} );
      }
    
      submitHandler(newElement){
  
        newElement["image"] = img3;
        this.setState(prevState => { return { users: [...prevState.users,newElement]} });
        
      }
    
      deleteHandler(index){
        this.setState(prevState => {prevState.users.splice(index,1);
                                     return { users: [...prevState.users]} })
      }

    render(){
        return(
        <div className = 'container' style = {{backgroundColor: this.state.bgColor, color: this.state.txColor}} >
          <div className = 'column left'>
            <h1 className = 'h1'> REGISTER </h1>

            <UserAddForm fontColor = {this.state.txColor} submitHandler = {event => {this.submitHandler(event)}}/>

            <div className = 'color-div'>
              <div className = 'color-div1'>
                <input className = 'color-btn' type ="color" onChange = {event => {this.setState({bgColor: event.target.value})}}/>
                <span> BACKGROUND </span>
              </div>

              <div className = 'color-div1'>
                <input className = 'color-btn' type = "color" onChange = {event => {this.setState({txColor: event.target.value})}}/>
                <span> TEXT </span>
              </div>
              <Link style = {{color: this.state.txColor, marginTop: 50}} className = 'link' to = '/about'> ABOUT </Link>
            </div>
            

          </div>

          <div className = 'column right'>
            <div className = 'show-buttons'>
              <button className = 'submitBtn' type = "submit" name = "Afiseaza useri" onClick = {() => {this.setState({list: "users"})}}> Show Users</button>
              <button className = 'submitBtn' type = "submit" name = "Afiseaza postari" onClick = {() => {this.setState({list: "posts"})}}> Show Posts</button>
            </div>

            {
              this.state.list === "users" ? <UserList users = {this.state.users} deleteHandler = {event => {this.deleteHandler(event)}}/> 
                                          : <PostList posts = {this.state.posts}/>
            }
          </div>
        </div>
        );
    }
}

export default HomePage;