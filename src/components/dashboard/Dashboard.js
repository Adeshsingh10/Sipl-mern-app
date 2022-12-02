import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../common/Navbar'
// import SideImg from "../../Dashboard.svg"

const Dashboard = () => {
    return (
        <>
            <Navbar />

            <div>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/gas-masks-security-cane-corso-dogs-black-dog-1920x1080-986.jpg" className="d-block w-100" alt="..." height={910} width={1920} />
                            <div className="carousel-caption d-none d-md-block">
                                <Link to={"/gaming"} className='btn btn-outline-success mb-2'>Explore More</Link>
                                <h5>Games don't make you violent, lag does</h5>
                                <p>Nothing epic happens in real life, so I chose to be a gamer</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/black-dog-black-background-dark-amoled-cute-puppies-cute-dog-1920x1080-1505.jpg" className="d-block w-100" alt="..." height={910} width={1920} />
                            <div className="carousel-caption d-none d-md-block">
                            <button className='btn btn-outline-warning mb-2'>Explore More</button>
                                <h5>“Dogs do speak, but only to those who know how to listen”</h5>
                                <p>When the dog looks at you, the dog is not thinking what kind of a person you are</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/black-dog-cute-puppies-black-background-dark-amoled-5k-1920x1080-1507.jpg" className="d-block w-100" alt="..." height={910} width={1920} />
                            <div className="carousel-caption d-none d-md-block">
                            <button className='btn btn-outline-light mb-2'>Explore More</button>
                                <h5>Animals have come to mean so much in our lives</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </>
    );
};

export default Dashboard;