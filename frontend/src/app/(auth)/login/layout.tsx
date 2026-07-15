import AuthBanner from "@/components/login/AuthBanner";
import LoginFormHeader from "@/components/login/LoginFormHeader"
import LoginFormFooter from "@/components/login/LoginFormFooter";
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <div className="grid min-h-screen grid-cols-[9fr_11fr]">
    <AuthBanner showFeatures/>
    <div className="min-h-screen flex items-center justify-center bg-neutral">
      <div className="w-full max-w-sm px-6">
        <LoginFormHeader />

        {children}
        <LoginFormFooter />
      </div>
    </div>

   </div>
  );
}
