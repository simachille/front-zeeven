import { createContext, useCallback, useMemo, useReducer } from 'react';
import { INITIAL_STATE } from '../utils/contants';
import { ActionType } from './data';
import { Profile, ProviderProps } from './event-data';
import eventReducer from './EventReducer';

export const NewEventContext = createContext({
  state: INITIAL_STATE,
  resetEvent: () => {},
  updateEvent: (data: any) => {},
  updateContact: (data: Profile) => {},
  updateStep: ({step}: {step: number}) => {}
});

function EventContext({children}: ProviderProps) {
  const {UPDATE_STEP, UPDATE_EVENT, UPDATE_CONTACT, RESET_EVENT} = ActionType;
  const [state, dispatch] = useReducer(eventReducer, INITIAL_STATE);
  const updateStep = useCallback((data: any) => dispatch({ type: UPDATE_STEP,  data}),[UPDATE_STEP]);
  const updateEvent = useCallback((data: any) => dispatch({data, type: UPDATE_EVENT}),[UPDATE_EVENT]);
  const updateContact= useCallback((data: any) => dispatch({data, type: UPDATE_CONTACT}),[UPDATE_CONTACT]);
  const resetEvent= useCallback(() => dispatch({type: RESET_EVENT}),[RESET_EVENT]);
  const valueMemo = useMemo(
    () => ({
      state,
      resetEvent,
      updateContact,
      updateEvent,
      updateStep
    }),
    [
      state,
      resetEvent,
      updateContact,
      updateEvent,
      updateStep
    ],
  );
 
  return (
    <NewEventContext.Provider value={valueMemo}>
     {children}
    </NewEventContext.Provider>
  )
}
export default EventContext;