import Link from 'next/link';
import React from 'react';

function OpenedStack({children}) {
	return (
		<section
			className='opened-stack w-full min-h-screen bg-blue-800 text-white flex flex-col justify-center text-xl font-light'>
			<main
				className='text-xl font-light px-auto'>
				<div className="mx-auto w-11/12 md:3/4 lg:w-1/3 py-2 md:px-0">
					<Link href='/'>
						<a className='block my-1 text-center font-nunito text-7xl'>ZEEVEN</a>
					</Link>
					{children}
				</div>
			</main>
		</section>
	);
}

export default OpenedStack;
