import React from "react";
import '../App.css';

function Header() {

    return (
        <div className="HeaderWrapper">
            <div className="Header">
                <div className="HeaderTitle">
                    <h2>WeatherApp</h2>
                </div>
                <div className="CitiesNav">
                    <a href={"/?city=New York City"}><p><strong>New York City</strong></p></a>
                    <a href={"/?city=Los Angeles"}><p><strong>Los Angeles</strong></p></a>
                    <a href={"/?city=Incheon"}><p><strong>Incheon</strong></p></a>
                    <a href={"/?city=Hong Kong"}><p><strong>Hong Kong</strong></p></a>
                </div>
            </div>
        </div>
    )
}

export default Header;