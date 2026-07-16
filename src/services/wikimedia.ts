import { Article } from "@/types/Article";

export const getFeaturedArticle = async (): Promise<Article> => {
  // using this as my reference material - https://www.sohamkamani.com/typescript/rest-http-api-call/

  // set the stage like the base url, data to grab, return data
  const day = new Date().getDate().toString().padStart(2, "0");
  const month = (new Date().getMonth() + 1).toString().padStart(2, "0");
  const year = new Date().getFullYear().toString();

  const today = year + "/" + month + "/" + day;

  const language = "en"; // English Wikipedia

  //   user agent needs to be a secret
  const wikmediaHeaders: Headers = new Headers();
  wikmediaHeaders.set("User-Agent", "appname/1.0 (email@gmail.com)");

  //   This works you can see it in the terminal output
  //   console.log(today);

  const url =
    "https://api.wikimedia.org/feed/v1/wikipedia/" +
    language +
    "/featured/" +
    today;

  const response = await fetch(url, {
    headers: wikmediaHeaders,
  });

  const data = await response.json(); // needs await

  // console.log(data);

  return data;
};
