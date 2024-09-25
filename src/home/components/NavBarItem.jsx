import { NavLink, useNavigate } from "react-router-dom";

function NavBarItem({ link }) {
  const navigateTo = useNavigate();
  const onIconClick = () => {
    navigateTo(link.path, { state: { targetId: link.name } });
  };

  return (
    <>
      <div
        onClick={onIconClick}
        className="mx-1 cursor-pointer
        hover:text-teal-500 opacity-100 flex justify-between 
        gap-x-10 sm:gap-x-1 "
      >
        <link.icon className="sm:hidden" />
        <NavLink className="w-28 sm:w-auto" to={link.path}>
          <span className="text-sm">{link.name.toUpperCase()}</span>
        </NavLink>
      </div>
    </>
  );
}

export default NavBarItem;
