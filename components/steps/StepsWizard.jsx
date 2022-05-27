import { useContext, useEffect} from 'react'
import { NewEventContext } from '../../context'
import EventDay from './EventDay';
import FinalStep from './FinalStep';
import UserInfos from './UserInfos';

function StepsWizard() {
    
  const {state: {step: formStep, event} , updateStep, updateContact, updateEvent} = useContext(NewEventContext);
  const nextFormStep = () => {
    const newStepIndex = formStep + 1;
    updateStep({step: newStepIndex});
  };

  const prevFormStep = () => {
    const newStepIndex = formStep === 0 ? 0: formStep - 1;
    updateStep({step: newStepIndex});
  }
  const handleUserInfos = (profile) => {
    updateContact(profile)
    nextFormStep();
  }
  const handleDaysInfos = (days) => {
    updateEvent({days})
    nextFormStep();
  }

  const fieldWrapper = (() => {
    switch (formStep) {
      case 0:
        return <UserInfos nextFormStep={handleUserInfos} defaultValues={event.contacts[0]} name="firstFiance" title="Je me marie"/>;
      case 1:
        return  <UserInfos prevFormStep={prevFormStep} defaultValues={event.contacts[1]} name="secondFiance" nextFormStep={handleUserInfos} title="Avec" adjective='Son'/>;
      case 2:
        return <EventDay prevFormStep={prevFormStep} nextFormStep={handleDaysInfos} />;
      case 3:
        return  <FinalStep />;
    }
  })();
  return (
    <div className='bg-white p-5 rounded-xl text-blue-800'>
      {fieldWrapper}
    </div>
  )
}

export default StepsWizard