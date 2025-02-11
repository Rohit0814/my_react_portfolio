import { Link, NavLink } from "react-router-dom";

export const MenuTab = ({icon,name,link}) => {
    return (
        <>
        <div className="text-amber-100 font-bold hover:cursor-pointer">
            <NavLink to={link} className={({isActive})=>`${isActive ? "text-blue-100" : "text-amber-100"}`}><i className={icon}></i><span className="px-1">{name}</span></NavLink>
        </div> 
        </>
    );
}