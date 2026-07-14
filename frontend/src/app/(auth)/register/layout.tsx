import AuthBanner from "@/components/login/AuthBanner";
import SignupFormFooter from "@/components/signup/SignupFormFooter";
import SignupFormHeader from "@/components/signup/SignupFormHeader";
import Stepper from "@/components/signup/Stepper";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <div className="grid min-h-screen grid-cols-[9fr_11fr]">
    <AuthBanner />
    <div className="min-h-screen flex items-center justify-center bg-neutral">
      <div className="w-full mx-18">
        {/* <Stepper currentStep={1}/> */}

        <SignupFormHeader />

        {children}

        <SignupFormFooter />
        
      </div>
    </div>

   </div>
  );
}
