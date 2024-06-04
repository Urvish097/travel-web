import React, { useEffect, useState } from 'react';
import shape from '../../Images/shape-1.webp';
import './Home1.css';
import Kown from '../../Known_us/Kown';
import banner from '../../Images/banner_img_1.webp';
import banner2 from '../../Images/banner-1.webp';
import Header from "../../Header/Header"
import Button from '../../Button/Button';
import { FaCalendarAlt, FaCheckCircle, FaPlay, FaSwimmer } from "react-icons/fa";
import { IoAirplane, IoLocationSharp } from 'react-icons/io5';
import { IoIosSearch } from 'react-icons/io';
import Card from '../../Card/Card';
import { Travel_card } from '../../Data/Data';
import airplane from '../../Images/icon1.webp';
import earth from '../../Images/icon2.webp';
import test from '../../Images/test1.webp';
import test2 from '../../Images/test2.webp';
import test3 from '../../Images/test3.webp';
import test4 from '../../Images/test4.webp';
import wc_1 from '../../Images/wc1.webp';
import wc_2 from '../../Images/wc2.webp';
import wc_3 from '../../Images/wc3 (1).webp';
import wc_4 from '../../Images/wc3.webp';
import mobile from '../../Images/ab2.webp';
import girl_boy from '../../Images/ab1.webp';
import playstore from '../../Images/g-play.webp';
import appstore from '../../Images/app.webp';
import { Link } from 'react-router-dom';

