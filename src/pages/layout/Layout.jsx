import React, { useState } from "react";
import { Navbar } from "../../components";

const Layout = () => {
  const [theme, setTheme] = useState(false);

  return (
    <div className={`App ${theme ? "dark" : "light"} h-screen`}>
      <header>
        <Navbar theme={theme} setTheme={setTheme} />
      </header>
    </div>
  );
};

export default Layout;
