import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa6';


const Footer = () => {
    return (
        <footer className="pt-12 pb-6 w-full font-sans bg-white">
            <div className="w-[90%] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className='w-full flex flex-col gap-3 text-left'>
                        <p className='font-extrabold text-black text-[18px] flex items-center gap-2'>FEDOLAB</p>
                        <p>
                            As your partner in AI, software development, digital marketing, and mobile app development, we&apos;re committed to elevating your business beyond boundaries. Our team provides expert guidance and dedicated support, ensuring your journey from idea to implementation is seamless and successful.
                        </p>
                    </div>
                    <div className=''>
                        {/* Social Media Icons (Aligned to the right) */}
                        <div className="flex h-full space-x-6 items-end justify-start md:justify-end">
                            <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-gray-500 transition duration-150"><FaFacebookF size={25} /></a>
                            <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-gray-500 transition duration-150"><AiFillInstagram size={25} /></a>
                            <a href="#" aria-label="YouTube" className="text-gray-600 hover:text-gray-500 transition duration-150"><FaLinkedin size={25} /></a>
                        </div>

                    </div>
                </div>
                <hr className='w-full h-[0.5px] border-[#5756567D] my-5' />
                {/* Email Subscription and Social Icons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="">
                        <p className='text-sm'>Copyright &copy; {new Date().getFullYear()} FEDO LAB. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;