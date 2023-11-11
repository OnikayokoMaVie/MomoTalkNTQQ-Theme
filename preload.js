const {contextBridge, ipcRenderer} = require("electron");


contextBridge.exposeInMainWorld("momotalk_theme", {
    updateWallpaper: (message) => ipcRenderer.on(
        "LiteLoaderQQNT.momotalk_theme.updateWallpaper",
        message
    ),
    updateSetting: (message) => ipcRenderer.on(
        "LiteLoaderQQNT.momotalk_theme.updateSetting",
        message
    ),
    updateCSS: (message) => ipcRenderer.on(
        "LiteLoaderQQNT.momotalk_theme.updateCSS",
        message
    ),
    rendererReady: () => ipcRenderer.send(
        "LiteLoaderQQNT.momotalk_theme.rendererReady"
    ),
    setSetting: (message) => ipcRenderer.send(
        "LiteLoaderQQNT.momotalk_theme.setSetting",
        message
    ),
    setWallpaper: () => ipcRenderer.send(
        "LiteLoaderQQNT.momotalk_theme.setWallpaper",
    ),
    getSetting: () => ipcRenderer.invoke(
        "LiteLoaderQQNT.momotalk_theme.getSetting",
    ),
    resetSetting: () => ipcRenderer.send(
        "LiteLoaderQQNT.momotalk_theme.resetSetting",
    ),
});