import {ReactNode, useCallback, useEffect,useState} from 'react'
import ProtectedStack from '../../components/layouts/protectedstack/Index'
import AuthenticatedApiClient from '../../services/axios/AuthenticatedApiClient';
import { useRouter } from 'next/router';
import DateDisplay from '../../components/date-display/DateDisplay';
import {Tabs} from '../../components/Tabs/Index';
import Guests from '../../components/guests/Guests';
import { Event } from '../../context/event-data';
function EventDetail() {
  const [event, setEvent] = useState<Event>({days:[]});
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
      <>
        <article className='border border-gray-300 bg-white p-6 rounded-xl my-4'>
          <h2 className='color text-gray-600 font-semibold text-lg font-nunito '>{event.name}</h2>
          {
            event.days ? 
            (
              <div className="flex my-1">
                {event.days.map((day: Date, index: number) => <DateDisplay entry={day} key={index}/>)}
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
            Programme content
          </Tabs.Item>
        </Tabs.Group>
      </>
  )
}

EventDetail.getLayout = function getLayout(page: ReactNode) {
  return (
		<ProtectedStack>
      {page}
		</ProtectedStack>
  )
}
export default EventDetail;
