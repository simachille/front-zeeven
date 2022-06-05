import { Schedule } from "../../types/Schedule";
import DateDisplay from "../date-display/DateDisplay";

function ScheduleList({dates, schedules}: {dates: Date[], schedules: Schedule[]}) {
  return (
    <div className="pl-10">
      {dates.map((date) => (
        <div className="" key={String(date)}>
          <h3 className="mt-5 !font-extrabold text-blue-800"><DateDisplay entry={date} /></h3>
          {schedules.filter(({date: current}) => new Date(date).getTime() === new Date(current).getTime()).map((schedule) => (
            <div className="mt-2 flex" key={String(date)}>
              <div className="font-extrabold text-blue-800 w-16">{schedule.start}</div>
              <div>
                  <h4 className="font-extrabold text-blue-800">
                    {schedule.title}
                  </h4>
                  <div dangerouslySetInnerHTML={{__html: schedule.note}}></div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default ScheduleList;