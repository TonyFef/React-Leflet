import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FunctionComponent = () => (
    <nav>
        <div className="nav-wrapper purple darken-2 px1">
            <a href="/" className="logo">Leaflet map</a>
            <ul className="right hide-on-med-and-down">
                <li>
                    <NavLink to="/">Карта</NavLink>
                </li>
                <li>
                    <NavLink to="/popups">Добавить маркер</NavLink>
                </li>
                <li>
                    <NavLink to="/list">Список маркеров</NavLink>
                </li>
            </ul>
        </div>
    </nav>
);
