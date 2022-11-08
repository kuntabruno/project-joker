import * as React from 'react';
import Header from '../Header';

export default function Layout({ children }: { children: JSX.Element }) {

    return (
        <div className="flex flex-col w-screen h-screen">
        <Header/>
        <main>{ children }</main>
        </div>
    )
}