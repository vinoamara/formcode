import React from 'react'
import FormUserDetails from '.component/content/Tmplete/Temp3/FormUserDetails'
import Developing from '../../../../Underdeveloping/Developing'

export class Temp3 extends Component() {
  state={
    step:1,
    firstName:'',
    lastname:'',
    email:'',
    occupation:'',
    city:'',
    bio:''

  }
nextstep=()=>{
  const{step}= this.state;
  this.setState({step:
step+1
});
}
  
prevstep= ()=>{
  const{step}= this.state;
  this.setState({
    step:
step-1
  });
}
  handleChange= input => e =>  {
    this.setState ({[input]:e.target.value});
  }
  render() {
    const{step}= this.state;
    const { firstName, lastName,email,occupation,city,bio}=this.state;
    const values ={firstNamelastName,email,occupation,city,bio};
  switch(step){
    case 1:
      return{
        <formUserDetails
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
          />
      };
      case 2:
        return <h1>FormPersonalDetails</h1>;
        case 3:
          return<h1>Confirm</h1>;  
        case 4:
          return<h1>Success</h1>;
        }
  }
}

export default Temp3
