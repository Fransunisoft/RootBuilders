'use client'
import React from 'react'
import { useState } from 'react'
import LoginMagicLink from "@/components/login/LoginMagicLink"

const LoginPassword = () => {
  const [authMethod, setAuthMethod] = useState("password")
  return (
    <div className='text-neutral-primary font-body'>

        <div className="caption mt-6 rounded-lg bg-neutral-card-border p-1 flex">
          <button
            onClick={() => setAuthMethod("password")}
            className={`flex-1 py-2 hover:bg-neutral-secondary hover:text-neutral-light rounded-md
            ${authMethod === "password" 
            ? 'bg-neutral-light shadow-sm'
            : 'text-neutral-secondary'
            }`}
          >
            Password
          </button>

            <button
            onClick={() => setAuthMethod("magic-link")}
            className={`flex-1 py-2 hover:bg-neutral-secondary hover:text-neutral-light rounded-md
            ${authMethod === "magic-link" 
            ? 'bg-neutral-light shadow-sm'
            : 'text-neutral-secondary'
            }`}
          >
            Magic link
          </button>
        </div>
        {authMethod === 'password' ? (
          <form className="mt-10 space-y-5">
            <div className=''>
              <label className="text-[11px] mb-2 block font-bold uppercase tracking-wider">
                Email
              </label>

              <input
                type="email"
                placeholder="gloria@gmail.com"
                className="w-full rounded-lg border border-neutral-border px-4 py-3 caption outline-none transition focus:border-primary-500"
              />
            </div>

            <div>
              <div className="text-[11px] mb-2 flex items-center justify-between font-bold uppercase tracking-wider">
                <label className=" ">
                  Password
                </label>

                <button
                  type="button"
                  className="text-neutral-muted uppercase"
                >
                  Forgot Password?
                </button>
              </div>

              <div className="relative">
                <input
                  type="password"
                  placeholder="123456"
                  className="w-full rounded-lg border border-neutral-border px-4 py-3 pr-12 caption outline-none transition focus:border-primary-500"
                />

                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  <img
                    src="/icons/eye.svg"
                    alt="show password"
                    className="h-5 w-5 opacity-60"
                  />
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full font-medium text-[16px] rounded-lg bg-primary-500 py-3 text-neutral-light  transition hover:bg-neutral-light hover:border-primary-500 border-2 hover:text-primary-500" 
            >
              Sign in
            </button>
          </form>
        ) : <LoginMagicLink /> }

    </div>
  )
}

export default LoginPassword