
import Link from 'next/link';
import React from 'react';
import OpenedStack from '../../components/layouts/openedstack/Index';

function VerificationRequest() {

	return (
		<OpenedStack>
		   <div className='text-center py-4'>
          <p>Merci pour vore confiance</p>
          <p className='my-4'>Nous vous avons transmis un lien pour connecter</p>
          <p>Verifiez votre mail</p>
          <div className='flex flex-col'>
          <span className='block text-center'>Vous n'avez pas encore de compte ?</span>
          <Link href='/'>
            <a className='block my-1 text-center text-sky-300'>Retour à l'accueil</a>
          </Link>
      </div>
       </div>
		</OpenedStack>
	);
}

export default VerificationRequest;
