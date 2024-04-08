import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const Depenses = () => {
    return (
        <div className='wrapper'>
        <Navbar />
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid pt-5">
                    <p className='bg-secondary col-6 text-center m-auto p-5'>DEPENSES</p>
                </div>
            </section>
        </div>
        <Footer/>
    </div> 
    );
}

export default Depenses;
