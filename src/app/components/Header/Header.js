import Link from 'next/link';
import Image from 'next/image';
import Header_top from './Header_top/Header_top';
import Header_middle from './Header_middle/Header_middle';
import Header_bottom from './Header_bottom/Header_bottom';

const Header = () => {
    return (
        <div class="header">
            <Header_top />
            <Header_middle />
            <Header_bottom />
        </div>
    );
};

export default Header;
