import SignUpForm from "@/app/components/SignUpForm";
import Image from "next/image";
import Link from "next/link";

const SignupPage = () => {
  return (
    <div className="grid gris-cols-1 md:grid-cols-2 place-items-center items-center gap-3">
      <div className="md:col-span-2 flex justify-center items-center">
        <p className="text-center p-2">Already Signed Up?</p>
        <Link className="" href="/auth/signin">
          Login
        </Link>
      </div>
      <SignUpForm />
      <Image src="/login.jpg" alt="login form" width={500} height={300} />
    </div>
  );
};

export default SignupPage;
