import { InvokerUI } from "./invokerUi";


export interface MethodUI extends InvokerUI {
    invoker?: InvokerUI;
}