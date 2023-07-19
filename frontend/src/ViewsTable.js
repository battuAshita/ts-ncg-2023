import React from 'react';



const ViewsTable = (props) => {

    const deleteHandler = async (id) => {
        await fetch(`delete/${id}`, {
            method: 'DELETE',
        }).then((response) => {

            props.setViewList(props.question.filter(q => {
                return q.id !== id;
                })
            )

        })

    }

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Country</th>
                <th>Chart Type</th>
                <th>Indicator</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Actions</th>

            </tr>
            </thead>
            <tbody>
            {props.view.map(q => (
                <tr key={q.id}>
                    <td>{q.name}</td>
                    <td>{q.country}</td>
                    <td>{q.chart_type}</td>
                    <td>{q.indicator}</td>
                    <td>{q.start_date}</td>
                    <td>{q.end_date}</td>
                    <td>
                        <button className="button muted-button" onClick={() => {
                            props.setId(q.id)}}>
                            Edit
                        </button>
                        <button className="button muted-button" onClick={()=> deleteHandler(q.id)}>Delete</button>
                    </td>
                </tr>
                ))
            }


            </tbody>
        </table>

    );

}

export default ViewsTable;