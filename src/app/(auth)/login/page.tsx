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
            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#5D8ABB] focus:ring-2 focus:ring-[#5D8ABB]/20"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-[#0D519A] px-4 py-3 text-sm font-semibold text-white hover:bg-[#3D74AE]"
        >
          Send OTP
        </button>
      </form>
    </div>
  );
}
