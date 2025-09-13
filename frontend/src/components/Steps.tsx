import type { CSSProperties } from "react";
import Text from "./Text";
import Header from "./Header";

export default function Steps() {
  const steps = [
    "select your file",
    "select a target format",
    "click Covert buttom",
  ];
  return (
    <section className="flex flex-col gap-5 items-center justify-center">
      <Header text="How to convert file?" />
      <section className="flex gap-2 items-center">
        {[
          steps.map((step, index) => (
            <>
              <span
                className=" flex size-6 items-center justify-center border rounded-full text-sm "
                style={
                  {
                    backgroundColor:
                      index + 1 == 1
                        ? "color-mix(in oklab, oklch(78.9% 0.154 211.53) 80%, transparent)"
                        : "transparent",
                    color: index + 1 == 1 ? "white" : "black",
                    anchorName: `--step-${index}`,
                  } as CSSProperties
                }
              >
                {index + 1}
              </span>
              <span
                className=" fixed text-nowrap Step mt-0.5"
                style={{ positionAnchor: `--step-${index}` } as CSSProperties}
              >
                <Text
                  text={step}
                  className="font-light text-sm text-gray-400/80 tracking-wider"
                />
              </span>
              {index != steps.length - 1 && (
                <span className=" top-3 left-8 border-t-2 border-gray-400/80 border-dashed w-40 h-1  mt-1" />
              )}
            </>
          )),
        ]}
      </section>
    </section>
  );
}
