/* ---------- Translations ---------- */

const TRANSLATIONS = {
  en: {
    subtitle: 'Break & tools manager',
    tabBreaks: 'Breaks',
    tabTools: 'Tools',
    nextBreak: 'Next break',
    todaysBreaks: "Today's breaks",
    noBreaksYet: 'No breaks added yet.',
    noBreaksListHint: "No breaks yet. Add your first one below.",
    noToolsListHint: 'No tools yet. Add your first one below.',
    upcoming: 'Upcoming',
    now: 'Now',
    startedManually: ' (started manually)',
    breakInProgress: 'Break in progress',
    alertsAt: 'Alerts at',
    startNow: '\u25B6 Start this break now',
    addBreak: '+ Add break',
    addTool: '+ Add tool',
    resetBreaks: 'Reset all breaks',
    export: '\u2B07 Export',
    import: '\u2B06 Import',
    storedLocally: 'Stored locally',
    storedLocallySub: 'Your tool data stays in this browser.',
    credit: 'Designed by Moustafa Elbaloty',
    addBreakTitle: 'Add break',
    editBreakTitle: 'Edit break',
    breakNameLabel: 'Break name',
    startTimeLabel: 'Start time',
    durationLabel: 'Duration',
    min15: '15 min',
    min30: '30 min',
    cancel: 'Cancel',
    save: 'Save',
    addToolTitle: 'Add tool',
    editToolTitle: 'Edit tool',
    toolNameLabel: 'Tool name',
    usernameLabel: 'Username',
    passwordLabel: 'Password',
    settingsTitle: 'Settings',
    darkerTheme: 'Darker theme',
    testModeLabel: 'Test mode (single alert at start time)',
    dhikrLabel: 'Dhikr reminder (every 2 min)',
    languageLabel: 'Language: Arabic',
    done: 'Done',
    deleteThis: 'Delete this?',
    deleteBtn: 'Delete',
    enterBreakName: 'Enter a break name.',
    enterStartTime: 'Enter a start time.',
    enterToolName: 'Enter a tool name.',
    duplicateToolName: 'A tool with this name already exists.',
    breakDeleteConfirm: 'This break will be removed.',
    resetConfirm: "All your breaks will be deleted. This can't be undone.",
    allBreaksReset: 'All breaks reset',
    toolDeleteConfirm: 'This tool and its saved login will be removed.',
    usernameCopied: 'Username copied',
    passwordCopied: 'Password copied',
    noToolsToExport: 'No tools to export yet',
    toolsExported: 'Tools exported',
    invalidJsonFile: 'That file is not valid JSON',
    notBackupFile: "This file doesn't look like an AgentPulse backup",
    breakStarted: 'started'
  },
  ar: {
    subtitle: 'إدارة البريكات والأدوات',
    tabBreaks: 'البريكات',
    tabTools: 'الأدوات',
    nextBreak: 'البريك القادم',
    todaysBreaks: 'بريكات اليوم',
    noBreaksYet: 'لسه مفيش بريكات مضافة.',
    noBreaksListHint: 'لسه مفيش بريكات. ضيف أول واحد تحت.',
    noToolsListHint: 'لسه مفيش أدوات. ضيف أول واحدة تحت.',
    upcoming: 'قادم',
    now: 'دلوقتي',
    startedManually: ' (بدأ يدويًا)',
    breakInProgress: 'البريك شغال دلوقتي',
    alertsAt: 'التنبيهات الساعة',
    startNow: '\u25B6 ابدأ البريك دلوقتي',
    addBreak: '+ إضافة بريك',
    addTool: '+ إضافة أداة',
    resetBreaks: 'مسح كل البريكات',
    export: '\u2B07 تصدير',
    import: '\u2B06 استيراد',
    storedLocally: 'مخزّن محليًا',
    storedLocallySub: 'بيانات أدواتك بتفضل في المتصفح ده بس.',
    credit: 'تصميم مصطفى البلوطى',
    addBreakTitle: 'إضافة بريك',
    editBreakTitle: 'تعديل البريك',
    breakNameLabel: 'اسم البريك',
    startTimeLabel: 'وقت البداية',
    durationLabel: 'المدة',
    min15: '15 دقيقة',
    min30: '30 دقيقة',
    cancel: 'إلغاء',
    save: 'حفظ',
    addToolTitle: 'إضافة أداة',
    editToolTitle: 'تعديل الأداة',
    toolNameLabel: 'اسم الأداة',
    usernameLabel: 'اسم المستخدم',
    passwordLabel: 'كلمة المرور',
    settingsTitle: 'الإعدادات',
    darkerTheme: 'وضع أغمق',
    testModeLabel: 'وضع الاختبار (تنبيه واحد وقت البداية)',
    dhikrLabel: 'تذكير الذكر (كل دقيقتين)',
    languageLabel: 'اللغة: إنجليزي',
    done: 'تم',
    deleteThis: 'تحذف ده؟',
    deleteBtn: 'حذف',
    enterBreakName: 'اكتب اسم البريك.',
    enterStartTime: 'اختار وقت البداية.',
    enterToolName: 'اكتب اسم الأداة.',
    duplicateToolName: 'في أداة بنفس الاسم موجودة بالفعل.',
    breakDeleteConfirm: 'هيتم حذف البريك ده.',
    resetConfirm: 'هيتم حذف كل البريكات، ومش هترجع تاني.',
    allBreaksReset: 'تم مسح كل البريكات',
    toolDeleteConfirm: 'هيتم حذف الأداة دي وبيانات الدخول بتاعتها.',
    usernameCopied: 'تم نسخ اسم المستخدم',
    passwordCopied: 'تم نسخ كلمة المرور',
    noToolsToExport: 'لسه مفيش أدوات تتصدّر',
    toolsExported: 'تم تصدير الأدوات',
    invalidJsonFile: 'الملف ده مش JSON صحيح',
    notBackupFile: 'الملف ده مش نسخة احتياطية من AgentPulse',
    breakStarted: 'بدأ'
  }
};

