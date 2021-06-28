import { CreatePreset } from './createPreset';
export interface CreateGridPreset extends CreatePreset {
    relatedClassCanonicalName?: string;
    dynamicExecutionId?: string;
    latMapping?: string;
    lonMapping?: string;
}
