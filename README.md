# pi-learning

学习 [Pi Agent](https://www.npmjs.com/package/@earendil-works/pi-coding-agent)（`@earendil-works/pi-coding-agent`）的个人笔记与示例代码仓库。

## 目标

1. 通过一系列小示例，逐步掌握 Pi Agent SDK 的用法。
2. 在学完的基础上，自己开发一个基于 Pi Agent 的扩展 / 应用。

## 目录

| 目录 | 内容 |
| --- | --- |
| `L01-env` | 环境搭建，跑通第一个 Agent 会话（`01-hello.ts`） |

后续每节课会新增一个 `LXX-xxx` 目录。

## 快速开始

```bash
npm install
npx tsx L01-env/01-hello.ts
```

运行前需要在 `~/.pi/agent/models.json` 中配置好可用模型。

## 计划

- [x] L01：环境与 Hello World
- [ ] 继续学习 Pi Agent 的核心能力
- [ ] 基于所学内容开发自己的 Agent
