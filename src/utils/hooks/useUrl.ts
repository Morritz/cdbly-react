import { createBrowserHistory } from "history";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function useUrl(param: string, defaultValue: string = "") {
  const history = createBrowserHistory();
  const { search, pathname } = useLocation();
  const url = new URLSearchParams(search);

  const urlParam = url.get(param);
  const [value, setValue] = useState(
    urlParam !== null ? urlParam : defaultValue
  );

  function _setValue(val: string) {
    url.set(param, val);
    history.replace({ pathname, search: url.toString() });
    setValue(val);
  }

  return [value, _setValue];
}

export { useUrl };
