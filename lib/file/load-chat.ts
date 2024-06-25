import { readdirSync, readFileSync } from "fs";
import path from "path";

export const getChatList = () => {
  const chatDir = path.join(process.cwd(), "chat");
  const files = readdirSync(chatDir);
  const jsonFiles = files.filter((file) => file.endsWith(".json"));

  const filesWithDates = jsonFiles.map((file) => {
    const filePath = path.join(chatDir, file);
    const content = readFileSync(filePath, "utf-8");
    const json = JSON.parse(content);
    const fileName = file.replace(/\.json$/, "");
    return { fileName, date: new Date(json.created_at) };
  });

  filesWithDates.sort((a, b) => a.date.getTime() - b.date.getTime());

  return filesWithDates.map((file) => file.fileName);
};
