import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1>To get In touch</h1>
           <div className="">
        <div className="py-12">
          <h2 className="text-2xl font-bold">Solid</h2>
          <div className="mt-8 mx-auto">
            <div className="grid grid-cols-1 gap-6">
              <label className="block">
                <span className="text-gray-700">Full name</span>
                <input type="text" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  " placeholder=""/>
              </label>
              <label className="block">
                <span className="text-gray-700">Email address</span>
                <input type="email" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  " placeholder="john@example.com"/>
              </label>
              <label className="block">
                <span className="text-gray-700">When is your event?</span>
                <input type="date" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "/>
              </label>
              <label className="block">
                <span className="text-gray-700">What type of event is it?</span>
                <select className="
                    block
                    w-full
                    mt-1
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  ">
                  <option>Corporate event</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="block">
                <span className="text-gray-700">Additional details</span>
                <textarea className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  " rows="3"></textarea>
              </label>
              <div className="block">
                <div className="mt-2">
                  <div>
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="
                          rounded
                          bg-gray-200
                          border-transparent
                          focus:border-transparent focus:bg-gray-200
                          text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500
                        "/>
                      <span className="ml-2">Email me news and special offers</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>



        </div>
    );
};

export default Contact;