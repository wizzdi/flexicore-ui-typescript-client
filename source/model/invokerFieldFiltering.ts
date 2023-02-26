import { InvokerMethod } from "./invokerMethod";
import { InvokerUIFiltering } from "./invokerUiFiltering";


export interface InvokerFieldFiltering extends InvokerUIFiltering {
    mandatory?: boolean[];
    methodIds?: string[];
    ordinalEnd?: number;
    ordinalStart?: number;
    visible?: boolean[];
}