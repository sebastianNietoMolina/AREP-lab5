import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css';
import background from "./fotos/fondo.jpg";

export class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {meail : '', password : ''}
        this.mail = this.props.mail
        this.pw = this.props.password
        this.handleLog = this.handleLog.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleMail = this.handleMail.bind(this)
    }
    render(){
        return (
            <div >
            <React.Fragment >
                <CssBaseline />
                <main className="layout" >
                    <Paper className="paper" style={{background : `url(${background})`}}> 
                        <Typography variant="h2">Task Planer</Typography>
                        <form className="form" onSubmit={this.handleLog} >
                            <FormControl margin="normal" required fullWidth onChange={this.handleMail}>
                                <InputLabel htmlFor="email">Username</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth onChange={this.handlePassword}>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <div style={{textAlign: 'center'}}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className="submit"
                                >
                                    Login
                                </Button><br/>
                                <u style={{fontSize: 28, color: 'blue'}}>Create Acount</u>
                            </div>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
            </div>
        );
    }

    handleMail(e) {
        this.setState({
            meail : e.target.value
        })
    }

    handlePassword(e) {
        this.setState({
            password : e.target.value
        })
    }

    handleLog() {
        if(localStorage.getItem("mail")!==this.state.meail || localStorage.getItem("pw")!==this.state.password ){
            alert("User or password incorrect")
            localStorage.setItem('isLoogedIn', false)
        }else{
            alert("Your logged, now you can go to your tasks")
            localStorage.setItem('isLoogedIn', true)
        }
        return localStorage.getItem("isLoogedIn")
    }

}