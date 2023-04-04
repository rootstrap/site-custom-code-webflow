const COLS_CONTAINER_OPENING_TAG = "<columns>";
const COLS_CONTAINER_CLOSING_TAG = "</columns>";
const COL_OPENING_TAG = "<col>";
const COL_CLOSING_TAG = "</col>";

function replaceColumnsContainer(container: Element) {
  // select all elements in-between the current <columns> until the next </columns>
  const colsContainerChildren = Array.from(
    $(container).nextUntil(`p:contains('${COLS_CONTAINER_CLOSING_TAG}')`)
  );

  const generatedContainerDiv = document.createElement("div");
  generatedContainerDiv.classList.add("c-grid-2-cols");

  // append children to the new container
  colsContainerChildren.forEach((el) => generatedContainerDiv.appendChild(el));
  // replace the <columns> tag with the new container
  container.replaceWith(generatedContainerDiv);
}

function replaceColumnTags() {
  const singleColWrapperOpeningElements = $(`p:contains('${COL_OPENING_TAG}')`);

  singleColWrapperOpeningElements.each(function () {
    const singleColWrapperChildren = Array.from(
      $(this).nextUntil(`p:contains('${COL_CLOSING_TAG}')`)
    );
    const generatedColumnDiv = document.createElement("div");
    generatedColumnDiv.classList.add("c-grid-col");

    singleColWrapperChildren.forEach((el) => generatedColumnDiv.appendChild(el));
    this.replaceWith(generatedColumnDiv);
  });
}

export function replaceRichTextMarkers() {
  const colsContainerOpeningElements = $(
    `p:contains('${COLS_CONTAINER_OPENING_TAG}')`
  );

  // itearate over all <columns> tags
  colsContainerOpeningElements.each(function () {
    replaceColumnsContainer(this);
    replaceColumnTags();
  });

  // cleanup closing tags
  $(`p:contains('${COL_CLOSING_TAG}')`).remove();
  $(`p:contains('${COLS_CONTAINER_CLOSING_TAG}')`).remove();
}
