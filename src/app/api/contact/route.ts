const MAX_LENGTH = { name: 100, email: 200, subject: 200, message: 4000 } as const;

type Field = keyof typeof MAX_LENGTH;

// Telegram HTML parse mode only needs these three characters escaped.
function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.error("Contact form: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set");
    return Response.json({ error: "Not configured" }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const values = {} as Record<Field, string>;
  for (const field of Object.keys(MAX_LENGTH) as Field[]) {
    const raw = body[field];
    const value = typeof raw === "string" ? raw.trim() : "";
    if (!value || value.length > MAX_LENGTH[field]) {
      return Response.json({ error: `Invalid ${field}` }, { status: 400 });
    }
    values[field] = escapeHtml(value);
  }

  const text = [
    "<b>📩 New contact message: ARG Tech</b>",
    "",
    `<b>Name:</b> ${values.name}`,
    `<b>Email:</b> ${values.email}`,
    `<b>Subject:</b> ${values.subject}`,
    "",
    values.message,
  ].join("\n");

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
      link_preview_options: { is_disabled: true },
    }),
  });

  if (!res.ok) {
    console.error("Contact form: Telegram error", res.status, await res.text());
    return Response.json({ error: "Failed to send" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
