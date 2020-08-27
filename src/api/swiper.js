import request from '@/utils/request'
const baseURL = 'http://localhost:3000'

export function fetchList(){
    return request({
        url: `${baseURL}/swiper/list`,
        method: 'get'
    })
}

// 删除轮播图片
export function del(params) {
    return request({
        params,
        url: `${baseURL}/swiper/del`,
        method: 'get',
    })
}