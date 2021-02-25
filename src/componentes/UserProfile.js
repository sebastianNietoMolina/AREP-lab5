import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export class UserProfile extends React.Component{

    constructor(props){
        super(props)
        this.state = {name: '', mail: '', password: '', confirmPw: ''}
        this.user = localStorage.getItem("mail")
        this.name = localStorage.getItem("name")
        this.pw =   localStorage.getItem("pw")
        this.handleName = this.handleName.bind(this)
        this.handleMail = this.handleMail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleConfirmPassword = this.handleConfirmPassword.bind(this)
        this.handleSave = this.handleSave.bind(this)
    }

    render(){
        return(
            <div >
            <React.Fragment >
                <CssBaseline />
                <main>
                    <Paper> 
                        <Typography variant="h2">Registration</Typography>
                        <form className="form" onSubmit={this.handleSave} >

                            <FormControl margin="normal" required fullWidth onChange={this.handleName}>
                                <InputLabel htmlFor="name">Full name</InputLabel>
                                <Input id="name" name="name" type="text" autoComplete="name" />
                            </FormControl>

                            <FormControl margin="normal" required fullWidth onChange={this.handleMail}>
                                <InputLabel htmlFor="email">email</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus />
                            </FormControl>

                            <FormControl margin="normal" required fullWidth onChange={this.handlePassword}>
                                <InputLabel htmlFor="password">password</InputLabel>
                                <Input name="password" type="password" id="password" autoComplete="current-password" />
                            </FormControl>

                            <FormControl margin="normal" required fullWidth onChange={this.handleConfirmPassword}>
                                <InputLabel htmlFor="password">confirm password</InputLabel>
                                <Input name="password" type="password" id="password" autoComplete="current-password" />
                            </FormControl>

                            <div style={{textAlign: 'center'}}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className="submit"
                                >
                                    Save
                                </Button><br/>
                            </div>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
            </div>
        )
    }

    handleName (e) {
        this.setState({
            name: e.target.value
        })
    }

    handleMail (e){
        this.setState({
            mail: e.target.value
        })
    }

    handlePassword (e) {
        this.setState({
            password: e.target.value
        })
    }

    handleConfirmPassword (e) {
        this.setState({
            confirmPw: e.target.value
        })
    }

    handleSave (e) {

        if( this.state.password === this.state.confirmPw){
            console.log("ome")
            localStorage.setItem("mail", this.state.mail)
            localStorage.setItem("name", this.state.name)
            localStorage.setItem("pw", this.state.password)
        }else{
            alert("Los datos no coinciden, verifica la contraseña")
        }
    }


}