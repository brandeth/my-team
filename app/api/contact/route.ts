type ContactSubmission = {
  name: string;
  email: string;
  company: string;
  title: string;
  message: string;
};

type ContactFieldName = keyof ContactSubmission;

const MESSAGE_MAX_LENGTH = 165;

const MAX_LENGTHS: Record<ContactFieldName, number> = {
  name: 120,
  email: 160,
  company: 160,
  title: 160,
  message: MESSAGE_MAX_LENGTH,
};

const requiredFields = new Set<ContactFieldName>(["name", "email", "message"]);

function normalizeSubmission(payload: unknown): ContactSubmission | null {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const candidate = payload as Partial<Record<ContactFieldName, unknown>>;

  return {
    name: typeof candidate.name === "string" ? candidate.name.trim() : "",
    email: typeof candidate.email === "string" ? candidate.email.trim() : "",
    company:
      typeof candidate.company === "string" ? candidate.company.trim() : "",
    title: typeof candidate.title === "string" ? candidate.title.trim() : "",
    message:
      typeof candidate.message === "string" ? candidate.message.trim() : "",
  };
}

function getFieldError(
  fieldName: ContactFieldName,
  value: string,
): string | null {
  if (requiredFields.has(fieldName) && !value) {
    return "This field is required.";
  }

  if (value.length > MAX_LENGTHS[fieldName]) {
    return "This field is too long.";
  }

  if (
    fieldName === "email" &&
    value &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  ) {
    return "Enter a valid email address.";
  }

  return null;
}

export async function POST(request: Request) {
  let requestBody: unknown;

  try {
    requestBody = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const submission = normalizeSubmission(requestBody);

  if (!submission) {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const firstError = (Object.keys(submission) as ContactFieldName[])
    .map((fieldName) => getFieldError(fieldName, submission[fieldName]))
    .find(Boolean);

  if (firstError) {
    return Response.json({ error: firstError }, { status: 400 });
  }

  console.info("contact_submission_received", {
    emailDomain: submission.email.split("@")[1] ?? null,
    hasCompany: Boolean(submission.company),
    hasTitle: Boolean(submission.title),
    messageLength: submission.message.length,
    receivedAt: new Date().toISOString(),
  });

  return Response.json({ ok: true }, { status: 200 });
}
