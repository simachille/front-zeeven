import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect } from 'react';
import OpenedStack from '../../layouts/openedstack/Index';
import { getCsrfToken, getProviders } from "next-auth/react"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
const schema = yup.object({
  email: yup.string().email("Email invalide").required("Ce champ est requis"),
}).required();
function Email() {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  
  const onSubmit = ({email}:{email: string}) => {
    signIn("email", { email,  callbackUrl: 'http://localhost:3000'})
  };

	return (
		<>
		 <form className="my-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Saisissez votre email</label>
          <div className="mt-1">
            <input {...register("email")} type="text" className="text-black	form-control w-full border border-white rounded-lg shadow-sm" id="username"  />
          </div>
          <p className='mt-1'>Vous allez recevoir un lien pour vous connecter</p>
          <p className='text-red-600'>{errors.email?.message}</p>
        </div>
        {/*
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Mot de passe</label>
          <div className="mt-1">
            <input type="password" className="text-black	form-control w-full border border-white rounded-lg shadow-sm" id="password" />
          </div>
        </div>
        */}
        <button type="submit" className="mt-2 w-full bg-blue-500 hover:bg-blue-700 text-white font-light py-2 px-4 rounded-lg shadow-sm">Continuer</button>
      </form>
      {/* <div className='flex flex-col'>
          <span className='block text-center'>Vous n'avez pas encore de compte ?</span>
          <Link href='/creer-un-compte'>
            <a className='block my-1 text-center text-sky-300'>Inscrivez-vous gratuitement</a>
          </Link>
      </div> */}
		</>
	);
}

export default Email;
