import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

export class TaskFilter extends React.Component {
    constructor(props){
        super(props)
        this.state = { open: false, name: '', status: '', date: ''}
        this.handleClose = this.handleClose.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleDate = this.handleDate.bind(this)
        this.handleStatus = this.handleStatus.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }
    
    render(){
        return (
            <div>
            <button type="button" onClick={this.handleOpen}>
                Task Filters
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={this.state.open}
                style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={this.state.open}>
                <div style={{backgroundColor: 'white', border: '2px solid #000', textAlign: 'center'}}>
                    <h1>Task Filters</h1>
                    <FormControl margin="normal" required fullWidth onChange={this.handleDate}>
                        <Input id="date" name="date" type="date" />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth onChange={this.handleName}>
                        <InputLabel htmlFor="responsable">Responsable</InputLabel>
                        <Input id="responsable" name="responsable" type="text" />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth onChange={this.handleStatus}>
                        <InputLabel htmlFor="status">Status</InputLabel>
                        <Input id="status" name="status" type="text" />
                    </FormControl>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={this.handleClose}
                    >
                        Apply
                    </Button><br/><br/>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={this.handleClear}
                    >
                        Clear All
                    </Button>
                </div>
                </Fade>
            </Modal>
            </div>
        );
    }

    handleName (e) {
        this.setState({
            name: e.target.value
        })
    }

    handleStatus (e){
        this.setState({
            status: e.target.value
        })
    }

    handleDate(e){
        this.setState({
            date: e.target.value
        })
    }

    handleClear (e){   
        this.setState({
            name: '',
            status: '',
            date: ''
        })
        this.handleClose()       
    }


    handleClose(){
        this.setState({
            open:false
        })
    }

    handleOpen(){
        this.handleClear()
        this.setState({
            open:true
        })
    }
}