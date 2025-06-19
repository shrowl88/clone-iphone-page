import React from "react";
import { footerLinks } from "../constants";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            Cara berbelanja lainnya:{" "}
            <span className="underline text-blue">
              <a href="_blank">Temukan retailer </a>
            </span>{" "}
            di dekat anda.
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Hak Cipta @ 2025 Apple Inc. Seluruh hak cipta dilindungi
            undang-undang.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {" "}
                <a
                  href="#"
                  className="hover:underline transition-all duration-200"
                >
                  {link}{" "}
                </a>{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
          <div className="flex end-0 flex-col">
            <p className="font-semibold text-gray text-xs">
              <a href="#" className="hover:underline">
                Indonesia
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
