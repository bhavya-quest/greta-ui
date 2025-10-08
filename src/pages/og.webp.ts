import { generateOpenGraphImage } from "@/lib/generateOpenGraphImage"
import { getCollection } from "astro:content"

const components = (await getCollection("docs")).filter(entry =>
  entry.id.startsWith("components/"),
)

export function GET() {
  return generateOpenGraphImage({
    title: "Greta UI Registry",
    tags: ["Accessible", "Shadcn Native Feel", "Type Safe"],
    secondaryText: `${components.length} Components`,
  })
}
