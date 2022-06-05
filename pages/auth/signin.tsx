import React from 'react';
import OpenedStack from '../../components/layouts/openedstack/Index';
import { ClientSafeProvider, getCsrfToken, getProviders } from "next-auth/react"

import Credentials from '../../components/providers/credentials';
import { GetServerSideProps } from 'next';

function SignIn({ providers }: {providers: ClientSafeProvider[]}) {
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