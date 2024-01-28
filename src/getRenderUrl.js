import * as extensionInfo from '../extensionInfo.js'

export default function getRenderUrl(renderName, paramsString) {
    return `https://filtru.xyz/extension/render/${renderName}.html?${paramsString || ""}`
}