import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const Wines = props => {
    return (
       <div>
           <Link className = 'largeButton' to='/new'>Add A New Wine</Link>

            <Table responsive>
                <thead>
                    <tr>
                        <th>Wine</th>
                        <th>Nicolò</th>
                        <th>Margo</th>
                    </tr>
                </thead>
                
                <tbody>
                    {props.wines.map(wine =>
                    <tr key={wine.id}>
                        <td><Link className = 'wineData' to={`${wine.id}`}>{wine.name}</Link></td>
                        <td className = 'wineData'>{wine.n_rate}</td>
                        <td className = 'wineData'>{wine.m_rate}</td>
                    </tr>
                )}
            </tbody>
        </Table>
       </div>
    );
};

export default Wines;
