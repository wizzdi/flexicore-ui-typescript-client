import { InvokerMethod } from "./invokerMethod";
import { InvokerUI } from "./invokerUi";


export interface InvokerField extends InvokerUI {
    method?: InvokerMethod;
    ordinal?: number;
    mandatory?: boolean;
    visible?: boolean;
}