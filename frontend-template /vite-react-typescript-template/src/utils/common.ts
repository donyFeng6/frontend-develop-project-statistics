import Store from '@/Store';
import Utils from '@/utils';
import CryptoJS from 'crypto-js';

//公共参数
interface PublicParams {
    app_key: string; //开放平台应用公钥
    client_os_type: number; // 1-iOS；2-Android；3-Web(API接入) ；4-Linux；5-ecos；6-qnix；17-rtos；18=小程序；19=H5
    device_id: string; //设备id
    sn?: string; //在开放平台创建产品生成的sn码
    nonce: string; //一个随机字符串，随机性越大越好，每个请求都需要重新生成
    timestamp: number; //当前Unix毫秒数时间戳，每个请求都需要重新生成
    version: string; //版本号
    sig: string; //签名参数，对除sig外所有参数进行签名计算得到的值。每次请求都要重新生成，不可复用
}
/**
 * 获取公共参数
 * @param params
 * @param isSign 是否签约公共参数
 */
export function publicOptions(params: any, isSign?: boolean) {
    const { baseParam } = Store.getState();

    const app_key = baseParam.app_key || params.app_key;
    const data: PublicParams = {
        app_key,
        client_os_type: params.client_os_type || 19,
        version: params.version || '1.0.0',
        sn: baseParam.sn || params.sn,
        device_id_type: 'UUID',
        timestamp: new Date().getTime(),
        version_code: params.version_code || 6066,
        product_type: params.product_type || 'child_smart_client',
        ...params,
    };

    let app_secret = baseParam.appSecret;
    if (isSign) {
        delete data.sn;
        app_secret =
            baseParam.donyfeng_app_secret +
            baseParam.donyfeng_server_authenticate_static_key;
    }
    if (app_secret) {
        data.sig = setSignature(data, app_secret);
    } else {
        data.sig = '';
    }
    return data;
}
/** 参数签名 */
export function setSignature(params: any, appSecret: string) {
    const signature = CryptoJS.enc.Base64.stringify(
        CryptoJS.enc.Utf8.parse(params)
    );
    const sha1ResultBytes = CryptoJS.MD5(
        CryptoJS.HmacSHA1(signature, appSecret)
    );
    return sha1ResultBytes.toString();
}

const Common = {
    publicOptions,
};

export default Common;
