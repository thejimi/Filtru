import * as extensionInfo from '../extensionInfo.js'

export default function uninstallUrl() {
    chrome.runtime.setUninstallURL(`https://filtru.xyz/?uninstalledTheExtension=true&platform=${extensionInfo.get('platform')}&version=${extensionInfo.get('version')}`);
}