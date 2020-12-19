import { request } from './request'

export function getCategory() {
    return request({
        url: 'category/'
    })
}

export function getGoods(maitKey) {
    return request({
        url: 'subcategory',
        params: {
            maitKey
        }
    })
}

export function getList(miniWallkey, type) {
    return request({
        url: 'subcategory/detail',
        params: {
            miniWallkey,
            type
        }
    })
}