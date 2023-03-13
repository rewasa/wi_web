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

export const menu = [
  {
    title: "Angebote",
    subMenu: [
      {
        title: "Verkaufen",
        link: "/angebote/verkaufen",
      },
      {
        title: "Finanzierung",
        link: "/angebote/finanzierung",
        subMenu: [
          {
            title: "Eigenheim",
            link: "/angebote/finanzierung/durch-eigenheim",
          },
          {
            title: "Immobilienrettung",
            link: "/angebote/finanzierung/immobilienrettung",
          },
          {
            title: "Zwangsversteigerung",
            link: "/angebote/finanzierung/zwangsversteigerung",
          },
        ],
      },
      { title: "Inserierung", link: "/angebote/inserierung" },
    ],
  },
  { title: "Immobilien", link: "/immobilien" },
  { title: "Über uns", link: "/ueber-uns" },
  { title: "Kontakt", link: "/kontakt" },
];

export const Navbar = () => {
  return (
    <nav className="container navbar z-20 mx-auto items-center">
      <div className="navbar-start">
        <NavLink to="/">
          <img
            src={logo}
            alt="Wasescha Immobilien Logo"
            className="ml-1 w-[160px] lg:w-[200px]"
          />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{renderMenuList(menu)}</ul>
      </div>

      <div className="navbar-end hidden lg:flex">
        <NavLink to={"/marktwertrechner"} className="btn-outline btn-md btn">
          Kostenlose Schätzung
        </NavLink>
      </div>

      <div className="navbar-end lg:hidden">
        <div className="dropdown-bottom dropdown-left dropdown">
          <label tabIndex={0} className="btn-ghost btn">
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
            className="dropdown-content menu rounded-box min-w-[320px] bg-base-100 shadow"
          >
            {renderMenuList(menu)}
            <NavLink
              to={"/marktwertrechner"}
              className="btn-secondary btn-xs btn m-2"
            >
              Kostenlose Schätzung
            </NavLink>
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
        <>
          <li tabIndex={0} key={item.title + index + 2}>
            <div className="hidden lg:flex">
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

            <ul className="dropdown-content menu rounded-box invisible w-auto bg-base-100 p-2 shadow lg:visible">
              {item.subMenu.map((subItem, index) => {
                if (subItem.subMenu?.length) {
                  return (
                    <li tabIndex={0} key={item.title + index + 2}>
                      <NavLink to={subItem.link || ""}>
                        {subItem.title}
                        <svg
                          className="fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                      </NavLink>
                      <ul
                        key={index + 17}
                        className="invisible bg-base-100 p-2 lg:visible"
                      >
                        {subItem.subMenu.map((subSubItem, index) => {
                          return (
                            <>
                              <li key={subSubItem.title + index}>
                                <NavLink
                                  to={subSubItem.link || ""}
                                  style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                  }
                                >
                                  {subSubItem.title}
                                </NavLink>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </li>
                  );
                }
                return (
                  <li key={subItem.title + index + 3}>
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
          <div className="flex-inline flex-wrap lg:hidden">
            {item.subMenu.map((subItem, index) => {
              if (subItem.subMenu?.length) {
                return (
                  <div
                    key={index + 10}
                    className="flex-inline flex-wrap lg:hidden"
                  >
                    <li key={subItem.title + index}>
                      <NavLink
                        to={subItem.link || ""}
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        <span className="">{subItem.title}</span>
                      </NavLink>
                    </li>
                    {subItem.subMenu.map((subSubItem, index) => {
                      return (
                        <>
                          <li key={subSubItem.title + index}>
                            <NavLink
                              to={subSubItem.link || ""}
                              style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                              }
                            >
                              <span className="">{subSubItem.title}</span>
                            </NavLink>
                          </li>
                        </>
                      );
                    })}
                  </div>
                );
              }
              return (
                <li key={subItem.title + index}>
                  <NavLink
                    to={subItem.link || ""}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    <span className="">{subItem.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </div>
        </>
      );
    }
    return (
      <li key={item.title + index + 1}>
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
