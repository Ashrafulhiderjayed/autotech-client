import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import Title from "../../Shared/Title/Title";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <section className="lg:my-32">
            <div className="lg:pl-96 mt-48 m-24">
                <Title className="text-center" text="WHAT WE DO"></Title>
                <h2 className="text-2xl lg:text-6xl font-bold">Our <br /> Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {
                services.map(service =><ServicesCard
                key={service._id}
                service={service}
                ></ServicesCard>)
            }
            </div>
        </section>
    );
};

export default Services;