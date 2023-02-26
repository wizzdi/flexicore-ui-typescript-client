import { InvokerUICreate } from "./invokerUiCreate";


export interface InvokerFieldCreate extends InvokerUICreate {
    mandatory?: boolean;
    methodId?: string;
    ordinal?: number;
    visible?: boolean
}