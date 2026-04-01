import React from 'react'
import logo from '../assets/eGov-Foundation.png'
function Footer() {
    return (
        <>
            <footer className="bg-light p-4">
                <div className="footer-section row text-center text-md-start">
                    {/* Column 1 */}
                    <div className="col-12 col-md-4 mb-4">
                        <img src={logo} alt="eGov Foundation" className="img-fluid mb-3" id="brand"  />
                        <span>
                            Catalysing digital transformation in public service delivery at speed & scale.
                        </span>
                        <ul className="list-unstyled d-flex justify-content-center justify-content-md-start gap-4 mt-4">
                            <li><i className="bi bi-facebook"></i></li>
                            <li><i className="bi bi-youtube"></i></li>
                            <li><i className="bi bi-twitter-x"></i></li>
                            <li><i className="bi bi-linkedin"></i></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="col-12 col-md-4 mb-4">
                        <h3>Useful Links</h3>
                        <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-5 mt-3">
                            <ul className="list-unstyled">
                                <li>Home</li>
                                <li>Our Impact</li>
                                <li>DIGIT Sandbox</li>
                            </ul>
                            <ul className="list-unstyled">
                                <li>Our People</li>
                                <li>Financials</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="col-12 col-md-4 mb-4">
                        <h3 className="mb-3">Subscribe Now</h3>
                        <span>
                            Receive regular updates of our monthly newsletter DOT – in your inbox.
                        </span>
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            className="form-control mt-3"
                        />
                    </div>
                </div>
                <div className="endnote d-flex flex-column flex-md-row justify-content-between align-items-center pt-3">
                    <span>©2024. eGov. All Rights Reserved.</span>
                    <div className="links mt-2 mt-md-0">
                        <a href="#" className="me-3">Privacy Policy</a>
                        <a href="#">Terms and Conditions</a>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer