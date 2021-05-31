import { useEffect } from "react";
const useCustomEffect = (link, setContent) => {
  useEffect(() => {
    fetch(link)
      .then((response) => response.json())
      .then((json) => setContent(json));
    //eslint-disable-next-line
  }, []);
};
export default useCustomEffect;
