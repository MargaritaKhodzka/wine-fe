import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { Link, useParams, useNavigate } from 'react-router-dom';
import dateFormat from 'dateformat';
import { connect } from 'react-redux';
import { deleteWine } from '../actions/wineActions';

const Wine = props => {
    
    const { id } = useParams();
    const navigate = useNavigate();
    const wine = props.wines.find((wine) => wine.id === Number(id));
    console.log(wine && wine.date);

    const handleDelete = () => {
        props.deleteWine(wine.id);
        navigate('/');
    }
    
    return (
        <div>
            <Link className = 'backLink' to='/'>Back to the wine list</Link>

            <h3>{wine && wine.name}</h3>
            
            <Table responsive bordered>
                <tbody className = 'wineData'>
                    <tr>
                        <td>Date</td>
                        <td>{dateFormat(wine && wine.date, 'longDate')}</td>
                    </tr>
                    
                    <tr>
                        <td>Description</td>
                        <td>{wine && wine.description}</td>
                    </tr>
                    
                    <tr>
                        <td>Year</td>
                        <td>{wine && wine.year}</td>
                    </tr>
                    
                    <tr>
                        <td>Shop</td>
                        <td>{wine && wine.shop}</td>
                    </tr>
                    
                    <tr>
                        <td>Price</td>
                        <td>${wine && wine.price}</td>
                    </tr>
                    
                    <tr>
                        <td>Nicolò</td>
                        <td>{wine && wine.n_rate}</td>
                    </tr>
                    
                    <tr>
                        <td>Margo</td>
                        <td>{wine && wine.m_rate}</td>
                    </tr>
                </tbody>
            </Table>
            <Button variant="outline-secondary" onClick={handleDelete}>Delete</Button>{' '}
        </div>
    );
}

export default connect(null, { deleteWine })(Wine);
