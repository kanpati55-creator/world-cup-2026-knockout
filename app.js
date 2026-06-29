const STORAGE_KEY = "world-cup-2026-knockout-v3";
const SETTINGS_KEY = "world-cup-2026-settings";

const roundLabels = {
  r32: "ベスト32",
  r16: "ベスト16",
  qf: "準々決勝",
  sf: "準決勝",
  tp: "3位決定戦",
  final: "決勝"
};

const venueTimeZones = {
  "SoFi Stadium": "America/Los_Angeles",
  "Gillette Stadium": "America/New_York",
  "Estadio BBVA": "America/Monterrey",
  "NRG Stadium": "America/Chicago",
  "MetLife Stadium": "America/New_York",
  "AT&T Stadium": "America/Chicago",
  "Estadio Azteca": "America/Mexico_City",
  "Mercedes-Benz Stadium": "America/New_York",
  "Levi's Stadium": "America/Los_Angeles",
  "Lumen Field": "America/Los_Angeles",
  "BMO Field": "America/Toronto",
  "BC Place": "America/Vancouver",
  "Hard Rock Stadium": "America/New_York",
  "Arrowhead Stadium": "America/Chicago",
  "Lincoln Financial Field": "America/New_York"
};

const seedMatches = [
  { matchNo: 73, roundKey: "r32", date: "2026-06-28", time: "12:00", venue: "SoFi Stadium", home: "南アフリカ", away: "カナダ", homeSeed: "グループA 2位", awaySeed: "グループB 2位" },
  { matchNo: 74, roundKey: "r32", date: "2026-06-29", time: "16:30", venue: "Gillette Stadium", home: "ドイツ", away: "パラグアイ", homeSeed: "グループE 1位", awaySeed: "グループD 3位" },
  { matchNo: 75, roundKey: "r32", date: "2026-06-29", time: "19:00", venue: "Estadio BBVA", home: "オランダ", away: "モロッコ", homeSeed: "グループF 1位", awaySeed: "グループC 2位" },
  { matchNo: 76, roundKey: "r32", date: "2026-06-29", time: "12:00", venue: "NRG Stadium", home: "ブラジル", away: "日本", homeSeed: "グループC 1位", awaySeed: "グループF 2位" },
  { matchNo: 77, roundKey: "r32", date: "2026-06-30", time: "17:00", venue: "MetLife Stadium", home: "フランス", away: "スウェーデン", homeSeed: "グループI 1位", awaySeed: "グループF 3位" },
  { matchNo: 78, roundKey: "r32", date: "2026-06-30", time: "12:00", venue: "AT&T Stadium", home: "コートジボワール", away: "ノルウェー", homeSeed: "グループE 2位", awaySeed: "グループI 2位" },
  { matchNo: 79, roundKey: "r32", date: "2026-06-30", time: "19:00", venue: "Estadio Azteca", home: "メキシコ", away: "エクアドル", homeSeed: "グループA 1位", awaySeed: "グループE 3位" },
  { matchNo: 80, roundKey: "r32", date: "2026-07-01", time: "12:00", venue: "Mercedes-Benz Stadium", home: "イングランド", away: "DRコンゴ", homeSeed: "グループL 1位", awaySeed: "グループK 3位" },
  { matchNo: 81, roundKey: "r32", date: "2026-07-01", time: "17:00", venue: "Levi's Stadium", home: "アメリカ", away: "ボスニア・ヘルツェゴビナ", homeSeed: "グループD 1位", awaySeed: "グループB 3位" },
  { matchNo: 82, roundKey: "r32", date: "2026-07-01", time: "13:00", venue: "Lumen Field", home: "ベルギー", away: "セネガル", homeSeed: "グループG 1位", awaySeed: "グループI 3位" },
  { matchNo: 83, roundKey: "r32", date: "2026-07-02", time: "19:00", venue: "BMO Field", home: "ポルトガル", away: "クロアチア", homeSeed: "グループK 2位", awaySeed: "グループL 2位" },
  { matchNo: 84, roundKey: "r32", date: "2026-07-02", time: "12:00", venue: "SoFi Stadium", home: "スペイン", away: "オーストリア", homeSeed: "グループH 1位", awaySeed: "グループJ 2位" },
  { matchNo: 85, roundKey: "r32", date: "2026-07-02", time: "20:00", venue: "BC Place", home: "スイス", away: "アルジェリア", homeSeed: "グループB 1位", awaySeed: "グループJ 3位" },
  { matchNo: 86, roundKey: "r32", date: "2026-07-03", time: "18:00", venue: "Hard Rock Stadium", home: "アルゼンチン", away: "カーボベルデ", homeSeed: "グループJ 1位", awaySeed: "グループH 2位" },
  { matchNo: 87, roundKey: "r32", date: "2026-07-03", time: "20:30", venue: "Arrowhead Stadium", home: "コロンビア", away: "ガーナ", homeSeed: "グループK 1位", awaySeed: "グループL 3位" },
  { matchNo: 88, roundKey: "r32", date: "2026-07-03", time: "13:00", venue: "AT&T Stadium", home: "オーストラリア", away: "エジプト", homeSeed: "グループD 2位", awaySeed: "グループG 2位" },
  { matchNo: 89, roundKey: "r16", date: "2026-07-04", time: "17:00", venue: "Lincoln Financial Field", home: "M74 勝者", away: "M77 勝者" },
  { matchNo: 90, roundKey: "r16", date: "2026-07-04", time: "12:00", venue: "NRG Stadium", home: "M73 勝者", away: "M75 勝者" },
  { matchNo: 91, roundKey: "r16", date: "2026-07-05", time: "16:00", venue: "MetLife Stadium", home: "M76 勝者", away: "M78 勝者" },
  { matchNo: 92, roundKey: "r16", date: "2026-07-05", time: "18:00", venue: "Estadio Azteca", home: "M79 勝者", away: "M80 勝者" },
  { matchNo: 93, roundKey: "r16", date: "2026-07-06", time: "14:00", venue: "AT&T Stadium", home: "M83 勝者", away: "M84 勝者" },
  { matchNo: 94, roundKey: "r16", date: "2026-07-06", time: "17:00", venue: "Lumen Field", home: "M81 勝者", away: "M82 勝者" },
  { matchNo: 95, roundKey: "r16", date: "2026-07-07", time: "12:00", venue: "Mercedes-Benz Stadium", home: "M86 勝者", away: "M88 勝者" },
  { matchNo: 96, roundKey: "r16", date: "2026-07-07", time: "13:00", venue: "BC Place", home: "M85 勝者", away: "M87 勝者" },
  { matchNo: 97, roundKey: "qf", date: "2026-07-09", time: "16:00", venue: "Gillette Stadium", home: "M89 勝者", away: "M90 勝者" },
  { matchNo: 98, roundKey: "qf", date: "2026-07-10", time: "12:00", venue: "SoFi Stadium", home: "M93 勝者", away: "M94 勝者" },
  { matchNo: 99, roundKey: "qf", date: "2026-07-11", time: "17:00", venue: "Hard Rock Stadium", home: "M91 勝者", away: "M92 勝者" },
  { matchNo: 100, roundKey: "qf", date: "2026-07-11", home: "M95 勝者", away: "M96 勝者" },
  { matchNo: 101, roundKey: "sf", date: "2026-07-14", time: "14:00", venue: "AT&T Stadium", home: "M97 勝者", away: "M98 勝者" },
  { matchNo: 102, roundKey: "sf", date: "2026-07-15", time: "15:00", venue: "Mercedes-Benz Stadium", home: "M99 勝者", away: "M100 勝者" },
  { matchNo: 103, roundKey: "tp", date: "2026-07-18", time: "17:00", home: "M101 敗者", away: "M102 敗者", venue: "Hard Rock Stadium" },
  { matchNo: 104, roundKey: "final", date: "2026-07-19", time: "15:00", home: "M101 勝者", away: "M102 勝者", venue: "MetLife Stadium" }
].map((match) => ({
  id: `match-${match.matchNo}`,
  time: "未定",
  venue: match.venue || "未定",
  scoreHome: null,
  scoreAway: null,
  status: "scheduled",
  minute: "",
  note: "",
  updatedAt: "",
  ...match
}));

