import { DynamicExecution } from "@flexicore/flexicore-client";
import { Preset } from "./preset";
export interface Form extends Preset {
    dynamicExecution?: DynamicExecution;
}
