import React from 'react';

import Link from 'next/link';

import { LinkProps } from '../../../../types';

const NavBarLink = ({
    children,
    href = '/',
}: LinkProps) => {
    return (
        <>
            <Link href={href}>
                <b className='lg:inline-flex lg:w-auto h-full w-full px-3 py-5 text-white items-center justify-center hover:bg-stone-800 hover:text-white '>
                    {children}
                </b>
            </Link>
        </>
    )
}

export default NavBarLink;