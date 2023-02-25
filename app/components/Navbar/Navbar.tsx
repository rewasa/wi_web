import { Link } from "@remix-run/react";
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
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {renderMenuList(menu)}
          </ul>
        </div>
        <Link to="/">
          <img
            src={logo}
            alt="Wasescha Immobilien Logo"
            className="w-[120px] md:w-[150px]  lg:w-[200px]"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{renderMenuList(menu)}</ul>
      </div>
      <div className="navbar-end">
        <Link
          to={"/immobilienbewertung"}
          className="btn btn-primary btn-xs lg:btn-md"
        >
          Kostenlose Schätzung
        </Link>
      </div>
    </nav>
  );
};

function renderMenuList(menu: MenuProps) {
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
          <ul className="p-2 bg-base-100">
            {item.subMenu.map((subItem) => {
              return (
                <li key={subItem.title}>
                  <Link to={subItem.link || ""}>{subItem.title}</Link>
                </li>
              );
            })}
          </ul>
        </li>
      );
    }
    return (
      <li key={item.title}>
        <Link to={item.link || ""}>{item.title}</Link>
      </li>
    );
  });
}
