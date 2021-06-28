import { BasicContainer } from "@flexicore/flexicore-client";
export interface UiFieldContainer extends BasicContainer {
    priority?: number;
    visible?: boolean;
    context?: string;
    linkId?: string;
    categoryName?: string;
    displayName?: string;
}
