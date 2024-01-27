import * as extensionInfo from '../extensionInfo.js'

export default function getRenderUrl(renderName, paramsString) {
    return `chrome-extension://${extensionInfo.get('id')}/app/render/${renderName}.html?${paramsString || ""}`
}