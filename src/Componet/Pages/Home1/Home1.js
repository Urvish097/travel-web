import React, { useEffect, useRef, useState } from 'react';
import shape from '../../Images/shape-1.webp';
import './Home1.css';
import Kown from '../../Known_us/Kown';
import banner from '../../Images/banner_img_1.webp';
import banner2 from '../../Images/banner-1.webp';
import Header from "../../Header/Header"
import Button from '../../Button/Button';
import { FaArrowLeft, FaArrowRight, FaCalendarAlt, FaCheckCircle, FaPlay, FaSwimmer } from "react-icons/fa";
import { IoAirplane, IoClose, IoLocationSharp } from 'react-icons/io5';
import { IoIosArrowUp, IoIosSearch } from 'react-icons/io';
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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider_img from '../../Images/pv1.webp';
import slider_img2 from '../../Images/pv2.webp';
import slider_img3 from '../../Images/pv3.webp';
import slider_img4 from '../../Images/pv5.webp';
import Modal from 'react-modal';
import dubai_2 from '../../Images/ft1.webp';
import chef from '../../Images/ftv1.webp';
import { Travel_card_2 } from '../../Data/Data'
import Card_2 from '../../Card2/Card_2';
import Package_card from '../../Holiday_Package_Card/Package_card';
import { price_card } from '../../Data/Data';
import tajmahel from '../../Images/blg1.webp';
import Button_2 from '../../Button/Button_2';
import Team_card from '../../Team_card/Team_card';
import { team_card } from "../../Data/Data";
import sp1 from '../../Images/sp1.webp';
import sp2 from '../../Images/sp2.webp';
import sp3 from '../../Images/sp3.webp';
import sp4 from '../../Images/sp4.webp';
import sp5 from '../../Images/sp5.webp';
import sp6 from '../../Images/sp6.webp';
import ReviewsSlider from '../../Slider/ReviewsSlider';

