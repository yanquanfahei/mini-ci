# mini-ci

小程序 CI，开启小程序开发工具，生成小程序预览码，上传小程序代码

## Install

```shell
pnpm add @eye-socket/mini-ci -D
```

## Usage

通过脚本运行

```shell
# 开启小程序开发工具
pnpm create @eye-socket/mini-ci --open
# 生成小程序预览码
pnpm create @eye-socket/mini-ci --preview
# 上传小程序代码
pnpm create @eye-socket/mini-ci --upload
```

## Configuration

Create `mini-ci.config.ts`:

```ts
export default {

}
```
