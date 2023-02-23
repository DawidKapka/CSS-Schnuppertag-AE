import {IVersionManager} from "../src/IVersionManager";
import {VersionManager} from "../src/VersionManager";

test('should have v0.0.1 as default version', () => {
    const testee: IVersionManager = new VersionManager();

    expect(testee.release()).toEqual('v0.0.1')
})

test('should return correct version', () => {
    const testee: IVersionManager = new VersionManager();

    testee.major().minor().minor().patch();

    expect(testee.release()).toEqual('v1.2.1');
})

test('should reset minor and patch versions when major version updated', () => {
    const testee: IVersionManager = new VersionManager();

    testee.major().minor().minor().patch().major();

    expect(testee.release()).toEqual('v2.0.0');
})

test('should reset patch version when minor updated', () => {
    const testee: IVersionManager = new VersionManager();

    testee.major().minor().patch().minor();

    expect(testee.release()).toEqual('v1.2.0');
})

test('should correctly rollback one version', () => {
    const testee: IVersionManager = new VersionManager();

    testee.major().minor().minor().rollback().patch();

    expect(testee.release()).toEqual('v1.1.1');
})

test('should correctly rollback multiple versions', () => {
    const testee: IVersionManager = new VersionManager();

    testee.major().minor().patch().rollback().rollback()

    expect(testee.release()).toEqual('v1.0.0');
})

test('should throw error when there is no version to rollback to', () => {
    const testee: IVersionManager = new VersionManager();

    expect(testee.rollback()).toThrowError('Cannot rollback!');
})
