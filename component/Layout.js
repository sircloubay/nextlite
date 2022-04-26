import Head  from "next/head";
import Navbar from "./Navbar";

const Layout = ({children}) => {
  return (
    <div className="content">
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous" />
      </Head>
      <Navbar />
      <div className="wrap">
        {children}
      </div>

    </div>
  );
}
 
export default Layout;