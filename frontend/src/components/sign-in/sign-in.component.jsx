import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { loginUser } from "../../redux/user/user.actions";
import { withRouter } from "react-router-dom";
class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    this.props.loginUser(this.state, this.props.history);

    event.preventDefault();
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />

          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>

            <CustomButton isGoogleSignIn={true}>
              {""}
              SIGN IN With Google{""}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { loginUser })(withRouter(SignIn));
