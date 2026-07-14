import React from 'react'
interface AuthBannerProps {
	showFeatures? : boolean
}
const AuthBanner = ({showFeatures = false} : AuthBannerProps) => {
  return (
    <div className="relative flex justify-center items-center bg-[url('/images/banner.jpg')] bg-cover bg-left text-neutral-light">
  		<div className="absolute inset-0 bg-linear-to-r from-primary-900/90 to-primary-900/80"></div>

  			<div className="z-10 w-full">
				<div className="relative h-screen md:px-14 lg:px-24">
					<div className = "absolute top-20 md:left-14 lg:left-28">
						<img src="/images/logo.png" alt="logo" width={243} height={78}/>

					</div>
					<div className=" flex items-start justify-center flex-col gap-4 h-full">
						<h1 className='h1 font-heading leading-heading'>Track participation. <br />
						Drive performance.
						</h1>
						<h3 className='p font-body leading-body'>Monitor weekly participation, spot inactivity <br/> early, and drive completion across cohorts.</h3>
						{showFeatures && (
							<ul className='flex flex-col gap-2 py-8 w-full'>
								<li className='li flex items-center gap-4 bg-primary-50/20 p-3 text-sm rounded-sm w-full'>
								<img src="/icons/users.svg" alt="people-icon" className="w-8 h-8 p-1" />
								<span>Stay connected</span>
								</li>
								<li className='li flex items-center gap-4 bg-primary-50/20 p-3 text-sm rounded-sm w-full'>
								<img src="/icons/chart-line.svg" alt="chart-line-icon" className="w-8 h-8 p-1" />
								<span>Live management & weekly analytics</span>
								</li>
								<li className='li flex items-center gap-4 bg-primary-50/20 p-3 text-sm rounded-sm w-full'>
								<img src="/icons/bell-dot.svg" alt="bell-dot-icon" className="w-8 h-8 p-1"/>
								<span>Inactivity alerts after 7 days</span>
								</li>
							</ul>

						)}

					</div>
				</div>
			</div>
		
    </div>
  )
}

export default AuthBanner
