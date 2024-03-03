import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="md:mt-5 sm:mt-0 footer p-10 bg-base-200 text-base-content text-white">
      <aside>
        <span className=" self-center sm:text-1xl md:text-2xl font-semibold font-scotia whitespace-nowrap text-white">
          PREMIUM <span className="text-yellow-300">LIMO</span>
        </span>
        <p>PREMIUM LIMO,LLC</p>
      </aside>

      <nav>
        <Link href="pages/home" className="link link-hover">
          Home
        </Link>
        <Link href="/pages/contact" className="link link-hover">
          Fleet
        </Link>
        <a className="link link-hover">Quote</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Services</a>
      </nav>
      <nav>
        <a className="link link-hover">Copyright@</a>
        <a className="link link-hover">Terms of service</a>
        <a className="link link-hover">Privacy policy</a>
      </nav>

      <nav>
        <aside>
          <span className="md:mt-5 sm:mt-0 self-center sm:text-1xl md:text-2xl font-semibold font-scotia whitespace-nowrap text-white">
            <span className="text-yellow-300">786-913-0999</span>
          </span>
          <p>info@premiumlimo.com</p>
        </aside>
      </nav>
    </footer>
  );
};
export default Footer;