const Home1 = () => {

    const progressBarRef = useRef(null);
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 4;

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    var settings = {
        dots: false,
        infinite: true,
        autoplaySpeed: 3000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        afterChange: (index) => {
            setCurrentSlide(index);
            resetProgressBar();
        }
    };

    var Slider2 = {
        slidesToShow: 3.5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        infinite: true,
        loop: true,
        pauseOnHover: true,
        mobileFirst: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1377,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1187,
                settings: {
                    slidesToShow: 2.5,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1.5,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 385,
                settings: {
                    slidesToShow: 0.8,
                }
            },
        ]
    }

    var slider3 = {
        autoplaySpeed: 3000,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    const resetProgressBar = () => {
        const progressBar = progressBarRef.current;
        if (progressBar) {
            progressBar.style.animation = 'none';
            void progressBar.offsetHeight;
            progressBar.style.animation = null;
        }
    };

    useEffect(() => {
        resetProgressBar();
    }, []);

    const openModal = (image) => {
        setSelectedImage(image);
        setModalIsOpen(true);
        document.body.classList.add('modal-open'); // Disable scrolling
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImage(null);
        document.body.classList.remove('modal-open'); // Enable scrolling
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    };

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 250) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <div className='scroll_btn d-flex justify-content-center align-items-center' onClick={scrollToTop}>
                    <IoIosArrowUp className='text-white fs-3' />
                </div>
            )}

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
                                    <div className='bg-white d-flex justify-content-center align-items-center plan_icon' data-aos="fade-right" >
                                        <img src={airplane} alt="" />
                                    </div>
                                    <div data-aos="fade-left">
                                        <h3 className='black_color urbanist hotel fw-bold m-0'>Best of Hotel</h3>
                                        <p className='black_color urbanist hotel_Info'>We don’t just work with concrete and steel. We work We are Approachable, with even our highest</p>
                                    </div>
                                </div>
                                <div className='d-flex mb-5 mb-md-4 gap-4 air_hover_animation justify-content-center justify-content-md-between  align-items-center ms-0 ms-md-3'>
                                    <div className='bg-white d-flex justify-content-center align-items-center plan_icon' data-aos="fade-right">
                                        <img src={earth} alt="" />
                                    </div>
                                    <div data-aos="fade-left">
                                        <h3 className='black_color urbanist hotel fw-bold'>Friendly price</h3>
                                        <p className='black_color urbanist hotel_Info'>We don’t just work with concrete and steel. We work We are Approachable, with even our highest</p>
                                    </div>
                                </div>
                                <div className='d-block d-md-flex gap-2 ms-3 align-items-center'>
                                    <div className='mb-3 mb-md-0 text-center text-md-start' data-aos="flip-up">
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
                                        <div className='wc_img_1 wc_1 position-relative' data-aos="fade-up-right" data-aos-duration="2000">
                                            <img src={wc_1} alt="" />
                                            <span>America</span>
                                        </div>
                                        <div className='wc_img_1 wc_3 mb-4 mb-lg-0 position-relative' data-aos="fade-up-left" data-aos-duration="2000">
                                            <img src={wc_2} alt="" />
                                            <span>Asia</span>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-12 places'>
                                        <div className='wc_img_1 wc_2 position-relative' data-aos="fade-up-right" data-aos-duration="2000">
                                            <img src={wc_3} alt="" />
                                            <span>Africa</span>
                                        </div>
                                        <div className='wc_img_1 wc_4 position-relative' data-aos="fade-up-left" data-aos-duration="2000">
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
                                <div className='mobil_main text-center position-relative' data-aos="fade-up" data-aos-duration="1500">
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
                                <p className='offer black_color urbanist' data-aos="zoom-in-up">Get 5% off on your
                                    First app booking
                                    Travel with us</p>
                                <p className='black_color urbanist mb-5 dummy' data-aos="flip-down">We don’t just work with concrete and steel. We work with peopleWe are
                                    Approachable, with even our highest work work with concrete and steel. We work with people</p>
                                <ul className='d-flex gap-2 m-0 mb-5 justify-content-between align-items-center p-0 wow_words_main'>
                                    <div className='w-50 li_center'>
                                        <li className='mb-2' data-aos="fade-right">
                                            <div className='d-flex align-items-center'>
                                                <span><FaCheckCircle color='blue' className='fs-4 me-3' /></span>
                                                <span className='fw-bold  urbanist fs-5'>Generation Technology</span>
                                            </div>
                                        </li>
                                        <li data-aos="fade-left">
                                            <div className='d-flex align-items-center'>
                                                <span><FaCheckCircle color='blue' className='fs-4 me-3' /></span>
                                                <span className='fw-bold  urbanist fs-5'>Generation Technology</span>
                                            </div>
                                        </li>
                                    </div>
                                    <div className='w-50 li_center'>
                                        <li className='mb-2' data-aos="fade-right">
                                            <div className='d-flex align-items-center'>
                                                <span><FaCheckCircle color='blue' className='fs-4 me-3' /></span>
                                                <span className='fw-bold  urbanist fs-5'>Audio Performance</span>
                                            </div>
                                        </li>
                                        <li data-aos="fade-left">
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

            <section className='sec_5'>
                <div className='container'>
                    <div className='row align-items-center mb-4'>
                        <div className='col-lg-6'>
                            <div className='kown_us'>
                                <Kown />
                            </div>
                            <p className='explore black_color urbanist' data-aos="flip-left" data-aos-duration="2000">Chose Your Favourite Date To Explore</p>
                        </div>
                        <div className='col-lg-6'>
                            <p className='dummy_text urbanist black_color' data-aos="flip-right" data-aos-duration="2000">We don’t just work with concrete and steel. We work people We are Approachable, with even our highest work work with concrete and steel. We work with people</p>
                        </div>
                    </div>
                </div>

                <div className='position-relative'>
                    <div className='position-relative slider_main'>
                        <div>
                            <Slider ref={sliderRef} {...settings}>
                                <div>
                                    <img className='w-100' src={slider_img} alt="" onClick={() => openModal(slider_img)} />
                                </div>
                                <div>
                                    <img className='w-100' src={slider_img2} alt="" onClick={() => openModal(slider_img2)} />
                                </div>
                                <div>
                                    <img className='w-100' src={slider_img3} alt="" onClick={() => openModal(slider_img3)} />
                                </div>
                                <div>
                                    <img className='w-100' src={slider_img4} alt="" onClick={() => openModal(slider_img4)} />
                                </div>
                            </Slider>
                            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Image Modal">
                                <IoClose onClick={closeModal} className='text-white fs-3 float-end' />
                                {selectedImage && <img src={selectedImage} alt="Selected" />}
                            </Modal>
                        </div>
                        <div className='container-lg container-fluid position-relative'>
                            <div className='photo_view'>
                                <div className='d-flex photo_view_inner flex-wrap align-items-center justify-content-between'>
                                    <div className='inner_1'>
                                        <h3 className='urbanist'>Famous Photo Gallery</h3>
                                        <p className='urbanist'>Click Photo To Large</p>
                                    </div>
                                    <div className='animation_loading me-5 d-none d-lg-block'>
                                        <div className='progres_bar' ref={progressBarRef}></div>
                                    </div>
                                    <div className='slide-counter text-white fw-bold fs-5 d-none d-md-block'>
                                        {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            className="slick_prev btn btn-light me-3"
                                            onClick={() => sliderRef.current.slickPrev()}
                                        >
                                            <FaArrowLeft />
                                        </button>
                                        <button
                                            type="button"
                                            className="slick_next btn btn-light"
                                            onClick={() => sliderRef.current.slickNext()}
                                        >
                                            <FaArrowRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='sec_6'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-lg-5'>
                            <div className='mt-5'>
                                <div className='d-flex justify-content-center justify-content-md-start'>
                                    <Kown />
                                </div>
                                <p className='travel mb-5 black_color text-center text-md-start  urbanist'>Travel place for Your & your Family</p>
                                <div className='mb-3 mt-4 mt-md-0'>
                                    <ul className='d-flex mb-0 p-0 ms-3 justify-content-center justify-content-md-start'>
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
                                <p className='black_color customer text-center text-md-start'>500K+ Happy Customer</p>
                            </div>
                        </div>
                        <div className='col-lg-7'>
                            <div className='d-flex left_main gap-5'>
                                <div className='dubai_img_main'>
                                    <img src={dubai_2} alt="" className='dubai_img' />
                                </div>
                                <div className='mt-5'>
                                    <p className='adventures black_color urbanist'>Waiting for adventures? Don’t miss them</p>
                                    <p className='dummy black_color urbanist'>We don’t just work with concrete and steel. We are Approachable, with even our highest concrete and steel. We work with people</p>
                                    <div className='exp_main d-flex align-items-center gap-2 mb-4'>
                                        <img src={chef} className='' alt="" />
                                        <p className='black_color urbanist exp'>We Have More than 10 year of experience</p>
                                    </div>
                                    <div>
                                        <div className='d-flex mb-2'>
                                            <span><FaCheckCircle color='blue' className='fs-4 me-3' /></span>
                                            <span className='fw-bold  urbanist fs-5'>Generation Technology</span>
                                        </div>
                                        <div className='d-flex mb-2'>
                                            <span><FaCheckCircle color='blue' className='fs-4 me-3' /></span>
                                            <span className='fw-bold  urbanist fs-5'>Generation Technology</span>
                                        </div>
                                        <div className='d-flex'>
                                            <span><FaCheckCircle color='blue' className='fs-4 me-3' /></span>
                                            <span className='fw-bold  urbanist fs-5'>Audio Performance</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='sec_7'>
                <div className='container'>
                    <div className='d-flex justify-content-center'>
                        <Kown />
                    </div>
                    <h1 className='black_color fw-bold text-center Destinantions urbanist' data-aos="zoom-in-left">Top Destinantions</h1>
                </div>
                <div className='sec_2'>
                    <Slider {...Slider2} className='overflow-hidden'>
                        {Travel_card_2.map((item) => (
                            <div>
                                <Card_2 Travel_card_={item} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

            <section className='sec_8'>
                <div className='bg_price'>
                    <div className='container-fluid container-xl'>
                        <div className='trip_pacage mb-4'>
                            <div className='d-flex justify-content-center '>
                                <Kown />
                            </div>
                            <h1 className='black_color fw-bold text-center Destinantions urbanist' data-aos="zoom-in-left">Best Holiday Package</h1>
                        </div>
                        <div className='row justify-content-center'>
                            {price_card.map((item) => (
                                <div className='col-md-6 col-lg-6 col-xl-4 mb-5'>
                                    <Package_card Package={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className='sec_9'>
                <div className='container-xl container-fluid'>
                    <div className='blog position-relative mb-5'>
                        <div>
                            <img src={tajmahel} className='w-100' alt="" />
                        </div>
                        <div className='d-flex justify-content-center align-items-center blog_text_main'>
                            <div className='blog_text'>
                                <h3 className='text-white blog_text urbanist mb-3'>Latest News & Articles From the Blog Posts</h3>
                                <p className='urbanist'>We're an award-winning, forward thinking, boutique digital & creative agency located in Edmonton, Canada.</p>
                                <Button_2 />
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        {team_card.map((item) => (
                            <div className='col-md-6 col-lg-4'>
                                <Team_card team={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='sec_10'>
                <div className='company_bg'>
                    <div className='container-lg container-fluid'>
                        <h3 className='urbanist mb-5 local_bus black_color text-center'>Trusted By local businesses</h3>
                        <div className=''>
                            <Slider {...slider3}>
                                <div>
                                    <img src={sp1} className='mx-auto' alt="" />
                                </div>
                                <div>
                                    <img src={sp2} className='mx-auto' alt="" />
                                </div>
                                <div>
                                    <img src={sp3} className='mx-auto' alt="" />
                                </div>
                                <div>
                                    <img src={sp4} className='mx-auto' alt="" />
                                </div>
                                <div>
                                    <img src={sp5} className='mx-auto' alt="" />
                                </div>
                                <div>
                                    <img src={sp6} className='mx-auto' alt="" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            <section className='sec_11 position-relative'>
                <div className='position-relative'>
                    <div className='bg_shape'> </div>
                    <div className='bg_shape_2'> </div>
                    <div className='container'>
                        <div className=''>
                            <div className='row'>
                                <div className='col-lg-5'>
                                    <div className='text-main'>
                                        <div className='mb-2'>
                                            <Kown />
                                        </div>
                                        <h3 className='urbanist black_color about'>What People Say About Us</h3>
                                        <p className='black_color urbanist dummy_text mb-4'>We don’t just work with concrete and steel. We are Approachable, with even our highest concrete and steel. We work with people</p>
                                        <Button />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    {/* <ReviewsSlider/> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home1;