function tr(key) {
  const lang = (state.settings && state.settings.language) || 'en';
  return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS.en[key] || key;
}

function applyLanguage() {
  const lang = (state.settings && state.settings.language) || 'en';
  const isAr = lang === 'ar';
  document.documentElement.lang = isAr ? 'ar' : 'en';
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = tr(el.dataset.i18n);
  });

  document.getElementById('breakNameInput').placeholder = isAr ? 'بريك 1' : 'Break 1';
  document.getElementById('toolNameInput').placeholder = isAr ? 'BSS' : 'BSS';
  document.getElementById('toolUsernameInput').placeholder = isAr ? 'ahmed123' : 'ahmed123';
}

/* ---------- Storage helpers ---------- */

function loadData() {
  return new Promise((resolve) => {
    chrome.storage.local.get(['breaks', 'tools', 'settings', 'breakOverrides'], (res) => {
      resolve({
        breaks: res.breaks || [],
        tools: res.tools || [],
        settings: res.settings || { darker: false, testMode: false },
        overrides: res.breakOverrides || {}
      });
    });
  });
}

function saveBreaks(breaks) {
  return new Promise((resolve) => chrome.storage.local.set({ breaks }, resolve));
}
function saveTools(tools) {
  return new Promise((resolve) => chrome.storage.local.set({ tools }, resolve));
}
function saveSettings(settings) {
  return new Promise((resolve) => chrome.storage.local.set({ settings }, resolve));
}
function saveOverrides(overrides) {
  return new Promise((resolve) => chrome.storage.local.set({ breakOverrides: overrides }, resolve));
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

/* ---------- Time helpers ---------- */

function timeStrToMinutes(t) {
  if (!t) return null;
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
}

function minutesToDisplay(mins) {
  const h = Math.floor(mins / 60) % 24;
  const m = mins % 60;
  const period = h >= 12 ? 'PM' : 'AM';
  const h12 = ((h + 11) % 12) + 1;
  return `${h12}:${String(m).padStart(2, '0')} ${period}`;
}

function pad(n) { return n < 10 ? '0' + n : '' + n; }

const ALERT_OFFSETS_MIN = [5, 2, 0];

function computeAlertTimes(startMin, testMode) {
  const offsets = testMode ? [0] : ALERT_OFFSETS_MIN;
  return offsets.map((offset) => {
    const alertMin = (startMin - offset + 1440) % 1440;
    return `${pad(Math.floor(alertMin / 60))}:${pad(alertMin % 60)}`;
  });
}

/* Given break start/end (minutes since midnight) and "now" (Date), find the
   next Date instance of that start (today if still ahead, else tomorrow). */
function nextOccurrence(now, minsSinceMidnight) {
  const d = new Date(now);
  d.setHours(0, 0, 0, 0);
  d.setMinutes(minsSinceMidnight);
  if (d.getTime() <= now.getTime()) {
    d.setDate(d.getDate() + 1);
  }
  return d;
}

function todayAt(now, minsSinceMidnight) {
  const d = new Date(now);
  d.setHours(0, 0, 0, 0);
  d.setMinutes(minsSinceMidnight);
  return d;
}

/* ---------- App state ---------- */

function dateKey(d) {
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

/* Returns {start, end} (as "HH:MM") if this break was manually started
   today ("Start now"), overriding its scheduled time for today only. */
function getActiveOverride(breakId, now) {
  const o = state.overrides[breakId];
  if (!o || o.date !== dateKey(now)) return null;
  return o;
}

let state = { breaks: [], tools: [], settings: { darker: false, testMode: false }, overrides: {} };
let ringTimer = null;

/* ---------- Init ---------- */

document.addEventListener('DOMContentLoaded', async () => {
  state = await loadData();
  applySettings();
  applyLanguage();
  bindStaticEvents();
  renderAll();
});

function applySettings() {
  const device = document.getElementById('device');
  const darkerSwitch = document.getElementById('darkerSwitch');
  device.classList.toggle('darker', !!state.settings.darker);
  darkerSwitch.classList.toggle('on', !!state.settings.darker);
  document.getElementById('testModeSwitch').classList.toggle('on', !!state.settings.testMode);
  document.getElementById('dhikrSwitch').classList.toggle('on', state.settings.dhikrReminders !== false);
  document.getElementById('languageSwitch').classList.toggle('on', state.settings.language === 'ar');
}

function renderAll() {
  renderNextBreak();
  renderBreaksList();
  renderToolsList();
}

/* ---------- Tabs ---------- */

function bindStaticEvents() {
  document.getElementById('tabBreaks').addEventListener('click', () => showView('breaks'));
  document.getElementById('tabTools').addEventListener('click', () => showView('tools'));

  document.getElementById('settingsBtn').addEventListener('click', () => {
    document.getElementById('settingsModalOverlay').classList.add('active');
  });
  document.getElementById('settingsModalClose').addEventListener('click', () => {
    document.getElementById('settingsModalOverlay').classList.remove('active');
  });

  document.getElementById('darkerSwitch').addEventListener('click', async () => {
    state.settings.darker = !state.settings.darker;
    applySettings();
    await saveSettings(state.settings);
  });

  document.getElementById('testModeSwitch').addEventListener('click', async () => {
    state.settings.testMode = !state.settings.testMode;
    applySettings();
    await saveSettings(state.settings);
    chrome.runtime.sendMessage({ type: 'settings-updated' });
  });

  document.getElementById('dhikrSwitch').addEventListener('click', async () => {
    state.settings.dhikrReminders = state.settings.dhikrReminders === false ? true : false;
    applySettings();
    await saveSettings(state.settings);
    chrome.runtime.sendMessage({ type: 'settings-updated' });
  });

  document.getElementById('languageSwitch').addEventListener('click', async () => {
    state.settings.language = state.settings.language === 'ar' ? 'en' : 'ar';
    applySettings();
    applyLanguage();
    await saveSettings(state.settings);
    renderAll();
  });

  document.getElementById('addBreakBtn').addEventListener('click', () => openBreakModal(null));
  document.getElementById('addToolBtn').addEventListener('click', () => openToolModal(null));

  document.getElementById('breakModalCancel').addEventListener('click', closeBreakModal);
  document.getElementById('breakModalSave').addEventListener('click', saveBreakFromModal);

  document.querySelectorAll('.duration-opt').forEach((el) => {
    el.addEventListener('click', () => setDurationPicker(Number(el.dataset.mins)));
  });

  document.getElementById('toolModalCancel').addEventListener('click', closeToolModal);
  document.getElementById('toolModalSave').addEventListener('click', saveToolFromModal);

  document.getElementById('confirmCancel').addEventListener('click', closeConfirmModal);

  document.getElementById('resetBreaksBtn').addEventListener('click', () => {
    if (state.breaks.length === 0) return;
    openConfirmModal(tr('resetConfirm'), async () => {
      state.breaks = [];
      await saveBreaks(state.breaks);
      chrome.runtime.sendMessage({ type: 'breaks-updated' });
      renderNextBreak();
      renderBreaksList();
      showToast(tr('allBreaksReset'));
    });
  });

  // Delegated handlers: bound once on the containers, so they keep working
  // no matter how many times the lists get re-rendered.
  document.getElementById('breaksList').addEventListener('click', (e) => {
    const editEl = e.target.closest('[data-action="edit"]');
    const delEl = e.target.closest('[data-action="delete"]');
    if (editEl) {
      const b = state.breaks.find((x) => x.id === editEl.dataset.id);
      if (b) openBreakModal(b);
      return;
    }
    if (delEl) {
      const id = delEl.dataset.id;
      openConfirmModal(tr('breakDeleteConfirm'), async () => {
        state.breaks = state.breaks.filter((x) => x.id !== id);
        await saveBreaks(state.breaks);
        chrome.runtime.sendMessage({ type: 'breaks-updated' });
        renderNextBreak();
        renderBreaksList();
      });
    }
  });

  document.getElementById('toolsList').addEventListener('click', (e) => {
    const editEl = e.target.closest('[data-action="edit-tool"]');
    const delEl = e.target.closest('[data-action="delete-tool"]');
    const toggleEl = e.target.closest('[data-action="toggle-pass"]');
    const copyUserEl = e.target.closest('[data-action="copy-user"]');
    const copyPassEl = e.target.closest('[data-action="copy-pass"]');

    if (editEl) {
      const t = state.tools.find((x) => x.id === editEl.dataset.id);
      if (t) openToolModal(t);
      return;
    }
    if (delEl) {
      const id = delEl.dataset.id;
      openConfirmModal(tr('toolDeleteConfirm'), async () => {
        state.tools = state.tools.filter((x) => x.id !== id);
        await saveTools(state.tools);
        renderToolsList();
      });
      return;
    }
    if (toggleEl) {
      const id = toggleEl.dataset.id;
      const t = state.tools.find((x) => x.id === id);
      const span = document.querySelector(`[data-role="pass-text"][data-id="${id}"]`);
      if (!t || !span) return;
      if (span.dataset.visible === 'true') {
        span.textContent = '••••••••';
        span.dataset.visible = 'false';
      } else {
        span.textContent = t.password;
        span.dataset.visible = 'true';
      }
      return;
    }
    if (copyUserEl) {
      const t = state.tools.find((x) => x.id === copyUserEl.dataset.id);
      if (t) { copyToClipboard(t.username); showToast(tr('usernameCopied')); }
      return;
    }
    if (copyPassEl) {
      const t = state.tools.find((x) => x.id === copyPassEl.dataset.id);
      if (t) { copyToClipboard(t.password); showToast(tr('passwordCopied')); }
    }
  });

  document.getElementById('exportToolsBtn').addEventListener('click', exportTools);
  document.getElementById('importToolsBtn').addEventListener('click', () => {
    document.getElementById('importFileInput').click();
  });
  document.getElementById('importFileInput').addEventListener('change', importToolsFromFile);

  document.getElementById('startNowBtn').addEventListener('click', startBreakNow);
}

async function startBreakNow() {
  const btn = document.getElementById('startNowBtn');
  const breakId = btn.dataset.breakId;
  const b = state.breaks.find((x) => x.id === breakId);
  if (!b) return;

  const now = new Date();
  const durationMin = timeStrToMinutes(b.end) - timeStrToMinutes(b.start);
  const startStr = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
  const endStr = minutesToTimeStr(now.getHours() * 60 + now.getMinutes() + durationMin);

  state.overrides[b.id] = { date: dateKey(now), start: startStr, end: endStr };
  await saveOverrides(state.overrides);

  // The break is starting right now, by hand — the originally scheduled
  // 5/2/0-minute alerts for it today no longer make sense, so mark them as
  // already fired to keep background.js from pinging about an old time.
  chrome.storage.local.get(['notifiedLog'], (res) => {
    const log = res.notifiedLog || {};
    for (const offset of [5, 2, 0]) {
      log[`${b.id}-${dateKey(now)}-${offset}`] = true;
    }
    chrome.storage.local.set({ notifiedLog: log });
  });

  chrome.runtime.sendMessage({ type: 'breaks-updated' });
  showToast(`${b.name} ${tr('breakStarted')}`);
  renderNextBreak();
  renderBreaksList();
}

function showView(name) {
  const isBreaks = name === 'breaks';
  document.getElementById('viewBreaks').classList.toggle('active', isBreaks);
  document.getElementById('viewTools').classList.toggle('active', !isBreaks);
  document.getElementById('tabBreaks').classList.toggle('active', isBreaks);
  document.getElementById('tabTools').classList.toggle('active', !isBreaks);
}

/* ---------- Next break + live ring ---------- */

function findNextOrCurrentBreak() {
  const now = new Date();
  let current = null;
  let currentOverride = null;
  let next = null;
  let nextDate = null;

  for (const b of state.breaks) {
    const override = getActiveOverride(b.id, now);
    const effStart = override ? override.start : b.start;
    const effEnd = override ? override.end : b.end;

    const startMin = timeStrToMinutes(effStart);
    const endMin = timeStrToMinutes(effEnd);
    const startToday = todayAt(now, startMin);
    const endToday = todayAt(now, endMin);

    if (now >= startToday && now < endToday) {
      current = b;
      currentOverride = override;
    }

    // "Next" always follows the normal schedule (an override only affects today).
    const occ = nextOccurrence(now, timeStrToMinutes(b.start));
    if (!nextDate || occ < nextDate) {
      nextDate = occ;
      next = b;
    }
  }

  return { current, currentOverride, next, nextDate, now };
}

function renderNextBreak() {
  if (ringTimer) { clearInterval(ringTimer); ringTimer = null; }

  const empty = document.getElementById('nbEmpty');
  const content = document.getElementById('nbContent');

  if (state.breaks.length === 0) {
    empty.style.display = 'block';
    content.style.display = 'none';
    return;
  }
  empty.style.display = 'none';
  content.style.display = 'block';

  const nameEl = document.getElementById('nbName');
  const timeEl = document.getElementById('nbTime');
  const badgeEl = document.getElementById('nbBadge');
  const ringTimeEl = document.getElementById('ringTime');
  const bigTimeEl = document.getElementById('bigTime');
  const alertSubEl = document.getElementById('alertSub');
  const ringFg = document.getElementById('ringFg');
  const circumference = 157.08; // 2 * PI * r(25), matches the compact ring's radius

  function tick() {
    syncCurrentHighlight();
    const { current, currentOverride, next, nextDate, now } = findNextOrCurrentBreak();
    const showBreak = current || next;
    if (!showBreak) return;

    const override = current ? currentOverride : null;
    const effStart = override ? override.start : showBreak.start;
    const effEnd = override ? override.end : showBreak.end;

    nameEl.textContent = showBreak.name;
    timeEl.textContent = `${effStart} → ${effEnd}${override ? tr('startedManually') : ''}`;

    if (current) {
      badgeEl.textContent = tr('now');
      badgeEl.classList.add('now');
    } else {
      badgeEl.textContent = tr('upcoming');
      badgeEl.classList.remove('now');
    }

    const targetDate = current
      ? todayAt(now, timeStrToMinutes(effEnd))
      : nextDate;

    let diffSec = Math.max(0, Math.round((targetDate.getTime() - now.getTime()) / 1000));
    const h = Math.floor(diffSec / 3600);
    const m = Math.floor((diffSec % 3600) / 60);
    const s = diffSec % 60;

    ringTimeEl.textContent = `${pad(m)}:${pad(s)}`;
    bigTimeEl.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;

    if (current) {
      alertSubEl.textContent = tr('breakInProgress');
    } else {
      const startMin = timeStrToMinutes(showBreak.start);
      const alertTimes = computeAlertTimes(startMin, state.settings.testMode);
      alertSubEl.textContent = `${tr('alertsAt')} ${alertTimes.join(', ')}`;
    }

    // Ring fraction: for "upcoming", scale against a 30-minute reference window so the
    // ring is visually meaningful close to the break; for "current", show time left in break.
    let totalRef;
    if (current) {
      totalRef = Math.max(1, timeStrToMinutes(effEnd) - timeStrToMinutes(effStart)) * 60;
    } else {
      totalRef = Math.min(30 * 60, Math.max(60, diffSec));
    }
    const fraction = Math.min(1, diffSec / totalRef);
    ringFg.style.strokeDashoffset = circumference * (1 - (current ? fraction : (1 - fraction)));

    // "Start now" only makes sense for a break that hasn't already started.
    const startBtn = document.getElementById('startNowBtn');
    if (startBtn) {
      startBtn.style.display = current ? 'none' : 'block';
      startBtn.dataset.breakId = showBreak.id;
    }
  }

  tick();
  ringTimer = setInterval(tick, 1000);
}

/* ---------- Breaks list ---------- */

function syncCurrentHighlight() {
  const now = new Date();
  document.querySelectorAll('#breaksList .break-row').forEach((row) => {
    const b = state.breaks.find((x) => x.id === row.dataset.id);
    if (!b) return;
    const override = getActiveOverride(b.id, now);
    const effStart = override ? override.start : b.start;
    const effEnd = override ? override.end : b.end;
    const startToday = todayAt(now, timeStrToMinutes(effStart));
    const endToday = todayAt(now, timeStrToMinutes(effEnd));
    const isCurrent = now >= startToday && now < endToday;
    row.classList.toggle('current', isCurrent);
  });
}

function renderBreaksList() {
  const list = document.getElementById('breaksList');
  list.innerHTML = '';

  if (state.breaks.length === 0) {
    const p = document.createElement('p');
    p.className = 'empty-hint';
    p.textContent = tr('noBreaksListHint');
    list.appendChild(p);
    return;
  }

  const now = new Date();
  const sorted = [...state.breaks].sort(
    (a, b) => timeStrToMinutes(a.start) - timeStrToMinutes(b.start)
  );

  for (const b of sorted) {
    const override = getActiveOverride(b.id, now);
    const startMin = timeStrToMinutes(b.start);
    const endMin = timeStrToMinutes(b.end);
    const startToday = todayAt(now, timeStrToMinutes(override ? override.start : b.start));
    const endToday = todayAt(now, timeStrToMinutes(override ? override.end : b.end));
    const isCurrent = now >= startToday && now < endToday;

    const alertTimes = computeAlertTimes(startMin, state.settings.testMode);
    const alertStr = alertTimes.join(', ');

    const row = document.createElement('div');
    row.className = 'break-row' + (isCurrent ? ' current' : '');
    row.dataset.id = b.id;
    row.innerHTML = `
      <div class="br-left">
        <div class="br-icon">&#9679;</div>
        <div>
          <p class="br-name">${escapeHtml(b.name)}<span class="now-badge">Now</span></p>
          <p class="br-time">${b.start} → ${b.end} · Alert ${alertStr}</p>
        </div>
      </div>
      <div class="br-actions">
        <div class="icon-btn" data-action="edit" data-id="${b.id}">&#9998;</div>
        <div class="icon-btn" data-action="delete" data-id="${b.id}">&#10005;</div>
      </div>
    `;
    list.appendChild(row);
  }
}

/* ---------- Break modal ---------- */

let editingBreakId = null;

function setDurationPicker(mins) {
  document.getElementById('breakDurationInput').value = mins;
  document.querySelectorAll('.duration-opt').forEach((el) => {
    el.classList.toggle('active', Number(el.dataset.mins) === mins);
  });
}

function minutesToTimeStr(mins) {
  const wrapped = ((mins % 1440) + 1440) % 1440;
  return `${pad(Math.floor(wrapped / 60))}:${pad(wrapped % 60)}`;
}

function openBreakModal(brk) {
  editingBreakId = brk ? brk.id : null;
  document.getElementById('breakModalTitle').textContent = brk ? tr('editBreakTitle') : tr('addBreakTitle');
  document.getElementById('breakNameInput').value = brk ? brk.name : '';
  document.getElementById('breakStartInput').value = brk ? brk.start : '';

  let duration = 15;
  if (brk) {
    const diff = timeStrToMinutes(brk.end) - timeStrToMinutes(brk.start);
    duration = diff === 30 ? 30 : 15; // snap anything unexpected to the nearest supported option
  }
  setDurationPicker(duration);

  document.getElementById('breakModalError').textContent = '';
  document.getElementById('breakModalOverlay').classList.add('active');
}
function closeBreakModal() {
  document.getElementById('breakModalOverlay').classList.remove('active');
}

async function saveBreakFromModal() {
  const name = document.getElementById('breakNameInput').value.trim();
  const start = document.getElementById('breakStartInput').value;
  const duration = Number(document.getElementById('breakDurationInput').value) || 15;
  const errEl = document.getElementById('breakModalError');

  if (!name) { errEl.textContent = tr('enterBreakName'); return; }
  if (!start) { errEl.textContent = tr('enterStartTime'); return; }

  const end = minutesToTimeStr(timeStrToMinutes(start) + duration);

  if (editingBreakId) {
    const b = state.breaks.find((x) => x.id === editingBreakId);
    b.name = name; b.start = start; b.end = end;
  } else {
    state.breaks.push({ id: uid(), name, start, end });
  }

  await saveBreaks(state.breaks);
  chrome.runtime.sendMessage({ type: 'breaks-updated' });
  closeBreakModal();
  renderNextBreak();
  renderBreaksList();
}

/* ---------- Tools list ---------- */

function renderToolsList() {
  const list = document.getElementById('toolsList');
  list.innerHTML = '';

  if (state.tools.length === 0) {
    const p = document.createElement('p');
    p.className = 'empty-hint';
    p.textContent = tr('noToolsListHint');
    list.appendChild(p);
    return;
  }

  const copyIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
  const eyeIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;

  for (const t of state.tools) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.innerHTML = `
      <div class="tc-top">
        <p class="tc-name">${escapeHtml(t.name)}</p>
        <div class="tc-actions">
          <div class="icon-btn" data-action="edit-tool" data-id="${t.id}">&#9998;</div>
          <div class="icon-btn" data-action="delete-tool" data-id="${t.id}">&#10005;</div>
        </div>
      </div>
      <div class="tc-fields">
        <div class="field-box">
          <div class="fb-text">
            <span class="k">Username</span>
            <span class="v">${escapeHtml(t.username)}</span>
          </div>
          <div class="fb-actions">
            <div class="fb-icon" title="Copy username" data-action="copy-user" data-id="${t.id}">${copyIcon}</div>
          </div>
        </div>
        <div class="field-box">
          <div class="fb-text">
            <span class="k">Password</span>
            <span class="v" data-role="pass-text" data-id="${t.id}">••••••••</span>
          </div>
          <div class="fb-actions">
            <div class="fb-icon" title="Show password" data-action="toggle-pass" data-id="${t.id}">${eyeIcon}</div>
            <div class="fb-icon" title="Copy password" data-action="copy-pass" data-id="${t.id}">${copyIcon}</div>
          </div>
        </div>
      </div>
    `;
    list.appendChild(card);
  }
}

/* ---------- Tool modal ---------- */

let editingToolId = null;

function openToolModal(tool) {
  editingToolId = tool ? tool.id : null;
  document.getElementById('toolModalTitle').textContent = tool ? tr('editToolTitle') : tr('addToolTitle');
  document.getElementById('toolNameInput').value = tool ? tool.name : '';
  document.getElementById('toolUsernameInput').value = tool ? tool.username : '';
  document.getElementById('toolPasswordInput').value = tool ? tool.password : '';
  document.getElementById('toolModalError').textContent = '';
  document.getElementById('toolModalOverlay').classList.add('active');
}
function closeToolModal() {
  document.getElementById('toolModalOverlay').classList.remove('active');
}

async function saveToolFromModal() {
  const name = document.getElementById('toolNameInput').value.trim();
  const username = document.getElementById('toolUsernameInput').value.trim();
  const password = document.getElementById('toolPasswordInput').value;
  const errEl = document.getElementById('toolModalError');

  if (!name) { errEl.textContent = tr('enterToolName'); return; }

  const dup = state.tools.find(
    (x) => x.name.toLowerCase() === name.toLowerCase() && x.id !== editingToolId
  );
  if (dup) { errEl.textContent = tr('duplicateToolName'); return; }

  if (editingToolId) {
    const t = state.tools.find((x) => x.id === editingToolId);
    t.name = name; t.username = username; t.password = password;
  } else {
    state.tools.push({ id: uid(), name, username, password });
  }

  await saveTools(state.tools);
  closeToolModal();
  renderToolsList();
}

/* ---------- Confirm modal ---------- */

let confirmAction = null;

function openConfirmModal(text, action) {
  document.getElementById('confirmText').textContent = text;
  confirmAction = action;
  document.getElementById('confirmModalOverlay').classList.add('active');
  document.getElementById('confirmOk').onclick = async () => {
    const actionToRun = confirmAction; // capture before closeConfirmModal() clears it
    closeConfirmModal();
    if (actionToRun) await actionToRun();
  };
}
function closeConfirmModal() {
  document.getElementById('confirmModalOverlay').classList.remove('active');
  confirmAction = null;
}

/* ---------- Utils ---------- */

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str == null ? '' : str;
  return div.innerHTML;
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text || '').catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text || '';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  });
}

