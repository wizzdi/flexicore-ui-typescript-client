import { Baselink } from "@flexicore/flexicore-client";
export interface UiFieldToClazz extends Baselink {
    priority?: number;
    visible?: boolean;
    context?: string;
    categoryName?: string;
    displayName?: string;
}
