import { useRouter } from 'next/router';
import React from 'react'
import { Event } from '../../../context/event-data';
import DateDisplay from '../../date-display/DateDisplay';

function EventItem({event}: {event: Event}) {
  const router = useRouter();
  const display = () => {
    router.push(`evenements/${event.id}`)
  }
  
  return (
    <article className='border border-gray-300 bg-white p-8 rounded-xl my-4 flex justify-between items-center'>
      <div>
        <h2 className='color text-gray-600 font-semibold text-lg font-nunito '>{event.name}</h2>
        <div className="flex my-3">
        {event.days ? event.days.map((day: Date, index: number) => <DateDisplay entry={day} key={index} />) : null}
        </div>
      </div>
      <div className="flex py-2 justify-center">
        <button onClick={display} type="button" className="border border-blue-800 hover:text-white hover:bg-blue-800 text-blue-800 font-light py-2 px-4 rounded-lg shadow-sm">
          Afficher
        </button>
      </div>
    </article>
  )
}

export default EventItem;
