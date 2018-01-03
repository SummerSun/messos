export interface WorkspaceConfiguration {
    get<T>(section: string): T | undefined;
    get<T>(section: string, defaultValue: T): T;
    has(section: string): boolean;
    inspect<T>(section: string): {
        key: string;
        defaultValue?: T;
        globalValue?: T;
        workspaceValue?: T;
        workspaceFolderValue?: T;
    } | undefined;
    readonly [key: string]: any;
}
export declare function getRightTerminalCommand(platform: string, command: string): string;
export declare function getRightFilePath(platform: string, configuration: WorkspaceConfiguration, filePath: string): string;
