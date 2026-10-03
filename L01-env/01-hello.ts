import { createAgentSession, ModelRuntime } from "@earendil-works/pi-coding-agent";

const modelRuntime = await ModelRuntime.create();

const available = await modelRuntime.getAvailable();
const model = available[0];

if (!model) {
  console.error("❌ 没找到可用模型，请检查 ~/.pi/agent/models.json");
  process.exit(1);
}

const { session } = await createAgentSession({ model, modelRuntime });

try {
  session.subscribe((event) => {
    if (
      event.type === "message_update" &&
      event.assistantMessageEvent.type === "text_delta"
    ) {
      process.stdout.write(event.assistantMessageEvent.delta);
    }
  });

  console.log(`🤖 使用模型：${model.provider}/${model.id}\n`);
  await session.prompt("用一句话介绍你自己。");
  console.log("\n");
} finally {
  session.dispose();
}
