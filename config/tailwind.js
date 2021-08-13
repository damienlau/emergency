// 自定义属性生成步进器
// @param {string} alias 属性名 - 非必填；指定自定义属性名称，默认为步长序号
// @param {string} property 变量属性 - 必填；指定全局 css 变量
// @param {number} length 属性尾长 - 必填；指定循环生成属性的最后一个数字
// @param {number} step 步长 - 非必填；指定生成属性命名间隔，默认为步长为 1
const createCustomPropertyStepper = (property, length, step = 1, alias) => {
  // 基于步长生成类对象数组
  let array_ = Array.from({ length: length / step }, (v, i) => [
    alias ? `${alias}-${i * step + step}` : i * step + step,
    property ? `var(${property}-${i * step + step})` : i * step + step,
  ]);

  // 将数组逆操作转为对象
  return Object.fromEntries(array_);
};

module.exports = {
  purge: ["./index.html", "./website/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  important: true,
  theme: {
    extend: {
      // 颜色
      colors: createCustomPropertyStepper("--color-navy", 5, 1, "navy"),
    },
    // 字体
    fontSize: {
      12: [`var(--size-12)`, `var(--size-20)`],
      14: [`var(--size-14)`, `var(--size-22)`],
      16: [`var(--size-16)`, `var(--size-24)`],
      18: [`var(--size-18)`, `var(--size-26)`],
      20: [`var(--size-20)`, `var(--size-24)`],
      22: [`var(--size-22)`, `var(--size-30)`],
      24: [`var(--size-24)`, `var(--size-28)`],
    },
    // 尺寸
    spacing: createCustomPropertyStepper("--size", 100, 2),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
