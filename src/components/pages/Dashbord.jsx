const Dashbord = () => {
    return (
        <>
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Dashboard</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* Content Header (Page header) */}

            {/* Main content */}
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-6">
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <h3>150</h3>

                                    <p>Dépense du jour</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-bag"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-6">
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>53<sup style={{ fontSize: "20px" }}>%</sup></h3>

                                    <p>Dépense total</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-stats-bars"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-6">
                            <div className="small-box bg-warning">
                                <div className="inner">
                                    <h3>44</h3>

                                    <p>Catégories</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-person-add"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Main content */}
        </>
    );
}

export default Dashbord;