let matches = loadMatches();
let settings = loadSettings();
let selectedRound = "all";
let selectedStatus = "all";
let refreshTimer = null;

const advancementRules = [
  { from: 74, winnerTo: 89, winnerSlot: "home" },
  { from: 77, winnerTo: 89, winnerSlot: "away" },
  { from: 73, winnerTo: 90, winnerSlot: "home" },
  { from: 75, winnerTo: 90, winnerSlot: "away" },
  { from: 76, winnerTo: 91, winnerSlot: "home" },
  { from: 78, winnerTo: 91, winnerSlot: "away" },
  { from: 79, winnerTo: 92, winnerSlot: "home" },
  { from: 80, winnerTo: 92, winnerSlot: "away" },
  { from: 83, winnerTo: 93, winnerSlot: "home" },
  { from: 84, winnerTo: 93, winnerSlot: "away" },
  { from: 81, winnerTo: 94, winnerSlot: "home" },
  { from: 82, winnerTo: 94, winnerSlot: "away" },
  { from: 86, winnerTo: 95, winnerSlot: "home" },
  { from: 88, winnerTo: 95, winnerSlot: "away" },
  { from: 85, winnerTo: 96, winnerSlot: "home" },
  { from: 87, winnerTo: 96, winnerSlot: "away" },
  { from: 89, winnerTo: 97, winnerSlot: "home" },
  { from: 90, winnerTo: 97, winnerSlot: "away" },
  { from: 93, winnerTo: 98, winnerSlot: "home" },
  { from: 94, winnerTo: 98, winnerSlot: "away" },
  { from: 91, winnerTo: 99, winnerSlot: "home" },
  { from: 92, winnerTo: 99, winnerSlot: "away" },
  { from: 95, winnerTo: 100, winnerSlot: "home" },
  { from: 96, winnerTo: 100, winnerSlot: "away" },
  { from: 97, winnerTo: 101, winnerSlot: "home" },
  { from: 98, winnerTo: 101, winnerSlot: "away" },
  { from: 99, winnerTo: 102, winnerSlot: "home" },
  { from: 100, winnerTo: 102, winnerSlot: "away" },
  { from: 101, winnerTo: 104, winnerSlot: "home", loserTo: 103, loserSlot: "home" },
  { from: 102, winnerTo: 104, winnerSlot: "away", loserTo: 103, loserSlot: "away" }
];

