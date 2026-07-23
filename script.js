const teams = [
    { name: "France", code: "fr", played: 8, wins: 6, draws: 0, losses: 2, gf: 20, ga: 10, gd: 10, points: 18 },
    { name: "Argentina", code: "ar", played: 8, wins: 7, draws: 0, losses: 1, gf: 19, ga: 8, gd: 11, points: 21 },
    { name: "Spain", code: "es", played: 8, wins: 7, draws: 1, losses: 0, gf: 14, ga: 1, gd: 13, points: 22 },
    { name: "England", code: "gb-eng", played: 8, wins: 6, draws: 1, losses: 1, gf: 20, ga: 12, gd: 8, points: 19 },
    { name: "Switzerland", code: "ch", played: 6, wins: 4, draws: 1, losses: 1, gf: 10, ga: 6, gd: 4, points: 13 },
    { name: "Morocco", code: "ma", played: 6, wins: 4, draws: 1, losses: 1, gf: 10, ga: 6, gd: 4, points: 13 },
    { name: "Mexico", code: "mx", played: 5, wins: 4, draws: 0, losses: 1, gf: 10, ga: 3, gd: 7, points: 12 },
    { name: "Norway", code: "no", played: 6, wins: 4, draws: 0, losses: 2, gf: 13, ga: 11, gd: 2, points: 12 },
    { name: "Belgium", code: "be", played: 6, wins: 3, draws: 2, losses: 1, gf: 14, ga: 7, gd: 7, points: 11 },
    { name: "Brazil", code: "br", played: 5, wins: 3, draws: 1, losses: 1, gf: 10, ga: 4, gd: 6, points: 10 },
    { name: "Colombia", code: "co", played: 5, wins: 3, draws: 1, losses: 1, gf: 5, ga: 1, gd: 4, points: 10 },
    { name: "United States", code: "us", played: 5, wins: 3, draws: 0, losses: 2, gf: 11, ga: 8, gd: 3, points: 9 },
    { name: "Portugal", code: "pt", played: 5, wins: 2, draws: 2, losses: 1, gf: 8, ga: 3, gd: 5, points: 8 },
    { name: "Egypt", code: "eg", played: 5, wins: 2, draws: 2, losses: 1, gf: 8, ga: 7, gd: 1, points: 8 },
    { name: "Netherlands", code: "nl", played: 4, wins: 2, draws: 1, losses: 1, gf: 11, ga: 5, gd: 6, points: 7 },
    { name: "Canada", code: "ca", played: 5, wins: 2, draws: 1, losses: 2, gf: 9, ga: 6, gd: 3, points: 7 },
    { name: "Paraguay", code: "py", played: 5, wins: 2, draws: 1, losses: 2, gf: 3, ga: 6, gd: -3, points: 7 },
    { name: "Germany", code: "de", played: 4, wins: 2, draws: 0, losses: 2, gf: 11, ga: 5, gd: 6, points: 6 },
    { name: "Côte d'Ivoire", code: "ci", played: 4, wins: 2, draws: 0, losses: 2, gf: 5, ga: 4, gd: 1, points: 6 },
    { name: "Croatia", code: "hr", played: 4, wins: 2, draws: 0, losses: 2, gf: 6, ga: 7, gd: -1, points: 6 },
    { name: "Japan", code: "jp", played: 4, wins: 1, draws: 2, losses: 1, gf: 8, ga: 5, gd: 3, points: 5 },
    { name: "Congo DR", code: "cd", played: 4, wins: 1, draws: 1, losses: 2, gf: 5, ga: 5, gd: 0, points: 4 },
    { name: "Australia", code: "au", played: 4, wins: 1, draws: 1, losses: 2, gf: 3, ga: 3, gd: 0, points: 4 },
    { name: "Ghana", code: "gh", played: 4, wins: 1, draws: 1, losses: 2, gf: 2, ga: 3, gd: -1, points: 4 },
    { name: "South Africa", code: "za", played: 4, wins: 1, draws: 1, losses: 2, gf: 2, ga: 4, gd: -2, points: 4 },
    { name: "Ecuador", code: "ec", played: 4, wins: 1, draws: 1, losses: 2, gf: 2, ga: 4, gd: -2, points: 4 },
    { name: "Sweden", code: "se", played: 4, wins: 1, draws: 1, losses: 2, gf: 7, ga: 10, gd: -3, points: 4 },
    { name: "Austria", code: "at", played: 4, wins: 1, draws: 1, losses: 2, gf: 6, ga: 9, gd: -3, points: 4 },
    { name: "Bosnia–Herz", code: "ba", played: 4, wins: 1, draws: 1, losses: 2, gf: 5, ga: 8, gd: -3, points: 4 },
    { name: "Algeria", code: "dz", played: 4, wins: 1, draws: 1, losses: 2, gf: 5, ga: 9, gd: -4, points: 4 },
    { name: "Senegal", code: "sn", played: 4, wins: 1, draws: 0, losses: 3, gf: 10, ga: 9, gd: 1, points: 3 },
    { name: "IR Iran", code: "ir", played: 3, wins: 0, draws: 3, losses: 0, gf: 3, ga: 3, gd: 0, points: 3 },
    { name: "Cabo Verde", code: "cv", played: 4, wins: 0, draws: 3, losses: 1, gf: 4, ga: 5, gd: -1, points: 3 },
    { name: "Korea Republic", code: "kr", played: 3, wins: 1, draws: 0, losses: 2, gf: 2, ga: 3, gd: -1, points: 3 },
    { name: "Türkiye", code: "tr", played: 3, wins: 1, draws: 0, losses: 2, gf: 3, ga: 5, gd: -2, points: 3 },
    { name: "Scotland", code: "gb-sct", played: 3, wins: 1, draws: 0, losses: 2, gf: 1, ga: 4, gd: -3, points: 3 },
    { name: "Uruguay", code: "uy", played: 3, wins: 0, draws: 2, losses: 1, gf: 3, ga: 4, gd: -1, points: 2 },
    { name: "Saudi Arabia", code: "sa", played: 3, wins: 0, draws: 2, losses: 1, gf: 1, ga: 5, gd: -4, points: 2 },
    { name: "Czechia", code: "cz", played: 3, wins: 0, draws: 1, losses: 2, gf: 2, ga: 6, gd: -4, points: 1 },
    { name: "New Zealand", code: "nz", played: 3, wins: 0, draws: 1, losses: 2, gf: 4, ga: 10, gd: -6, points: 1 },
    { name: "Qatar", code: "qa", played: 3, wins: 0, draws: 1, losses: 2, gf: 2, ga: 10, gd: -8, points: 1 },
    { name: "Curaçao", code: "cw", played: 3, wins: 0, draws: 1, losses: 2, gf: 1, ga: 9, gd: -8, points: 1 },
    { name: "Panama", code: "pa", played: 3, wins: 0, draws: 0, losses: 3, gf: 0, ga: 4, gd: -4, points: 0 },
    { name: "Jordan", code: "jo", played: 3, wins: 0, draws: 0, losses: 3, gf: 3, ga: 8, gd: -5, points: 0 },
    { name: "Haiti", code: "ht", played: 3, wins: 0, draws: 0, losses: 3, gf: 2, ga: 8, gd: -6, points: 0 },
    { name: "Uzbekistan", code: "uz", played: 3, wins: 0, draws: 0, losses: 3, gf: 2, ga: 11, gd: -9, points: 0 },
    { name: "Tunisia", code: "tn", played: 3, wins: 0, draws: 0, losses: 3, gf: 2, ga: 12, gd: -10, points: 0 },
    { name: "Iraq", code: "iq", played: 3, wins: 0, draws: 0, losses: 3, gf: 1, ga: 12, gd: -11, points: 0 },
];

