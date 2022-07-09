import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    const styles = {
        mainBlock: "bg-primary px-32 py-6 sticky top-0 w-full flex justify-between items-center",
        subBlock1: "w-max p-2",
        subBlock2: "flex space-x-10 text-base font-semibold",
        navLinks: "hover:underline underline-offset-2 hover:text-secondary duration-300 rounded-lg drop-shadow-xl decoration-secondary decoration-4 p-2"
    }
    return (
        <nav className={styles.mainBlock}>
            <div className={styles.subBlock1}>
                <Link href='/'>
                    <a>
                        <Image src="/logo-horizontal.png" alt="Masjid-e-Tawheed Logo" width={190} height={70} ></Image>
                    </a>
                </Link>
            </div>
            <div className={styles.subBlock2}>
                <Link href='/services'>
                    <a className={styles.navLinks}>Services</a>
                </Link>
                <Link href='/about-us'>
                    <a className={styles.navLinks}>About Us</a>
                </Link>
                <Link href='/contact-us'>
                    <a className={styles.navLinks}>Contact Us</a>
                </Link>
            </div>
        </nav>
    );
}

export default Header;