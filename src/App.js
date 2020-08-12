import React, { Component } from "react";

export default class App extends Component {
  componentDidMount() {
    this.addStylet("../stimulsoft/stimulsoft.viewer.office2013.whiteblue.css");
    this.addScript("../stimulsoft/stimulsoft.reports");
    this.addScript("../stimulsoft/stimulsoft.viewer");

    console.log(window.Stimulsoft);
  }

  addScript(path) {
    const script = document.createElement("script");
    script.src = path;
    script.async = true;
    document.body.appendChild(script);
  }

  addStylet(path) {
    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = path;
    document.body.appendChild(style);
  }

  render() {
    return (
      <>
        <h1>teste</h1>
        <a
          href="https://orgrelatorios.azurewebsites.net/Viewer"
          target="_blank"
        >
          Teste
        </a>

        <iframe
          height="100%"
          width="100%"
          src="https://orgrelatorios.azurewebsites.net/Viewer"
          frameborder="0"
          style={{ minHeight: "100vw" }}
        ></iframe>
      </>
    );
  }
}
