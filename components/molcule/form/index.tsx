import React, { useState } from "react";
import Button from "@/components/atom/button";
import InputField from "@/components/atom/input";
import TextField from "@/components/atom/textarea";
import { useForm } from "react-hook-form";

interface ContactFormProps {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactForm: React.FC<ContactFormProps> = ({ setState }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (userData: any, e: React.FormEvent) => {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  };

  return (
    <form onSubmit={(e)=>console.log(e)} className="w-[90%] mx-auto">
      <InputField
        name="name"
        type="text"
        // icon={<UserIcon />} // Uncomment and provide the appropriate icon component
        label="Name"
        placeholder="Enter your name"
        register={register("name", { required: "*Name is required" })}
        errors={errors}
      />

      <InputField
        name="email"
        // icon={<EmailIcon />} // Uncomment and provide the appropriate icon component
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
        // icon={<PhoneIcon />} // Uncomment and provide the appropriate icon component
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
        // icon={<TextareaIcon />} // Uncomment and provide the appropriate icon component
        label="Message"
        placeholder="Write message..."
        register={register("message")}
      />

      <Button
        type="submit"
        className="bg-black text-white w-[100%] h-[44px] my-[16px]"
      >
        {isLoading ? "Loading...." : "Send"} {/* Replace with a loading indicator */}
      </Button>
    </form>
  );
};

export default ContactForm;
