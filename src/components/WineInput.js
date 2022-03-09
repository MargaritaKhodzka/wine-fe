import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Calendar from 'react-calendar';
import { connect } from 'react-redux';
import { addWine } from '../actions/wineActions';

class WineInput extends React.Component {
    state = {
        date: new Date(),
        name: '',
        description: '',
        year: '',
        shop: '',
        price: '',
        n_rate: '',
        m_rate: '',
      }
      
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    onDateChange = date => this.setState({date})
    
    handleSubmit = (event) => {
        event.preventDefault();
        const path = '/';
        this.props.addWine(this.state, this.props.history, path);
        this.setState({
            name: '',
            description: '',
            year: '',
            shop: '',
            price: '',
            n_rate: '',
            m_rate: ''
        })
    }
    
    render() {
        return (
            <div>
                <Link className = 'largeButton' to='/'>Back to the wine list</Link>
                
                <h3>New wine</h3>
                
                <Form className = 'wineData' onSubmit = {this.handleSubmit}>
                    <FormGroup>
                        <Label for = 'date'>Date</Label>
                        <Calendar value = {this.state.date} name = 'date' onChange={this.onDateChange} />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for = 'name'>Name</Label>
                        <Input type = 'text' value = {this.state.name} name = 'name' onChange={this.handleChange} />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for = 'description'>Description</Label>
                        <Input type = 'select' value = {this.state.description} name = 'description' onChange={this.handleChange}>
                            <option>Select description</option>
                            <option>Brut</option>
                            <option>Orange - Light Skin Contact</option>
                            <option>Orange - Skin Contact</option>
                            <option>Red</option>
                            <option>Rose</option>
                            <option>White</option>
                            <option>White - Dry</option>
                            <option>White - Light Skin Contact</option>
                            <option>White - Unfiltered</option>
                        </Input>
                        <Label for='description' className = 'afterDropdown'>... or add new</Label>
                        <Input type = 'text' value = {this.state.description} name = 'description' onChange={this.handleChange} />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for = 'year'>Year</Label>
                        <Input type = 'text' value = {this.state.year} name = 'year' onChange={this.handleChange} />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for='shop'>Shop</Label>
                        <Input type = 'select' value = {this.state.shop} name = 'shop' onChange={this.handleChange}>
                            <option>Select shop</option>
                            <option>Amsterdam Wine Co</option>
                            <option>Astor Wine</option>
                            <option>Beacon Wines & Spirits</option>
                            <option>Discovery Wine</option>
                            <option>Enoteca LIC</option>
                            <option>Grape Collection</option>
                            <option>Hamilton Discount</option>
                            <option>Nolita Wine</option>
                            <option>Restaurant</option>
                        </Input>
                        <Label for = 'shop' className = 'afterDropdown'>... or add new</Label>
                        <Input type = 'text' value = {this.state.shop} name = 'shop' onChange={this.handleChange} />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for = 'price'>Price</Label>
                        <Input type = 'text' value = {this.state.price} name = 'price' onChange={this.handleChange} />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for = 'n_rate'>Nicolò</Label>
                        <Input type = 'text' value = {this.state.n_rate} name = 'n_rate' onChange={this.handleChange} />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for = 'm_rate'>Margo</Label>
                        <Input type = 'text' value = {this.state.m_rate} name = 'm_rate' onChange={this.handleChange} />
                    </FormGroup>
                    
                    <Button className = 'smallButton'>Add Wine</Button>
                </Form>
            </div>
        )
    }
}

export default connect(null, { addWine })(WineInput);
