// @ts-nocheck
import React from "react";

export default function LetTalk() {
  return (
    <section className="py-7 lg:py-14 bg-[#F4F5FA]">
      <div className="space-y-4 w-[90%] lg:w-4/5 m-auto">
        <h2 className="text-xl md:text-2xl lg:text-4xl text-antrakBlue font-ubuntu font-semibold text-center">
          Let’s Talk
        </h2>
        <p className="text-base md:text-xl lg:text-2xl text-[#666] text-center">
          We Love Question and feedback- and we’re always happy to help! Here
          are some ways to contact us.
        </p>
      </div>

      <div className="lg:pt-12 w-[90%] lg:w-4/5 m-auto mt-6 lg:flex justify-between">
        <form className="lg:w-[70%] space-y-6">
          <div className="lg:grid grid-cols-2 gap-8">
            <div className="flex flex-col lg:space-y-4 mb-6 lg:mb-0">
              <input
                type="text"
                name="name"
                className="bg-antrakWhite p-3 rounded border-none outline-none md:text-lg lg:text-xl"
                placeholder="Name"
              />
            </div>

            <div className="flex flex-col lg:space-y-4">
              <input
                type="text"
                name="lastName"
                className="p-3 rounded border-none outline-none md:text-lg lg:text-xl"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="px-4 py-3 border-none outline-none md:text-lg lg:text-xl"
            />
          </div>

          <div className="grid grid-cols-1">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              className="px-4 py-3 border-none outline-none md:text-lg lg:text-xl"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button className="border px-4 py-[9px] md:px-14 md:py-[13px] lg:px-14 lg:py-4 rounded-md border-antrakWhite bg-antrakBlue text-antrakWhite text-base md:text-lg lg:text-2xl font-semibold hover:bg-transparent hover:text-antrakBlue hover:border-antrakBlue duration-200">
              Send Message
            </button>
          </div>
        </form>

        <div className="hidden lg:block mt-5 lg:mt-0 space-y-4 lg:space-y-8">
          <h2 className="text-lg md:text-xl lg:text-2xl text-antrakBlue font-ubuntu font-semibold">
            Reach us at
          </h2>
          <h4 className="md:text-lg lg:text-xl text-[#666] font font-ubuntu">
            Antrak@gmail.com
          </h4>
          <h4 className="md:text-lg lg:text-xl text-[#666] font font-ubuntu">
            111-111-222
          </h4>
          <p className="md:text-xl lg:text-xl text-[#666] font font-ubuntu">
            Head-Office- Mall Road Lahore
          </p>
        </div>
      </div>
    </section>
  );
}
