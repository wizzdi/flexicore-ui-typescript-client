import { Tenant } from "@flexicore/flexicore-client";
import { Preset } from "./preset";
export interface PresetToTenantContainer {
    preset?: Preset;
    tenant?: Tenant;
    priority?: number;
    enabled?: boolean;
}
