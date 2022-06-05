import { INITIAL_STATE } from '../utils/contants';
import { ActionType } from './data';
import { State, Action } from './event-data';

function eventReducer(state: State, action: Action): State {
  const {data: { step = state.step, profile =  state.event.contacts[0], dates = state.event.dates} = {}, type} = action;
  const {UPDATE_STEP, UPDATE_DATES, UPDATE_EVENT, UPDATE_CONTACT, RESET_EVENT} = ActionType;
  let newState = INITIAL_STATE;
  
  switch (type) {
    case UPDATE_STEP: {
      newState = {...state, step}
      break;
    }
    case UPDATE_CONTACT: {
      newState = {
        ...state, 
        event: {
          ...state.event, 
          contacts: [...state.event.contacts, profile]
        }
      }
      break;
    }
    case UPDATE_DATES: {
      newState = {
        ...state, 
        event: {
          ...state.event, 
          dates
        }
      }
      break;
    }
    case UPDATE_EVENT: {
      newState = {...state, event: {...state.event}};
       break;
    }
    case RESET_EVENT: {
      newState = INITIAL_STATE;
       break;
    }
    default: {
      newState = state;
    }
  }
  
  return newState;
  
}
export default eventReducer;