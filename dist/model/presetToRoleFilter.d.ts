import { PresetLinkFilter } from "./presetLinkFiltering";
export interface PresetToRoleFilter extends PresetLinkFilter {
    roleIds?: string[];
}
