import Link from "next/link";

export default function VerifyOtpPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900">Verify OTP</h2>
      <p className="mt-2 text-sm text-gray-500">
        Enter the verification code sent to your phone number.
      </p>

      <form className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="otp"
            className="block text-sm font-medium text-gray-700"
          >
            OTP Code
          </label>
          <input
            id="otp"
            type="text"
            placeholder="123456"
            maxLength={6}
            className="mt-2 w-full rounded-xl border border-neutral-border px-4 py-3 text-sm tracking-widest outline-none focus:border-secondary-500 focus:ring-2 focus:ring-secondary-500/20"
          />
        </div>

        <Link href="/participant"><button
          type="submit"
          className="w-full rounded-xl bg-secondary-500 px-4 py-3 text-sm font-semibold text-white hover:bg-secondary-600"
        >
          Verify & Continue
        </button></Link>
      </form>
    </div>
  );
}
