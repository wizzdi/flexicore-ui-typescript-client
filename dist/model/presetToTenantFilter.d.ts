import { PresetLinkFilter } from "./presetLinkFiltering";
export interface PresetToTenantFilter extends PresetLinkFilter {
    tenantIdsForPreset?: string[];
}
