import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const Objectifs = () => {
    return (
        <div className='wrapper'>
        <Navbar />
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid pt-5">
                    <p className='bg-secondary col-6 text-center m-auto p-5'>OBJECTIFS</p>
                </div>
            </section>
        </div>
        <Footer/>
    </div> 
    );
}

export default Objectifs;
