'use strict';

export function getRightTerminalCommand(platform: string, command: string): string {
    return (platform === "linux" || platform === "darwin") ? `sudo ${command}` : command;
}

export function getRightFilePath(platform: string, shellConfig: string, filePath: string): string {
    if (platform !== "win32" || shellConfig) {
        return filePath;
    }

    let shellConfigLowercase  = shellConfig.toLowerCase();
    if (shellConfigLowercase.indexOf("bash") > -1 && shellConfigLowercase.indexOf("git") > -1) {
        // Git Bash
        return filePath.replace(/^([A-Za-z]):/, (match, p1) => `/${p1.toLowerCase()}`).replace(/\\/g, "/");
    }
    if (shellConfigLowercase.indexOf("bash") > -1 && shellConfigLowercase.indexOf("windows") > -1) {
        // Bash on Ubuntu on Windows
        return filePath.replace(/^([A-Za-z]):/, (match, p1) => `/mnt/${p1.toLowerCase()}`).replace(/\\/g, "/");
    }
    return filePath;
}