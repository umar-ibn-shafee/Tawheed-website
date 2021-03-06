import Image from 'next/image'

const footer = () => {
    return (
        <div className='relative'>
            <footer className='h-80 px-12 py-4 bg-primary'>
                <div className='grid grid-row-5 gap-4 h-full'>
                    <div className='row-end-6 row-span-1 p-4 w-max'>
                        <Image src="/logo-horizontal.png" alt="Masjid-e-Tawheed Logo" width={250} height={100} />
                    </div>
                </div>
                <div className='absolute inset-x-0 bottom-0 py-2 border-t-2 border-primary_hard text-xs text-center'>
                    <p>Copyright © 2022 Masjid-e-Tawheed. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default footer;