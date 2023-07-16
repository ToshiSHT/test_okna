'use client';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveSubMenu } from '@/Redax/menu/slices/mainMenuSlice';
import { useFetchMenuQuery } from '@/Redax/menu/menuAPI';
import Link from 'next/link';

const Header_submenu = () => {
    const { data: menuData } = useFetchMenuQuery();
    const dispatch = useDispatch();
    const activeMenu = useSelector((state) => state.menu.activeMenu);
    const activeSub = useSelector((state) => state.menu.activeSubMenu);
    if (!menuData || !activeMenu) return null;
    const activeSubMenu =
        menuData && menuData.mainmenu.find((menu) => menu.id == activeMenu);
    console.log(activeSubMenu);
    const mouseEnter = (id) => {
        dispatch(setActiveSubMenu(id));
    };
    const view =
        activeSubMenu &&
        activeSubMenu.sublinks.map((e) => {
            return (
                <li
                    key={e.id}
                    className="main-menu__submenu-item"
                    onMouseEnter={() => mouseEnter(e.id)}
                >
                    <Link
                        className={
                            activeSub == e.id
                                ? 'main-menu__submenu-link active'
                                : 'main-menu__submenu-link'
                        }
                        href="#"
                    >
                        {e.nameItem}
                    </Link>
                </li>
            );
        });
    return <ul className="main-menu__submenu">{view}</ul>;
};

export default Header_submenu;
