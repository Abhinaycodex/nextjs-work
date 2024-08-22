import React from 'react';
import Link from 'next/link';

interface DashboardLayoutProps{
    children: React.ReactNode;
}


const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
    return (
        <>
           <nav className='bg-black text-pink-500  p-4 text-3xl flex justify-between items-center'>
            <h3>logo</h3>
            <ul className='flex items-center gap-8'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Login</li>
                
            </ul>
           </nav>

           <div className='flex'>
           <div className="h-screen bg-gray-900 w-[15vw] text-white">
            <ul className='p-4 text-2xl flex-col gap-5'> 
                <li> <Link href='/Dashboard'> Dashboard </Link>    </li>
                <li> <Link href='/Dashboard/Todos'> Todos </Link>   </li>
                <li> <Link href='/Dashboard/Users'> Users </Link>    </li>
                <li> <Link href='/Dashboard/profile'>profile</Link></li>
            </ul>
            </div>
            <div className='p-3 max-h-screen overflow-auto'> {props.children}</div>
           </div>

           
            
        </>
    );
};

export default DashboardLayout;
