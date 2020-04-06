/*
 * @Description:
 * @Author: Xiaokun.jiang
 * @Email: jiangxiaokun@bytedance.com
 * @Date: 2020-04-06 10:30:52
 * @LastEditTime: 2020-04-06 15:48:20
 */
const test = function () {
    console.log('[ES Module] test function');
};

const another = function () {
    console.log('[ES Module] another function');
};

export { test, another };
