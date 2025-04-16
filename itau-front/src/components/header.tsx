"use client"
import Image from 'next/image';
import Logo from '@/assets/logo.svg';
import Arrow from '@/assets/arrow-down.svg';
import IconUser from '@/assets/icon-user.svg';
import 'boxicons/css/boxicons.min.css';


import { ItemMenu } from './itemMenu';
import { Search } from './search';
import { Container } from './container';
import { useState } from 'react';

export function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return(
        <header className='relative lg:items-center w-full h-20 bg-primary-orange'>
            <div className='absolute top-0 right-0 bg-primary-blue md:w-[22%] h-full z-0'></div>

            <Container>
                <div className='flex flex-1 items-center justify-between'>
                    <div className='flex mr-72 mt-2 gap-6 lg:mr-0 lg:mt-0 lg:items-center lg:gap-14'>
                        <Image
                            src={Logo}
                            alt="Logo"
                        />

                        <ul className='hidden md:flex items-center gap-12'>
                            <li>
                               <ItemMenu
                                    name='Para Você'
                               />
                            </li>
                            <li>
                               <ItemMenu
                                    name='Para Empresas'
                               />
                            </li>
                            <li>
                               <ItemMenu
                                    name='Serviços'
                               />
                            </li>
                            <li>
                               <ItemMenu
                                    name='Ajuda'
                               />
                            </li>
                        </ul>


                        <button className='md:hidden 'onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <i className='bx bx-menu  text-4xl text-white'></i>
                        </button>

                        <div className={`absolute md:hidden top-[90px] left-0 pb-5 w-full bg-primary-orange flex flex-col items-center gap-6 transform transition-transform ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                        
                        style={{ transition: '0.3s ease', opacity: isMenuOpen ? 1 : 0 }}   
                        
                        >
                            

                            <li className='hover:bg-orange-400 p-3 rounded-md transition-all list-none w-full flex justify-center'>
                               <ItemMenu
                                    name='Para Você'
                                    />
                            </li>
                            <li className='hover:bg-orange-400 p-3 rounded-md transition-all list-none w-full flex justify-center'>
                               <ItemMenu
                                    name='Para Empresas'
                                    />
                            </li>
                            <li className='hover:bg-orange-400 p-3 rounded-md transition-all list-none w-full flex justify-center'>
                               <ItemMenu
                                    name='Serviços'
                                    />
                            </li>
                            <li className='hover:bg-orange-400 p-3 rounded-md transition-all list-none w-full flex justify-center'>
                               <ItemMenu
                                    name='Ajuda'
                                    />
                            </li>
                            

                        </div>
                    </div>
                    
                    <Search/>
                </div>

                <button className=' flex rounded-full ml-56 -mt-12 p-5  h-14 pr-10 md:rounded-none items-center gap-4 bg-primary-blue md:pr-10 md:h-[83px] md:-mt-[60px] md:mr-[-400px] lg:mr-0  lg:mb-[-65px] z-10'>
                    <Image
                        src={IconUser}
                        alt='Icon User'
                    />
                    <span className='text-white font-bold'>Acessar Conta</span>
                </button>
            </Container>
        </header>
    )
}