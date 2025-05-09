import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <nav className="NavBar">
                <ul className="nav-left">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Services</a></li>
                </ul>
                <a href="http://localhost:5173">
                    <div className="logo-container ">
                        <div className="logo-svg">{
                            <svg viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="180" cy="180" r="180" fill="#199B74"/>
                                <circle cx="179.5" cy="179.5" r="173.5" fill="#D9D9D9"/>
                                <path d="M6 180L353 180" stroke="#199B74" stroke-width="6" stroke-linecap="round"/>
                                <path d="M180 6V180" stroke="#199B74" stroke-width="6" stroke-linecap="round"/>
                                <path d="M94 26V112" stroke="#199B74" stroke-width="6" stroke-linecap="round"/>
                                <path d="M183 0V0C280.754 0 360 79.2456 360 177V177H183V0Z" fill="#D9D9D9"/>
                                <path d="M94 97L111.321 112H76.6795L94 97Z" fill="#199B74"/>
                                <path d="M76 38V90" stroke="#199B74" stroke-width="4" stroke-linecap="round"/>
                                <path d="M76 81L87.2583 89.9375H64.7417L76 81Z" fill="#199B74"/>
                                <path d="M119 16V82" stroke="#199B74" stroke-width="5" stroke-linecap="round"/>
                                <path d="M119 70L131.99 81.25H106.01L119 70Z" fill="#199B74"/>
                                <line x1="180.5" y1="355" x2="180.5" y2="285" stroke="#199B74" stroke-width="5"/>
                                <ellipse cx="179.5" cy="272" rx="47.5" ry="13" fill="#199B74"/>
                                <line x1="238" y1="346" x2="238" y2="309" stroke="#199B74" stroke-width="4"/>
                                <line x1="208" y1="356" x2="208" y2="309" stroke="#199B74" stroke-width="4"/>
                                <line x1="250" y1="338" x2="250" y2="300" stroke="#199B74" stroke-width="4"/>
                                <line x1="219" y1="338" x2="219" y2="300" stroke="#199B74" stroke-width="4"/>
                                <path d="M217.003 300L252.003 300L240.003 308.999L206.004 309L217.003 300Z" fill="#199B74"/>
                                <path d="M252.003 300L254.5 262L237 269.5L240.003 308.999L252.003 300Z" fill="#199B74"/>
                                <path d="M180.5 180V99.0526C224.507 100.597 259.903 135.993 261.447 180H180.5Z" fill="#D9D9D9" stroke="#199B74" stroke-width="6"/>
                                <path d="M180 180V123.074C210.75 124.588 235.412 149.251 236.926 180H180Z" fill="#D9D9D9" stroke="#199B74" stroke-width="6"/>
                                <path d="M180 180V142.108C200.252 143.573 216.427 159.748 217.892 180H180Z" fill="#D9D9D9" stroke="#199B74" stroke-width="6"/>
                                <path d="M224 135.652L266.439 93.2384" stroke="#199B74" stroke-width="4" stroke-linecap="round"/>
                                <path d="M221 138.594L243.961 83.161" stroke="#199B74" stroke-width="5" stroke-linecap="round"/>
                                <path d="M224 138.613L279.433 115.652" stroke="#199B74" stroke-width="4" stroke-linecap="round"/>
                                <path d="M242.18 78.5564C244.683 74.9157 248.096 71.9936 252.078 70.0809V70.0809L234.27 113.073L226.832 109.992L240.5 81L242.18 78.5564Z" fill="#199B74"/>
                                <path d="M276.001 98C268.727 104.715 260.501 102 259.001 100.5C257.686 99.1849 255 91.0001 262 84.0001C267 79.0005 276.001 78 279.001 81C282.001 84.0001 282.501 92 276.001 98Z" fill="#199B74"/>
                                <path d="M268.913 119.879C267.857 117.328 269.068 114.403 271.619 113.346L283.603 108.383C284.113 108.171 284.698 108.414 284.909 108.924L287.971 116.315C288.182 116.825 287.94 117.41 287.43 117.621L275.446 122.585C272.895 123.642 269.97 122.43 268.913 119.879V119.879Z" fill="#199B74"/>
                                <path d="M275.619 114.197L285.619 110.075" stroke="#DBD9D5" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M276 117.122L294 110" stroke="#DBD9D5" stroke-width="1.75" stroke-linecap="round"/>
                                <path d="M278 119.122L288 115" stroke="#DBD9D5" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M85 180L85 328" stroke="#199B74" stroke-width="6" stroke-linecap="round"/>
                                <path d="M108.503 182.998L108.503 340.002" stroke="#199B74" stroke-width="6" stroke-linecap="round"/>
                                <path d="M47.5 295.5L47.5 179.992" stroke="#199B74" stroke-width="6" stroke-linecap="round"/>
                                <path d="M107 243H16" stroke="#199B74" stroke-width="6" stroke-linecap="round"/>
                            </svg>
                            }
                        </div>
                    </div>
                </a>

                <ul className="nav-right">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Services</a></li>
                </ul>
            </nav>
        </header>

    );
};

export default Header;