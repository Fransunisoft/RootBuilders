import Link from "next/link";
import Image from "next/image";
export default function VerificationFailedPage() {
  return (
    <main className="min-h-screen bg-neutral-light text-neutral-primary flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <Link href="/login" className="mb-6 inline-flex items-center gap-2 hover:neutral-secondary">
          <Image src="/icons/move-left.svg" alt="move-left-icon" width={18} height={18} />
          <span>Back</span>
        </Link>

        <div className="py-20 flex flex-col items-center text-center rounded-section border border-neutral-border shadow-lg">
          <div className="flex flex-col items-center justify-center w-[95%] px-8 py-20 border-b border-neutral-border ">

            <div className="mb-4 rounded-full bg-error-bg h-10 w-10 flex items-center justify-center">
              <Image 
                src="/icons/triangle-alert.svg" alt="error" width={18} height={18} />   
            </div>

            <p className='p mb-3 text-error-500'>Verification failed</p>
            <h1 className="h1 mb-4">Something went wrong</h1>
            <p className="p max-w-md text-neutral-secondary leading-6"> We couldn't verify the link. It may have expired or
              have been entered incorrectly. Please try again, or
              reach out to your program organizer if the issue
              persists.</p>

            <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md bg-primary-500 text-neutral-light font-medium transition hover:bg-primary-900 px-5 py-3 mt-8"
            >
              <Image src="/icons/refresh-cw.svg" alt="" width={16} height={16} />
              Try again
            </button>
          </div>

          {/* <div className="border-t border-neutral-border w-[95%]" /> */}

          <div className="py-8 text-center caption text-neutral-secondary">
            Need help? Email{" "}
            <a
              href="mailto:support@rootbuilders.com"
              className="font-medium text-primary-500 hover:underline"
              >
              support@rootbuilders.com
            </a>
          </div>

        </div>
      </div>
    </main>
  )
}
