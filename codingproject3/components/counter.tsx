"use client";
import { useState } from "react";

type Props = {
  initialCount?: number;   // default 0
  initialStep?: number;    // default 1
};

export default function Counter({ initialCount = 0, initialStep = 1 }: Props) {
  const [count, setCount] = useState<number>(initialCount);
  const [step, setStep] = useState<number>(initialStep);

  const inc = () => setCount(c => c + step);
  const dec = () => setCount(c => Math.max(0, c - step)); // keep ≥ 0
  const reset = () => setCount(0);

  const onStepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const n = Number(e.target.value);
    setStep(Math.max(1, isNaN(n) ? 1 : n)); // clamp to ≥1
  };

  const willGoBelowZero = count - step < 0;

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h2 aria-live="polite" className="text-xl font-semibold">Count: {count}</h2>

      <div className="flex gap-3">
        <button onClick={inc} className="px-3 py-2 rounded border">+{step}</button>
        <button
          onClick={dec}
          disabled={willGoBelowZero}
          className="px-3 py-2 rounded border disabled:opacity-40 disabled:cursor-not-allowed"
        >
          -{step}
        </button>
        <button onClick={reset} className="px-3 py-2 rounded border">Reset</button>
      </div>

      <label className="flex items-center gap-2">
        Step:
        <input
          type="number"
          min={1}
          value={step}
          onChange={onStepChange}
          className="border p-1 w-20 rounded text-center"
        />
      </label>
    </div>
  );
}
