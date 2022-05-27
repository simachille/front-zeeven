import React, {useEffect, useState} from 'react'
const months = [
  'Jan.',
  'Feb.',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Jul.',
  'Août',
  'Sep.',
  'Oct.',
  'Nov.',
  'Dec.'
]
const days = [
  'Dim.',
  'Lun.', 
  'Mar.',
  'Mer.', 
  'Jeu.', 
  'Ven.', 
  'Sam.'
]
function DateDisplay({entry}:{entry: string}) {
  const [formattedDate, setFormattedDate] = useState('')
  useEffect(() => {
    const date = new Date(entry);
    
    const year = date.getFullYear()

    const monthIndex = date.getMonth();
    const monthName = months[monthIndex];
    const dayIndex = date .getDay()
    const dayName = days[dayIndex]

    const day = date.getDate() 

    const dateAstring = `${dayName}, ${day < 10 ? `0${day}`: day} ${monthName} ${year}`;
    setFormattedDate(dateAstring);
  }, [entry])
  return (
    <span className='mr-2 text-gray-500 text-md'>
      {formattedDate}
    </span>
  )
}

export default DateDisplay