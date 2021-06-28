import { PresetLinkFilter } from "./presetLinkFiltering";
export interface PresetToUserFilter extends PresetLinkFilter {
    userIds?: string[];
}
