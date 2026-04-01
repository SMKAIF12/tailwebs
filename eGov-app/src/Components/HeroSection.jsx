import React from 'react'
import scientist1 from '../assets/scientist1.jpg'
import scientist2 from '../assets/scientist2.jpeg'
import digitlogo from '../assets/digit-logo.png'
import digitonly from '../assets/DIGIT-Image-Only.png'
function HeroSection() {
    return (
        <>
            <section className="hero container-fluid py-5">
                <div className="row">
                    <div className="col-12 col-md-6 mb-4 mb-md-0 text-center text-md-start banner-1">
                        <div className="top-text">
                            <h1 className="fs-2 fs-md-1 fw-bold">
                                20 years of digital <br /> transformation in <br /> public service delivery <br />
                                <b>It's possible.</b>
                            </h1>
                        </div>
                        <div className="bottom-text mt-3">
                            <p>
                                Catalysts. Ecosystem enablers. Problem Solvers. <br />
                                At eGov, we’re driven by the power of open digital <br />
                                infrastructure and ecosystems to enable governments <br />
                                deliver accessible, inclusive and transparent services to <br />
                                every citizen.
                            </p>
                            <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start mt-3">
                                <button className="btn btn-info rounded-pill text-white w-md-auto">Our Approach</button>
                                <button className="btn btn-light border border-primary rounded-pill w-md-auto">Our Impact</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 text-center text-md-start banner-2">
                        <div className="content1 mb-4 content1">
                            <h1 className="fw-bold" id='count'>1,000,000,100+</h1>
                            <p>Citizens availing public services through eGov's Digital Public Goods (DPG)</p>
                        </div>
                        <div className="row text-center text-md-start content2">
                            <div className="col-12 col-md-6 mb-3">
                                <h2 className="fw-bold">1.1 Billion+</h2>
                                <p>Public services delivered</p>
                            </div>
                            <div className="col-12 col-md-6 mb-3">
                                <h2 className="fw-bold">50+ partners</h2>
                                <p>From technology, governments and NGOs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="products container-fluid py-5">
                <div className="card d-flex flex-column flex-md-row justify-content-between align-items-start gap-4">
                    <div className="content-box">
                        <h3>Big problems need</h3>
                        <h1><b>bold approaches</b></h1>

                        <button className="btn btn-info rounded-pill text-white w-100 mt-3">Public Health</button>
                        <button className="btn btn-light border border-primary rounded-pill mt-3 w-100">Public Finance</button>
                        <button className="btn btn-light border border-primary rounded-pill mt-3 w-100">Local Governance</button>
                        <button className="btn btn-light border border-primary rounded-pill mt-3 w-100">Water and Sanitation</button>
                    </div>
                    <div className="subcard subcard1">
                        <div className="p-3">
                            <h3>210+</h3>
                            <span>cities LIVE with <br /> 10BedICU across <br /> India</span><br />
                            <button className="rounded-pill btn btn-light border mt-2">Read More</button>
                        </div>
                    </div>

                    <div className="subcard subcard2">
                        <div className="p-3">
                            <h3>2 Bn</h3>
                            <span>COVID-19 <br /> vaccination <br /> certificates issued</span><br />
                            <button className="rounded-pill btn border mt-2">Read More</button>
                        </div>
                    </div>

                </div>
                <div className="about text-center mt-5">
                    <h1>20 years of reimagining for citizens and <br /> <b>sustaining change</b></h1>
                    <p>
                        Technology is powerful, but is only one piece of the puzzle, when it comes to enhancing the <br /> quality of life for every citizen. To have sustainable impact at scale, the collective energy of local <br /> networks to solve local problems needs to be tapped into. Our partners & networks bring this <br /> collective energy to life. The ecosystem already exists; our task is to facilitate and amplify their <br /> efforts. For 20 years, we’ve been turning small steps into lasting, meaningful change, so that no <br /> citizen is left behind.
                    </p>
                    <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
                        <img src={scientist1} alt="" className="img-fluid" />
                        <img src={scientist2} alt="" className="img-fluid" />
                    </div>
                    <button className="btn btn-light border rounded-pill p-2 mt-5">About Us</button>
                </div>

                <div className="digit row align-items-center mt-5 g-4">
                    <div className="col-12 col-md-6 text-center order-1 order-md-2">
                        <img src={digitonly} alt="person" className="img-fluid main-img" id="person-img" />
                    </div>

                    <div className="col-12 col-md-6 text-center text-md-start order-2 order-md-1">
                        <img src={digitlogo} alt="logo" className="img-fluid mb-3 logo-img" />
                        <h1 className="mb-3">
                            Our open source <br />
                            <b>technology-for-good platform</b>
                        </h1>
                        <span>DIGIT, short for Digital Infrastructure for Governance, Inclusion and <br /> Transformation is
                            eGov's open-source platform with reusable <br /> building blocks and shared data registries that can
                            be used to build <br /> solutions in multiple sectors.</span> <br />
                        <button class="rounded-pill border p-2 mt-5">Explore the platform</button>
                    </div>
                </div>

            </section>
        </>
    )
}

export default HeroSection