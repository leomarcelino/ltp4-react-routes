import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;

    if (email === "admin@unifeob.edu.br" && password === "admin123") {
      localStorage.setItem(
        "unifeob-app-user",
        JSON.stringify({
          email
        })
      );

      this.setState({ error: "" });

      this.props.history.push("/repos");
    } else {
      this.setState({ error: "Invalid credentials" });
    }
  };

  render() {
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="e-mail@company.com"
            value={this.state.email}
            onChange={e =>
              this.setState({ ...this.state, email: e.target.value })
            }
          />
          <input
            type="password"
            value={this.state.password}
            onChange={e =>
              this.setState({ ...this.state, password: e.target.value })
            }
          />
          {this.state.error && <p>{this.state.error}</p>}
          <input type="submit" value="Login" />
        </form>
      </>
    );
  }
}

export default withRouter(Login);
