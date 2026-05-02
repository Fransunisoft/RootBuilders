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
            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm tracking-widest outline-none focus:border-[#6DAF45] focus:ring-2 focus:ring-[#6DAF45]/20"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-[#6DAF45] px-4 py-3 text-sm font-semibold text-white hover:bg-[#5E9D3A]"
        >
          Verify & Continue
        </button>
      </form>
    </div>
  );
}
