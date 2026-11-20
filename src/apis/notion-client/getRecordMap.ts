import { notion } from "./client"

export const getRecordMap = async (pageId: string) => {
  const recordMap = await notion.getPage(pageId)
  return recordMap
}
