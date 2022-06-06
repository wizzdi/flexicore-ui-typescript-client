import { BasicCreate } from '@flexicore/flexicore-client/dist/model/basicCreate';
export interface CreateGridPreset extends BasicCreate {
    relatedClassCanonicalName?: string;
    dynamicExecutionId?: string;
    latMapping?: string;
    lonMapping?: string;
}