const elements = {
  connectionStatus: document.querySelector("#connection-status"),
  nextMatch: document.querySelector("#next-match"),
  progressCount: document.querySelector("#progress-count"),
  lastUpdated: document.querySelector("#last-updated"),
  refreshButton: document.querySelector("#refresh-button"),
  settingsButton: document.querySelector("#settings-button"),
  settingsPanel: document.querySelector("#settings-panel"),
  sourceType: document.querySelector("#source-type"),
  apiUrl: document.querySelector("#api-url"),
  apiKey: document.querySelector("#api-key"),
  refreshInterval: document.querySelector("#refresh-interval"),
  saveSettings: document.querySelector("#save-settings"),
  exportJson: document.querySelector("#export-json"),
  importJson: document.querySelector("#import-json"),
  settingsMessage: document.querySelector("#settings-message"),
  statusFilter: document.querySelector("#status-filter"),
  matchList: document.querySelector("#match-list"),
  bracket: document.querySelector("#bracket"),
  manualForm: document.querySelector("#manual-form"),
  manualMatch: document.querySelector("#manual-match"),
  manualHomeScore: document.querySelector("#manual-home-score"),
  manualAwayScore: document.querySelector("#manual-away-score"),
  manualStatus: document.querySelector("#manual-status"),
  manualWinner: document.querySelector("#manual-winner"),
  manualNote: document.querySelector("#manual-note")
};

