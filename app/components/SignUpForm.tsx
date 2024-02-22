"use client";

import React, { useState } from "react";
import { Checkbox, Input, Button } from "@nextui-org/react";
import {
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  KeyIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/16/solid";

const SignUpForm = () => {
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const toggleVisiblePass = () => setIsVisiblePass((prev) => !prev);
  return (
    <form className="grid grid-cols-2 gap-3 p-2 place-self-stretch shadow border rounded-md">
      <Input label="First Name" type="text" startContent={<UserIcon className="w-4" />} />
      <Input label="Last Name" type="text" startContent={<UserIcon className="w-4" />} />
      <Input
        className="col-span-2"
        label="Email"
        type="email"
        startContent={<EnvelopeIcon className="w-4" />}
      />
      <Input
        className="col-span-2"
        label="Phone"
        type="number"
        startContent={<PhoneIcon className="w-4" />}
      />
      <Input
        className="col-span-2"
        label="Password"
        type={isVisiblePass ? "text" : "password"}
        startContent={<KeyIcon className="w-4" />}
        endContent={
          isVisiblePass ? (
            <EyeSlashIcon
              className="w-4 cursor-pointer"
              onClick={toggleVisiblePass}
            />
          ) : (
            <EyeIcon
              className="w-4 cursor-pointer"
              onClick={toggleVisiblePass}
            />
          )
        }
      />
      <Input
        className="col-span-2"
        label="Confirm Password"
        type={isVisiblePass ? "text" : "password"}
        startContent={<KeyIcon className="w-4" />}
        endContent={
          isVisiblePass ? (
            <EyeSlashIcon
              className="w-4 cursor-pointer"
              onClick={toggleVisiblePass}
            />
          ) : (
            <EyeIcon
              className="w-4 cursor-pointer"
              onClick={toggleVisiblePass}
            />
          )
        }
      />

      <Checkbox className="col-span-2">I Accept Terms & Conditions</Checkbox>

     <div className="flex justify-center col-span-2">
     <Button color="primary" type="submit" className="w-48">Submit</Button>
     </div>
    </form>
  );
};

export default SignUpForm;
