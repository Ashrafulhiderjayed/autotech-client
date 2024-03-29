import { useEffect, useState } from "react";
import AllAppointmentsRow from "./AllAppointmentsRow";



const AllAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/appointments')
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[])
    return (
        <section className="h-screen mx-auto max-w-7xl">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>
                    <label>
                        <h1 className="text-lg">No.</h1>
                    </label>
                    </th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Model Name</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {
                    appointments.map((appointment, index) => <AllAppointmentsRow
                        key={appointment._id}
                        index={index}
                        appointmentDetails={appointment}
                    ></AllAppointmentsRow>)
                }
                </tbody>
                
            </table>
        </section>
    );
};

export default AllAppointments;