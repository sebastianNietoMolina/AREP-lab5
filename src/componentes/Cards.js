import React from 'react';
import Card from '@material-ui/core/Card';  
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export class Cards extends React.Component{
    constructor(props){
        super(props)
        this.description= this.props.action.description
        this.status= this.props.action.status
        this.dueDate=this.props.action.dueDate
        this.name = this.props.action.responsible.name
        this.color = this.props.color
    }
    render(){
        return(
            <Card style={{color: this.color,  border: '2px solid #000'}}>
                <CardContent >
                    <div style={{textAlign: 'center'}} >
                        <Typography variant="h6" component="h1" >
                            {this.description}
                        </Typography><br/>
                        <Typography variant="h6" component="h1">
                            {this.status+" - "}{this.dueDate}
                        </Typography><br/>
                        <Typography variant="h6" component="h1">
                            {this.name}
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        )
    }

}