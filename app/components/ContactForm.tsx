"use client";

import {
  type ChangeEvent,
  type FormEvent,
  useId,
  useMemo,
  useState,
} from "react";

import Button from "./Button";

type ContactFormValues = {
  name: string;
  email: string;
  company: string;
  title: string;
  message: string;
};

type ContactFormFieldName = keyof ContactFormValues;

export type { ContactFormValues };

export type ContactFormProps = {
  className?: string;
  onSubmit?: (values: ContactFormValues) => void | Promise<void>;
};

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  title: "",
  message: "",
};

const MESSAGE_MAX_LENGTH = 135;

const fieldOrder: Array<{
  name: ContactFormFieldName;
  label: string;
  autoComplete: string;
  rows?: number;
}> = [
  { name: "name", label: "Name", autoComplete: "name" },
  {
    name: "email",
    label: "Email Address",
    autoComplete: "email",
  },
  {
    name: "company",
    label: "Company Name",
    autoComplete: "organization",
  },
  { name: "title", label: "Title", autoComplete: "organization-title" },
  {
    name: "message",
    label: "Message",
    autoComplete: "off",
    rows: 2,
  },
];

function getFieldError(
  fieldName: ContactFormFieldName,
  value: string,
): string | null {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "This field is required.";
  }

  if (
    fieldName === "email" &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)
  ) {
    return "Enter a valid email address.";
  }

  return null;
}

export default function ContactForm({ className, onSubmit }: ContactFormProps) {
  const formId = useId();
  const [values, setValues] = useState(initialValues);
  const [touchedFields, setTouchedFields] = useState<
    Partial<Record<ContactFormFieldName, boolean>>
  >({});
  const [focusedField, setFocusedField] = useState<ContactFormFieldName | null>(
    null,
  );
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const errors = useMemo(() => {
    return fieldOrder.reduce<Partial<Record<ContactFormFieldName, string>>>(
      (nextErrors, field) => {
        const error = getFieldError(field.name, values[field.name]);

        if (error) {
          nextErrors[field.name] = error;
        }

        return nextErrors;
      },
      {},
    );
  }, [values]);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.currentTarget;
    const fieldName = name as ContactFormFieldName;
    const nextValue =
      fieldName === "message" ? value.slice(0, MESSAGE_MAX_LENGTH) : value;

    if (submitMessage) {
      setSubmitMessage(null);
    }

    setValues((currentValues) => ({
      ...currentValues,
      [fieldName]: nextValue,
    }));
  }

  function handleBlur(fieldName: ContactFormFieldName) {
    setTouchedFields((currentTouchedFields) => ({
      ...currentTouchedFields,
      [fieldName]: true,
    }));
    setFocusedField((currentFocusedField) =>
      currentFocusedField === fieldName ? null : currentFocusedField,
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setHasSubmitted(true);
    setSubmitMessage(null);
    setTouchedFields({
      name: true,
      email: true,
      company: true,
      title: true,
      message: true,
    });

    if (Object.keys(errors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      await onSubmit?.(values);
      setValues(initialValues);
      setTouchedFields({});
      setFocusedField(null);
      setHasSubmitted(false);
      setSubmitMessage("Thanks for reaching out. We'll be in touch soon.");
    } catch {
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const formClasses = ["w-full", className].filter(Boolean).join(" ");

  return (
    <form noValidate className={formClasses} onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:gap-6 min-[1025px]:gap-4">
        {fieldOrder.map((field) => {
          const fieldId = `${formId}-${field.name}`;
          const errorId = `${fieldId}-error`;
          const value = values[field.name];
          const error = errors[field.name];
          const showError =
            Boolean(error) && (hasSubmitted || touchedFields[field.name]);
          const hasValue = value.trim().length > 0;
          const isFocused = focusedField === field.name;
          const wrapperClasses = [
            "border-b pb-3 transition-colors duration-200 sm:pb-3",
            field.name === "message" ? "sm:pb-6" : null,
            showError
              ? "border-rose-500"
              : isFocused
                ? "border-cyan-100"
                : "border-neutral-0/60",
          ]
            .filter(Boolean)
            .join(" ");
          const controlClasses = [
            "text-preset-7-semibold w-full resize-none border-0 bg-transparent p-0 outline-none transition-opacity duration-200 placeholder:text-current px-4",
            showError
              ? "text-rose-500 opacity-100 caret-rose-500"
              : [
                  "text-neutral-0 caret-cyan-100",
                  hasValue ? "opacity-100" : "opacity-60",
                ].join(" "),
          ].join(" ");

          return (
            <div key={field.name} className="grid gap-2">
              <div className={wrapperClasses}>
                {field.name === "message" ? (
                  <textarea
                    id={fieldId}
                    name={field.name}
                    rows={field.rows}
                    maxLength={MESSAGE_MAX_LENGTH}
                    value={value}
                    autoComplete={field.autoComplete}
                    aria-label={field.label}
                    aria-invalid={showError}
                    aria-describedby={showError ? errorId : undefined}
                    placeholder={field.label}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => handleBlur(field.name)}
                    className={controlClasses}
                  />
                ) : (
                  <input
                    id={fieldId}
                    name={field.name}
                    type={field.name === "email" ? "email" : "text"}
                    value={value}
                    autoComplete={field.autoComplete}
                    aria-label={field.label}
                    aria-invalid={showError}
                    aria-describedby={showError ? errorId : undefined}
                    placeholder={field.label}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => handleBlur(field.name)}
                    className={controlClasses}
                  />
                )}
              </div>

              {showError ? (
                <p id={errorId} className="text-preset-8 text-rose-500 px-3">
                  {error}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex justify-start min-[1025px]:mt-8">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="lowercase disabled:opacity-100"
        >
          {isSubmitting ? "submitting..." : "submit"}
        </Button>
      </div>

      {submitMessage ? (
        <p className="text-preset-7-semibold mt-4 text-cyan-100" role="status">
          {submitMessage}
        </p>
      ) : null}
    </form>
  );
}
