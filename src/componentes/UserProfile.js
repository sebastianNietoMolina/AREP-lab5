import React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Modal from '@material-ui/core/Modal';

export class UserProfile extends React.Component {

    constructor(props) {
        super(props)
        this.state = { edit: this.props.open, nameEdit: "", emailEdit: "", pwEdit: "", pw2Edit: "" }
        this.handleEdit = this.handleEdit.bind(this)
        this.handleNameEdit = this.handleNameEdit.bind(this)
        this.handleEmailEdit = this.handleEmailEdit.bind(this)
        this.handlePwEdit = this.handlePwEdit.bind(this)
        this.handlePw2Edit = this.handlePw2Edit.bind(this)
    }

    handleNameEdit(data) {
        this.setState({
            nameEdit: data.target.value
        })
    }

    handleEmailEdit(data) {
        this.setState({
            emailEdit: data.target.value
        })
    }

    handlePwEdit(data) {
        this.setState({
            pwEdit: data.target.value
        })
    }

    handlePw2Edit(data) {
        this.setState({
            pw2Edit: data.target.value
        })
    }

    handleEdit() {
        if (this.state.pw2Edit === this.state.pwEdit) {
            localStorage.setItem('mail', this.state.emailEdit)
            localStorage.setItem('pw', this.state.pwEdit)
            localStorage.setItem('name', this.state.nameEdit)
            this.props.close()
        } else {
            alert("Verify your password")
        }
    }

    render() {

        const setInformation = (
            <div>
                <h2 id="simple-modal-title">New Taks</h2>
                <FormControl margin="normal" required fullWidth onChange={this.handleNameEdit}>
                    <InputLabel htmlFor="nameEDti">Name</InputLabel>
                    <Input id="nameEdit" name="nameEdit" type="text" />
                </FormControl>
                <FormControl margin="normal" required fullWidth onChange={this.handleEmailEdit}>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input id="emailEdit" name="emailEdit" type="email" />
                </FormControl>
                <FormControl margin="normal" required fullWidth onChange={this.handlePwEdit}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input id="passwordEdit" name="passwordEdit" type="password" />
                </FormControl>
                <FormControl margin="normal" required fullWidth onChange={this.handlePw2Edit}>
                    <InputLabel htmlFor="password">Confirm Password</InputLabel>
                    <Input id="confirmPasswordEdit" name="confirmPasswordEdit" type="password" />
                </FormControl>
            </div>
        )

        return (
            <div style={{ backgroundColor: 'white', border: '2px solid #000', textAlign: 'center', width: 450 }}>
                {setInformation}
                <Button onClick={this.handleEdit} variant="contained" color="primary">Save</Button>
            </div >
        )
    }

}