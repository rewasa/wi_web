import { NavLink } from "@remix-run/react";
import logo from "./images/logo.svg";

type MenuProps = Array<{
  title: string;
  link?: string;
  subMenu?: Array<NavbarProps>;
}>;

type NavbarProps = {
  title: string;
  link?: string;
  subMenu?: Array<NavbarProps>;
};

const menu = [
  {
    title: "Angebote",
    subMenu: [
      {
        title: "Verkaufen",
        link: "/verkauf",
      },
      { title: "Finanzierung", link: "/finanzierung" },
      { title: "Inserate", link: "/inserate" },
    ],
  },
  { title: "Immobilien", link: "/immobilien" },
  { title: "Über uns", link: "/ueber-uns" },
  { title: "Kontakt", link: "/kontakt" },
];

export const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 container mx-auto lg:my-3 z-10">
      <div className="navbar-start">
        <NavLink to="/">
          <img
            src={logo}
            alt="Wasescha Immobilien Logo"
            className="w-[130px] md:w-[150px] lg:w-[200px]"
          />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{renderMenuList(menu)}</ul>
      </div>

      <div className="hidden lg:flex navbar-end">
        <NavLink
          to={"/immobilienbewertung"}
          className="btn btn-outline btn-xs lg:btn-md"
        >
          Kostenlose Schätzung
        </NavLink>
      </div>

      <div className="lg:hidden navbar-end">
        <div className="dropdown dropdown-bottom dropdown-left">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content shadow bg-base-100 rounded-box w-52"
          >
            {renderMenuList(menu)}
          </ul>
        </div>
      </div>
    </nav>
  );
};

function renderMenuList(menu: MenuProps) {
  const activeStyle = {
    backgroundColor: "bg-[#AD9A81]",
  };

  return menu.map((item, index) => {
    if (item.subMenu?.length) {
      return (
        <li tabIndex={index} key={index}>
          <div>
            {item.title}
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </div>
          <div className="flex flex-wrap ml-10 lg:hidden">
            {item.subMenu.map((subItem) => {
              return (
                <li key={subItem.title}>
                  <NavLink
                    to={subItem.link || ""}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    {subItem.title}
                  </NavLink>
                </li>
              );
            })}
          </div>
          <ul className="invisible lg:visible p-2 bg-base-100">
            {item.subMenu.map((subItem) => {
              return (
                <li key={subItem.title}>
                  <NavLink
                    to={subItem.link || ""}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    {subItem.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </li>
      );
    }
    return (
      <li key={item.title}>
        <NavLink
          to={item.link || ""}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          {item.title}
        </NavLink>
      </li>
    );
  });
}
