import { useRevalidator } from "@remix-run/react";
import { useEffect } from "react";

interface Options {
  enabled?: boolean;
}

export function useRevalidateOnFocus({ enabled = false }: Options) {
  let { revalidate } = useRevalidator();

  useEffect(
    function revalidateOnFocus() {
      if (!enabled) return;
      function onFocus() {
        revalidate();
      }
      window.addEventListener("focus", onFocus);
      return () => window.removeEventListener("focus", onFocus);
    },
    [enabled, revalidate]
  );

  useEffect(
    function revalidateOnVisibilityChange() {
      if (!enabled) return;
      function onVisibilityChange() {
        revalidate();
      }
      window.addEventListener("visibilitychange", onVisibilityChange);
      return () =>
        window.removeEventListener("visibilitychange", onVisibilityChange);
    },
    [enabled, revalidate]
  );
}
