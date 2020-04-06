/*
 * @Description:
 * @Author: Xiaokun.jiang
 * @Email: jiangxiaokun@bytedance.com
 * @Date: 2020-04-06 10:30:52
 * @LastEditTime: 2020-04-06 15:49:32
 */

const test = function () {
    console.log('[ES Module] test function for the browser');
};

const another = function () {
    console.log('[ES Module] another function for the browser');
};

export { test, another };
