import React, { useContext, useEffect } from 'react'
import ProtectedStack from '../../components/layouts/protectedstack/Index'
import { NewEventContext } from '../../context';
import EventList from '../../components/events/list/EventList';

export default function Account() {
  const {resetEvent} = useContext(NewEventContext);
  useEffect(() => {
    resetEvent();
  }, [resetEvent])
	return (
    <ProtectedStack>
      <EventList />
    </ProtectedStack>
  )
}