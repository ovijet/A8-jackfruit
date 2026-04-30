import React from 'react';
import Image from 'next/image';

const page = () => {
    return (
        <div>
            <Image src="/sunLogo.png" alt="logo" width={100} height={100} />
        </div>
    );
};

export default page;