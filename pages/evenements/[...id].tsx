import React, {useCallback, useEffect,useState} from 'react'
import ProtectedStack from '../../layouts/protectedstack/Index'
import AuthenticatedApiClient from '../../services/axios/AuthenticatedApiClient';
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router';
import DateDisplay from '../../components/date-display/DateDisplay';
import {Tabs} from '../../components/Tabs/Index';
import Guests from '../../components/guests/Guests';
function EventDetail() {
  const [event, setEvent] = useState({days:[]});
  const {query} = useRouter();
  const readData = useCallback(
    async () => {
      try {
        const apiClient = AuthenticatedApiClient();
        const {data} = await apiClient.get(`event/${query.id[0]}`);
        setEvent(data);
      } catch (error) {
      }
    },
  [query])
  useEffect(() => {
    readData();
  }, [readData])
  return (
    <ProtectedStack>
      <section className="py-10">
      <article className='border border-gray-300 bg-white p-6 rounded-xl my-4'>
        <h2 className='color text-gray-600 font-semibold text-lg font-nunito '>{event.name}</h2>
        <div className="flex my-1">
        {event.days.map((day: string) => <DateDisplay entry={day} key={day}/>)}
        </div>
       
      </article>
      <Tabs.Group aria-label="Tabs with icons" style="fullWidth">
        <Tabs.Item title="Invités">
          <Guests />
        </Tabs.Item>
        <Tabs.Item title="Programme">
          Programme content
        </Tabs.Item>
      </Tabs.Group>
      </section>
    </ProtectedStack>
  )
}
export default EventDetail;
