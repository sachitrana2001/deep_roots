import React, { useState } from "react";
import Button from "@/components/atom/button";
import InputField from "@/components/atom/input";
import TextField from "@/components/atom/textarea";
import { useForm } from "react-hook-form";

const ContactForm = ({ setState }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (userData, e) => {
    setIsLoading(true);
    setState((previous) => !previous);
    try {
      // Perform your actions here, e.g., sending data to the server
      // Example: const response = await sendFormDataToServer(userData);
      // Handle success or error based on your API response
      // For now, we'll simulate a successful submission and reset the form
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate an async operation
      reset();
    } catch (error) {
      console.error(error); // Handle the error appropriately
    } finally {
      setIsLoading(false);
      setState((previous) => !previous);
    }
  };

  const handleInputChange = (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] mx-auto">
      <InputField
        name="name"
        type="text"
        // icon={<UserIcon />}
        label="Name"
        placeholder="Enter your name"
        register={register("name", { required: "*Name is required" })}
        errors={errors}
      />

      <InputField
        name="email"
        // icon={<EmailIcon />}
        label="Email"
        placeholder="Enter your email"
        type="text"
        register={register("email", {
          required: "*Email is required",
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
            message: "Invalid email address",
          },
        })}
        errors={errors}
      />

      <InputField
        name="phone"
        // icon={<PhoneIcon />}
        label="Phone"
        placeholder="Enter Phone number"
        type="text"
        register={register("phone", {
          required: "*Phone is required",
          minLength: { value: 10, message: "Min length should be 10" },
          maxLength: { value: 10, message: "Max length should be 10" },
        })}
        onInput={handleInputChange}
        errors={errors}
      />

      <TextField
        name="message"
        // icon={<TextareaIcon />}
        label="Message"
        placeholder="Write message..."
        register={register("message")}
      />

      <Button
        type="submit"
        className="bg-black text-white w-[100%] h-[44px] my-[16px]"
      >
        {isLoading ? '<SpinnerIcon />' : "Send"}
      </Button>
    </form>
  );
};

export default ContactForm;
