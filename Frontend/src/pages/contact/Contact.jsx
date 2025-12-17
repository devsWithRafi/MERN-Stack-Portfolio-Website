import { BsFillCupHotFill } from 'react-icons/bs';
import SectionHeader from '../../components/SectionHeader';
import { RiContactsBook3Line } from 'react-icons/ri';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { FaMapLocationDot } from 'react-icons/fa6';
import ContactInfo from './ContactInfo';
import MapChittagong from '../../components/MapChittagong';
import FormInput, { FormTexarea } from '../../components/UI/formInputs';
import { RiArrowRightUpLine } from 'react-icons/ri';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import Modal from '../../components/Modal';
import { GoCheck } from 'react-icons/go';
import { RxCross2 } from 'react-icons/rx';
import { cn } from '../../Util/Util';

const Contact = () => {
    const form = useRef();
    const [errorMessage, setErrorMessage] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_7nclfln',
                'template_np71gkd',
                form.current,
                'NYY3Tp_5QHnSCP4jy'
            )
            .then(
                () => {
                    setErrorMessage(false);
                    setShowPopup(true);
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    setErrorMessage(true);
                    setShowPopup(true);
                }
            );
    };

    return (
        <section id="contact py-10">
            <SectionHeader icon={<BsFillCupHotFill />} title={'contact'} />
            {/* Top section */}
            <section id="contact" className="mt-10 flex flex-col gap-5">
                <div className="flex xl:flex-row lg:flex-col md:flex-row flex-col w-full items-center justify-between gap-5 dark:text-gray-400 text-gray-500">
                    {/* phone */}
                    <ContactInfo
                        textKey={'Phone'}
                        textValue={'+880 1316999517'}
                        icon={
                            <RiContactsBook3Line
                                size={35}
                                className="text-green"
                            />
                        }
                    />
                    {/* email */}
                    <ContactInfo
                        textKey={'Email'}
                        textValue={'devsaifulislamrafi@gmail.com'}
                        icon={
                            <MdOutlineMarkEmailRead
                                size={35}
                                className="text-green"
                            />
                        }
                    />
                </div>
                {/* location */}
                <div className="flex w-full items-center justify-between gap-5 h-[100px] dark:text-gray-400 text-gray-500">
                    <ContactInfo
                        textKey={'Address'}
                        textValue={'Chittagong, Bangladesh'}
                        icon={
                            <FaMapLocationDot
                                size={35}
                                className="text-green"
                            />
                        }
                    />
                </div>
                {/* live map location */}
                <div className="w-full sm:h-[450px] h-[300px] overflow-hidden mt-10 grayscale-[90]">
                    <MapChittagong />
                </div>
            </section>
            {/* Bottom section */}
            <section className="mt-20 w-full">
                <h1 className="sm:text-[30px] text-[20px] sm:mb-5 mb-10 font-medium flex sm:flex-row flex-col items-center gap-1">
                    <AiOutlineFundProjectionScreen className="text-green sm:text-[30px] text-[50px]" />
                    <p className="sm:text-left text-center">
                        Let's make your project brilliant!
                    </p>
                </h1>
                {/* form section */}
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="w-full flex flex-col gap-5"
                >
                    <div className="w-full flex sm:flex-row flex-col gap-5">
                        <FormInput placeholder={'Your Name'} name={'name'} />
                        <FormInput placeholder={'Your Email'} name={'email'} />
                    </div>
                    <div>
                        <FormTexarea
                            name={'message'}
                            placeholder={'Message'}
                            className={'sm:h-[200px] h-[120px]'}
                        />
                    </div>
                    {/* submit button */}
                    <button
                        type="submit"
                        className="bg-green flex items-center justify-center gap-2 w-[200px] h-[50px] rounded-full dark:text-gray-900 ease-in-out duration-300 hover:shadow-green/30 hover:shadow-lg hover:scale-[1.02]"
                    >
                        <p className="leading-3 font-medium">Send Message</p>
                        <RiArrowRightUpLine size={20} />
                    </button>
                </form>
                {/* success or error popup */}
                {showPopup && (
                    <Modal
                        closeModal={() => setShowPopup(false)}
                        className={
                            'w-[450px] dark:bg-white bg-white text-gray-400 relative overflow-hidden max-[490px]:w-[90%]'
                        }
                    >
                        <div className="flex flex-col items-center justify-center text-center relative">
                            {errorMessage ? (
                                <RxCross2 className="text-red-500 text-[80px] border-2 border-red-500/20 rounded-full p-2" />
                            ) : (
                                <GoCheck className="text-green text-[80px] border-2 border-green/20 rounded-full p-2" />
                            )}
                            <h2
                                className={cn(
                                    'uppercase text-green text-[20px] font-semibold mt-3',
                                    errorMessage && 'text-red-500'
                                )}
                            >
                                {errorMessage ? 'error' : 'success'}
                            </h2>
                            <p className="text-[18px] mt-5 text-zinc-800 font-medium">
                                {errorMessage
                                    ? 'Oops! Something went wrong. Please try again later.'
                                    : 'Thanks for your message!'}
                            </p>
                            {!errorMessage && (
                                <p className="text-[15px] mt-2 text-gray-500 font-font2">
                                    We’re on it and will get back to you via
                                    email as soon as possible with the best
                                    solution.
                                </p>
                            )}
                            <button
                                onClick={() => setShowPopup(false)}
                                className={cn(
                                    'mt-5 bg-green text-white shadow-md w-[170px] py-2 rounded-full font-medium hover:scale-[1.02] ease-in-out duration-300',
                                    errorMessage && 'bg-red-500'
                                )}
                            >
                                {errorMessage ? 'Try Again' : 'OK'}
                            </button>
                        </div>
                        {/* indicator */}
                        <span
                            className={cn(
                                'bg-green bottom-0 absolute left-0 h-[6px] w-full',
                                errorMessage && 'bg-red-500'
                            )}
                        ></span>
                    </Modal>
                )}
            </section>
        </section>
    );
};

export default Contact;
