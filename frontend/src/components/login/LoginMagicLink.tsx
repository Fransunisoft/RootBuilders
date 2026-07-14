import React from 'react'

const LoginMagicLink = () => {
  return (
    <div>
        <form className="mt-8 space-y-5">
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

          <button
            type="submit"
            className="w-full rounded-lg bg-primary-500 py-3 text-neutral-light font-medium transition hover:bg-neutral-light hover:border-primary-500 border-2 hover:text-primary-500" 
          >
            Send magic link
          </button>
        </form>
    </div>
  )
}

export default LoginMagicLink