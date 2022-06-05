import React from 'react';
import OpenedStack from '../../components/layouts/openedstack/Index';
import { ClientSafeProvider, getCsrfToken, getProviders } from "next-auth/react"

import Credentials from '../../components/providers/credentials';
import { GetServerSideProps } from 'next';
import axios from 'axios';

function SignIn({ providers : bee }: {providers: ClientSafeProvider[]}) {
  const [providers, setProviders] = React.useState([]);
  const readProviders = React.useCallback(async () => {
      try {
        const {data} = await axios.get(`${process.env.NEXTAUTH_URL}/api/auth/providers`);
        console.log('====================================');
        console.log({data});
        if(data) {
          setProviders(data);
        }
        console.log('====================================');
      } catch (error) {
        console.log('============error==================');
        console.log({error});
        console.log('============error==================');
      }
  }, [])
  React.useEffect(() => {
      readProviders();
  }, [readProviders])
 console.log('====================================');
 console.log(providers);
 console.log('====================================');
	return (
		<OpenedStack>
      <>
        {Object.values(providers).map(({id}: {id: string}) => (
          (()=> {
            switch (id) {
              case 'credentials':
                return <Credentials key={id}/>
            }
          })()
        ))}
      </>
		</OpenedStack>
	);
}

export default SignIn;


export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();

  return {
    props: { providers },
  }
}