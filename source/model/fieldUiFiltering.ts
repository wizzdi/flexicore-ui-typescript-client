import { InvokerUIFiltering } from "./invokerUiFiltering";


export interface FieldUIFiltering extends InvokerUIFiltering {
    mandatory?: boolean[];
    methodIds?: string[];
    ordinalEnd?: number;
    ordinalStart?: number;
    visible?: boolean[];
}