import CryptoJS from "crypto-js";

export function encrypt(data: any) {
  try {
    const key = CryptoJS.enc.Utf8.parse(process.env.KEY || "");
    const iv = CryptoJS.lib.WordArray.random(128 / 8); // 生成随机 IV

    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    // 将 IV 与加密数据一起返回
    return {
      iv: iv.toString(),
      data: encrypted.toString(),
    };
  } catch (error) {
    return null;
  }
}

export function decrypt(data: any) {
  try {
    const key = CryptoJS.enc.Utf8.parse(process.env.KEY || "");
    const iv = CryptoJS.enc.Hex.parse(data.iv); // 将 IV 从 Hex 转为 WordArray

    const decrypted = CryptoJS.AES.decrypt(data.data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
  } catch (error) {
    return null;
  }
}