const Home1 = () => {

    return (
        <>
            <section className='sec_1 position-relative'>
                <div className='position-relative overflow-hidden baner_main'>
                    <Header />
                    <div className='mt-5 position-relative'>
                        <img src={shape} alt="" className='position-absolute shape_img ' />
                    </div>
                    <div className='container-fluid container-lg'>
                        <div className='row'>
                            <div className=' col-12 col-lg-7'>
                                <div className='ms-0 ms-lg-4 banner_main '>
                                    <div className='d-flex fade_in_animation justify-content-center justify-content-lg-start mb-4'>
                                        <Kown />
                                    </div>
                                    <div className='mt-1'>
                                        <h2 className='Travel urbanist black_color mb-4 fw-bolder w-100'>Travel, Enjoy And Live a New Full Life</h2>
                                        <p className='urbanist black_color mb-5 dummy_text' data-aos="fade-left" data-aos-duration="1000">We don’t just work with concrete and steel. We work with people We are Approachable, with even our highest work work with oncrete and steel. We work with people</p>

                                    </div>
                                </div>
                            </div>
                            <div className='d-flex btn_animation  gap-3 gap-lg-5 align-items-center text-center justify-content-lg-start justify-content-center'>
                                <div className='btn_iner' data-aos="fade-up" data-aos-duration="1000">
                                    <Button />
                                </div>
                                <div>
                                    <div className='d-flex gap-3 justify-content-center align-items-center' data-aos="fade-up" data-aos-duration="1000">
                                        <div className='video_player bg_blue d-flex justify-content-center align-items-center'>
                                            <FaPlay className='text-white fs-5' />
                                        </div>
                                        <p className='m-0 fw-bold urbanist play_demo'>Play Demo</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=''>
                                    <div className='banner_img2'>
                                        <img src={banner2} className='banner_img3' alt="" data-aos="zoom-in-down" data-aos-delay="100" data-aos-duration="500" />
                                    </div>
                                    <div className='position-absolute banner_img'>
                                        <img src={banner} alt="" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-center banner2 d-none'>
                            <img src={banner} className='w-100 ' alt="" />
                        </div>
                    </div>
                </div>
                <div className="container-lg container-fluid mt-0 mt-lg-5">
                    <div className='d-flex wtd_main  justify-content-between align-items-center mb-5' data-aos="fade-up" data-aos-duration="1000">
                        <div className='d-flex wtd_card border_r justify-content-between justify-content-lg-around align-items-center'>
                            <div className='ms-2'>
                                <h4 className='mb-1 urbanist fw-bold'>Loction</h4>
                                <p className='m-0 urbanist'>Where To Next?</p>
                            </div>
                            <div>
                                <div className='icon_loction d-flex justify-content-center align-items-center'>
                                    <IoLocationSharp className='fs-4' />
                                </div>
                            </div>
                        </div>
                        <div className='d-flex wtd_card justify-content-between justify-content-lg-around align-items-center'>
                            <div className='ms-2'>
                                <h4 className='mb-1 urbanist fw-bold'>Activity</h4>
                                <p className='m-0 urbanist'>Select Activity</p>
                            </div>
                            <div>
                                <div className='icon_loction d-flex justify-content-center align-items-center'>
                                    <FaSwimmer className='fs-4' />
                                </div>
                            </div>
                        </div>
                        <div className='d-flex wtd_card justify-content-between justify-content-lg-around align-items-center'>
                            <div className='ms-2'>
                                <h4 className='mb-1 urbanist fw-bold'>Date Form</h4>
                                <p className='m-0 urbanist'>Select Date</p>
                            </div>
                            <div>
                                <div className='icon_loction d-flex justify-content-center align-items-center'>
                                    <FaCalendarAlt className='fs-4' />
                                </div>
                            </div>
                        </div>
                        <div className='d-flex wtd_card justify-content-between justify-content-lg-around align-items-center'>
                            <div className='ms-2'>
                                <h4 className='mb-1 urbanist fw-bold'>Tour</h4>
                                <p className='m-0 urbanist'>Select Type</p>
                            </div>
                            <div>
                                <div className='icon_loction d-flex justify-content-center align-items-center'>
                                    <IoAirplane className='fs-4' />
                                </div>
                            </div>
                        </div>
                        <div className='gt_btn'>
                            <div className='hvr-sweep-to-left d-flex justify-content-center align-items-center'>
                                <IoIosSearch className='text-white fs-3 serach_icon' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='sec_2'>
                <div className='text-center justify-content-center d-flex mb-2'>
                    <Kown />
                </div>
                <h1 className='black_color fw-bold text-center Destinantions urbanist mb-5' data-aos="zoom-in-left">Top Destinantions</h1>
                <div className='container'>
                    <div className='row'>
                        {Travel_card.map((item) => (
                            <div className='col-lg-4 col-md-6 mb-4 mx-auto'>
                                <Card Travel_card={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='sec_3'>
                <div className='sec_3_bg'>
                    <div className='container-lg container-fluid'>
                        <div className='row sec_3_main'>
                            <div className='col-lg-6 mb-5'>
                                <div>
                                    <p className='mb-3 mb-lg-0 d-flex justify-content-center justify-content-lg-start'><Kown /></p>
                                    <p className='travel_exp black_color text-center text-lg-start urbanist mb-5' data-aos="zoom-in-right">Get the Best Travel Experience</p>
                                </div>
                                <div className='d-flex gap-4 mb-5 mb-md-4 air_hover_animation justify-content-center justify-content-md-between align-items-center ms-0 ms-md-3'>
                                    <div className='bg-white d-flex justify-content-center align-items-center plan_icon'>
                                        <img src={airplane} alt="" />
                                    </div>
                                    <div>
                                        <h3 className='black_color urbanist hotel fw-bold m-0'>Best of Hotel</h3>
                                        <p className='black_color urbanist hotel_Info'>We don’t just work with concrete and steel. We work We are Approachable, with even our highest</p>
                                    </div>
                                </div>
                                <div className='d-flex mb-5 mb-md-4 gap-4 air_hover_animation justify-content-center justify-content-md-between  align-items-center ms-0 ms-md-3'>
                                    <div className='bg-white d-flex justify-content-center align-items-center plan_icon'>
                                        <img src={earth} alt="" />
                                    </div>
                                    <div>
                                        <h3 className='black_color urbanist hotel fw-bold'>Friendly price</h3>
                                        <p className='black_color urbanist hotel_Info'>We don’t just work with concrete and steel. We work We are Approachable, with even our highest</p>
                                    </div>
                                </div>
                                <div className='d-block d-md-flex gap-2 ms-3 align-items-center'>
                                    <div className='mb-3 mb-md-0 text-center text-md-start'>
                                        <Button />
                                    </div>
                                    <div>
                                        <ul className='d-flex mb-0  justify-content-center justify-content-lg-start'>
                                            <li className='testers'>
                                                <img src={test} className='tester_img' alt="" />
                                            </li>
                                            <li className='testers'>
                                                <img src={test2} className='tester_img' alt="" />
                                            </li>
                                            <li className='testers'>
                                                <img src={test3} className='tester_img' alt="" />
                                            </li>
                                            <li className='testers'>
                                                <img src={test4} className='tester_img' alt="" />
                                            </li>
                                            <li className='testers'>
                                                50+
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='row'>
                                    <div className='col-md-6 col-12 places'>
                                        <div className='wc_img_1 wc_1 position-relative'>
                                            <img src={wc_1} alt="" />
                                            <span>America</span>
                                        </div>
                                        <div className='wc_img_1 wc_3 mb-4 mb-lg-0 position-relative'>
                                            <img src={wc_2} alt="" />
                                            <span>Asia</span>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-12 places'>
                                        <div className='wc_img_1 wc_2 position-relative'>
                                            <img src={wc_3} alt="" />
                                            <span>Africa</span>
                                        </div>
                                        <div className='wc_img_1 wc_4 position-relative'>
                                            <img src={wc_4} alt="" />
                                            <span>Europe</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='sec_4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='text-center mb-5'>
                                <div className='mobil_main text-center position-relative'>
                                    <div className='img_animation'>
                                        <img src={mobile} className='w-100' alt="" />
                                    </div>
                                    <div className='position-absolute girl_Img'>
                                        <img src={girl_boy} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div>
                                <div className='d-flex kown'>
                                <Kown />
                                </div>
                                <p className='offer black_color urbanist'>Get 5% off on your
                                    First app booking
                                    Travel with us</p>
                                <p className='black_color urbanist mb-5 dummy'>We don’t just work with concrete and steel. We work with peopleWe are
                                    Approachable, with even our highest work work with concrete and steel. We work with people</p>
                                <ul className='d-flex gap-2 m-0 mb-5 justify-content-between align-items-center p-0 wow_words_main'>
                                    <div className='w-50 li_center'>
                                        <li className='mb-2'>
                                            <div className='d-flex align-items-center'>
                                                <span><FaCheckCircle color='blue' className='fs-4 me-3' /></span>
                                                <span className='fw-bold  urbanist fs-5'>Generation Technology</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='d-flex align-items-center'>
                                                <span><FaCheckCircle color='blue' className='fs-4 me-3' /></span>
                                                <span className='fw-bold  urbanist fs-5'>Generation Technology</span>
                                            </div>
                                        </li>
                                    </div>
                                    <div className='w-50 li_center'>
                                        <li className='mb-2'>
                                            <div className='d-flex align-items-center'>
                                                <span><FaCheckCircle color='blue' className='fs-4 me-3' /></span>
                                                <span className='fw-bold  urbanist fs-5'>Audio Performance</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='d-flex align-items-center'>
                                                <span><FaCheckCircle color='blue' className='fs-4 me-3' /></span>
                                                <span className='fw-bold  urbanist fs-5'>Audio Performance</span>
                                            </div>
                                        </li>
                                    </div>
                                </ul>
                                <div className='btn_main d-flex flex-wrap gap-3 justify-content-center'>
                                    <Link className='playstore_btn'>
                                        <img src={playstore} alt="" />
                                    </Link>
                                    <Link className='playstore_btn'>
                                        <img src={appstore} alt="" />
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Home1