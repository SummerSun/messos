'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function getRightTerminalCommand(platform, command) {
    return (platform === "linux" || platform === "darwin") ? "sudo " + command : command;
}
exports.getRightTerminalCommand = getRightTerminalCommand;
function getRightFilePath(platform, configuration, filePath) {
    if (platform !== "win32") {
        return filePath;
    }
    var windowsShell = configuration.get("integrated.shell.windows");
    if (!windowsShell) {
        return filePath;
    }
    var terminalRoot = configuration.get("terminalRoot");
    if (terminalRoot) {
        return filePath.replace(/^([A-Za-z]):/, function (match, p1) { return "" + terminalRoot + p1.toLowerCase(); }).replace(/\\/g, "/");
    }
    var winshellLowercase = windowsShell.toLowerCase();
    if (winshellLowercase.indexOf("bash") > -1 && winshellLowercase.indexOf("git") > -1) {
        // Git Bash
        return filePath.replace(/^([A-Za-z]):/, function (match, p1) { return "/" + p1.toLowerCase(); }).replace(/\\/g, "/");
    }
    if (winshellLowercase.indexOf("bash") > -1 && winshellLowercase.indexOf("windows") > -1) {
        // Bash on Ubuntu on Windows
        return filePath.replace(/^([A-Za-z]):/, function (match, p1) { return "/mnt/" + p1.toLowerCase(); }).replace(/\\/g, "/");
    }
    return filePath;
}
exports.getRightFilePath = getRightFilePath;
