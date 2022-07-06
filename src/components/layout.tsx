import { FC } from 'react'
import Header from './header'
import Footer from './footer'

interface props {
    children: any
}

const Layout:FC<props> = ({ children }) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <main className='flex-grow'>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;