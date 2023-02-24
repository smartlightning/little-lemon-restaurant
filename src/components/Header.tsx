import React from "react";

const navigationData = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/menu",
    title: "Menu",
  },
  {
    href: "/reservation",
    title: "Reservations",
  },
  {
    href: "/order",
    title: "Order-Online",
  },
  {
    href: "/login",
    title: "Login",
  },
];

const Header = () => {
  return (
    <header>
      <nav>
        <img src={process.env.PUBLIC_URL +"icons_assets/logo.svg"} alt="Restaurant logo" />
        <ul>
          {navigationData.map(({ href, title }) => (
            <li key={title}>
              <a href={href}>{title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
