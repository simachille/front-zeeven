import React, { ReactNode, FC } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import EventContext from '../../../context';
import { GetServerSideProps } from 'next';
interface Props {
  children: ReactNode;
}
const ProtectedStack: FC<Props> = ({ children }) =>{
	return (
    <EventContext>
      <section className='font-extralight border min-h-screen bg-slate-200 flex flex-col justify-between font-roboto'>
          <Header />
          <section className='mx-auto py-3 w-10/12 md:3/4 2xl:w-2/4 md:px-0'>
            {children}
          </section>
          <Footer />
      </section>
    </EventContext>
	);
}
export default ProtectedStack;
