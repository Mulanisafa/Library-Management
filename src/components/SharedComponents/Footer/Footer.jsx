import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
import { FaStreetView } from "react-icons/fa6";
import { BsTelephoneInbound } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        //bg-[url('https://i.ibb.co.com/5BP0sgK/th.jpg')] bg-cover text-white
        <div className="bg-[#008575] text-white">
            <div className='w-4/5 mx-auto py-20'>
                <div className='grid-cols-2 my-5 gap-10 max-md:grid-cols-1 max-sm:grid-cols-1 grid items-center'>
                    <div className='grid grid-cols-3 gap-10 max-md:grid-cols-1 max-sm:grid-cols-1'>
                        <div>
                            <h3 className='text-2xl font-semibold'>General Information</h3>
                            <ul className='mt-4 flex flex-col gap-3 text-[16px] font-semibold'>
                                <li><Link to='/contact-us'>Contact Us</Link></li>
                                <li><Link to='/privacy'>Privacy Policy</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold'>Library Services</h3>
                            <ul className='mt-4 flex flex-col gap-3 font-semibold text-[16px]'>
                            <li><Link to='/books'>Find Books</Link></li>

                                <li><Link to='/suggest-book'>Suggest A Book</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold'>User Support</h3>
                            <ul className='mt-4 flex flex-col gap-3 font-semibold text-[16px]'>
                                <li><Link to='/help-center'>Help Center</Link></li>
                                <li><Link to='/report'>Report an Issue</Link></li>
                                <li><Link to='/feedback'>Feedback</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='gap-10 items-center grid grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1'>
                        <div className='flex items-center'>
                            <ul className='flex lg:flex-row max-sm:flex-row md:flex-col gap-3 text-3xl cursor-pointer'>
                                <li className='p-3 rounded-full text-white  hover:bg-white hover:text-[#008575] transition-all'>
                                    <FaFacebook />
                                </li>
                                <li className='p-3 rounded-full text-white  hover:bg-white hover:text-[#008575] transition-all'>
                                    <FaSquareXTwitter />
                                </li>
                                <li className='p-3 rounded-full text-white  hover:bg-white hover:text-[#008575] transition-all'>
                                    <FaWhatsapp />
                                </li>
                                <li className='p-3 rounded-full text-white  hover:bg-white hover:text-[#008575] transition-all'>
                                    <FaThreads />
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h3 className='text-3xl font-bold'>Library MS LTD</h3>
                            <div className='flex gap-3 text-[16px] items-center'>
                                <span><FaStreetView /></span>
                                <span>KhanKhanaPur, RAJBARI</span>
                            </div>
                            <div className='flex gap-3 text-[16px] items-center'>
                                <span><FaLocationDot /></span>
                                <span>Dhaka, Bangladesh</span>
                            </div>
                            <div className='flex gap-3 text-[16px] items-center'>
                                <span><BsTelephoneInbound /></span>
                                <span>+880123123123</span>
                            </div>
                            <div className='flex gap-3 text-[16px] items-center'>
                                <span><MdEmail /></span>
                                <span>support@lbmsltd.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <br />
               <span className='text-center'>
               <p>© {new Date().getFullYear()} Library MS LTD. All rights reserved.</p>

               </span>
            </div>
        </div>
    );
};

export default Footer;
