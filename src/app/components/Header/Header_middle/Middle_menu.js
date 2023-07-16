'use client';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveMenu } from '@/Redax/menu/slices/mainMenuSlice';
import { useFetchMenuQuery } from '@/Redax/menu/menuAPI';
import Image from 'next/image';
import Link from 'next/link';

// Пример проброса пропсов для главного меню

const Middle_menu = () => {
    const { data: menuData, isLoading } = useFetchMenuQuery();
    const dispatch = useDispatch();
    const activeMenu = useSelector((state) => state.menu.activeMenu);

    const mouseEnter = (id) => {
        dispatch(setActiveMenu(id));
    };

    const view =
        menuData &&
        menuData.mainmenu.map((e) => {
            return (
                <li
                    key={e.id}
                    className="main-menu__item"
                    onMouseEnter={() => mouseEnter(e.id)}
                >
                    <Link
                        className={
                            activeMenu == e.id
                                ? 'main-menu__link active'
                                : 'main-menu__link'
                        }
                        href="#"
                    >
                        <Image src={e.imgLink} width={16} height={16} />
                        <span className="main-menu__item-text">
                            {e.nameItem}
                        </span>
                    </Link>
                </li>
            );
        });

    return (
        <ul
            className="header-middle__main-menu main-menu"
            data-da="mobile-menu__main-menu,1,880"
        >
            {!isLoading ? view : ''}
        </ul>
    );
};

export default Middle_menu;
