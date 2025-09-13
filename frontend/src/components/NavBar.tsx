import React from "react";
import { Camera, Search, Images, Document, GIF, ChevronDown } from "../svg";

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
    const futureForConvert = [
      {
        type: "Video & audio",
        icon: Camera,
        future: ["Video Converter", "Audio Converter", "Video to Audio"],
      },
      {
        type: "Images",
        icon: Images,
        future: ["Images Converter", "Images to PDF"],
      },
      {
        type: "Document",
        icon: Document,
        future: ["PDF to Images", "Excel to PDF", "JSON to Excel"],
      },
      {
        type: "GIF",
        icon: GIF,
        future: ["Images to GIF", "Video to GIF", "GIF to Images"],
      },
    ];
    console.log(this.state.convertHovered);
    return (
      <nav
        className="sticky top-0 w-screen h-fit    px-[10%] flex flex-col shadow-sm bg-white"
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
              futureForConvert.map(({ future, icon, type }) => (
                <section className="flex flex-col gap-2 " key={type}>
                  <header className="flex items-center gap-1 border-b-2 border-gray-300/50 p-3">
                    {React.createElement(icon, { className: "size-5" })}
                    <h1 className="font-semibold">{type}</h1>
                  </header>
                  <main className="flex flex-col gap-0.5 pl-3">
                    {future.map((future) => (
                      <h2 className="w-fit text-sm font-medium px-2 py-1.5 cursor-pointer rounded-lg hover:bg-cyan-300/80 hover:text-white ">
                        {future}
                      </h2>
                    ))}
                  </main>
                </section>
              ))}
          </footer>
        )}
      </nav>
    );
  }
}
