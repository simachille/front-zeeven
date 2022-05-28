import { ActionType } from './data';
export type Dispatch = (action: Action) => void
export type Profile = {
  id?: string, 
  civility?: string, 
  firstName: string, 
  lastName: string, 
  email: string, 
  phone: string,
  sendInvitation?: boolean,
}
export type Action = {type: ActionType, data?: {step: number, contacts: Profile[]}};
export type Event = {
    id?: string, 
    name?: string, 
    days?: Date[], 
    date?: string, 
    time?: string
  }
export type State = {
  step?: number,
   event: {
     contacts: Profile[]
    }
}
export type ProviderProps = {children: React.ReactNode}