/* ---------- Export / Import tools ---------- */

function exportTools() {
  if (state.tools.length === 0) {
    showToast(tr('noToolsToExport'));
    return;
  }
  const payload = {
    app: 'AgentPulse',
    type: 'tools-backup',
    exportedAt: new Date().toISOString(),
    tools: state.tools.map((t) => ({ name: t.name, username: t.username, password: t.password }))
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `agentpulse-tools-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
  showToast(tr('toolsExported'));
}

async function importToolsFromFile(e) {
  const file = e.target.files && e.target.files[0];
  e.target.value = ''; // allow re-selecting the same file later
  if (!file) return;

  let data;
  try {
    const text = await file.text();
    data = JSON.parse(text);
  } catch (err) {
    showToast(tr('invalidJsonFile'));
    return;
  }

  const incoming = Array.isArray(data) ? data : Array.isArray(data.tools) ? data.tools : null;
  if (!incoming) {
    showToast(tr('notBackupFile'));
    return;
  }

  let added = 0;
  let skipped = 0;
  for (const item of incoming) {
    if (!item || !item.name) continue;
    const dup = state.tools.find((x) => x.name.toLowerCase() === String(item.name).toLowerCase());
    if (dup) { skipped++; continue; }
    state.tools.push({
      id: uid(),
      name: String(item.name),
      username: item.username ? String(item.username) : '',
      password: item.password ? String(item.password) : ''
    });
    added++;
  }

  if (added > 0) await saveTools(state.tools);
  renderToolsList();
  showToast(`Imported ${added}${skipped ? `, skipped ${skipped} duplicate${skipped > 1 ? 's' : ''}` : ''}`);
}

let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1600);
}
