import React from 'react';

const DepenseTable = ({ items, getNameCat, deleted }) => {
    return (
        <div className="card">
            <div className="card-body">
                <table width={100} className='table table-bordered'>
                    <thead>
                        <tr>
                            <th width={1} className='bg-dark'>N°</th>
                            <th className='bg-dark'>Catégorie</th>
                            <th className='bg-dark'>Montant</th>
                            <th className='bg-dark'>Motif</th>
                            <th width={1} className='bg-dark'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{getNameCat(item.categorie_id)}</td>
                                    <td>{item.montant}</td>
                                    <td>{item.motif}</td>
                                    <td>
                                        <span className='btn-group'>
                                        {/* <button className='btn btn-sm btn-outline-warning me-2'><i className='fa fa-edit'></i></button> */}
                                        <button onClick={()=>deleted(item.id, index)} className='btn btn-sm btn-outline-danger'><i className='fa fa-trash'></i></button>
                                        </span>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DepenseTable;
