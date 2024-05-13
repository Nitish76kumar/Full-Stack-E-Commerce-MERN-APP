import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook,  FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function Footer() {
  return (
    <footer className="bg-slate-200">
      <div className="container mx-auto p-4">
        <div className="flex justify-around">
          <div className="">
            <h3 className="text-2xl mb-3 underline">Follow us</h3>
            <ul className="flex text-2xl mt-5 cursor-pointer">
              <li className="text-pink-700">
                <AiFillInstagram />{" "}
              </li>
              <li className="ml-5 text-blue-400">
                <FaFacebook />
              </li>
              <li className="ml-5 text-blue-700">
                <FaTwitter />
              </li>
              <li className="ml-5 text-yellow-800">
                <IoMail />
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl mb-3 underline">Company</h3>
            <ul className=" cursor-pointer">
              <li className="hover:text-red-600">Contact Us</li>
              <li className="hover:text-red-600">Privacy Policy</li>
              <li className="hover:text-red-600">Returns And Exchange Policy</li>
              <li className="hover:text-red-600">Shipping Policy</li>
              <li className="hover:text-red-600">Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className="subfooter center">
          {/* <div className="credit-card-img">
            <img src={creditCardImg} alt="credit card img" />
          </div> */}
          <p className="text-center font-bold">
            Made with ❤️ Nitish kr. Copyright {new Date().getFullYear()} ©{" "}
            <strong>Smart Shopping.</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
