import { createBrowserHistory } from "history";
import { useState } from "react";
import { useLocation } from "react-router-dom";

type StringOrNumber = string | number;

function useUrl(
  param: string,
  defaultValue: StringOrNumber = ""
): [StringOrNumber, (val: StringOrNumber) => void] {
  const history = createBrowserHistory();
  const { search, pathname } = useLocation();
  const url = new URLSearchParams(search);

  const urlParam = url.get(param);
  const parsed = Number(urlParam);
  const [value, setValue] = useState<StringOrNumber>(
    urlParam !== null ? (isNaN(parsed) ? urlParam : parsed) : defaultValue
  );

  function _setValue(val: StringOrNumber) {
    url.set(param, val.toString());
    history.replace({ pathname, search: url.toString() });
    setValue(val);
  }

  return [value, _setValue];
}

export { useUrl };
