/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";

const Faq = () => {
  return (
    <>
      <div className="p-10">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-5">
          Frequently asked questions
        </h1>
        <p className="text-lg font-medium text-gray-500 text-center">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <div class="font-[sans-serif] space-y-4 max-w-6xl mx-auto mb-20">
        <div className="rounded-lg hover:bg-blue-50 transition-all">
          <button
            type="button"
            className="w-full text-base font-semibold text-left py-5 px-6 text-[#333] flex items-center"
          >
            <span className="mr-4">
              Are there any special discounts or promotions available during the
              event.
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-current ml-auto shrink-0 -rotate-90"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clip-rule="evenodd"
                data-original="#000000"
              ></path>
            </svg>
          </button>
          <div className="hidden pb-5 px-6">
            <p className="text-sm text-[#333]">Content</p>
          </div>
        </div>
        <div className="rounded-lg bg-blue-50 transition-all">
          <button
            type="button"
            className="w-full text-base font-semibold text-left py-5 px-6 text-[#333] flex items-center"
          >
            <span className="mr-4">
              What are the dates and locations for the product launch events?
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-current ml-auto shrink-0 rotate-180"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clip-rule="evenodd"
                data-original="#000000"
              ></path>
            </svg>
          </button>
          <div className="pb-5 px-6">
            <p className="text-sm text-[#333]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor auctor arcu, at fermentum dui. Maecenas vestibulum a turpis
              in lacinia. Proin aliquam turpis at erat venenatis malesuada. Sed
              semper, justo vitae consequat fermentum, felis diam posuere ante,
              sed fermentum quam justo in dui. Nulla facilisi. Nulla aliquam
              auctor purus, vitae dictum dolor sollicitudin vitae. Sed bibendum
              purus in efficitur consequat. Fusce et tincidunt arcu. Curabitur
              ac lacus lectus. Morbi congue facilisis sapien, a semper orci
              facilisis in.
            </p>
          </div>
        </div>
        <div className="rounded-lg hover:bg-blue-50 transition-all">
          <button
            type="button"
            className="w-full text-base font-semibold text-left py-5 px-6 text-[#333] flex items-center"
          >
            <span className="mr-4">
              Can I bring a guest with me to the product launch event?
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-current ml-auto shrink-0 -rotate-90"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clip-rule="evenodd"
                data-original="#000000"
              ></path>
            </svg>
          </button>
          <div className="hidden pb-5 px-6">
            <p className="text-sm text-[#333]">Content</p>
          </div>
        </div>
        <div className="rounded-lg hover:bg-blue-50 transition-all">
          <button
            type="button"
            className="w-full text-base font-semibold text-left py-5 px-6 text-[#333] flex items-center"
          >
            <span className="mr-4">
              How can I contact the event organizers?
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-current ml-auto shrink-0 -rotate-90"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clip-rule="evenodd"
                data-original="#000000"
              ></path>
            </svg>
          </button>
          <div className="hidden pb-5 px-6">
            <p className="text-sm text-[#333]">Content</p>
          </div>
        </div>
        <div className="rounded-lg hover:bg-blue-50 transition-all">
          <button
            type="button"
            className="w-full text-base font-semibold text-left py-5 px-6 text-[#333] flex items-center"
          >
            <span className="mr-4">
              Is there parking available at the venue?
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-current ml-auto shrink-0 -rotate-90"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clip-rule="evenodd"
                data-original="#000000"
              ></path>
            </svg>
          </button>
          <div className="hidden pb-5 px-6">
            <p className="text-sm text-[#333]">Content</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
