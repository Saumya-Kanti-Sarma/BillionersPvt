import "./nav.css";
import React, { useEffect } from "react";
function Nav() {
    useEffect(() => {
        const navBtns = document.querySelectorAll('.navBtns');
        navBtns.forEach(btns => {
            btns.addEventListener('click', () => {
                btns.style.color = '#FF8A00';
            });
        });
    });
    return (
        <>

            <nav>
                <div className="logo-class">
                    <img src="/logo.png" />
                    <h1>Billioners Pvt.</h1>
                </div>
                <ul>
                    <a className="navBtns" href="/">Home</a>
                    <a className="navBtns" href="fobespage.html">Fobes</a>
                    <a className="navBtns" href="#">About</a>
                </ul>
                <div className="btn">
                    <button id="navbutton">Next <img src="/rightarrow.svg" alt="" /></button>
                </div>
            </nav>
        </>
    );
}
export default Nav;