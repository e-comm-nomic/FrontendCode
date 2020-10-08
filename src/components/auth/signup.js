import React from "react";

const style = {
  width : '500px',
  marginLeft : '30px',
  color : 'white',
  fontSize : '18px',
}

  
class signup extends React.Component {
  constructor() {
  super();
  this.state = {
    input: {},
    errors: {}
  };
   
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
  
handleChange(event) {
  let input = this.state.input;
  input[event.target.name] = event.target.value;

  this.setState({
    input
  });
}

handleSubmit(event) {
  event.preventDefault();

  if(this.validate()){
      console.log(this.state);

      let input = {};
      input["name"] = "";
      input["email"] = "";
      input["password"] = "";
      input["phone"] = "";
      input["street_name"] = "";
      input["pincode"] = "";
      input["door_no"] = "";
      this.setState({input:input});

      alert('Customer Table Has Been populated');
  }
}
validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Please enter your name.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
        
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["phone"]) {
      isValid = false;
      errors["phone"] = "Please enter your phone number.";
    }

    if (typeof input["phone"] !== "undefined") {
        
      pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(input["phone"])) {
        isValid = false;
        errors["phone"] = "Please enter only number.";
      }else if(input["phone"].length != 10){
        isValid = false;
        errors["phone"] = "Please enter valid phone number.";
      }
    }
    
    if(!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your Password.";
    }

    if (typeof input["password"] !== "undefined") {
        
      pattern = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/);
      if (!pattern.test(input["password"])) {
        isValid = false;
        errors["password"] = "Please enter a valid password according to the rules stated";
      }
    }

    if(!input["street_name"])
    {
      isValid=false;
      errors["street_name"] = "Please Enter a Street Name";
    }

    if(!input["pincode"])
    {
      isValid=false;
      errors["pincode"] = "Please enter a Pincode";
    }

    if(typeof input["pincode"] !== "undefined")
    {
      pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(input["pincode"])) {
        isValid = false;
        errors["pincode"] = "Please enter only numbers[0-9] for Pincode.";
      }else if(input["pincode"].length != 6){
        isValid = false;
        errors["phone"] = "Please enter a valid pincode(6 digits)";
      }
    }

    if(!input["door_no"])
    {
      isValid = false;
      errors["door_no"] = "Plese enter a Door No";
    }

    this.setState({
      errors: errors
    });

    return isValid;
}
   
render() {
  return (
    <div style={style}>
      <form onSubmit={this.handleSubmit}>  
        <div class="form-group">
          <label for="name">Name:</label>
          <input 
            type="text" 
            name="name" 
            value={this.state.input.name}
            onChange={this.handleChange}
            class="form-control" 
            placeholder="Enter name" 
            id="name" />

            <div className="text-danger">{this.state.errors.name}</div>
        </div>

        <div class="form-group">
          <label for="email">Email Address:</label>
          <input 
            type="text" 
            name="email" 
            value={this.state.input.email}
            onChange={this.handleChange}
            class="form-control" 
            placeholder="Enter email" 
            id="email" />
            <div className="text-danger">{this.state.errors.email}</div>
        </div>



        <div class="form-group">
          <label for="Password">Password:</label>
          <input 
            type="password" 
            name="password" 
            value={this.state.input.password}
            onChange={this.handleChange}
            class="form-control" 
            placeholder="Enter Password" 
            id="password" />
            [ password must be between 8 to 15 characters and contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character]<br />
            <div className="text-danger">{this.state.errors.password}</div>
        </div>
        <div class="form-group">
          <label for="Phone">Phone:</label>
          <input 
            type="text" 
            name="phone" 
            value={this.state.input.phone}
            onChange={this.handleChange}
            class="form-control" 
            placeholder="Enter phone" 
            id="phone" />
            <div className="text-danger">{this.state.errors.phone}</div>
        </div>

        <div class="form-group">
          <label for="street_name">Street_Name:</label>
          <input 
            type="text" 
            name="street_name" 
            value={this.state.input.street_name}
            onChange={this.handleChange}
            class="form-control" 
            placeholder="Enter Street Name" 
            id="streetname" />
            <div className="text-danger">{this.state.errors.street_name}</div>
        </div>


        <div class="form-group">
          <label for="street_name">Pincode:</label>
          <input 
            type="text" 
            name="pincode" 
            value={this.state.input.pincode}
            onChange={this.handleChange}
            class="form-control" 
            placeholder="Enter Pincode" 
            id="pincode" />
            <div className="text-danger">{this.state.errors.pincode}</div>
        </div>

        <div class="form-group">
          <label for="door_no">Door No:</label>
          <input 
            type="text" 
            name="door_no" 
            value={this.state.input.door_no}
            onChange={this.handleChange}
            class="form-control" 
            placeholder="Enter Door No" 
            id="streetname" />
            <div className="text-danger">{this.state.errors.door_no}</div>
        </div>
        <input type="submit" value="Submit" class="btn btn-success" />
        <br /><br /><br /><br /><br /><br /><br />
      </form>
    </div>
  );
}
}

export default signup;