import { NavLink, useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";

import clsx from "clsx";
import logo from "./images/logo.svg";

type MenuProps = Array<{
  title: string;
  link?: string;
  subMenu?: Array<SubMenuProps>;
}>;

type SubMenuProps = {
  title: string;
  link?: string;
  subMenu?: Array<SubMenuProps>;
};

type NavbarProps = {
  className?: string;
};

export const menu = [
  {
    title: "Angebote",
    subMenu: [
      { title: "EASY-Verkauf", link: "/angebote/easy-verkauf/" },
      {
        title: "EXPERT-Verkauf",
        link: "/angebote/expert-verkauf/",
      },
      { title: "Konstenlose Schätzung", link: "/marktwertrechner/" },
      {
        title: "Finanzierung",
        link: "/angebote/finanzierung",
        subMenu: [
          {
            title: "Eigenheim",
            link: "/angebote/finanzierung/durch-eigenheim/",
          },
          {
            title: "Immobilienrettung",
            link: "/angebote/finanzierung/immobilienrettung/",
          },
          {
            title: "Zwangsversteigerung",
            link: "/angebote/finanzierung/zwangsversteigerung/",
          },
        ],
      },
    ],
  },
  // { title: "Immobilien", link: "/immobilien/" },
  { title: "Über uns", link: "/ueber-uns/" },
  { title: "Kontakt", link: "/kontakt-wo-sind-wir/" },
];

export const Navbar = (props: NavbarProps) => {
  const location = useLocation();
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const navbar = document.getElementById("navbar") as HTMLElement;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 80 && scrollTop > lastScrollTop) {
        navbar.style.top = "-80px";
      } else {
        navbar.style.top = "0";
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div
      id="navbar"
      className={clsx(
        "fixed top-0 shadow transition-all duration-300 h-[80px] z-20 w-full",
        props.className ? props.className : "bg-white"
      )}
    >
      <nav className="navbar items-center xl:pl-36 py-4">
        <div className="navbar-start">
          <NavLink to="/">
            <img
              src={logo}
              alt="Wasescha Immobilien Logo"
              className="ml-1 w-[160px] lg:w-[200px]"
            />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex md:ml-12">
          <ul className="menu menu-horizontal px-1">{renderMenuList(menu)}</ul>
        </div>

        <div className="navbar-end hidden lg:flex xl:pr-10">
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
                className="btn-secondary btn m-2"
              >
                Kostenlose Schätzung
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
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
              <span className="text-xl">{item.title}</span>
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
                    <li tabIndex={0} key={item.title + index + 3}>
                      <NavLink to={subItem.link || ""}>
                        <span className="text-xl">{subItem.title}</span>
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
                                  <span className="text-xl">
                                    {subSubItem.title}
                                  </span>
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
                  <>
                    <li key={subItem.title + index + 3}>
                      <NavLink
                        to={subItem.link || ""}
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        <span className="text-xl">{subItem.title}</span>
                      </NavLink>
                    </li>
                  </>
                );
              })}
            </ul>
          </li>

          {/* Mobile menu */}
          <div className="flex-inline flex-wrap lg:hidden mt-10 sm:mt-0">
            {item.subMenu.map((subItem, index) => {
              if (subItem.subMenu?.length) {
                return (
                  <div
                    key={index + 100}
                    className="flex-inline flex-wrap lg:hidden"
                  >
                    <li key={subItem.title + index + 1000}>
                      <NavLink
                        to={subItem.link || ""}
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        <span className="text-xl">{subItem.title}</span>
                      </NavLink>
                    </li>
                    {subItem.subMenu.map((subSubItem, index) => {
                      return (
                        <>
                          <li key={subSubItem.title + index + 20000}>
                            <NavLink
                              to={subSubItem.link || ""}
                              style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                              }
                            >
                              <span className="text-xl">
                                {subSubItem.title}
                              </span>
                            </NavLink>
                          </li>
                        </>
                      );
                    })}
                  </div>
                );
              }
              return (
                <li key={subItem.title + index + 30000}>
                  <NavLink
                    to={subItem.link || ""}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    <span className="text-xl">{subItem.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </div>
        </>
      );
    }
    return (
      <li key={item.title + index + 50000}>
        <NavLink
          to={item.link || ""}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <span className="text-xl">{item.title}</span>
        </NavLink>
      </li>
    );
  });
}
