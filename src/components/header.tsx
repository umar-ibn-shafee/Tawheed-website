import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <nav className="bg-[#f9f7f2] px-32 py-6 sticky top-0 w-full flex justify-between items-center">
            <div className='w-max p-2'>
                <Link href='/'>
                    <a>
                        <Image src="/logo-horizontal.png" alt="Masjid-e-Tawheed Logo" width={190} height={70} ></Image>
                    </a>
                </Link>
            </div>
            <div className='flex space-x-10 text-base font-semibold'>
                <Link href='/services'>
                    <a className='hover:underline underline-offset-2 hover:text-emerald-600 duration-300 rounded-lg drop-shadow-xl decoration-emerald-600 decoration-4 p-2'>Services</a>
                </Link>
                <Link href='/about-us'>
                    <a className='hover:underline underline-offset-2 hover:text-emerald-600 duration-300 rounded-lg drop-shadow-xl decoration-emerald-600 decoration-4 p-2'>About Us</a>
                </Link>
                <Link href='/contact-us'>
                    <a className='hover:underline underline-offset-2 hover:text-emerald-600 duration-300 rounded-lg drop-shadow-xl decoration-emerald-600 decoration-4 p-2'>Contact Us</a>
                </Link>
            </div>
        </nav>
    );
}

export default Header;