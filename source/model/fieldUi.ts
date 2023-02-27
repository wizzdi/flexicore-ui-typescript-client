import { MethodUI } from "./methodUi";
import { InvokerUI } from "./invokerUi";


export interface FieldUI extends InvokerUI {
    method?: MethodUI;
    ordinal?: number;
    mandatory?: boolean;
    visible?: boolean;
}