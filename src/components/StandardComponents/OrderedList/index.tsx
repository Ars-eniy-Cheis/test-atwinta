import React from 'react';

import { StandardProps } from '../../../types';

const OrderedList = ({
    children
}: StandardProps) => {
    return (
        <ol className='mt-7 mb-20 list-decimal'>
            {children}
        </ol>
    )
}

export default OrderedList;