// sort by points (highest first) before building the table
teams.sort((a, b) => b.points - a.points);

let rowsHTML = "";
for (let i = 0; i < teams.length; i++) {
  const t = teams[i];
  rowsHTML += `
    <tr>
      <td style="padding: 8px; border-top: 1px solid #333;">
<img src="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/flags/4x3/${t.code}.svg" style="width: 24px; vertical-align: middle; margin-right: 8px; border-radius: 2px;">
${t.name}
</td>
      <td style="padding: 8px; text-align: right; border-top: 1px solid #333;">${t.played}</td>
      <td style="padding: 8px; text-align: right; border-top: 1px solid #333;">${t.wins}</td>
      <td style="padding: 8px; text-align: right; border-top: 1px solid #333;">${t.draws}</td>
      <td style="padding: 8px; text-align: right; border-top: 1px solid #333;">${t.losses}</td>
      <td style="padding: 8px; text-align: right; border-top: 1px solid #333;">${t.gf}</td>
      <td style="padding: 8px; text-align: right; border-top: 1px solid #333;">${t.ga}</td>
      <td style="padding: 8px; text-align: right; border-top: 1px solid #333;">${t.gd > 0 ? '+' + t.gd : t.gd}</td>
      <td style="padding: 8px; text-align: right; border-top: 1px solid #333;">${t.points}</td>
    </tr>
  `;
}

