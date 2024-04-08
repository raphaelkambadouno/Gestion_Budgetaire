import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const Dashbord = () => {
    return (
        <div className='wrapper'>
        <Navbar />
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid pt-5">
                    <p className='bg-secondary col-6 text-center m-auto p-5'>DASHBORD</p>
                </div>
            </section>
        </div>
        <Footer/>
    </div> 
    );
}

export default Dashbord;
