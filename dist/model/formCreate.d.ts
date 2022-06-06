import { CreatePreset } from './createPreset';
export interface FormCreate extends CreatePreset {
    relatedClassCanonicalName?: string;
    dynamicExecutionId?: string;
}
