import { AppProps } from 'next/dist/next-server/lib/router/router';

import NavBar from "../components/CustomComponents/NavBar";

import React from 'react';
import Head from 'next/head';

import '../index.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <>
            <Head>
                <title>Тестовое задание</title>
            </Head>
            <NavBar />
            <main className='p-16'>
                <Component {...pageProps} />
            </main>
        </>
    );
};

export default MyApp;