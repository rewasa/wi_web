import { Link, useLocation } from "@remix-run/react";

export const Breadcrumbs = () => {
  const location = useLocation();

  return (
    <div className="container breadcrumbs mx-auto flex text-sm">
      <ul>
        <li>
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
              />
            </svg>
          </Link>
        </li>
        {location.pathname.split("/").map((path, index) => {
          if (path === "") return null;
          const link = location.pathname
            .split("/")
            .slice(0, index + 1)
            .join("/");

          return (
            <li key={index}>
              <Link to={link}>{path.toUpperCase()}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
