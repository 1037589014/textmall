import { request } from './request'

export function getDetail(iid) {
    return request({
        url: 'detail/',
        params: {
            iid
        }
    })
}
export function getRecommend() {
    return request({
        url: 'recommend/',

    })
}

export class base {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.oldPrice = itemInfo.oldPrice
        this.discountDesc = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.price = itemInfo.price
        this.desc = itemInfo.desc
        this.lowNowPrice = itemInfo.lowNowPrice
        this.image = itemInfo.topImages[0]
    }
}

export class shop {
    constructor(shopInfo) {
        this.name = shopInfo.name
        this.logo = shopInfo.shopLogo
        this.cSells = shopInfo.cSells
        this.cGoods = shopInfo.cGoods
        this.score = shopInfo.score
        this.url = shopInfo.shopUrl
    }
}