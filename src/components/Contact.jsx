import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import contactImage from '../assets/contact.svg'
import toast from 'react-hot-toast';

const Contact = ({ contact }) => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if(form.current.user_name.value === "" || form.current.user_email.value === "" || form.current.message.value === "") {
            toast.error('Fill the details completely')
            return
        }

        emailjs
            .sendForm("service_3vf5c6b", "template_hg36cvb", form.current, {
                publicKey: "LAb9TzhV5s1NAzef-",
            })
            .then(
                () => {
                    toast.success('Message sent successfully');
                    form.current.reset();
                },
                (error) => {
                    toast.error('Message not sent...Try again after some time')
                    form.current.reset();
                },
            );
    };


    return (
        <div className='mt-24 md:mt-36 font-notosans'>
            <div data-aos="zoom-in" data-aos-duration="1000" ref={contact} className='text-[#eef065] text-3xl md:text-5xl text-center'>
                Contact
            </div>

            {/* Form for contact form */}
            <div className='flex flex-col md:flex-row'>
                <div data-aos="fade-right" data-aos-duration="1000">
                    <img src={contactImage} className='w-72 md:w-7/12 m-auto mt-10 md:mt-20' />
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" className='flex justify-center'>
                    <form ref={form} onSubmit={sendEmail} className='mt-10 md:mt-20 flex flex-col gap-y-3'>
                        <input name='user_name' type='text' placeholder='Your Name' className='border-2 border-[#eef065] w-72 md:w-96 h-10 px-4 rounded-xl outline-none' />
                        <input name='user_email' type='email' placeholder='Your Email' className='border-2 border-[#eef065] w-72 md:w-96 h-10 px-4 rounded-xl outline-none' />
                        <textarea name='message' placeholder='Your Message' className='border-2 border-[#eef065] w-72 md:w-96 h-32 p-4 rounded-lg outline-none' />
                        <button className='border-2 border-[#eef065] bg-[#eef065] text-xl text-white font-bold px-6 py-2 rounded-full hover:scale-110 hover:transition hover:ease-in hover:duration-200'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact