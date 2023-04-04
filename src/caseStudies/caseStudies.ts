import { replaceHeadingMarkers } from "./replaceHeadingMarkers";
import { replaceRichTextMarkers } from "./replaceRichTextMarkers";

document.addEventListener('DOMContentLoaded', () => {
  replaceHeadingMarkers();
  replaceRichTextMarkers();
});
