import { UiField } from "./uiField";
export interface FormField extends UiField {
    editable?: boolean;
    creatable?: boolean;
    anchorLeft?: number;
    anchorRight?: number;
    anchorTop?: number;
    anchorBottom?: number;
}
