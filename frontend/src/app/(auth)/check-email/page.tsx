import React from 'react'
import Image from "next/image";
import Link from "next/link";

const CheckEmailPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-100 p-6 text-neutral-primary">
        {/* <div className="py-20 flex flex-col items-center text-center rounded-xl border border-neutral-border shadow-lg"> */}
      
      <div className="w-full max-w-4xl rounded-section border border-neutral-border bg-white py-40 shadow-lg">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <Image
            src="/images/logo.png"
            alt="Root Builders"
            width={243}
            height={78}
            className=""
            // priority
          />

          {/* Mail Icon */}
          <div className="mt-10 flex h-12 w-12 items-center justify-center rounded-full bg-info-bg">
            <Image
              src="/icons/mail.svg"
              alt="Mail"
              width={20}
              height={20}
            />
          </div>

          {/* Heading */}
          <h1 className="h1 mt-6">
            Check your email
          </h1>

          {/* Description */}
          <p className="p mt-3 max-w-sm leading-6 text-neutral-secondary">
            Sign-in link sent to{" "}
            <span className="text-neutral-primary">
              you@rootbuilder@gmail.com
            </span>
            . Expires in 15 minutes.
          </p>

          {/* Actions */}
          <button
            type="button"
            className="mt-8 rounded-md border border-neutral-border bg-neutral-light px-4 py-2 font-medium transition hover:bg-neutral-50"
          >
            Resend link
          </button>

          <button
            type="button"
            className="mt-4 text-sm text-neutral-secondary transition hover:text-neutral-700"
          >
            Use a different email
          </button>

          {/* Footer */}
          <div className="mt-10 caption text-neutral-secondary">
            Didn't receive a code?{" "}
            <Link
              href="#"
              className="font-medium text-primary-500 hover:underline"
            >
              Resend code
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CheckEmailPage