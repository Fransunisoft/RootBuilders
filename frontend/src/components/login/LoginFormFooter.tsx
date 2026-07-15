import React from 'react'

const LoginFormFooter = () => {
  return (
    <div>
        <p className="caption mt-6 text-center text-sm text-neutral-muted">
          New to RootBuilders?{" "}
          <a
            href="/register"
            className="font-semibold text-primary-500 hover:underline"
          >
            Create an account
          </a>
        </p>
    </div>
  )
}

export default LoginFormFooter