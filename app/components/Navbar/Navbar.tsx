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
      { title: "Inserate", link: "/angebote/inserate" },
    ],
  },
  { title: "Immobilien", link: "/immobilien" },
  { title: "Über uns", link: "/ueber-uns" },
  { title: "Kontakt", link: "/kontakt" },
];

export const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 container mx-auto lg:my-3 z-10 scroll-auto">
      <div className="navbar-start">
        <NavLink to="/">
          <img
            src={logo}
            alt="Wasescha Immobilien Logo"
            className="w-[160px] ml-1 lg:w-[200px]"
          />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{renderMenuList(menu)}</ul>
      </div>

      <div className="hidden lg:flex navbar-end">
        <NavLink
          to={"/marktwertrechner"}
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
            className="menu dropdown-content shadow bg-base-100 rounded-box w-auto"
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

            <ul className="menu dropdown-content shadow rounded-box w-auto invisible lg:visible p-2 bg-base-100">
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
                        className="invisible lg:visible p-2 bg-base-100"
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
            <div className="text-bold m-4">{item.title}</div>
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
                        <span className="ml-10">{subItem.title}</span>
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
                              <span className="ml-20">{subSubItem.title}</span>
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
                    <span className="ml-10">{subItem.title}</span>
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
