var version = '2.0.0'
var platform = 'Chrome'
var devsite = 'https://jimi.lol'
var donate = 'https://ko-fi.com/jimiwtf'
var id = 'gedfcenbmllcaopodciamdlaeopgbopl'

export function full(){
    return {
        version: version,
        platform: platform,
        devsite: devsite,
        donate: donate,
        id:id
    }
}

export function get(val){
    return full()[val]
}