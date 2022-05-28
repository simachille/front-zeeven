import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect,useState, useCallback } from "react";
import { NewEventContext } from "../../context";
import AuthenticatedApiClient from "../../services/axios/AuthenticatedApiClient";

function FinalStep() {
  const router = useRouter();
  const {state: {event}} = useContext(NewEventContext);
  const [displayMessage, setDisplayMessage] = useState(false);

  const saveEvent = useCallback(
      async () => {
        let name = '';
        if (event && event.contacts) {
          name = `Mariage de ${event?.contacts[0]?.firstName} et ${event.contacts[1].firstName}`;
        }
        const eventToSave =  {
          name,
          ... event
        }
        try {
          const apiClient = AuthenticatedApiClient();
          await apiClient.post('event', JSON.stringify(eventToSave));
          setDisplayMessage(true);
        } catch (error) {
          setDisplayMessage(false);
        }
      },
    [event],
  )
  const goToHomePage = () => {
    router.push('/');
  } 
  useEffect(() => {
    saveEvent();
  }, [saveEvent])

  return (
    <div className='text-2xl'>
      {
        displayMessage ? 
        <>
          <p className='text-center my-5'>Votre annonce a bien été enregistrée</p>
          <p className='text-center my-10'>
             <button onClick={goToHomePage} className="mr-2 w-1/2 mx-auto border border-blue-800 hover:border-blue-800 text-blue-800 font-light py-2 px-4 rounded-lg shadow-sm">Voir mon évènement</button>
          </p>
        </>
        :
        <>
          <p className='text-center my-5'>... Un instant</p>
          <p className='text-center my-5'>nous vérifions votre anonce</p>
        </>
      }
    </div>
  )
}

export default FinalStep;