function loadMatches() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(saved) && saved.length) return saved;
  } catch (error) {
    console.warn("Saved match data could not be loaded.", error);
  }
  return seedMatches;
}

function loadSettings() {
  try {
    return {
      sourceType: "apiFootball",
      apiUrl: "",
      refreshInterval: "0",
      ...JSON.parse(localStorage.getItem(SETTINGS_KEY))
    };
  } catch (error) {
    console.warn("Saved settings could not be loaded.", error);
    return { sourceType: "apiFootball", apiUrl: "", refreshInterval: "0" };
  }
}

function saveMatches() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(matches));
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify({
    sourceType: settings.sourceType,
    apiUrl: settings.apiUrl,
    refreshInterval: settings.refreshInterval
  }));
}

function formatDate(value) {
  if (!value) return "日程未定";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("ja-JP", {
    month: "numeric",
    day: "numeric",
    weekday: "short"
  }).format(date);
}

function formatKickoff(match) {
  if (!match.date || !match.time || match.time === "未定") return "現地 未定 / 日本 未定";
  return `現地 ${formatDate(match.date)} ${match.time} / ${formatJapanKickoff(match)}`;
}

function formatJapanKickoff(match) {
  const kickoff = getKickoffDate(match);
  if (!kickoff) return "日本 未定";
  const formatted = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    month: "numeric",
    day: "numeric",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(kickoff);
  return `日本 ${formatted}`;
}

function getKickoffDate(match) {
  if (!match.date || !match.time || match.time === "未定") return null;
  const timeZone = match.timeZone || venueTimeZones[match.venue];
  if (!timeZone) return null;
  return getUtcDateFromZonedTime(match.date, match.time, timeZone);
}

function getUtcDateFromZonedTime(dateValue, timeValue, timeZone) {
  const [year, month, day] = dateValue.split("-").map(Number);
  const [hour, minute] = timeValue.split(":").map(Number);
  if ([year, month, day, hour, minute].some((part) => !Number.isFinite(part))) return null;

  const utcGuess = Date.UTC(year, month - 1, day, hour, minute);
  const offset = getTimeZoneOffsetMs(timeZone, new Date(utcGuess));
  return new Date(utcGuess - offset);
}

function getTimeZoneOffsetMs(timeZone, date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23"
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  const asUtc = Date.UTC(
    Number(values.year),
    Number(values.month) - 1,
    Number(values.day),
    Number(values.hour),
    Number(values.minute),
    Number(values.second)
  );
  return asUtc - date.getTime();
}

