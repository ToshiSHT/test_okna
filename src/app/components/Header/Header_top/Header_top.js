import Link from 'next/link';
const Header_top = () => {
    return (
        <div className="header-top">
            <div className="container header-top__container">
                <div
                    className="header-top__location location"
                    data-da="mobile-menu__region,1,768"
                >
                    <div className="location__city">
                        <span className="location__city-name">Москва</span>
                    </div>
                    <div
                        className="location__descr"
                        data-da="mobile-menu__slogan,1,992"
                    >
                        Пластиковые окна недорого в Москве — продажа и
                        установка!
                    </div>
                </div>
                <ul
                    className="header-top__menu top-menu"
                    data-da="mobile-menu__top-menu,1,768"
                >
                    <li className="top-menu__item">
                        <Link className="top-menu__link" href="#">
                            О&nbsp;компании
                        </Link>
                    </li>
                    <li className="top-menu__item">
                        <Link className="top-menu__link" href="#">
                            Доставка
                        </Link>
                    </li>
                    <li className="top-menu__item">
                        <Link className="top-menu__link" href="#">
                            Оплатить онлайн
                        </Link>
                    </li>
                    <li className="top-menu__item">
                        <Link className="top-menu__link" href="#">
                            Вакансии
                        </Link>
                    </li>
                    <li className="top-menu__item">
                        <Link className="top-menu__link" href="#">
                            Контакты
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Header_top;
