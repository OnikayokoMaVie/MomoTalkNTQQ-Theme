const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("momotalk_theme", {
    setSetting: (k, v) => ipcRenderer.send(
        "LiteLoader.momotalk_theme.setSetting",
        k, v
    ),
    updateSetting: (k, v) => ipcRenderer.on(
        "LiteLoader.momotalk_theme.updateSetting",
        k, v
    ),
    updateAllSetting: (theme) => ipcRenderer.on(
        "LiteLoader.momotalk_theme.updateAllSetting",
        theme
    ),
    getSetting: () => ipcRenderer.invoke(
        "LiteLoader.momotalk_theme.getSetting"
    ),
    chooseImage: () => ipcRenderer.send(
        "LiteLoader.momotalk_theme.chooseImage",
    ),
    logToMain: (...args) => ipcRenderer.send(
        "LiteLoader.momotalk_theme.logToMain",
        ...args
    ),
    errorToMain: (...args) => ipcRenderer.send(
        "LiteLoader.momotalk_theme.errorToMain",
        ...args
    ),
})
