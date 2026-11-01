import { Fragment } from "react";

// Shows a web address or email so that, on a narrow phone, it wraps only after
// "/", ".", "-" or "@" instead of splitting a word in the middle.
export function WebAddress({ text }: { text: string }) {
  const parts = text.split(/(?<=[/.\-@])/);
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part}
          {i < parts.length - 1 && <wbr />}
        </Fragment>
      ))}
    </>
  );
}
