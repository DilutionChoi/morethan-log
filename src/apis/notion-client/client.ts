import { NotionAPI } from "notion-client"
import { NOTION_APP_ORIGIN } from "src/constants"

export const notion = new NotionAPI({
  apiBaseUrl: `${NOTION_APP_ORIGIN}/api/v3`,
})
