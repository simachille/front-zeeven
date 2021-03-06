import type { GetServerSideProps } from 'next'

import { useSession, signIn, signOut, getSession } from "next-auth/react"
import OpenedStack from '../components/layouts/openedstack/Index';
function Home() {
  const { data: session } = useSession()
  return (
		<OpenedStack>
		  <p className='text-center my-5'>
        {session ? <button type='button' onClick={()=>signOut()}> logout</button>: <button type='button' onClick={()=>signIn()}> login</button>}
      </p>
		</OpenedStack>
	);
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if(session) {
    return {
      redirect: {
        destination: '/account',
        permanent: false,
      },
    }
  }
   return {
    redirect: {
      destination: '/api/auth/signin',
      permanent: false,
    },
   }
 }