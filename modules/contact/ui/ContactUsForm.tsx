"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

import { ContactUsType } from "../contact.types";
import {
  contactUsInitialValues,
  contactUsValidationSchema,
} from "../contact.utils";


const ContactUsForm = () => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const router = useRouter();

  const handleRipple = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600); // match animation duration
  };

  const handleSubmit = async (
    values: ContactUsType,
    {
      resetForm,
      setSubmitting,
    }: {
      resetForm: () => void;
      setSubmitting: (isSubmitting: boolean) => void;
    }
  ) => {
    const formData = new FormData();

    // Append form values
    (Object.keys(values) as (keyof ContactUsType)[]).forEach((key) => {
      const value = values[key];
      if (value !== undefined) {
        formData.append(key, String(value));
      }
    });

    // Your Web3Forms access key
    formData.append(
      "access_key",
      "3ec9aff3-8a81-4853-ad78-d274a7e6b11f"
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        resetForm();
        router.push("/");
      } else {
        toast.error("Failed to send message!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full space-y-5 bg-white p-5 md:p-6 rounded-2xl md:rounded-3xl shadow-xl">
      <Formik
        initialValues={contactUsInitialValues}
        validationSchema={contactUsValidationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="space-y-3">
            {/* Name */}
            <div className="space-y-1">
              <label className="text-gray-600 text-sm">Name</label>
              <Field
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 border border-gray-300 text-sm"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-xs text-red-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Email */}
              <div className="space-y-1">
                <label className="text-gray-600 text-sm">Email</label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 border border-gray-300 text-sm"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-xs text-red-500"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-1">
                <label className="text-gray-600 text-sm">Phone Number</label>
                <Field
                  name="phoneNo"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 border border-gray-300 text-sm"
                />
                <ErrorMessage
                  name="phoneNo"
                  component="p"
                  className="text-xs text-red-500"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-1">
              <label className="text-gray-600 text-sm">Subject</label>
              <Field
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 border border-gray-300 text-sm"
              />
              <ErrorMessage
                name="subject"
                component="p"
                className="text-xs text-red-500"
              />
            </div>

            {/* Message */}
            <div className="space-y-1">
              <label className="text-gray-600 text-sm">Message</label>
              <Field
                as="textarea"
                name="message"
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 border border-gray-300 text-sm"
              />
              <ErrorMessage
                name="message"
                component="p"
                className="text-xs text-red-500"
              />
            </div>

            {/* Submit Button with Ripple */}
            <motion.button
              type="submit"
              onClick={handleRipple}
              className="relative overflow-hidden cursor-pointer py-3 px-6 rounded-xl w-full bg-black hover:bg-black/80 text-white font-bold"
            >
              <span className="relative">Get In Touch</span>

              {/* Ripples */}
              {ripples.map((ripple) => (
                <motion.span
                  key={ripple.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.3, scale: 4 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute bg-white rounded-full pointer-events-none"
                  style={{
                    width: 20,
                    height: 20,
                    left: ripple.x - 10,
                    top: ripple.y - 10,
                  }}
                />
              ))}
            </motion.button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUsForm;
