import Image from 'next/image';
import Header_submenu from './Header_submenu';

const Header_bottom = () => {
    return (
        <div className="header-bottom">
            <div className="container header-bottom__container">
                <div className="header-bottom__box">
                    <Header_submenu />
                    <Image
                        src={'/assets/img/rehau-partners.svg'}
                        width={143}
                        height={19}
                    />
                </div>
                <div className="search">
                    <div className="container search__container">
                        <div className="search__box">
                            <form
                                className="search-form"
                                action="/search"
                                method="GET"
                            >
                                <input
                                    className="search-field"
                                    type="search"
                                    name="search"
                                    placeholder="Стоимость остекления квартиры..."
                                />
                                <button
                                    className="btn-search btn btn__dark"
                                    type="submit"
                                >
                                    Найти
                                </button>
                                <button
                                    className="search-close"
                                    type="button"
                                    aria-label="Закрыть панель поиска"
                                >
                                    <Image
                                        src={'/assets/img/icons/close.svg'}
                                        width={16}
                                        height={16}
                                    />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="subsections__btn subsections-btn">
                    <Image
                        src={'/assets/img/icons/list-ul.svg'}
                        width={16}
                        height={16}
                    />
                    <div className="subsections-btn__text">
                        Разделы страницы
                    </div>
                </div>
                <div className="header-bottom__subsections subsections"></div>
            </div>
        </div>
    );
};

export default Header_bottom;
