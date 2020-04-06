/*
 * @Description:
 * @Author: Xiaokun.jiang
 * @Email: jiangxiaokun@bytedance.com
 * @Date: 2020-04-06 10:30:46
 * @LastEditTime: 2020-04-06 15:50:05
 */

const test = function () {
    console.log('[CommonJS] test function for the browser');
};

const another = function () {
    console.log('[CommonJS] another function for the browser');
};

module.exports = {
    test,
    another
};
