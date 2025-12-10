"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import GithubDark from "../../../public/githubdark.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import TwitterIcon from "../../../public/twitter-icon.svg";
import TwitterDark from "../../../public/twitterdark.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = ({ id }) => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, option);
    const resData = await response.json();

    console.log("Response Data:", resData);

    if (response.status === 200) {
      console.log("Message Sent.");
      setEmailSubmitted(true);
    }
  };
  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      id={id}
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {""}
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have question or just want to greetings, I'll try best to
          get back to you!
        </p>
        {/* ADD: WARNING TEXT */}
        <div className="p-3 rounded-lg bg-yellow-900/30 border border-yellow-500 text-yellow-300 text-sm mb-4">
          ✖ Email saat ini tidak dapat digunakan untuk mengirim pesan. Silakan
          hubungi lewat sosial media di bawah.
        </div>
        <div className="socials flex flex-row gap-2 bg-white text-black dark:bg-gray-900 dark:text-white">
          <Link href="https://github.com/farizwildan">
            <Image
              src={GithubIcon}
              alt="Github Icon"
              className="w-12 h-12 hidden dark:block"
            />
            <Image
              src={GithubDark}
              alt="Github Icon"
              className="w-12 h-12 block dark:hidden"
            />
          </Link>
          <Link href="https://linkedin.com/in/farizwildanmeiawan">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://instagram.com/frzwldn_">
            <Image src={InstagramIcon} alt="Instagram Icon" />
          </Link>
          <Link href="https://x.com/parizzz__">
            <Image
              src={TwitterIcon}
              alt="Twitter Icon"
              className="w-12 h-12 hidden dark:block"
            />
            <Image
              src={TwitterDark}
              alt="Twitter Icon"
              className="w-12 h-12 block dark:hidden"
            />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm mb-2 font-medium">
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              disabled
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="fariz@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className=" block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              disabled
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just Saying Hi.."
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className=" block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              disabled
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Hi Fariz, let's talk about.."
            />
          </div>
          <button
            type="submit"
            disabled
            className="bg-gray-600 cursor-not-allowed font-medium py-2.5 px-5 rounded-lg w-full mt-2"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email Sent Successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
