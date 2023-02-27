import { InvokerUIFiltering } from "./invokerUiFiltering";


export interface MethodUIFiltering extends InvokerUIFiltering {
    invokerIds?: string[];
    methodFieldsIds?: string[];
}