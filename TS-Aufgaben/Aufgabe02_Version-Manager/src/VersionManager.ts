import {IVersionManager} from "./IVersionManager";

export class VersionManager implements IVersionManager {
    major(): IVersionManager {
        return undefined;
    }

    minor(): IVersionManager {
        return undefined;
    }

    patch(): IVersionManager {
        return undefined;
    }

    release(): string {
        return "";
    }

    rollback(): IVersionManager {
        return undefined;
    }

}
