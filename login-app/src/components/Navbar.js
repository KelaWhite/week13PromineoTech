import React from 'react';

export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">Happy Cats</a>
        <ul>
            <li className="active">
                <a href="/home">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/catpanions">Companions</a>
            </li>
        </ul>
    </nav>
}