function formatUpdated(value) {
  if (!value) return "未更新";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("ja-JP", {
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function stateLabel(status) {
  return {
    scheduled: "予定",
    live: "試合中",
    finished: "終了"
  }[status] || "未定";
}

function sortMatches(items) {
  return [...items].sort((a, b) => {
    const aKickoff = getKickoffDate(a)?.getTime();
    const bKickoff = getKickoffDate(b)?.getTime();
    if (Number.isFinite(aKickoff) && Number.isFinite(bKickoff) && aKickoff !== bKickoff) return aKickoff - bKickoff;
    const fallbackCompare = `${a.date || ""}${a.time || ""}`.localeCompare(`${b.date || ""}${b.time || ""}`);
    return fallbackCompare || a.matchNo - b.matchNo;
  });
}

function getVisibleMatches() {
  return sortMatches(matches).filter((match) => {
    const roundOk = selectedRound === "all" || match.roundKey === selectedRound || (selectedRound === "finals" && ["tp", "final"].includes(match.roundKey));
    const statusOk = selectedStatus === "all" || match.status === selectedStatus;
    return roundOk && statusOk;
  });
}

function render() {
  renderSummary();
  renderMatches();
  renderBracket();
  renderManualOptions();
}

function renderSummary() {
  const finished = matches.filter((match) => match.status === "finished").length;
  const live = matches.filter((match) => match.status === "live");
  const next = sortMatches(matches).find((match) => match.status !== "finished");
  const latestUpdate = matches.map((match) => match.updatedAt).filter(Boolean).sort().at(-1);

  elements.connectionStatus.textContent = live.length ? "LIVE" : settings.apiUrl ? "自動更新対応" : "手動データ";
  elements.connectionStatus.classList.toggle("is-live", live.length > 0);
  elements.nextMatch.textContent = live[0]
    ? `試合中 M${live[0].matchNo} ${live[0].home} vs ${live[0].away}`
    : next
      ? `M${next.matchNo} ${formatJapanKickoff(next)} ${next.home} vs ${next.away}`
      : "全試合終了";
  elements.progressCount.textContent = `${finished} / ${matches.length}`;
  elements.lastUpdated.textContent = formatUpdated(latestUpdate);
}

function renderMatches() {
  elements.matchList.textContent = "";
  const visible = getVisibleMatches();

  if (!visible.length) {
    const empty = document.createElement("p");
    empty.className = "message";
    empty.textContent = "該当する試合はありません。";
    elements.matchList.append(empty);
    return;
  }

  visible.forEach((match) => {
    const card = document.createElement("article");
    card.className = `match-card ${match.status === "live" ? "is-live" : ""}`;

    const meta = document.createElement("div");
    meta.className = "match-meta";
    meta.append(createText("span", `M${match.matchNo}`, "round-chip"));
    meta.append(createText("span", roundLabels[match.roundKey] || match.roundKey));
    meta.append(createText("span", formatKickoff(match)));
    meta.append(createText("span", match.venue || "会場未定"));

    const teams = document.createElement("div");
    teams.className = "teams";
    teams.append(createTeamRow(match.home, match.homeSeed, match.scoreHome));
    teams.append(createTeamRow(match.away, match.awaySeed, match.scoreAway));

    const state = document.createElement("div");
    state.className = "match-state";
    const badge = createText("span", stateLabel(match.status), `state-badge ${match.status}`);
    const minute = createText("span", match.minute ? `${match.minute}分` : "", "note");
    const note = createText("span", match.note || "", "note");
    state.append(badge, minute, note);

    card.append(meta, teams, state);
    elements.matchList.append(card);
  });
}

function createTeamRow(name, seed, score) {
  const row = document.createElement("div");
  row.className = "team-row";

  const label = document.createElement("div");
  const teamName = createText("span", name || "未定", "team-name");
  const seedText = createText("span", seed || "", "seed");
  label.append(teamName, seedText);

  const scoreBox = createText("span", score === null || score === undefined || score === "" ? "-" : String(score), "score");
  row.append(label, scoreBox);
  return row;
}

function renderBracket() {
  const groups = [
    ["r32", "ベスト32"],
    ["r16", "ベスト16"],
    ["qf", "準々決勝"],
    ["sf", "準決勝"],
    ["tp", "3位決定戦"],
    ["final", "決勝"]
  ];
  const advancedTeams = getAdvancedTeams();
  elements.bracket.textContent = "";

  groups.forEach(([key, title]) => {
    const round = document.createElement("div");
    round.className = "bracket-round";
    round.append(createText("div", title, "bracket-title"));

    matches.filter((match) => match.roundKey === key).forEach((match) => {
      const result = getMatchResult(match);
      const item = document.createElement("div");
      item.className = `bracket-match ${result ? "has-result" : ""}`;
      item.append(createText("strong", `M${match.matchNo}`));
      item.append(createBracketTeamRow(match, "home", result, advancedTeams));
      item.append(createBracketTeamRow(match, "away", result, advancedTeams));
      item.append(createText("small", formatJapanKickoff(match), "bracket-time"));
      round.append(item);
    });

    elements.bracket.append(round);
  });
}

function createBracketTeamRow(match, side, result, advancedTeams) {
  const row = document.createElement("span");
  const teamName = side === "home" ? match.home : match.away;
  const score = side === "home" ? match.scoreHome : match.scoreAway;
  const isWinner = result?.winner === teamName;
  const isLoser = result?.loser === teamName;
  const isAdvanced = advancedTeams.has(teamName) && !isWinner && !isLoser;
  row.className = `bracket-team ${isWinner ? "is-winner" : ""} ${isLoser ? "is-loser" : ""} ${isAdvanced ? "is-advanced" : ""}`;
  row.textContent = `${teamName} ${scoreText(score)}`.trim();
  return row;
}

function getAdvancedTeams() {
  return matches.reduce((teams, match) => {
    const result = getMatchResult(match);
    if (result) teams.add(result.winner);
    return teams;
  }, new Set());
}

function renderManualOptions() {
  const current = elements.manualMatch.value;
  elements.manualMatch.textContent = "";
  sortMatches(matches).forEach((match) => {
    const option = document.createElement("option");
    option.value = match.id;
    option.textContent = `M${match.matchNo} ${match.home} vs ${match.away}`;
    elements.manualMatch.append(option);
  });

  if (current && [...elements.manualMatch.options].some((option) => option.value === current)) {
    elements.manualMatch.value = current;
  }
  syncManualForm();
}

function scoreText(score) {
  return score === null || score === undefined || score === "" ? "" : String(score);
}

function createText(tag, text, className = "") {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.textContent = text;
  return element;
}

function syncManualForm() {
  const match = matches.find((item) => item.id === elements.manualMatch.value) || matches[0];
  if (!match) return;
  elements.manualMatch.value = match.id;
  elements.manualHomeScore.value = match.scoreHome ?? "";
  elements.manualAwayScore.value = match.scoreAway ?? "";
  elements.manualStatus.value = match.status || "scheduled";
  elements.manualWinner.textContent = "";
  [
    ["", "得点から自動判定"],
    ["home", match.home || "ホーム"],
    ["away", match.away || "アウェイ"]
  ].forEach(([value, label]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    elements.manualWinner.append(option);
  });
  elements.manualWinner.value = match.winner || "";
  elements.manualNote.value = match.note || "";
}

function updateManualMatch(event) {
  event.preventDefault();
  const id = elements.manualMatch.value;
  const index = matches.findIndex((match) => match.id === id);
  if (index < 0) return;

  matches[index] = {
    ...matches[index],
    scoreHome: numberOrNull(elements.manualHomeScore.value),
    scoreAway: numberOrNull(elements.manualAwayScore.value),
    status: elements.manualStatus.value,
    winner: elements.manualWinner.value,
    note: elements.manualNote.value.trim(),
    updatedAt: new Date().toISOString()
  };

  propagateKnockoutPaths();
  saveMatches();
  setMessage("手動更新を保存しました。");
  render();
}

function numberOrNull(value) {
  if (value === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

async function refreshFromApi() {
  if (!settings.apiUrl) {
    setMessage("API URLが未設定です。更新設定を開いて入力してください。");
    return;
  }

  elements.refreshButton.disabled = true;
  setMessage("外部APIから更新中です。");

  try {
    const headers = {};
    const apiKey = elements.apiKey.value.trim() || sessionStorage.getItem("world-cup-api-key") || "";
    if (settings.sourceType === "apiFootball" && apiKey) headers["x-apisports-key"] = apiKey;
    if (settings.sourceType === "generic" && apiKey) headers.Authorization = `Bearer ${apiKey}`;

    const response = await fetch(settings.apiUrl, { headers });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    const remoteMatches = settings.sourceType === "apiFootball"
      ? normalizeApiFootball(data)
      : normalizeGeneric(data);

    if (!remoteMatches.length) {
      setMessage("取得はできましたが、決勝トーナメントの試合データが見つかりませんでした。");
      return;
    }

    mergeRemoteMatches(remoteMatches);
    propagateKnockoutPaths();
    saveMatches();
    render();
    setMessage(`${remoteMatches.length}件の試合データを反映しました。`);
  } catch (error) {
    console.error(error);
    setMessage(`更新に失敗しました。API URL、キー、CORS制限を確認してください。(${error.message})`);
  } finally {
    elements.refreshButton.disabled = false;
  }
}

function normalizeApiFootball(data) {
  const items = Array.isArray(data.response) ? data.response : [];
  return items
    .map((item) => {
      const roundKey = inferRoundKey(item.league?.round || "");
      if (!roundKey) return null;
      const status = normalizeStatus(item.fixture?.status?.short);
      const date = item.fixture?.date ? item.fixture.date.slice(0, 10) : "";
      const time = item.fixture?.date ? item.fixture.date.slice(11, 16) : "未定";
      return {
        externalId: item.fixture?.id ? String(item.fixture.id) : "",
        roundKey,
        date,
        time,
        venue: item.fixture?.venue?.name || "未定",
        home: item.teams?.home?.name || "未定",
        away: item.teams?.away?.name || "未定",
        scoreHome: item.goals?.home ?? null,
        scoreAway: item.goals?.away ?? null,
        status,
        minute: item.fixture?.status?.elapsed ? String(item.fixture.status.elapsed) : "",
        note: item.fixture?.status?.long || "",
        winner: "",
        updatedAt: new Date().toISOString()
      };
    })
    .filter(Boolean);
}

function normalizeGeneric(data) {
  const items = Array.isArray(data) ? data : Array.isArray(data.matches) ? data.matches : [];
  return items
    .map((item) => {
      const roundKey = item.roundKey || inferRoundKey(item.round || "");
      if (!roundKey && !item.matchNo) return null;
      return {
        externalId: item.externalId || "",
        matchNo: item.matchNo ? Number(item.matchNo) : null,
        roundKey: roundKey || "r32",
        date: item.date || "",
        time: item.time || "未定",
        venue: item.venue || "未定",
        home: item.home || item.homeTeam || "未定",
        away: item.away || item.awayTeam || "未定",
        scoreHome: numberOrNull(item.scoreHome ?? item.homeScore ?? ""),
        scoreAway: numberOrNull(item.scoreAway ?? item.awayScore ?? ""),
        status: ["scheduled", "live", "finished"].includes(item.status) ? item.status : "scheduled",
        minute: item.minute || "",
        note: item.note || "",
        winner: ["home", "away"].includes(item.winner) ? item.winner : "",
        timeZone: item.timeZone || "",
        updatedAt: item.updatedAt || new Date().toISOString()
      };
    })
    .filter(Boolean);
}

function inferRoundKey(text) {
  const value = text.toLowerCase();
  if (value.includes("round of 32") || value.includes("32")) return "r32";
  if (value.includes("round of 16") || value.includes("16")) return "r16";
  if (value.includes("quarter")) return "qf";
  if (value.includes("semi")) return "sf";
  if (value.includes("3rd") || value.includes("third")) return "tp";
  if (value.includes("final")) return "final";
  return "";
}

function normalizeStatus(shortStatus = "") {
  if (["1H", "HT", "2H", "ET", "BT", "P", "SUSP", "INT"].includes(shortStatus)) return "live";
  if (["FT", "AET", "PEN"].includes(shortStatus)) return "finished";
  return "scheduled";
}

function mergeRemoteMatches(remoteMatches) {
  const nextMatches = [...matches];
  const grouped = groupByRound(remoteMatches);

  Object.entries(grouped).forEach(([roundKey, items]) => {
    const localIndexes = nextMatches
      .map((match, index) => ({ match, index }))
      .filter(({ match }) => match.roundKey === roundKey);

    sortMatches(items).forEach((remote, position) => {
      const indexByNumber = remote.matchNo
        ? nextMatches.findIndex((match) => match.matchNo === remote.matchNo)
        : -1;
      const index = indexByNumber >= 0 ? indexByNumber : localIndexes[position]?.index;
      if (index === undefined || index < 0) return;

      nextMatches[index] = {
        ...nextMatches[index],
        ...remote,
        id: nextMatches[index].id,
        matchNo: nextMatches[index].matchNo,
        roundKey: nextMatches[index].roundKey
      };
    });
  });

  matches = nextMatches;
}

function groupByRound(items) {
  return items.reduce((groups, item) => {
    groups[item.roundKey] = groups[item.roundKey] || [];
    groups[item.roundKey].push(item);
    return groups;
  }, {});
}

function propagateKnockoutPaths() {
  advancementRules.forEach((rule) => {
    const source = matches.find((match) => match.matchNo === rule.from);
    if (!source) return;
    const result = getMatchResult(source);
    if (!result) return;

    applyTeamToSlot(rule.winnerTo, rule.winnerSlot, result.winner);
    if (rule.loserTo && rule.loserSlot) {
      applyTeamToSlot(rule.loserTo, rule.loserSlot, result.loser);
    }
  });
}

function getMatchResult(match) {
  if (match.status !== "finished") return null;
  if (match.scoreHome === null || match.scoreAway === null) return null;
  if (match.winner === "home") return { winner: match.home, loser: match.away };
  if (match.winner === "away") return { winner: match.away, loser: match.home };
  if (match.scoreHome === match.scoreAway) return null;
  const homeWon = match.scoreHome > match.scoreAway;
  return {
    winner: homeWon ? match.home : match.away,
    loser: homeWon ? match.away : match.home
  };
}

function applyTeamToSlot(matchNo, slot, teamName) {
  const index = matches.findIndex((match) => match.matchNo === matchNo);
  if (index < 0 || !teamName) return;
  matches[index] = {
    ...matches[index],
    [slot]: teamName
  };
}

function setMessage(text) {
  elements.settingsMessage.textContent = text;
}

function saveCurrentSettings() {
  settings = {
    sourceType: elements.sourceType.value,
    apiUrl: elements.apiUrl.value.trim(),
    refreshInterval: elements.refreshInterval.value
  };
  const apiKey = elements.apiKey.value.trim();
  if (apiKey) sessionStorage.setItem("world-cup-api-key", apiKey);
  saveSettings();
  setupAutoRefresh();
  render();
  setMessage("設定を保存しました。APIキーはこのブラウザーのセッション内だけに保持します。");
}

function setupAutoRefresh() {
  if (refreshTimer) clearInterval(refreshTimer);
  const seconds = Number(settings.refreshInterval);
  if (seconds > 0 && settings.apiUrl) {
    refreshTimer = setInterval(refreshFromApi, seconds * 1000);
  }
}

function exportJson() {
  const blob = new Blob([JSON.stringify({ matches }, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "world-cup-2026-knockout.json";
  link.click();
  URL.revokeObjectURL(url);
}

async function importJson(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const text = await file.text();
    const data = JSON.parse(text);
    const imported = normalizeGeneric(data);
    if (!imported.length) throw new Error("試合データがありません");
    mergeRemoteMatches(imported);
    propagateKnockoutPaths();
    saveMatches();
    render();
    setMessage(`${imported.length}件のJSONデータを読み込みました。`);
  } catch (error) {
    setMessage(`JSONを読み込めませんでした。(${error.message})`);
  } finally {
    event.target.value = "";
  }
}

function bindEvents() {
  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      selectedRound = button.dataset.round;
      document.querySelectorAll(".tab").forEach((item) => item.classList.toggle("is-active", item === button));
      renderMatches();
    });
  });

  elements.statusFilter.addEventListener("change", () => {
    selectedStatus = elements.statusFilter.value;
    renderMatches();
  });

  elements.settingsButton.addEventListener("click", () => {
    elements.settingsPanel.hidden = !elements.settingsPanel.hidden;
    elements.settingsButton.setAttribute("aria-expanded", String(!elements.settingsPanel.hidden));
  });

  elements.refreshButton.addEventListener("click", refreshFromApi);
  elements.saveSettings.addEventListener("click", saveCurrentSettings);
  elements.exportJson.addEventListener("click", exportJson);
  elements.importJson.addEventListener("change", importJson);
  elements.manualMatch.addEventListener("change", syncManualForm);
  elements.manualForm.addEventListener("submit", updateManualMatch);
}

function init() {
  elements.sourceType.value = settings.sourceType;
  elements.apiUrl.value = settings.apiUrl;
  elements.refreshInterval.value = settings.refreshInterval;
  elements.apiKey.value = sessionStorage.getItem("world-cup-api-key") || "";
  bindEvents();
  setupAutoRefresh();
  render();
}

init();
