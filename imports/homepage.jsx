import React from 'react';
import TextField from 'material-ui/TextField';
import {Component} from 'react';


var a;

export default class Homepage extends Component{
    constructor(props){
        super(props);
        this.state = {
            selected : null,
            selected2 : null,
            selected3 : null,
            id:null,
        };
        this.handleinput = this.handleinput.bind(this);
        this.submit = this.submit.bind(this);
        this.handleinput2=this.handleinput2.bind(this);
    }

    handleinput(e){
      this.setState({selected:e.target.value});
    }

    handleinput2(e){
        this.setState({selected2:e.target.value});
    }

    submit(e){
        e.preventDefault();
        Meteor.call('getID',this.state.selected,this.state.selected2,function (res) {
            console.log(res);
        })
        console.log(this.state.selected,this.state.selected2);
    }

    render(){
        return(<div>
                <form onSubmit={this.submit}>
                    <TextField onChange={this.handleinput2}/><br/>
                    <TextField onChange={this.handleinput}/>
                    <button type="submit">Button</button>
                </form>
            </div>


        );

    }
}