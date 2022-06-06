import { BasicCreate } from '@flexicore/flexicore-client';
export interface CreateGridPreset extends BasicCreate {
    relatedClassCanonicalName?: string;
    dynamicExecutionId?: string;
    latMapping?: string;
    lonMapping?: string;
}
