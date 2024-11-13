import React, {Component} from "react";

import './post-add-form.css'

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    //Säilitab väljale sisestatud väärtuse
    onValueChange(e) {
        this.setState({
            text: e.target.value
        });
    }
    // saadab väärtuse, mis asub sisendväljal
    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        });
    }
    /*Projekti käivitamisel loob elemendi veeväljaga ja 
    funktsioonide täitmine teatud tingimustel*/
    render() {
        return (
            <form
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Mida sa praegu mõtled?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    Lisama
                </button>
            </form>
        )
    }
}