document.getElementById("standingsBody").innerHTML = rowsHTML;

const matches = [
    { round: "Group stage", date: "2026-06-11", home: "Mexico", away: "South Africa", hs: 2, as: 0, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-11", home: "Korea Republic", away: "Czechia", hs: 2, as: 1, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-12", home: "Canada", away: "Bosnia–Herz", hs: 1, as: 1, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-12", home: "United States", away: "Paraguay", hs: 4, as: 1, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-13", home: "Qatar", away: "Switzerland", hs: 1, as: 1, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-13", home: "Brazil", away: "Morocco", hs: 1, as: 1, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-13", home: "Australia", away: "Türkiye", hs: 2, as: 0, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-13", home: "Haiti", away: "Scotland", hs: 0, as: 1, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-14", home: "Germany", away: "Curaçao", hs: 7, as: 1, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-14", home: "Netherlands", away: "Japan", hs: 2, as: 2, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-14", home: "Côte d'Ivoire", away: "Ecuador", hs: 1, as: 0, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-14", home: "Sweden", away: "Tunisia", hs: 5, as: 1, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-15", home: "Belgium", away: "Egypt", hs: 1, as: 1, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-15", home: "Spain", away: "Cabo Verde", hs: 0, as: 0, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-15", home: "Saudi Arabia", away: "Uruguay", hs: 1, as: 1, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-15", home: "IR Iran", away: "New Zealand", hs: 2, as: 2, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-16", home: "France", away: "Senegal", hs: 3, as: 1, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-16", home: "Iraq", away: "Norway", hs: 1, as: 4, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-16", home: "Argentina", away: "Algeria", hs: 3, as: 0, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-16", home: "Austria", away: "Jordan", hs: 3, as: 1, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-17", home: "Portugal", away: "Congo DR", hs: 1, as: 1, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-17", home: "England", away: "Croatia", hs: 4, as: 2, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-17", home: "Ghana", away: "Panama", hs: 1, as: 0, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-17", home: "Uzbekistan", away: "Colombia", hs: 1, as: 3, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-18", home: "Czechia", away: "South Africa", hs: 1, as: 1, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-18", home: "Switzerland", away: "Bosnia–Herz", hs: 4, as: 1, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-18", home: "Canada", away: "Qatar", hs: 6, as: 0, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-18", home: "Mexico", away: "Korea Republic", hs: 1, as: 0, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-19", home: "United States", away: "Australia", hs: 2, as: 0, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-19", home: "Scotland", away: "Morocco", hs: 0, as: 1, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-19", home: "Türkiye", away: "Paraguay", hs: 0, as: 1, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-19", home: "Brazil", away: "Haiti", hs: 3, as: 0, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-20", home: "Netherlands", away: "Sweden", hs: 5, as: 1, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-20", home: "Germany", away: "Côte d'Ivoire", hs: 2, as: 1, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-20", home: "Ecuador", away: "Curaçao", hs: 0, as: 0, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-20", home: "Tunisia", away: "Japan", hs: 0, as: 4, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-21", home: "Spain", away: "Saudi Arabia", hs: 4, as: 0, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-21", home: "Belgium", away: "IR Iran", hs: 0, as: 0, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-21", home: "Uruguay", away: "Cabo Verde", hs: 2, as: 2, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-21", home: "New Zealand", away: "Egypt", hs: 1, as: 3, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-22", home: "Argentina", away: "Austria", hs: 2, as: 0, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-22", home: "France", away: "Iraq", hs: 3, as: 0, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-22", home: "Norway", away: "Senegal", hs: 3, as: 2, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-22", home: "Jordan", away: "Algeria", hs: 1, as: 2, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-23", home: "Portugal", away: "Uzbekistan", hs: 5, as: 0, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-23", home: "England", away: "Ghana", hs: 0, as: 0, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-23", home: "Panama", away: "Croatia", hs: 0, as: 1, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-23", home: "Colombia", away: "Congo DR", hs: 1, as: 0, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-24", home: "Switzerland", away: "Canada", hs: 2, as: 1, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-24", home: "Bosnia–Herz", away: "Qatar", hs: 3, as: 1, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-24", home: "Scotland", away: "Brazil", hs: 0, as: 3, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-24", home: "Morocco", away: "Haiti", hs: 4, as: 2, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-24", home: "South Africa", away: "Korea Republic", hs: 1, as: 0, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-24", home: "Czechia", away: "Mexico", hs: 0, as: 3, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-25", home: "Curaçao", away: "Côte d'Ivoire", hs: 0, as: 2, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-25", home: "Ecuador", away: "Germany", hs: 2, as: 1, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-25", home: "Tunisia", away: "Netherlands", hs: 1, as: 3, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-25", home: "Japan", away: "Sweden", hs: 1, as: 1, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-25", home: "Türkiye", away: "United States", hs: 3, as: 2, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-25", home: "Paraguay", away: "Australia", hs: 0, as: 0, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-26", home: "Norway", away: "France", hs: 1, as: 4, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-26", home: "Senegal", away: "Iraq", hs: 5, as: 0, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-26", home: "Uruguay", away: "Spain", hs: 0, as: 1, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-26", home: "Cabo Verde", away: "Saudi Arabia", hs: 0, as: 0, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-26", home: "Egypt", away: "IR Iran", hs: 1, as: 1, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-26", home: "New Zealand", away: "Belgium", hs: 1, as: 5, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-27", home: "Croatia", away: "Ghana", hs: 2, as: 1, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-27", home: "Panama", away: "England", hs: 0, as: 2, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-27", home: "Congo DR", away: "Uzbekistan", hs: 3, as: 1, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-27", home: "Colombia", away: "Portugal", hs: 0, as: 0, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-27", home: "Jordan", away: "Argentina", hs: 1, as: 3, pens: false, ph: null, pa: null },
    { round: "Group stage", date: "2026-06-27", home: "Algeria", away: "Austria", hs: 3, as: 3, pens: false, ph: null, pa: null },
    { round: "Round of 32", date: "2026-06-28", home: "South Africa", away: "Canada", hs: 0, as: 1, pens: false, ph: null, pa: null },
    { round: "Round of 32", date: "2026-06-29", home: "Brazil", away: "Japan", hs: 2, as: 1, pens: false, ph: null, pa: null },
    { round: "Round of 32", date: "2026-06-29", home: "Germany", away: "Paraguay", hs: 1, as: 1, pens: true, ph: 3, pa: 4 },
    { round: "Round of 32", date: "2026-06-29", home: "Netherlands", away: "Morocco", hs: 1, as: 1, pens: true, ph: 2, pa: 3 },
    { round: "Round of 32", date: "2026-06-30", home: "Côte d'Ivoire", away: "Norway", hs: 1, as: 2, pens: false, ph: null, pa: null },
    { round: "Round of 32", date: "2026-06-30", home: "France", away: "Sweden", hs: 3, as: 0, pens: false, ph: null, pa: null },
    { round: "Round of 32", date: "2026-06-30", home: "Mexico", away: "Ecuador", hs: 2, as: 0, pens: false, ph: null, pa: null },
    { round: "Round of 32", date: "2026-07-01", home: "England", away: "Congo DR", hs: 2, as: 1, pens: false, ph: null, pa: null },
    { round: "Round of 32", date: "2026-07-01", home: "Belgium", away: "Senegal", hs: 3, as: 2, pens: false, ph: null, pa: null },
    { round: "Round of 32", date: "2026-07-01", home: "United States", away: "Bosnia–Herz", hs: 2, as: 0, pens: false, ph: null, pa: null },
    { round: "Round of 32", date: "2026-07-02", home: "Spain", away: "Austria", hs: 3, as: 0, pens: false, ph: null, pa: null },
    { round: "Round of 32", date: "2026-07-02", home: "Portugal", away: "Croatia", hs: 2, as: 1, pens: false, ph: null, pa: null },
    { round: "Round of 32", date: "2026-07-02", home: "Switzerland", away: "Algeria", hs: 2, as: 0, pens: false, ph: null, pa: null },
    { round: "Round of 32", date: "2026-07-03", home: "Australia", away: "Egypt", hs: 1, as: 1, pens: true, ph: 2, pa: 4 },
    { round: "Round of 32", date: "2026-07-03", home: "Argentina", away: "Cabo Verde", hs: 3, as: 2, pens: false, ph: null, pa: null },
    { round: "Round of 32", date: "2026-07-03", home: "Colombia", away: "Ghana", hs: 1, as: 0, pens: false, ph: null, pa: null },
    { round: "Round of 16", date: "2026-07-04", home: "Canada", away: "Morocco", hs: 0, as: 3, pens: false, ph: null, pa: null },
    { round: "Round of 16", date: "2026-07-04", home: "Paraguay", away: "France", hs: 0, as: 1, pens: false, ph: null, pa: null },
    { round: "Round of 16", date: "2026-07-05", home: "Brazil", away: "Norway", hs: 1, as: 2, pens: false, ph: null, pa: null },
    { round: "Round of 16", date: "2026-07-05", home: "Mexico", away: "England", hs: 2, as: 3, pens: false, ph: null, pa: null },
    { round: "Round of 16", date: "2026-07-06", home: "Portugal", away: "Spain", hs: 0, as: 1, pens: false, ph: null, pa: null },
    { round: "Round of 16", date: "2026-07-06", home: "United States", away: "Belgium", hs: 1, as: 4, pens: false, ph: null, pa: null },
    { round: "Round of 16", date: "2026-07-07", home: "Argentina", away: "Egypt", hs: 3, as: 2, pens: false, ph: null, pa: null },
    { round: "Round of 16", date: "2026-07-07", home: "Switzerland", away: "Colombia", hs: 0, as: 0, pens: true, ph: 4, pa: 3 },
    { round: "Quarter-finals", date: "2026-07-09", home: "France", away: "Morocco", hs: 2, as: 0, pens: false, ph: null, pa: null },
    { round: "Quarter-finals", date: "2026-07-10", home: "Spain", away: "Belgium", hs: 2, as: 1, pens: false, ph: null, pa: null },
    { round: "Quarter-finals", date: "2026-07-11", home: "Norway", away: "England", hs: 1, as: 2, pens: false, ph: null, pa: null },
    { round: "Quarter-finals", date: "2026-07-11", home: "Argentina", away: "Switzerland", hs: 3, as: 1, pens: false, ph: null, pa: null },
    { round: "Semi-finals", date: "2026-07-15", home: "France", away: "Spain", hs: 0, as: 2, pens: false, ph: null, pa: null },
    { round: "Semi-finals", date: "2026-07-16", home: "England", away: "Argentina", hs: 1, as: 2, pens: false, ph: null, pa: null },
    { round: "Third place", date: "2026-07-19", home: "France", away: "England", hs: 4, as: 6, pens: false, ph: null, pa: null },
    { round: "Final", date: "2026-07-20", home: "Spain", away: "Argentina", hs: 1, as: 0, pens: false, ph: null, pa: null },
];

// keep track of current filters
let activeRound = "All";
let searchText = "";

function renderMatches() {
  let filtered = matches;

  if (activeRound !== "All") {
    filtered = filtered.filter(m => m.round === activeRound);
  }
  if (searchText) {
    filtered = filtered.filter(m =>
      m.home.toLowerCase().includes(searchText) || m.away.toLowerCase().includes(searchText)
    );
  }

  let tilesHTML = "";
  for (let i = 0; i < filtered.length; i++) {
    const m = filtered[i];
    const penText = m.pens ? ` (${m.ph}-${m.pa} pens)` : "";

    let homeWon;
    if (m.hs !== m.as) {
      homeWon = m.hs > m.as;
    } else if (m.pens) {
      homeWon = m.ph > m.pa;
    } else {
      homeWon = null;
    }

    const homeScoreClass = homeWon === true ? "winner-score" : homeWon === false ? "loser-score" : "";
    const awayScoreClass = homeWon === true ? "loser-score" : homeWon === false ? "winner-score" : "";

    tilesHTML += `
      <div class="match-tile">
        <span class="match-round">${m.round}<br>${m.date}</span>
        <span class="match-team home-team">${m.home}</span>
        <span class="match-score">
          <span class="${homeScoreClass}">${m.hs}</span>–<span class="${awayScoreClass}">${m.as}</span>${penText}
        </span>
        <span class="match-team away-team">${m.away}</span>
      </div>
    `;
  }

  document.getElementById("matchList").innerHTML = tilesHTML || "<p style='color:#9a9a9e;'>No matches found.</p>";
}

// build the round filter buttons
const rounds = ["All", "Group stage", "Round of 32", "Round of 16", "Quarter-finals", "Semi-finals", "Third place", "Final"];

function renderRoundFilters() {
  let html = "";
  for (let i = 0; i < rounds.length; i++) {
    const activeClass = rounds[i] === activeRound ? "active" : "";
    html += `<button class="round-btn ${activeClass}" data-round="${rounds[i]}">${rounds[i]}</button>`;
  }
  document.getElementById("roundFilters").innerHTML = html;
}

document.getElementById("roundFilters").addEventListener("click", function(e) {
  if (e.target.classList.contains("round-btn")) {
    activeRound = e.target.dataset.round;
    renderRoundFilters();
    renderMatches();
  }
});

document.getElementById("teamSearch").addEventListener("input", function(e) {
  searchText = e.target.value.toLowerCase();
  renderMatches();
});

renderRoundFilters();
renderMatches();

function renderTicker() {
  const knockouts = matches.filter(m =>
    m.round === "Round of 16" || m.round === "Quarter-finals" || m.round === "Round of 32" ||
    m.round === "Semi-finals" || m.round === "Final"
  );

  let html = "";
  for (let i = 0; i < knockouts.length; i++) {
    const m = knockouts[i];
    html += `
      <span class="ticker-item">
        <span class="ticker-round">${m.round}</span>
        <span class="ticker-team">${m.home}</span>
        <span class="ticker-score">${m.hs}–${m.as}</span>
        <span class="ticker-team">${m.away}</span>
      </span>
    `;
  }

  document.getElementById("tickerTrack").innerHTML = html + html;
}

renderTicker();

function renderGoalsChart() {
  const rounds = ["Group stage", "Round of 32", "Round of 16", "Quarter-finals", "Semi-finals", "Final"];
  const averages = [];

  for (let i = 0; i < rounds.length; i++) {
    const roundMatches = matches.filter(m => m.round === rounds[i]);
    const totalGoals = roundMatches.reduce((sum, m) => sum + m.hs + m.as, 0);
    const avg = roundMatches.length ? totalGoals / roundMatches.length : 0;
    averages.push(avg);
  }

  new Chart(document.getElementById("goalsChart"), {
    type: "bar",
    data: {
      labels: rounds,
      datasets: [{
        data: averages,
        backgroundColor: "#837e7c",
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, ticks: { color: "#9a9a9e" }, grid: { color: "#333" } },
        x: { ticks: { color: "#9a9a9e" }, grid: { display: false } }
      }
    }
  });
}

renderGoalsChart();