interface Props {
  options: Record<string, string>;
  value: string;
  onChange: (value: string) => void;
}

export default function AnswerOptions({ options, value, onChange }: Props) {
  return (
    <>
      {Object.entries(options).map(([key, text]) => (
        <label
          key={key}
          style={{
            display: "block",
            marginBottom: 10,
          }}
        >
          <input
            type="radio"
            checked={value === key}
            onChange={() => onChange(key)}
          />{" "}
          <b>{key.toUpperCase()}</b>
          {" - "}
          {text}
        </label>
      ))}
    </>
  );
}
