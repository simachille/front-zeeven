import {ReactNode, useCallback, useEffect,useState} from 'react'
import ProtectedStack from '../../components/layouts/protectedstack/Index'
import AuthenticatedApiClient from '../../services/axios/AuthenticatedApiClient';
import { useRouter } from 'next/router';
import DateDisplay from '../../components/date-display/DateDisplay';
import {Tabs} from '../../components/Tabs/Index';
import Guests from '../../components/guests/Guests';
import { Event } from '../../context/event-data';
import Schedules from '../../components/schedule/Schedules';
function EventDetail() {
  const [event, setEvent] = useState<Event>({dates:[]});
  const {query: {id = []}} = useRouter();
  const readData = useCallback(
    async () => {
      try {
        const apiClient = AuthenticatedApiClient();
        const {data} = await apiClient.get(`event/${id[0]}`);
        setEvent(data);
      } catch (error) {
      }
    },
  [id])
  useEffect(() => {
    readData();
  }, [readData])
  return (
    <ProtectedStack>
        <article className='border border-gray-300 bg-white p-3 rounded-xl my-4'>
          <h2 className='color text-gray-600 font-semibold text-lg font-nunito text-center md:text-left'>{event.name}</h2>
          {
            event.dates ? 
            (
              <div className="flex my-1 flex-col md:flex-row ">
                {event.dates.map((day: Date, index: number) => <span className='md:mr-2 text-center my-1 md:my-0 text-gray-500 text-md' key={index}><DateDisplay entry={day} /></span>)}
              </div>
            )
            : null 
          }
        </article>
        <Tabs.Group aria-label="Tabs with icons" style="fullWidth">
          <Tabs.Item title="Invités">
            <Guests />
          </Tabs.Item>
          <Tabs.Item title="Programme">
            <Schedules dates={event.dates}/>
          </Tabs.Item>
        </Tabs.Group>
      </ProtectedStack>
  )
}

export default EventDetail;
