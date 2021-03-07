import './App.css';
import React from 'react';
import { Login } from './componentes/Login'
import { DrawerLogin } from './componentes/Drawer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const user = {
  mail: localStorage.setItem('mail', "juan@gmail.com"),
  password: localStorage.setItem('pw', "prueba"),
  name: localStorage.setItem('name', "Sebastian Nieto")
};

const myData = {
  mail: localStorage.getItem('mail'),
  password: localStorage.getItem("pw")
}

const LoginView = () => (
  <Login password={myData.password} mail={myData.mail} />
);

const DrawerView = () => (
  <DrawerLogin />
);


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { isLoogedIn: false }
    this.handleIslooged = this.handleIslooged.bind(this)
  }

  render() {
    return (
      <Router>
        <div onSubmit={this.handleIslooged}>
          <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/tasks">Tasks</Link></li>
          </ul>
          <div>
            {this.state.isLoogedIn ?
              <Route path='/tasks' component={DrawerView} /> :
              <Route path="/" component={LoginView} />
            }
          </div>
        </div>
      </Router>
    );
  }

  handleIslooged(e) {

    e.preventDefault();

    if (localStorage.getItem("isLoogedIn") === "true") {
      this.setState({
        isLoogedIn: true
      });
    } else {
      this.setState({
        isLoogedIn: false
      });
    }
  }
}


export default App;
