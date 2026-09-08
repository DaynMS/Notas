import { visit } from "unist-util-visit"
import remarkDirective from "remark-directive"
import { QuartzTransformerPlugin } from "../types"

export const CustomDirectives: QuartzTransformerPlugin = () => ({
  name: "CustomDirectives",

  markdownPlugins() {
    return [
      remarkDirective,
      () => {
        return (tree) => {
          visit(tree, "containerDirective", (node: any) => {
            node.data ??= {}
            node.data.hName = "div"
            node.data.hProperties = {
              className: [node.name],
            }
          })
        }
      },
    ]
  },
})
