import React from 'react';

import Link from 'next/link';

import { LinkProps } from '../../../../types';

const TextLink = ({
    children,
    href = '/',
}: LinkProps) => {
    return (
        <>
            <Link href={href}>
                <b className='text-blue-400 hover:text-blue-300'>
                    {children}
                </b>
            </Link>
        </>
    )
}

export default TextLink;