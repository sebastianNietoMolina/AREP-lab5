import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EditIcon from '@material-ui/icons/Edit';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import {Cards} from './Cards'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {UserProfile} from "./UserProfile"
import {TaskFilter} from "./TaskFilter"


const ProfileView = () => (
    <UserProfile/>
);

export class DrawerLogin extends React.Component{
    constructor(props){
        super(props)
        this.state = { left: false }
    }

    render(){
        
        let user = [
            {
                description: "Sacar al perro ",
                responsible: {
                    name: "Sebastian Nieto",
                    email: "juan@gmail.com"
                },
                status: "ready",
                dueDate: "12-2-2021"
            },
            {
                description: "Lab4",
                responsible: {
                    name: "Sebastian Nieto",
                    email: "juan@gmail.com"
                },
                status: "in progress",
                dueDate: "7-3-2021"
            },
            {
                description: "Desayunar ",
                responsible: {
                    name: "Sebastian Nieto",
                    email: "juan@gmail.com"
                },
                status: "completed",
                dueDate: "8-9-2021"
            }
        ]
    
        const toggleDrawer = (open) => (event) => {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
              return;
            }
        
            if (open === false){
                this.setState({
                    left : false
                })
            }else{
                this.setState({
                    left : true
                })
            }
        
        };

        const list = (
            <div
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
              style={{position: 'relative', width: '50vh'}}
            >
              <List>
                  <ListItem button>
                      <Avatar>
                          <AccountCircleIcon />
                      </Avatar>
                      <div>
                        <ListItemText primary={user[0].responsible.name} />
                        <ListItemText primary={user[0].responsible.email} />
                     </div><br/>
                    </ListItem>
                    <div style={{marginLeft: '15vh'}}>
                        <Avatar>
                            <EditIcon onClick={<Route path="/ome" component={ProfileView} />}/>
                        </Avatar>
                    </div>
              </List>
              <Divider/>
              <div style={{position: 'absolute', top: '85vh', marginLeft: '10vh'}}>
              <ListItem button>
                      <Avatar>
                          <ExitToAppIcon style={{color: 'black'}} />
                      </Avatar>
                    <Button color="primary" style={{fontSize: 28, color: 'blue', fontFamily: 'serif'}}>
                        Log out
                    </Button>
                </ListItem>

              </div>

            </div>
          );

        return(
            <div>
                <React.Fragment key="left">
                    <Toolbar>
                        <Drawer anchor="left" open={this.state.left} onClose={toggleDrawer(false)}>
                        {list}
                        </Drawer>
                        <MenuIcon />
                        <Button onClick={toggleDrawer(true)}>{"Profile"}</Button>
                    </Toolbar>
                </React.Fragment>
                
                <TaskFilter />
            </div>
        );
    }

}