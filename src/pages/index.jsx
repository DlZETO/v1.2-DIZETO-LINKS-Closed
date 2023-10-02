import React from "react";
import Head from "next/head";
import Jumbotron from "dizeto-links/components/Jumbotron";
import Button from "dizeto-links/components/Button";
import Footer from "dizeto-links/components/Footer";
import { TbWorldWww } from "react-icons/tb";
import { BsTwitter, BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

export default function Links() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Cache-Control" content="max-age=2629440, public" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>DIZETO | LINKS</title>
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Gede Dewo Wahyu M.W" />
        <meta name="description" content="Dizeto is a vendor that offers photography, videography, talent, and music services." />
        {/* <!-- Open Graph --> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DIZETO | LINKS" />
        <meta property="og:description" content="Dizeto is a vendor that offers photography, videography, talent, and music services." />
        <meta property="og:url" content="https://dizeto.vercel.app" />
        <meta property="og:image" content="https://dizeto.vercel.app/favicon.ico" />
        {/* <!-- End of Open Graph --> */}
      </Head>
      <section className="sm:flex sm:h-screen sm:w-screen sm:items-center sm:justify-center">
        <div className="mx-auto flex h-screen w-screen flex-col justify-between sm:container sm:h-fit sm:max-w-[500px] sm:rounded-lg sm:border sm:border-gray-200 sm:bg-white sm:shadow-md sm:shadow-black/30 sm:dark:border-gray-700 sm:dark:bg-dark sm:dark:shadow-md sm:dark:shadow-white/30">
          <Jumbotron />
          <div className="my-auto">
            <Button icon={<TbWorldWww />} hrf="https://dizeto.vercel.app/" value="DIZETO.COM" />
            <Button icon={<IoLogoWhatsapp />} hrf="" value="WHATSAPP" />
            <Button icon={<AiFillInstagram />} hrf="https://instagram.com/dizeto_id?igshid=YmMyMTA2M2Y=" value="INSTAGRAM" />
            <Button icon={<BsYoutube />} hrf="https://www.youtube.com/@dizeto" value="YOUTUBE" />
            <Button icon={<BsTwitter />} hrf="https://twitter.com/dizeto_id" value="TWITTER" />
            <Button icon={<BsFacebook />} hrf="https://www.facebook.com/profile.php?id=100083806837197" value="FACEBOOK" />
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
}
