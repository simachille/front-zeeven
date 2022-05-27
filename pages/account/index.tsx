import { getSession } from 'next-auth/react';
import React, { useContext, useEffect } from 'react'
import ProtectedStack from '../../layouts/protectedstack/Index'
import EventContext, { NewEventContext } from '../../context';
import EventList from '../../components/events/list/EventList';

function Account({session}) {
  
  const {resetEvent} = useContext(NewEventContext);
  useEffect(() => {
    resetEvent();
  }, [])
	return (
		<ProtectedStack>
       
        <EventList />
		</ProtectedStack>
  )
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx)
    }
  }
}
export default Account;
