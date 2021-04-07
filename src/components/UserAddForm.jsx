import React from 'react';
import '../App.css';
class UserAddForm extends React.Component{
    constructor(){
        super();

        this.state = {
            name:'',
            email:'',
            salary: 0,
            isGoldClient: false,
            image:''
        };

    }
    render(){
        return(
            <form className = 'form' name = 'userForm' onSubmit = { event => { 
                event.preventDefault();
                if(this.state.name === ''){
                    alert("Fill in a name");
                    return null;
                }
                else if( this.state.email.search(/^\w+[@]\w+[.]\w+$/) === -1){
                    alert("The email pattern is: text@text.text");
                    return null;
                }
                else{
                    this.props.submitHandler(this.state);
                    

                    for( let field in this.state){
                        if( typeof(this.state[field]) === 'string'){
                            document.getElementById(field).value = '';
                        }
                        else if (typeof(this.state[field]) === 'boolean'){
                            document.getElementById(field).checked = false;
                        }
                    }
                    this.setState({ name:'',
                                    email:'',
                                    salary: 0,
                                    isGoldClient: false,
                                    image:'' })
                 }
                
                }}>
                <div className = 'form-container'>
                <div className = 'field-container'>
                    <input className = 'field input' type = "text" id="name" placeholder = "Name" onChange = { event => { this.setState({name: event.target.value})}}/>
                    <span style = {{color: this.props.fontColor}} className = 'field-addon'> Name </span>
                </div>

                <div className = 'field-container'>   
                    <input className = 'field input' type = "text" id="email" placeholder = "Email" onChange = { event => { this.setState({ email: event.target.value})}}/>
                    <span style = {{color: this.props.fontColor}} className = 'field-addon'> Email </span>
                </div>

                <div className = 'field-container'>
                    <input className = 'field input' type = "text" id="salary" placeholder = "Salary" onChange = { event => { this.setState({ salary: event.target.value})}}/>
                    <span style = {{color: this.props.fontColor}} className = 'field-addon'> Salary </span>
                </div>
               
                <input style = {{color: this.props.fontColor}} className = 'input' type = "file" id="image" onChange = { event => { this.setState({ image: event.target.value})}}/>
             
                <div className = 'cbdiv'>
                    <input className = 'cbinput' type = "checkbox" id="isGoldClient" onClick = { event => {this.setState({isGoldClient: event.target.checked})}}/>
                    <span style = {{color: this.props.fontColor}} className = 'span'> GOLD CLIENT</span>
                </div>
            
                <button className = 'submitBtn'  type = "submit" id="submit" > Submit </button>
             
                </div>
            </form>
        )
    }
}
export default UserAddForm;