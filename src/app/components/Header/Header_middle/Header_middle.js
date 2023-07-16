import Image from 'next/image';
import Middle_menu from './Middle_menu';

const Header_middle = () => {
    return (
        <div className="header-middle">
            <div className="container header-middle__container">
                <a className="header-middle__logo header-logo" href="/">
                    <Image
                        src={'/assets/img/logo.svg'}
                        width={132}
                        height={38}
                    />
                </a>
                <Middle_menu />
                <ul
                    className="header-middle__secondary-menu secondary-menu"
                    data-da="mobile-menu__secondary-menu,1,1200"
                >
                    <li className="secondary-menu__item">
                        <a className="secondary-menu__link" href="#">
                            Акции
                        </a>
                    </li>
                    <li className="secondary-menu__item">
                        <a className="secondary-menu__link" href="#">
                            Цены
                        </a>
                    </li>
                    <li className="secondary-menu__item">
                        <a className="secondary-menu__link" href="#">
                            Калькулятор
                        </a>
                    </li>
                </ul>
                <div className="header-middle__box">
                    <a
                        className="header-middle__btn-phone header-btn-phone"
                        href="#"
                    >
                        <Image
                            src={'/assets/img/icons/telephone.svg'}
                            width={16}
                            height={16}
                        />
                        <span className="header-btn-phone__text">
                            Заказать звонок
                        </span>
                    </a>
                    <div className="header-middle__phone">
                        <span className="header-middle__phone-text">
                            Ежедневно с 9:00 до 21:00
                        </span>
                        <a
                            className="header-middle__phone-number"
                            href="tel:+7 495 154-21-16"
                        >
                            +7 495 154-21-16
                        </a>
                    </div>
                    <div className="header-middle__btns">
                        <button className="header-middle__btn header-middle__btn--search">
                            <Image
                                src={'/assets/img/icons/search.svg'}
                                width={16}
                                height={16}
                            />
                        </button>
                        <button className="header-middle__btn mobile-menu-btn burger__menu-btn js-burger jsMobileMenuBtnToggle">
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header_middle;
