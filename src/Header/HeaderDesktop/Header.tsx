import { HeaderDesktop } from "./HeaderDesktop/HeaderDesktop";
import { HeaderTabletMobile } from "./HeaderTabletMobile/HeaderTabletMobile";
import './Header.scss';

export function Header() {
    return (
        <div className="header">
            <HeaderDesktop />
            <HeaderTabletMobile />
        </div>
    )
}