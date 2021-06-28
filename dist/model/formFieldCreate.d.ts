import { CreateUiField } from "./createUiField";
export interface FormFieldCreate extends CreateUiField {
    editable?: boolean;
    creatable?: boolean;
    anchorLeft?: number;
    anchorRight?: number;
    anchorTop?: number;
    anchorBottom?: number;
}
