const SignupFormFooter = () => {
  return (
    <div>
        <p className="caption mt-6 text-center text-sm text-neutral-muted">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-semibold text-primary-500 hover:underline"
          >
            Sign in
          </a>
        </p>
    </div>
  )
}

export default SignupFormFooter