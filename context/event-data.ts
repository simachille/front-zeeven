import { ActionType } from './data';
export type Dispatch = (action: Action) => void
export type Profile = {firstName: string, lastName: string, email: string, phone: string}
export type Action = {type: ActionType, data?: {step: number, contacts: Profile[]}};
export type Event = {date?: string, time?: string}
export type State = {step?: number, event: {contacts?: Profile[]}}
export type ProviderProps = {children: React.ReactNode}