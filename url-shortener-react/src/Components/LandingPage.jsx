import React, { useState } from 'react'
import Card from "./Card";
import { BiLinkAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from '../ContextApi/ContextApi';
import ShortenPopUp from '../Dashboard/ShortenPopUp';



let desc =
  "Generate short, memorable links with ease using Shortify’s intuitive interface. Share URLs effortlessly across platforms. Optimize your sharing strategy with Shortify. Track clicks and manage your links seamlessly to enhance your online presence. Generate short, memorable links with ease using Shortify’s intuitive interface. Share URLs effortlessly across platforms.";

const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();
  console.log("Token from landing page" + token);
  const [shortenPopUp, setShortenPopUp] = useState(false);
  const handleGuestLogin = () => {
    navigate("/login", {
      state: {
        guest: {
          username: "guestuser",
          password: "guestuser123",
        },
      },
    });
  };
  return (
    <div className="min-h-[calc(100vh-64px)]  lg:px-14 sm:px-8 px-4">
      <div className="lg:flex-row flex-col    lg:py-5   pt-16   lg:gap-10 gap-8 flex justify-between items-center">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-bold font-roboto text-slate-800 md:text-5xl sm:text-4xl text-3xl   md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full">
            Shortify Simplifies URL Shortening For Efficient Sharing
          </motion.h1>
          <p className="text-slate-700 text-sm my-5">
            Shortify streamlines the process of URL shortening, making sharing
            links effortless and efficient. With its user-friendly interface,
            Shortify allows you to generate concise, easy-to-share URLs in
            seconds. Simplify your sharing experience with Shortify today.
          </p>
          <div className="flex items-center gap-3">
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={handleGuestLogin}
              className="bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded cursor-pointer">
              Try as Guest
            </motion.button>
            {token ? (
              <motion.button
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                onClick={() => setShortenPopUp(true)}
                className="border border-blue-700 hover:bg-blue-900 bg-blue-100 text-black font-semibold flex items-center gap-2 rounded-md py-2 px-4 cursor-pointer"
              >
                <BiLinkAlt className="text-xl" />
                Shorten URL
              </motion.button>
            ) : (
              <motion.button
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                onClick={() => navigate("/login")}
                className="border border-blue-700 hover:bg-blue-900 bg-blue-100 text-black font-semibold flex items-center gap-2 rounded-md py-2 px-4 cursor-pointer"
              >
                <BiLinkAlt className="text-xl" />
                Shorten URL
              </motion.button>
            )}

          </div>
        </div>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="sm:w-[480px] w-[400px] object-cover rounded-md"
          src="/images/img2.png"
          alt=""
        >
        </motion.img>
      </div>
      <div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-slate-800 font-roboto font-bold lg:w-[60%]  md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center">
         Easy URL Shortening with Powerful Features
        </motion.p>
      </div>
      <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
        <Card
          title="Simple URL Shortening"
          desc="Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle."
        />
        <Card
          title="Powerful Analytics"
          desc="Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies."
        />
        <Card
          title="Enhanced Security"
          desc="Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure."
        />
        <Card
          title="Fast and Reliable"
          desc="Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users."
        />
      </div>
      <ShortenPopUp
        refetch={false}
        open={shortenPopUp}
        setOpen={setShortenPopUp}
      />
    </div>
  )
}

export default LandingPage
