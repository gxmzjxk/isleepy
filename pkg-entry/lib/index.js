/*
 * @Description:
 * @Author: Xiaokun.jiang
 * @Email: jiangxiaokun@bytedance.com
 * @Date: 2020-04-06 10:30:46
 * @LastEditTime: 2020-04-06 15:49:12
 */

const test = function () {
    console.log('[CommonJS] test function');
};
const another = function () {
    console.log('[CommonJS] another function');
};

module.exports = {
    test,
    another
};
