export function renderChallengeList() {
  const page = document.getElementById("page");
  const paragraph = document.createElement("p");
  paragraph.textContent = "Challenge list here";
  page.replaceChildren(paragraph);
}