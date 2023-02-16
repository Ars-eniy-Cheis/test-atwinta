import React from 'react';

import { StandardProps } from '../../../types';

const ListItem = ({
    children
}: StandardProps) => {
    return (
        <li className='text-lg mb-5 text-zinc-500'>
            {children}
        </li>
    )
}

export default ListItem;