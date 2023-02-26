import { InvokerUIFiltering } from "./invokerUiFiltering";


export interface InvokerMethodFiltering extends InvokerUIFiltering {
    invokerIds?: string[];
    methodFieldsIds?: string[];
}