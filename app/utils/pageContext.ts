import { createContext, useContext } from "react";
import type { Page } from "~/page.server";

export const PageContext = createContext<null | Page[]>(null);

export function usePage(): Page[] {
  const pages = useContext(PageContext);

  if (!pages) {
    throw new Error(
      "page can not be null, did you forget to provide the PageContext?"
    );
  }
  return pages;
}
