import React from 'react';
import OpenedStack from '../../layouts/openedstack/Index';
import { getCsrfToken, getProviders } from "next-auth/react"

import Credentials from '../../components/providers/credentials';

function SignIn({ providers }) {
 
	return (
		<OpenedStack>
      <>
        {Object.values(providers).map(({id}) => (
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

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context);
  const providers = await getProviders();

  return {
    props: { csrfToken,providers },
  }
}