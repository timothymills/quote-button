panel.plugin("timothymills/quote-button", {
  textareaButtons: {
    quote: {
      label: "Quote",
      icon: "quote",
      click: function () {
        this.command("insert", (input, selection) =>
          selection
            .split("\n")
            .map((line, index) => "> " + line)
            .join("\n")
        )
      },
      shortcut: "q",
    },
  }
});
