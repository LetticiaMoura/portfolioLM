
import Card from '../projects/Card';

import jogo from '../../assets/jogo_da_velha.png';
import notes from '../../assets/notes.png';
import secretWord from "../../assets/secretWord.png";
import clinica from "../../assets/clinica.png";
import ecommerce from "../../assets/ecommerce.png";

import { Modal } from '@mui/material';
import { useState } from 'react';

function Projects() {

    const [ openJogo, setOpenJogo ] = useState(false);
    const handleOpenJogo = () => setOpenJogo(true);
    const handleCloseJogo = () =>  setOpenJogo(false);

    const [ openNote, setOpenNote ] = useState(false);
    const handleOpenNote = () => setOpenNote(true);
    const handleCloseNote = () =>  setOpenNote(false);

    const [ openSecret, setOpenSecret ] = useState(false);
    const handleOpenSecret = () => setOpenSecret(true);
    const handleCloseSecret = () =>  setOpenSecret(false);
    
    const [ openClinica, setOpenClinica ] = useState(false);
    const handleOpenClinica = () => setOpenClinica(true);
    const handleCloseClinica = () =>  setOpenClinica(false);

    const [ openEcommerce, setOpenEcommerce ] = useState(false);
    const handleOpenEcommerce = () => setOpenEcommerce(true);
    const handleCloseEcommerce = () =>  setOpenEcommerce(false);


    return(

        <div className="h-auto bg-pessego font-gfs-didot md:p-20">

            <h1 className="text-4xl font-extrabold text-center font-gfs-didot p-5 text-slate950">My Projects</h1>

            {/*<h1 className="text-4xl text-center bg-slate-blue text-pessego h-15 p-3 rounded-md">Projects</h1>
            */}
            <div className="flex justify-around gap-11 p-10 pb-10 overflow-x-scroll scroll-smooth scrollbar-thin scrollbar-thumb-slate-950/10 scrollbar-track-pessego">

            <div className="flex-shrink-0 md:block lg:block xl:block cursor-pointer" >
                    
                <Card 
                    title='Digital Store'
                    img={ecommerce}
                    description='E-commerce Responsivo'
                    language='React | Typescript | Tailwind CSS'
                    onClick={handleOpenEcommerce}
                />
                
                <Modal
                    open={openEcommerce}
                    onClose={handleCloseEcommerce} 
                >
                    <iframe src="hhttps://letticiamoura.github.io/ecommerce-front/" className='pt-10 m-auto h-[95vh] w-[85vw] object-cover rounded-2xl' onClick={handleCloseNote}></iframe>
                </Modal>
                
            </div>  

            <div className="flex-shrink-0 md:block lg:block xl:block cursor-pointer" >
                    
                <Card 
                    title='Notes'
                    img={notes}
                    description='Responsive Notepad'
                    language='React | Typescript | Tailwind'
                    onClick={handleOpenNote}
                />
                
                <Modal
                    open={openNote}
                    onClose={handleCloseNote} 
                >
                    <iframe src="https://letticiamoura.github.io/NotesLM/" className='pt-10 m-auto h-[95vh] w-[85vw] object-cover rounded-2xl' onClick={handleCloseNote}></iframe>
                </Modal>
                
            </div>      

            <div className="flex-shrink-0 md:block lg:block xl:block cursor-pointer" >
                    
                <Card 
                    title='Clinica'
                    img={clinica}
                    description='Web system for booking appointments'
                    language='React | Tailwind'
                    onClick={handleOpenClinica}
                />
                
                <Modal
                    open={openClinica}
                    onClose={handleCloseClinica}
                >
                    <iframe src="https://letticiamoura.github.io/clinica/" className='pt-10 m-auto h-[95vh] w-[85vw] object-cover rounded-2xl'  onClick={handleCloseClinica}></iframe>
                </Modal>
                
            </div>

            {/**            OK          */}
            <div className="flex-shrink-0 md:block lg:block xl:block cursor-pointer" >
                    
                <Card 
                    title='Secret Word'
                    img={secretWord}
                    description='Secret Word'
                    language='React | Tailwind'
                    onClick={handleOpenSecret}
                />
                
                <Modal
                    open={openSecret}
                    onClose={handleCloseSecret} 
                >
                    <iframe src="https://letticiamoura.github.io/secretWord/" className='pt-10 m-auto h-[95vh] w-[85vw] object-cover rounded-2xl' onClick={handleCloseSecret}></iframe>
                </Modal>
                
            </div>

            {/**            OK          */}
            <div className="flex-shrink-0 md:block lg:block xl:block cursor-pointer">
                <Card
                    title='Tic Tac Toe'
                    img={jogo}
                    description='Simple tic tac toe'
                    language='HTML | CSS | Javascript'
                    onClick={handleOpenJogo}
                />
                
                <Modal
                    open={openJogo}
                    onClose={handleCloseJogo} 
                >
                <iframe src="https://letticiamoura.github.io/JogoDaVelha/" className='pt-10 m-auto h-[95vh] w-[85vw] object-cover rounded-2xl' onClick={handleCloseJogo}></iframe>
                </Modal>
                
            </div>

        </div>

        </div>

    )
}

export default Projects;