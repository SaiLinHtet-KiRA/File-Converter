import React from "react";
import { Camera, Search, Images, Document, GIF, ChevronDown } from "../svg";
import { motion } from "motion/react";

export default class NavBar extends React.Component {
  state: Readonly<{ convertHovered: boolean; apiHovered: boolean }>;

  constructor(props: {}) {
    super(props);
    this.state = {
      convertHovered: false,
      apiHovered: false,
    };
  }

  HandelHover(label: string) {
    label == "Convert"
      ? this.setState({ convertHovered: true, apiHovered: false })
      : this.setState({ convertHovered: false, apiHovered: true });
  }
  HandelRemoveHover() {
    this.setState({ convertHovered: false });
  }
  render(): React.ReactNode {
    const NavLabel = ["Convert", "API"];
    const conversionCategories = [
      {
        category: "Video & Audio",
        icon: Camera,
        tools: ["Video Converter", "Audio Converter", "Video to Audio"],
      },
      {
        category: "Images",
        icon: Images,
        tools: ["Images Converter", "Images to PDF"],
      },
      {
        category: "Document",
        icon: Document,
        tools: ["PDF to Images", "Excel to PDF", "JSON to Excel"],
      },
      {
        category: "GIF",
        icon: GIF,
        tools: ["Images to GIF", "Video to GIF", "GIF to Images"],
      },
    ];

    return (
      <nav
        className="sticky top-0 w-screen h-fit    px-[10%] flex flex-col shadow-sm bg-white z-100"
        onMouseLeave={() => this.HandelRemoveHover()}
      >
        <header
          className="flex items-center gap-16 border-gray-300/50 py-5 !transition-none"
          style={{ borderBottomWidth: this.state.convertHovered ? 2 : 0 }}
        >
          <aside className="size-9 bg-red-400"></aside>
          <main className="flex items-center gap-4 grow">
            {NavLabel.map((label) => (
              <div
                key={label}
                className="inline-flex items-center gap-1 cursor-pointer"
                onMouseEnter={() => this.HandelHover(label)}
              >
                <span
                  className="font-light"
                  style={{
                    color:
                      label == "Convert" && this.state.convertHovered
                        ? "color-mix(in oklab, var(--color-cyan-300) /* oklch(86.5% 0.127 207.078) = #53eafd */ 80%, transparent)"
                        : label == "API" && this.state.apiHovered
                        ? "color-mix(in oklab, var(--color-cyan-300) /* oklch(86.5% 0.127 207.078) = #53eafd */ 80%, transparent)"
                        : "",
                  }}
                >
                  {" "}
                  {label}
                </span>

                <ChevronDown
                  className="size-4 stroke-2"
                  style={{
                    stroke:
                      label == "Convert" && this.state.convertHovered
                        ? "color-mix(in oklab, var(--color-cyan-300) /* oklch(86.5% 0.127 207.078) = #53eafd */ 80%, transparent)"
                        : label == "API" && this.state.apiHovered
                        ? "color-mix(in oklab, var(--color-cyan-300) /* oklch(86.5% 0.127 207.078) = #53eafd */ 80%, transparent)"
                        : "",
                  }}
                />
              </div>
            ))}
          </main>
          <aside>
            <span>
              <Search className="size-6" />
            </span>
          </aside>
        </header>
        {this.state.convertHovered && (
          <footer className="grid grid-cols-4 pt-2 pb-8 gap-10">
            {this.state.convertHovered &&
              conversionCategories.map(({ category, icon, tools }, index) => (
                <section className="flex flex-col gap-2 " key={category}>
                  <header className="flex items-center gap-1 border-b-2 border-gray-300/50 p-3">
                    {React.createElement(icon, { className: "size-5" })}
                    <h1 className="font-semibold">{category}</h1>
                  </header>
                  <motion.main
                    className="flex flex-col gap-0.5 pl-3  !ease-linear"
                    initial={{ x: 30, opacity: [0] }}
                    animate={{ x: 0, opacity: [0, 0, 100] }}
                    transition={{ delay: 0.05 * index }}
                  >
                    {tools.map((tools) => (
                      <h2 className="w-fit text-sm font-medium px-2 py-1.5 cursor-pointer rounded-lg hover:bg-cyan-300/80 hover:text-white ">
                        {tools}
                      </h2>
                    ))}
                  </motion.main>
                </section>
              ))}
          </footer>
        )}
      </nav>
    );
  }
}
