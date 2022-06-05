import { AxiosError } from "axios";
import {useRouter} from "next/router";
import {useCallback, useContext, useEffect, useState} from "react";
import {NewEventContext} from "../../context";
import AuthenticatedApiClient from "../../services/axios/AuthenticatedApiClient";

function FinalStep() {
	const router = useRouter();
	const {state: {event}} = useContext(NewEventContext);
	const [displayMessage, setDisplayMessage] = useState(false);

	const saveEvent = useCallback(
		async () => {
			let name = '';
			console.log(event)
			if (event && event.contacts) {
				name = `Mariage de ${event?.contacts[0]?.firstName} et ${event.contacts[1].firstName}`;
			}
			const eventToSave = {
				name,
				...event
			}
			try {
				const apiClient = AuthenticatedApiClient();
				await apiClient.post('event', JSON.stringify(eventToSave));
				setDisplayMessage(true);
			} catch (error: any) {
        
        const {response: {status}} = error;
        if(Number(status) === 404) {
          router.push('500');
        }
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
		<div >
			{
				displayMessage ?
					<>
						<p className='text-center my-5'>Votre annonce a bien été enregistrée</p>
						<p className='text-center my-10'>
							<button onClick={goToHomePage}
									className="w-3/4 mx-auto border border-blue-800 hover:border-blue-800 text-blue-800 font-light py-2 px-4 rounded-lg shadow-sm">Voir
								mon évènement
							</button>
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
