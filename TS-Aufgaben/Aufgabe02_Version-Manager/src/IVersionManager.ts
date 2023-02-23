export interface IVersionManager {
    major(): IVersionManager;
    minor(): IVersionManager;
    patch(): IVersionManager;
    rollback(): IVersionManager;
    release(): string;
}
