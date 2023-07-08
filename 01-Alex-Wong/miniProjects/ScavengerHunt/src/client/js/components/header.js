export function renderHeader() {
  const header = document.getElementById("header-nav");
  header.innerHTML = `
    <h1>Scavenger Hunt</h1>
    <ul id="navlist">
      <li onClick="renderChallengeList()">Challenges</li>
      <li onClick="renderRules()">Rules</li>
    </ul>
  `;
}