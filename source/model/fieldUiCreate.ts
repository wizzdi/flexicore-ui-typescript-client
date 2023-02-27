import { InvokerUICreate } from "./invokerUiCreate";


export interface FieldUICreate extends InvokerUICreate {
    mandatory?: boolean;
    methodId?: string;
    ordinal?: number;
    visible?: boolean
}