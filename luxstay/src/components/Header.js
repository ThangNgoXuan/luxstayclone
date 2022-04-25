import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {BiSearch} from "react-icons/bi"
import {AiOutlineCalendar} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {RiArrowUpSFill} from "react-icons/ri"

import logo from '../assets/image/logo.png'


const mainNav = [
    {
        display: "Guide",
        path: "/guide"
    },
    {
        display: "Host",
        path: "/host"
    },
    {
        display: "Đăng ký",
        path: "signup"
    },
    {
        display: "Đăng nhập",
        path: "signin"
    }
]

const Header = () => {
    const menuRight = useRef(null)

    const menuToggle = () => menuRight.current.classList.toggle("active")


    return (
        <>
        <div className="header">
            <div className="container">
                <div className="header__left">
                    <div className="header__left__logo"> 
                        <Link to="/">
                            <img src={logo}/>
                        </Link>
                    </div>
                    <div className="header__left__search">
                        <div className="header__left__search__input">
                            <BiSearch/>
                            <input
                                type='text'
                                placeholder="Tìm kiếm"
                            />
                        </div>
                        <div className="header__left__search__day">
                            <AiOutlineCalendar/>
                            Ngày
                        </div>
                        <div className="header__left__search__quantity">
                            <AiOutlineUser/>
                            Số khách
                        </div>
                        <div className="header__left__search__btn">
                            <BiSearch/> 
                        </div>
                    </div>
                </div>
                <div className="header__right">
                    <div className="header__right__menu">
                        {
                            mainNav.map((item, index) => (
                                <div
                                    key={index}
                                    className={`header__right__menu__item`}
                                    onClick={menuToggle}
                                >
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="header__right__currency">
                        vn VND <RiArrowUpSFill/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default Header