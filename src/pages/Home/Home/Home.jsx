import Banner from "../Banner/Banner";
import Professional from "../Professional/Professional";
import Services from "../Services/Services";
import Technician from "../Technician/Technician";


const Home = () => {
    return (
        // <div className="mx-auto px-4 max-w-7xl">
        <div className="mx-auto max-w-7xl">
            <Banner />
            <Professional />
            <Services />
            <Technician />
        </div>
    );
};

export default Home;