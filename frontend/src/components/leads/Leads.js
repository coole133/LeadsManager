import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getLeads, deleteLead} from "../../actions/leads";


const Leads = () => {

    const leads = useSelector(state => state.leads.leads)
    const dispatch = useDispatch()
    console.log(leads)

    useEffect(() => {
        dispatch(getLeads())
    }, [])

    const handleDeleteLead = (id) => {
        dispatch(deleteLead(id))
    }

    return (
        <>
            <h2>Leads list</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th/>
                </tr>
                </thead>
                <tbody>
                {leads.map(lead => {
                    return (
                        <tr key={lead.id}>
                            <td>{lead.id}</td>
                            <td>{lead.name}</td>
                            <td>{lead.email}</td>
                            <td>{lead.message}</td>
                            <td>
                                <button onClick={() => handleDeleteLead(lead.id)} className='btn btn-danger btn-sm'>Delete</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}


export default Leads