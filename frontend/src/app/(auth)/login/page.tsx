import Link from "next/link";

export default function LoginPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900">Sign in</h2>
      <p className="mt-2 text-sm text-gray-500">
        Enter your phone number to receive an OTP.
      </p>

      <form className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="08012345678"
            className="mt-2 w-full rounded-xl border border-neutral-border px-4 py-3 text-sm outline-none focus:border-primary-300 focus:ring-2 focus:ring-primary-300/20"
          />
        </div>

        <Link href="/verify-otp" ><button
          type="submit"
          className="w-full rounded-xl bg-primary-500 px-4 py-3 text-sm font-semibold text-white hover:bg-primary-400"
        >
          Send OTP
        </button></Link>
      </form>
    </div>
  );
}
