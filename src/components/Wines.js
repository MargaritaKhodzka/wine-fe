import React from 'react';
import Table from 'react-bootstrap/Table';

const Wines = props => {
    console.log(props);
    return (
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
                        <td className = 'name'>{wine.name}</td>
                        <td className = 'rate'>{wine.n_rate}</td>
                        <td className = 'rate'>{wine.m_rate}</td>
                    </tr>
                )};
            </tbody>
        </Table>
    );
};

export default Wines;
