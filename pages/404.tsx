import React from 'react'
import ProtectedStack from '../components/layouts/protectedstack/Index'
import {useRouter} from "next/router";
import OpenedStack from '../components/layouts/openedstack/Index';

function PageNotFound() {
	const router = useRouter();
  const goToHomePage = () => {
		router.push('/');
	}
  return (
    <OpenedStack>
        
        <div className='bg-white p-5 rounded-xl text-blue-800'>
          <p className='text-center my-5'>La page que vous recherchez n'existe pas</p>
          <p className='text-center my-5'>
            <button onClick={goToHomePage}
                className="mr-2 w-3/4 mx-auto border border-blue-800 hover:border-blue-800 text-blue-800 font-light py-2 px-4 rounded-lg shadow-sm">
                   Retourner  à l'accueil
            </button>
          </p>
        </div>
    </OpenedStack>
  )
}

export default PageNotFound
