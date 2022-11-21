type DataModel = Record<string, TypeDescription>;
interface TypeDescription {
    element: Element;
    dependencies: DataModel;
}
export declare const data: DataModel;
export declare function addSDAs(dataModel: DataModel): void;
export {};
