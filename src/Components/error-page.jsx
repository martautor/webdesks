

import { useRouteError } from "react-router-dom";
import Appbar from "./appbar";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    
    <div id="error-page">
      <Appbar/>
      <h1>404</h1>
      <p>Страница не найдена.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

