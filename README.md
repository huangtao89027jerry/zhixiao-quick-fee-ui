# 快速收费原型

校管家「快速收费」静态二维码交互原型，包含 PC 端和手机端。

## 页面

- `index.html`：PC 端
- `mobile.html`：手机端
- `parent.html`：家长端扫码交费
- `design-system.html`：移动端设计规范

家长端固定金额流程可在 `parent.html` 后添加 `?amount=11`；
首次扫码注册流程可添加 `?start=new`；
多学员选择流程可添加 `?start=multiple`；
已绑定单个学员可添加 `?students=single`；
重复学员确认流程可添加 `?start=duplicate`；
停用二维码状态可添加 `?disabled=1`。

## 说明

- 微信支付标识基于提供的官方 SVG 素材。
- 页面字体使用 `HYQiHei-55S.otf`。
- 金额数字统一使用 `JingBeiNumber-Bold.ttf`。
- `下载二维码-无金额.png` 和 `下载二维码-有金额.png` 为海报预览文件。
- 支付流程为原型模拟，不连接真实支付接口。
