import { pages } from "../controllers/index";

const router =  (route) => {
  let content = document.getElementById("root");
  content.innerHTML = "";
  // console.log(route);
  switch (route) {
    case "#/": {
      return content.appendChild(pages.home());
    }
    default: {
      return content.appendChild(pages.notFound());
    }
  }

};

export { router };
