import React, {useEffect, useState, useCallback} from 'react'
import  {PlusCircleOutlined} from '@ant-design/icons';
import { Profile } from '../../context/event-data';
import { useRouter } from 'next/router';
import AuthenticatedApiClient from '../../services/axios/AuthenticatedApiClient';
import ScheduleList from './ScheduleList';
import ScheduleEdit from './ScheduleEdit';

function Schedules({dates}: {dates: Date[]}) {
  const {query: {id = ''}} = useRouter();
  const [schedules, setSchedules] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  
  const fetchSchedules = useCallback(async () => {
    try {
      const apiClient = AuthenticatedApiClient();
      const {data} = await apiClient.get(`event/${id[0]}/schedule`);
      setSchedules(data);
    } catch (error) {
    }
  }, [id])

  const onSubmit = async (profile: Profile) => {
    setFormVisible(false);
    try {
      const apiClient = AuthenticatedApiClient();
      await apiClient.post(`event/${id[0]}/schedule`, JSON.stringify(profile));
      fetchSchedules();
    } catch (error) {
    }
  };

  useEffect(()=>{
    fetchSchedules();
  }, [fetchSchedules])
  return (
    <article className='flex flex-col p-3'>
      <div className="border-b-2 border-blue-500 flex justify-between items-center py-2 my-2">
        <span className='text-blue-800'>
          Votre programme
        </span>
        <button type='button' onClick={() => setFormVisible(!formVisible)}>
          <PlusCircleOutlined className='text-xl text-blue-800'/>
        </button>
      </div>
      {formVisible ? <ScheduleEdit dates={dates} handleSubmit={onSubmit} /> : null }
      {schedules.length ? <ScheduleList schedules={schedules} dates={dates} /> : null }
    </article>
  )
}

export default Schedules