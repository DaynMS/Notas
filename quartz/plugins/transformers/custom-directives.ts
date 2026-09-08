import { visit } from "unist-util-visit"
import { QuartzTransformerPlugin } from "../types"
import remarkDirective from "remark-directive"

export const CustomDirectives: QuartzTransformerPlugin = () => ({
  name: "CustomDirectives",

  markdownPlugins() {
    return [
      remarkDirective,
      () => (tree) => {
        visit(tree, "containerDirective", (node: any) => {
          node.data = {
            hName: "div",
            hProperties: {
              className: [node.name],
            },
          }
        })
      },
    ]
  },
})
