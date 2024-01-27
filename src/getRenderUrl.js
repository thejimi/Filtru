export default function getRenderUrl(renderName, paramsString) {
    return `chrome-extension://gedfcenbmllcaopodciamdlaeopgbopl/app/render/${renderName}.html?${paramsString || ""}`
}