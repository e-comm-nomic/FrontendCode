import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const signin = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4">Sign in</p>
        <div className="grey-text">
          <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Type your password" icon="lock" group type="password" validate />
        </div>
        <input type="submit" value="Login" class="btn btn-success" />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default signin;