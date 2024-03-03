
import { useState } from 'react';

import Select from '../form/Select';
import Input from '../form/Input';
import TextArea from '../form/TextArea';
import Label from '../form/Label';

import gif from '../../assets/contact-us-animate.svg';

function Contact() {

    const [ dataContact, setDataContact ] = useState({
        name: '',
        email: '',
        description: '',
        options: '',
    });

    const message = `*Nome:* ${dataContact.name} \n*Email:* ${dataContact.email} \n*Categoria:* ${dataContact.options} \n*Descrição:* ${dataContact.description}`
    
    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setDataContact({ ...dataContact, [name]: value });
    };


    const handleSubmit = (e: any) => {
        
        e.preventDefault()
        
        const url = `https://wa.me/5585992043834?text=${encodeURIComponent(message)}`;   

        window.location.href = url;
        
        setDataContact({
            name: '',
            email: '',
            description: '',
            options: ''
        })
    };

    return(

        <div className="flex flex-wrap items-center font-gfs-didot p-10 justify-around bg-slate-blue h-auto">

            <div className="flex flex-col">

                <h1 className="p-5 items-center font-gfs-didot text-4xl text-center uppercase text-pessego transition-transform transform hover:scale-125"> <span className="text-3xl text-orange "> contact me </span> <br></br> by sending a message </h1>

                <img className="size-full sm:h-[50vh] md:h-[35vh] lg:h-[80vh] xl:h-[80vh]" src={gif} alt="Contact Me" />

            </div>

            <form className="flex flex-wrap flex-col">

                <Label
                    text="Name"
                    name="name"
                />

                <Input 
                    name="name"
                    type="text"
                    placeholder="Write your name"
                    value={dataContact.name}
                    onChange={handleChange}
                />

                <Label
                    text="Email"
                    name="email"
                />

                <Input 
                    name="email"
                    type="email"
                    placeholder="Write your email"
                    value={dataContact.email}
                    onChange={handleChange}
                />

                <Label
                    text="Category"
                    name="category"
                />

                <Select
                    name="category_name"
                    value={dataContact.options}
                    onChange={handleChange}
                />

                <Label
                    text="Description"
                    name="description"
                />

                <TextArea
                    name='description' 
                    placeholder='Write your message...'
                    value={dataContact.description}
                    onChange={handleChange}
                />
            
                <a 
                type='submit' 
                href="/contact"
                onClick={handleSubmit}
                className="w-[30vw] sm:w-[25vw] sm:ml-24 sm:p-3 ml-24 md:w-[20vw] md:ml-20 md:p-4 lg:w-[10vw] lg:p-2 lg:ml-32 p-2 text-orange border-2 border-solid bg-slate-blue border-orange rounded-xl text-center items-center hover:bg-gray/25" 
                >
                Send
                </a>

            </form>

        </div>

    )
}

export default Contact;