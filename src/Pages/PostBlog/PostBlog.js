import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import "./PostBlog.css";
import { Alert, notification } from "antd";

const PostBlog = () => {
  const [message, setMessage] = useState("");
  const { register, reset, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/api/myBlog", data).then((res) => {
      if (res.status == 200) {
        setMessage("আপনার ব্লগটি পোস্ট হয়ে গিয়েছে!");
        reset();
        /* window.location.replace("/dashboard/allevents"); */
      }
    });
  };
  return (
    <div>
      <h1 className="text-3xl bangla text-blue-300 py-8">
        আপনার নতুন ব্লগটি নিচের ফিল্ড পূরণ করে পোস্ট করে ফেলুন!
      </h1>

      {message && (
        <Alert
          className="text-green-300"
          message={message}
          type="success"
          showIcon
        />
      )}
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class=" py-2 flex flex-col justify-center sm:py-12">
            <div class="relative py-2 sm:max-w-xl sm:mx-auto">
              <div class="relative px-4 py-4 bg-white mx-8 md:mx-0  rounded-3xl sm:p-10">
                <div class="max-w-md mx-auto">
                  <div class="flex items-center space-x-5">
                    <div class="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                      i
                    </div>
                    <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                      <h2 class="leading-relaxed">নতুন ব্লগ তৈরী করুন</h2>
                      <p class="text-sm text-gray-500 font-normal leading-relaxed"></p>
                    </div>
                  </div>
                  <div class="divide-y divide-gray-200">
                    <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                      <div class="flex flex-col ">
                        <label class="leading-loose">
                          ব্লগ এর টাইটেল দিন
                          <span className="text-red-600 ">*</span>
                        </label>
                        <input
                          {...register("title", {
                            required: true,
                          })}
                          type="text"
                          class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Enter Your Blog title"
                        />
                      </div>

                      <div class="flex flex-col">
                        <label class="leading-loose">
                          ব্লগ তৈরীকারীর নাম দিন{" "}
                          <span className="text-red-600 ">*</span>
                        </label>
                        <input
                          {...register("name")}
                          type="text"
                          class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Enter Your Name"
                          required
                        />
                      </div>
                      <div class="flex flex-col">
                        <label class="leading-loose">
                          ব্লগ এর ইমেজ লিং দিন
                        </label>
                        <input
                          {...register("imageLink")}
                          type="text"
                          class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Enter Your Blog Image Link"
                        />
                      </div>

                      <div class="flex flex-col">
                        <label class="leading-loose">
                          ব্লগ এর বিস্তারিত লিখুন{" "}
                          <span className="text-red-600 ">*</span>
                        </label>
                        <textarea
                          {...register("description", {
                            required: true,
                          })}
                          type="text"
                          class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Enter Your Blog Description"
                        />
                      </div>
                    </div>
                    <div class="pt-4 flex items-center space-x-4">
                      <input
                        type="submit"
                        class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostBlog;
