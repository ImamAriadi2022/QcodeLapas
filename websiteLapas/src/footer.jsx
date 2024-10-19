import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Library react-icons

const Footer = () => {
    return (
        <footer className=" pt-5 pb-4" id="footer">
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">
                    {/* Brand and Description */}
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold ">Laporan Pos Menara</h5>
                        <p>Web ini bertujuan sebagai solusi kreatif dalam pengumpulan data laporan pos menara dan untuk melihat pegawai yang ada</p>
                    </div>

                    {/* Useful Links */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold ">Links</h5>
                        <p>
                            <a href="#!" className="" style={{ textDecoration: 'none' }}>Home</a>
                        </p>
                        <p>
                            <a href="#!" className="" style={{ textDecoration: 'none' }}>Laporkan</a>
                        </p>
                        <p>
                            <a href="#!" className="" style={{ textDecoration: 'none' }}>hubungi saya</a>
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold ">Contact</h5>
                        <p>
                            <i className="fas fa-home mr-3"></i> alamat saya
                        </p>
                        <p>
                            <i className="fas fa-envelope mr-3"></i> email saya
                        </p>
                        <p>
                            <i className="fas fa-phone mr-3"></i> +6239423049
                        </p>
                    </div>

                    {/* Social Media Links */}
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold ">Sosial Media Saya</h5>
                        <div>
                            <a href="https://facebook.com" className="text-light me-4">
                                <FaFacebookF size={24} />
                            </a>
                            <a href="https://twitter.com" className="text-light me-4">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://instagram.com" className="text-light me-4">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://linkedin.com" className="text-light me-4">
                                <FaLinkedinIn size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="my-3" />

                <div className="row align-items-center">
                    <div className="col-md-7 col-lg-8">
                        <p>© 2024 CreativeBraind.dev</p>
                    </div>

                    <div className="col-md-5 col-lg-4">
                        <div className="text-center text-md-right">
                            <a href="https://facebook.com" className="text-light me-4">
                                <FaFacebookF />
                            </a>
                            <a href="https://twitter.com" className="text-light me-4">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com" className="text-light me-4">
                                <FaInstagram />
                            </a>
                            <a href="https://linkedin.com" className="text-light me-4">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
