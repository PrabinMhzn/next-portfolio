const { Tag } = require("@markdoc/markdoc");

module.exports = {
  interactive_code: {
    render: "InteractiveCodeSection",
    attributes: {
      title: { type: String },
      description: { type: String },
      language: { type: String },
    },
    transform(node, config) {
      const attributes = node.transformAttributes(config);
      const children = node.transformChildren(config);
      return new Tag(this.render, attributes, children);
    },
  },
};
