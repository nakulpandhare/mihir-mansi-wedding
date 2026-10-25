/**
 * ====================================================================
 * MIHIR & MANSI — WEDDING INVITATION CONFIGURATION & LOGIC
 * Mihir & Mansi · December 2026
 * ====================================================================
 * 
 * Keep all text, dates, events, venue, map link, family list, and RSVP
 * endpoint in this CONFIG object so it is effortless to edit.
 */

const CONFIG = {
  // Couple Information
  couple: {
    groom: {
      name: "Mihir",
      honorific: "Chi.",
      parents: "Son of Mrs. Sakshi & Mr. Eknath Purohit",
      grandparents: "Grandson of Late Mrs. Vijaya & Late Mr. Gangadharrao Purohit"
    },
    bride: {
      name: "Mansi",
      honorific: "Chi. Sau. Kan.",
      parents: "Daughter of Mrs. Manju & Mr. Nitin Sudhakar Udapurkar"
    }
  },

  // Blessing Section
  blessing: {
    transliteration: "॥ Shree Mahalakshmi Prasanna ॥",
    threeLines: [
      "Two Souls",
      "One Destiny",
      "A Lifetime of Togetherness"
    ],
    bodyText: "With the blessings of the Almighty and our elders, the Purohit family joyfully invites you to celebrate as we welcome the newest member into our family."
  },

  // Countdown Target Date (Wedding Ceremony: 15 Dec 2026, 10:50 AM IST)
  countdownTarget: "2026-12-15T10:50:00+05:30",

  // Save the Date (Google Calendar link; Apple/Outlook use assets/mihir-mansi-wedding.ics)
  // Times are UTC: 05:20Z = 10:50 AM IST, 08:30Z = 2:00 PM IST
  calendar: {
    title: "Wedding of Mihir & Mansi",
    start: "20261215T052000Z",
    end: "20261215T083000Z",
    details: "Wedding ceremony of Chi. Mihir & Chi. Sau. Kan. Mansi at 10:50 AM, followed by lunch. Invitation: https://mihir-mansi-weddding-invitation.vercel.app"
  },

  // Schedule of Events (timeline). featured: highlighted in burgundy
  events: [
    {
      weekday: "Mon", day: "14", month: "Dec",
      time: "7:30 PM onwards",
      title: "Sangeet",
      tagline: "An evening of music, dance & joy"
    },
    {
      weekday: "Tue", day: "15", month: "Dec",
      time: "10:50 AM",
      title: "Wedding Ceremony",
      tagline: "The sacred vows, with your blessings",
      featured: true
    },
    {
      weekday: "Tue", day: "15", month: "Dec",
      time: "11:30 AM onwards",
      title: "Wedding Lunch",
      tagline: "A traditional feast to bless the newlyweds"
    },
    {
      weekday: "Thu", day: "17", month: "Dec",
      time: "7:30 PM onwards",
      title: "Reception",
      tagline: "Dinner & celebrations with loved ones"
    }
  ],

  // Venue & Map
  venue: {
    name: "Suraburdi Meadows",
    shortName: "Suraburdi Meadows, Nagpur",
    address: "Waddhamna, AH-15 kms, Nagpur-Amravati Hwy, Nagpur-440021",
    mapLink: "https://maps.google.com/?q=Suraburdi+Meadows+Nagpur"
  },

  // Public link used in WhatsApp share messages
  siteUrl: "https://mihir-mansi-weddding-invitation.vercel.app",

  // Wedding Predictions poll. Results need apps-script/poll.gs deployed and
  // its Web App URL pasted below; until then guests can vote but see no tallies.
  poll: {
    googleScriptUrl: "",
    questions: [
      { id: "cry", emoji: "🥲", question: "Who will cry first at the vidaai?", options: ["Mihir", "Mansi", "Mansi's parents", "Literally everyone"] },
      { id: "dancer", emoji: "💃", question: "Who's the better dancer?", options: ["Mihir", "Mansi", "Both equally bad 😂"] },
      { id: "late", emoji: "⏰", question: "Who'll be late on the wedding day?", options: ["Mihir", "Mansi", "The baraat, obviously"] },
      { id: "sorry", emoji: "🙏", question: "Who says 'sorry' first after a fight?", options: ["Mihir", "Mansi", "Neither, they'll just order food"] },
      { id: "remote", emoji: "📺", question: "Who will control the TV remote?", options: ["Mihir", "Mansi", "Their mothers"] },
      { id: "cook", emoji: "🍳", question: "Who will be the better cook?", options: ["Mihir", "Mansi", "Swiggy & Zomato"] }
    ]
  },

  // Wishes: tapping a vibe fills the message box (cycles through each list)
  wishTemplates: {
    sweet: [
      "Wishing you both a lifetime of love, laughter and endless cups of chai together. ☕💕",
      "May your love grow stronger with every sunrise. So happy for you two! 💕",
      "Two beautiful souls, one beautiful journey. Congratulations! ✨"
    ],
    funny: [
      "Mihir, from today the TV remote officially belongs to Mansi. Good luck! 😂",
      "Mansi, thank you for taking Mihir off our hands. No returns, no refunds! 😜",
      "Remember: 'Yes dear' are the two most important words in a happy marriage. 😄"
    ],
    blessing: [
      "May Lord Ganesha bless your new journey with happiness, health and prosperity. Shubh Vivah! 🙏",
      "May your home always be filled with love, laughter and the blessings of your elders. 🙏",
      "Wishing you a blessed married life full of togetherness and joy. 🌸"
    ],
    advice: [
      "Never go to bed angry. Stay up and fight… just kidding! Always talk it out. 💡",
      "Marriage tip: let the other one win the argument at least once a week. 😉",
      "Laugh together every day, and always share the last piece of dessert. 🍰"
    ],
    foodie: [
      "Honestly I'm coming for the food, but congratulations too! 😋",
      "Wishing you a marriage as sweet as the wedding gulab jamun! 🍮",
      "May your life together be like a good biryani: full of flavour and never boring! 🍛"
    ]
  },

  // Family List (Awaiting Your Presence)
  familyList: [
    "Purohit Family"
  ],

  // RSVP Configuration
  rsvp: {
    // Paste your Google Apps Script Web App URL here after deployment:
    googleScriptUrl: "https://script.google.com/macros/s/AKfycbwCqNCUiBiCvKJK1QKt-gXjOaHoGRlgl0V1Q3ISoKIy8P2mUW7BHDHoePOhZD0p2OjX/exec",
    whatsAppNumber: ""
  },

  // Message for the Couple
  wishes: {
    // Web App URL of apps-script/wishes.gs (saves to a "Wishes" tab).
    // While empty, wishes are sent to the RSVP sheet instead, marked "[Wish]".
    googleScriptUrl: ""
  }
};

/* ====================================================================
   MAIN APPLICATION LOGIC
   ==================================================================== */
document.addEventListener('DOMContentLoaded', () => {

  // 1. POPULATE STATIC CONTENT FROM CENTRAL CONFIG
  populateConfigContent();

  // 2. ROYAL DOORS INTRO & BACKGROUND MUSIC
  initIntroGate();

  // 3. COUNTDOWN RINGS
  initCountdownTimer();

  // 4. EVENTS TIMELINE
  renderTimelineEvents();

  // 5. ARE YOU COMING? (YES / NO RSVP)
  initRsvpHandling();

  // 6. SCROLL REVEAL ANIMATIONS
  initScrollAnimations();

  // 7. GOOGLE MAP INTERACTION HINT
  initMapOverlay();

  // 8. AMBIENT DRIFTING PETALS
  initAmbientPetals();

  // 9. TABS (bottom bar, swipe, "Next" buttons)
  initTabs();

  // 10. SAVE THE DATE CALENDAR LINKS
  initSaveTheDate();

  // 11. WEDDING PREDICTIONS POLL
  initPoll();

  // 12. WISHES FOR THE COUPLE
  initWishes();
});

/**
 * Populate text and names from central CONFIG object
 */
function populateConfigContent() {
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el && text) el.textContent = text;
  };

  // Hero names
  setText('heroGroomName', CONFIG.couple.groom.name);
  setText('heroBrideName', CONFIG.couple.bride.name);

  // Blessing
  setText('cfgBlessingTranslit', CONFIG.blessing.transliteration);
  setText('cfgBlessingBody', CONFIG.blessing.bodyText);
  const linesEl = document.getElementById('cfgBlessingLines');
  if (linesEl) {
    linesEl.innerHTML = CONFIG.blessing.threeLines
      .map(line => `<div class="script-quote-line">${line}</div>`)
      .join('');
  }

  // Couple & Parents
  setText('cfgGroomHonorific', CONFIG.couple.groom.honorific);
  setText('cfgGroomName', CONFIG.couple.groom.name);
  setText('cfgGroomParents', CONFIG.couple.groom.parents);
  setText('cfgGroomGrandparents', CONFIG.couple.groom.grandparents);
  setText('cfgBrideHonorific', CONFIG.couple.bride.honorific);
  setText('cfgBrideName', CONFIG.couple.bride.name);
  setText('cfgBrideParents', CONFIG.couple.bride.parents);

  // Venue
  setText('cfgVenueName', CONFIG.venue.name);
  setText('cfgVenueAddress', CONFIG.venue.address);
  setText('cfgSaveDateVenue', CONFIG.venue.shortName);
  const mapLink = document.getElementById('cfgMapLink');
  if (mapLink) mapLink.href = CONFIG.venue.mapLink;

  // Family List
  const familyListEl = document.getElementById('cfgFamilyList');
  if (familyListEl) {
    familyListEl.innerHTML = CONFIG.familyList
      .map(member => `<li>${member}</li>`)
      .join('');
  }
}

/**
 * Royal Doors Intro
 * 1. Burgundy doors with monogram, names and date animate in
 * 2. Tap anywhere -> content fades, doors swing apart, music starts
 *    (the tap is what lets mobile browsers play audio)
 * 3. Hero text and photo animate in as the doors open
 * 4. Floating burgundy music toggle button appears at bottom-right
 */
function initIntroGate() {
  const gate = document.getElementById('introGate');
  const openBtn = document.getElementById('gateOpenBtn');
  const audio = document.getElementById('weiAudio');
  const audioBtn = document.getElementById('weiAudioBtn');
  const iconPause = document.getElementById('weiIconPause');
  const iconPlay = document.getElementById('weiIconPlay');

  let opened = false;

  function openGate() {
    if (opened) return;
    opened = true;

    // Play music within the tap gesture
    if (audio) {
      audio.volume = 1;
      const ap = audio.play();
      if (ap && ap.catch) ap.catch(() => { });
    }

    if (gate) gate.classList.add('is-opening');

    // Reveal hero as the doors start parting
    setTimeout(() => {
      document.body.classList.remove('intro-pending');
    }, 350);

    setTimeout(() => {
      if (gate) gate.hidden = true;
      if (audioBtn) {
        audioBtn.style.visibility = 'visible';
        audioBtn.style.opacity = '1';
      }
    }, 2200);
  }

  if (gate) gate.addEventListener('click', openGate);
  if (openBtn) {
    openBtn.addEventListener('animationend', () => openBtn.classList.add('is-ready'), { once: true });
  }

  // Floating Audio Toggle Button
  if (audioBtn && audio) {
    audioBtn.addEventListener('click', () => {
      if (audio.paused) {
        audio.play().catch(() => { });
        if (iconPlay) iconPlay.style.display = 'none';
        if (iconPause) iconPause.style.display = 'block';
      } else {
        audio.pause();
        if (iconPlay) iconPlay.style.display = 'block';
        if (iconPause) iconPause.style.display = 'none';
      }
    });
  }
}

/**
 * Countdown rings: numbers plus a gold arc showing how full each unit is
 */
function initCountdownTimer() {
  const units = [
    { num: document.getElementById('cdDays'), ring: document.getElementById('ringDays'), max: 365 },
    { num: document.getElementById('cdHours'), ring: document.getElementById('ringHours'), max: 24 },
    { num: document.getElementById('cdMins'), ring: document.getElementById('ringMins'), max: 60 },
    { num: document.getElementById('cdSecs'), ring: document.getElementById('ringSecs'), max: 60 }
  ];
  const circumference = 2 * Math.PI * 28;
  const targetDate = new Date(CONFIG.countdownTarget).getTime();

  function update() {
    const distance = Math.max(0, targetDate - Date.now());
    const values = [
      Math.floor(distance / 86400000),
      Math.floor((distance % 86400000) / 3600000),
      Math.floor((distance % 3600000) / 60000),
      Math.floor((distance % 60000) / 1000)
    ];

    units.forEach((unit, i) => {
      if (unit.num) unit.num.textContent = String(values[i]).padStart(2, '0');
      if (unit.ring) {
        const fraction = Math.min(values[i] / unit.max, 1);
        unit.ring.style.strokeDashoffset = String(circumference * (1 - fraction));
      }
    });
  }

  update();
  setInterval(update, 1000);
}

/**
 * The Celebrations: timeline rows with a rose that glides down the line
 */
function renderTimelineEvents() {
  const container = document.getElementById('celebrationsTimeline');
  if (!container) return;

  const rowsHtml = CONFIG.events.map(evt => `
    <div class="timeline-row-wrap${evt.featured ? ' is-featured' : ''}">
      <div class="timeline-header-bar">
        <div class="time-col-left">
          <span class="time-date-str">${evt.weekday}, ${evt.day} ${evt.month}</span>
          <span class="time-hour-str">${evt.time}</span>
        </div>
        <div class="node-col-center">
          <div class="diamond-node-dot"></div>
        </div>
        <div class="info-col-right">
          <span class="event-name-text">${evt.title}</span>
          <span class="event-tagline">${evt.tagline}</span>
        </div>
      </div>
    </div>
  `).join('');

  const roseHtml = `<img alt="" class="timeline-floating-rose" id="timelineFloatingRose" aria-hidden="true">`;
  container.innerHTML = rowsHtml + roseHtml;

  initTimelineRoseScroller();
}

/**
 * Moves the rose along the timeline, following the middle of the screen
 */
function initTimelineRoseScroller() {
  const container = document.getElementById('celebrationsTimeline');
  const rose = document.getElementById('timelineFloatingRose');
  if (!container || !rose) return;

  let ticking = false;

  function update() {
    ticking = false;
    const nodes = container.querySelectorAll('.node-col-center');
    if (!nodes.length || !container.offsetParent) return;

    const containerRect = container.getBoundingClientRect();
    const firstRect = nodes[0].getBoundingClientRect();
    const lastRect = nodes[nodes.length - 1].getBoundingClientRect();

    const nodeCenterX = (firstRect.left + firstRect.width / 2) - containerRect.left;
    const firstCenterY = (firstRect.top + 8) - containerRect.top;
    const lastCenterY = (lastRect.top + 8) - containerRect.top;

    const focalY = window.innerHeight * 0.5;
    const clampedY = Math.max(firstCenterY, Math.min(lastCenterY, focalY - containerRect.top));

    rose.style.left = `${nodeCenterX}px`;
    rose.style.top = '0px';
    rose.style.transform = `translate3d(-50%, calc(-50% + ${clampedY}px), 0)`;
  }

  function requestUpdate() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  window.addEventListener('tabchange', () => {
    setTimeout(update, 50);
    setTimeout(update, 400);
  });
}

/**
 * Tabs: bottom tab bar, "Next" buttons, swipe left/right, and #hash links
 */
function initTabs() {
  const pages = Array.from(document.querySelectorAll('.tab-page'));
  const buttons = Array.from(document.querySelectorAll('.tab-btn'));
  const order = pages.map(p => p.dataset.tab);
  let current = '';

  function showTab(name) {
    if (!order.includes(name) || name === current) return;
    const dir = current ? Math.sign(order.indexOf(name) - order.indexOf(current)) : 0;
    current = name;

    pages.forEach(page => {
      const active = page.dataset.tab === name;
      page.classList.toggle('is-active', active);
      if (active) page.style.setProperty('--tab-shift', `${dir * 18}px`);
    });
    buttons.forEach(btn => {
      const active = btn.dataset.tab === name;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', String(active));
    });

    window.scrollTo(0, 0);
    if (history.replaceState) history.replaceState(null, '', name === 'home' ? location.pathname : `#${name}`);
    window.dispatchEvent(new CustomEvent('tabchange', { detail: name }));
  }

  buttons.forEach(btn => btn.addEventListener('click', () => showTab(btn.dataset.tab)));
  document.querySelectorAll('[data-goto]').forEach(el => {
    el.addEventListener('click', () => showTab(el.dataset.goto));
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showTab(el.dataset.goto);
      }
    });
  });

  // Swipe between tabs (ignored on the map and form fields)
  let startX = 0;
  let startY = 0;
  let tracking = false;
  document.addEventListener('touchstart', (e) => {
    tracking = !document.body.classList.contains('intro-pending')
      && !e.target.closest('iframe, input, textarea, .rsvp-modal-overlay, .chip-group');
    if (!tracking) return;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });
  document.addEventListener('touchend', (e) => {
    if (!tracking) return;
    tracking = false;
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) < 70 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    const next = order.indexOf(current) + (dx < 0 ? 1 : -1);
    if (next >= 0 && next < order.length) showTab(order[next]);
  }, { passive: true });

  const fromHash = location.hash.replace('#', '');
  showTab(order.includes(fromHash) ? fromHash : 'home');
}

/**
 * Shared helpers for posting to Google Apps Script and celebrating
 */
async function postToSheet(url, fields) {
  if (!url || !url.trim()) return;
  const formData = new FormData();
  Object.entries(fields).forEach(([key, value]) => formData.append(key, value));
  try {
    await fetch(url.trim(), { method: 'POST', mode: 'no-cors', body: formData });
  } catch (err) {
    console.warn('Google Script submit error:', err);
  }
}

function burstConfetti(host, count = 46) {
  if (!host || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const colors = ['#D4AF5F', '#F6E3A6', '#5A0F1B', '#EABDC0', '#B48C3D'];
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    const angle = Math.random() * Math.PI * 2;
    const dist = 90 + Math.random() * 150;
    piece.style.setProperty('--dx', `${Math.cos(angle) * dist}px`);
    piece.style.setProperty('--dy', `${Math.sin(angle) * dist - 40}px`);
    piece.style.setProperty('--rot', `${Math.random() * 720 - 360}deg`);
    piece.style.background = colors[i % colors.length];
    piece.style.animationDelay = `${Math.random() * 0.15}s`;
    host.appendChild(piece);
    setTimeout(() => piece.remove(), 2000);
  }
}

/**
 * Are You Coming? Yes opens the details popup; No pleads once, then asks for a name
 */
function initRsvpHandling() {
  const section = document.getElementById('rsvpSection');
  const choose = document.getElementById('attendChoose');
  const choices = choose ? choose.querySelector('.attend-choices') : null;
  const yesBtn = document.getElementById('attendYesBtn');
  const noBtn = document.getElementById('attendNoBtn');
  const noLabel = document.getElementById('attendNoLabel');
  const noEmoji = document.getElementById('attendNoEmoji');
  const decline = document.getElementById('attendDecline');
  const declineName = document.getElementById('declineName');
  const declineBack = document.getElementById('declineBackBtn');
  const declineSubmit = document.getElementById('declineSubmitBtn');
  const done = document.getElementById('attendDone');
  const doneEmoji = document.getElementById('attendDoneEmoji');
  const doneTitle = document.getElementById('attendDoneTitle');
  const doneText = document.getElementById('attendDoneText');
  const changeBtn = document.getElementById('attendChangeBtn');

  const modal = document.getElementById('rsvpModalOverlay');
  const dialog = document.getElementById('rsvpModalDialog');
  const closeBtn = document.getElementById('rsvpModalCloseBtn');
  const backdrop = document.getElementById('rsvpModalBackdrop');
  const form = document.getElementById('rsvpForm');
  const nameInput = document.getElementById('rsvpName');
  const contactInput = document.getElementById('rsvpContact');
  const guestsInput = document.getElementById('rsvpGuests');
  const guestCaption = document.getElementById('guestCaption');
  const minusBtn = document.getElementById('guestMinusBtn');
  const plusBtn = document.getElementById('guestPlusBtn');
  const messageInput = document.getElementById('rsvpMessage');
  const errorEl = document.getElementById('rsvpError');
  const submitBtn = document.getElementById('rsvpSubmitBtn');
  if (!section || !modal || !form) return;

  const submitHtml = submitBtn ? submitBtn.innerHTML : '';
  const noDefault = { label: noLabel ? noLabel.textContent : '', emoji: noEmoji ? noEmoji.textContent : '' };
  let pleaded = false;

  function showStep(step) {
    [choose, decline, done].forEach(el => { if (el) el.hidden = el !== step; });
  }

  function resetNoButton() {
    pleaded = false;
    if (choices) choices.classList.remove('is-pleading');
    if (noLabel) noLabel.textContent = noDefault.label;
    if (noEmoji) noEmoji.textContent = noDefault.emoji;
  }

  function showDone(emoji, title, text) {
    if (doneEmoji) doneEmoji.textContent = emoji;
    if (doneTitle) doneTitle.textContent = title;
    if (doneText) doneText.textContent = text;
    showStep(done);
  }

  // ----- Popup -----
  function openModal() {
    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (errorEl) errorEl.textContent = '';
    setTimeout(() => { if (nameInput) nameInput.focus(); }, 250);
  }

  function closeModal() {
    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) closeModal();
  });

  // ----- Yes / No -----
  if (yesBtn) yesBtn.addEventListener('click', openModal);

  if (noBtn) {
    noBtn.addEventListener('click', () => {
      if (!pleaded) {
        pleaded = true;
        if (choices) {
          choices.classList.remove('is-pleading');
          void choices.offsetWidth; // restart wobble animation
          choices.classList.add('is-pleading');
        }
        if (noLabel) noLabel.textContent = 'Sure? There\'s free food!';
        if (noEmoji) noEmoji.textContent = '🥺';
        return;
      }
      resetNoButton();
      showStep(decline);
      if (declineName) declineName.focus();
    });
  }

  if (declineBack) {
    declineBack.addEventListener('click', () => {
      showStep(choose);
      openModal();
    });
  }

  if (decline) {
    decline.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = declineName ? declineName.value.trim() : '';
      if (!name) {
        if (declineName) {
          declineName.classList.add('is-invalid');
          declineName.focus();
        }
        return;
      }
      if (declineName) declineName.classList.remove('is-invalid');
      if (declineSubmit) declineSubmit.disabled = true;

      await postToSheet(CONFIG.rsvp.googleScriptUrl, {
        name, guests: '0', contact: '', attending: 'No', message: '[Not attending]'
      });

      if (declineSubmit) declineSubmit.disabled = false;
      decline.reset();
      showDone('💌', 'Thank you for letting us know', "You'll be missed! Why not leave the couple a sweet message below?");
    });
  }

  if (changeBtn) {
    changeBtn.addEventListener('click', () => {
      resetNoButton();
      showStep(choose);
    });
  }

  // ----- Guest stepper -----
  function setGuests(n) {
    const value = Math.min(20, Math.max(1, n));
    guestsInput.value = String(value);
    if (minusBtn) minusBtn.disabled = value <= 1;
    if (plusBtn) plusBtn.disabled = value >= 20;
    if (guestCaption) {
      guestCaption.textContent = value === 1 ? 'Just me'
        : value === 2 ? 'Me + 1'
        : `Me + ${value - 1} others`;
    }
  }
  if (guestsInput) {
    if (minusBtn) minusBtn.addEventListener('click', () => setGuests(parseInt(guestsInput.value, 10) - 1));
    if (plusBtn) plusBtn.addEventListener('click', () => setGuests(parseInt(guestsInput.value, 10) + 1));
    setGuests(1);
  }

  // Contact number: digits only, max 10
  if (contactInput) {
    contactInput.addEventListener('input', () => {
      contactInput.value = contactInput.value.replace(/[^0-9]/g, '').slice(0, 10);
      contactInput.classList.remove('is-invalid');
    });
  }
  if (nameInput) nameInput.addEventListener('input', () => nameInput.classList.remove('is-invalid'));

  // ----- Submit "Yes" -----
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const guestName = nameInput ? nameInput.value.trim() : '';
    const contactNum = contactInput ? contactInput.value.replace(/[^0-9]/g, '') : '';
    const guestCount = guestsInput ? guestsInput.value : '1';
    const note = messageInput ? messageInput.value.trim() : '';

    if (!guestName) {
      nameInput.classList.add('is-invalid');
      if (errorEl) errorEl.textContent = 'Please tell us your name.';
      nameInput.focus();
      return;
    }
    if (contactNum.length !== 10) {
      contactInput.classList.add('is-invalid');
      if (errorEl) errorEl.textContent = 'Please enter a 10-digit mobile number.';
      contactInput.focus();
      return;
    }
    if (errorEl) errorEl.textContent = '';

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Saving your seat...</span>';
    }

    await postToSheet(CONFIG.rsvp.googleScriptUrl, {
      name: guestName, guests: guestCount, contact: contactNum, attending: 'Yes', message: note
    });

    burstConfetti(dialog, 60);
    if (submitBtn) submitBtn.innerHTML = "<span>✓ You're on the list!</span>";

    setTimeout(() => {
      closeModal();
      form.reset();
      setGuests(1);
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = submitHtml;
      }
      const firstName = guestName.split(' ')[0];
      showDone('🎉', `See you there, ${firstName}!`,
        guestCount === '1' ? 'Your seat is saved. Get your dancing shoes ready!'
          : `Seats for ${guestCount} are saved. Get your dancing shoes ready!`);
      burstConfetti(section.querySelector('.attend-card'), 40);
    }, 1600);
  });
}

/**
 * Scroll Reveal Animations
 */
function initScrollAnimations() {
  const items = document.querySelectorAll('.reveal-item');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    items.forEach(el => observer.observe(el));
  } else {
    items.forEach(el => el.classList.add('is-revealed'));
  }
}

/**
 * Map Scroll Zoom Overlay Hint
 */
function initMapOverlay() {
  const mapWrapper = document.getElementById('mapWrapper');
  const overlay = document.getElementById('mapZoomOverlay');
  if (!mapWrapper || !overlay) return;

  let timer = null;
  mapWrapper.addEventListener('wheel', (e) => {
    if (!e.ctrlKey) {
      overlay.classList.add('visible');
      clearTimeout(timer);
      timer = setTimeout(() => {
        overlay.classList.remove('visible');
      }, 1200);
    } else {
      overlay.classList.remove('visible');
    }
  }, { passive: true });
}

/**
 * Subtle Drifting Blush Petals
 */
function initAmbientPetals() {
  const container = document.getElementById('ambientPetals');
  if (!container) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const maxPetals = 12;

  function createPetal() {
    if (document.querySelectorAll('.ambient-petal').length >= maxPetals) return;

    const petal = document.createElement('div');
    petal.className = 'ambient-petal';

    const left = Math.random() * 95;
    const duration = 9 + Math.random() * 8;
    const size = 10 + Math.random() * 8;

    petal.style.left = `${left}%`;
    petal.style.width = `${size}px`;
    petal.style.height = `${size * 1.3}px`;
    petal.style.animationDuration = `${duration}s`;

    container.appendChild(petal);
    setTimeout(() => { petal.remove(); }, duration * 1000);
  }

  setInterval(createPetal, 1800);
}

/**
 * Save the Date: build the Google Calendar link from CONFIG.calendar
 * (Apple Calendar / Outlook use the static .ics file linked in index.html)
 */
function initSaveTheDate() {
  const googleBtn = document.getElementById('googleCalBtn');
  if (!googleBtn) return;

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: CONFIG.calendar.title,
    dates: `${CONFIG.calendar.start}/${CONFIG.calendar.end}`,
    details: CONFIG.calendar.details,
    location: `${CONFIG.venue.name}, ${CONFIG.venue.address}`,
    ctz: 'Asia/Kolkata'
  });
  googleBtn.href = `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Wedding Predictions: one question at a time; after voting, animated bars
 * show everyone's votes. Each browser keeps a random voter id so a guest has
 * one vote per question (and can change it).
 */
function initPoll() {
  const card = document.getElementById('pollCard');
  const dotsEl = document.getElementById('pollDots');
  const prevBtn = document.getElementById('pollPrev');
  const nextBtn = document.getElementById('pollNext');
  const shareBtn = document.getElementById('pollShareBtn');
  if (!card) return;

  const questions = CONFIG.poll.questions;
  const url = (CONFIG.poll.googleScriptUrl || '').trim();
  const store = {
    get(key, fallback) {
      try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch (e) { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* private mode */ }
    }
  };

  let voterId = store.get('mm_poll_voter', '');
  if (!voterId) {
    voterId = `v${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
    store.set('mm_poll_voter', voterId);
  }
  const votes = store.get('mm_poll_votes', {});
  let tallies = {};
  let index = 0;
  let changing = false;

  if (shareBtn) {
    const msg = `Who will cry first at Mihir & Mansi's vidaai? 🥲 Cast your wedding predictions: ${CONFIG.siteUrl}#fun`;
    shareBtn.href = `https://wa.me/?text=${encodeURIComponent(msg)}`;
  }

  const escapeHtml = (s) => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function render(shift = 0) {
    const q = questions[index];
    const picked = votes[q.id];
    const counts = tallies[q.id] || {};
    const total = q.options.reduce((sum, opt) => sum + (counts[opt] || 0), 0);
    const showResults = picked && !changing;

    const optionsHtml = q.options.map(opt => {
      const isPicked = showResults && opt === picked;
      const pct = total ? Math.round(((counts[opt] || 0) / total) * 100) : 0;
      const right = showResults && url ? `<span class="poll-pct">${pct}%</span>` : '';
      return `
        <button type="button" class="poll-option${isPicked ? ' is-picked' : ''}" data-option="${escapeHtml(opt)}"
          ${showResults ? 'aria-disabled="true"' : ''} data-pct="${pct}">
          <span class="poll-bar"></span>
          <span class="poll-label">${escapeHtml(opt)}${isPicked ? '<span class="poll-check">✓</span>' : ''}</span>
          ${right}
        </button>`;
    }).join('');

    let meta = '';
    if (showResults) {
      const summary = url
        ? `${total} ${total === 1 ? 'vote' : 'votes'} so far`
        : 'Thanks for voting! Live results will appear here soon.';
      meta = `<p class="poll-meta">${summary}<br><button type="button" class="link-btn" data-action="change">Change my vote</button></p>`;
    } else {
      meta = '<p class="poll-meta">Tap your prediction to see what others think.</p>';
    }

    card.innerHTML = `
      <div class="poll-inner is-entering" style="--poll-shift:${shift * 16}px">
        <p class="poll-progress">Question ${index + 1} of ${questions.length}</p>
        <div class="poll-emoji" aria-hidden="true">${q.emoji}</div>
        <h3 class="poll-question">${escapeHtml(q.question)}</h3>
        <div class="poll-options">${optionsHtml}</div>
        ${meta}
      </div>`;

    // Animate the bars from 0 to their share
    if (showResults && url) {
      setTimeout(() => {
        card.querySelectorAll('.poll-option').forEach(btn => {
          btn.querySelector('.poll-bar').style.width = `${btn.dataset.pct}%`;
        });
      }, 40);
    }

    renderNav();
  }

  function renderNav() {
    if (dotsEl) {
      dotsEl.innerHTML = questions.map((q, i) => `
        <button type="button" class="poll-dot${i === index ? ' is-current' : ''}${votes[q.id] ? ' is-voted' : ''}"
          data-index="${i}" aria-label="Question ${i + 1}"></button>`).join('');
    }
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === questions.length - 1;
  }

  function goTo(i) {
    if (i < 0 || i >= questions.length || i === index) return;
    const shift = Math.sign(i - index);
    index = i;
    changing = false;
    render(shift);
  }

  async function fetchTallies(params) {
    if (!url) return;
    try {
      const query = new URLSearchParams(params).toString();
      const res = await fetch(`${url}?${query}`);
      const data = await res.json();
      if (data && data.tallies) tallies = data.tallies;
    } catch (err) {
      console.warn('Poll fetch error:', err);
    }
  }

  async function vote(option) {
    const q = questions[index];
    const previous = votes[q.id];
    votes[q.id] = option;
    store.set('mm_poll_votes', votes);
    changing = false;

    // Optimistic update so the bars move instantly
    const counts = tallies[q.id] = { ...(tallies[q.id] || {}) };
    if (previous && counts[previous]) counts[previous] -= 1;
    counts[option] = (counts[option] || 0) + 1;
    render();

    await fetchTallies({ action: 'vote', voter: voterId, q: q.id, a: option });
    if (questions[index].id === q.id) render();

    // Move on to the next unanswered question after a moment
    const nextOpen = questions.findIndex((qq, i) => i > index && !votes[qq.id]);
    if (nextOpen !== -1) setTimeout(() => { if (questions[index].id === q.id) goTo(nextOpen); }, 1800);
  }

  card.addEventListener('click', (e) => {
    const change = e.target.closest('[data-action="change"]');
    if (change) {
      changing = true;
      render();
      return;
    }
    const btn = e.target.closest('.poll-option');
    if (!btn || btn.getAttribute('aria-disabled') === 'true') return;
    vote(btn.dataset.option);
  });
  if (prevBtn) prevBtn.addEventListener('click', () => goTo(index - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(index + 1));
  if (dotsEl) {
    dotsEl.addEventListener('click', (e) => {
      const dot = e.target.closest('.poll-dot');
      if (dot) goTo(parseInt(dot.dataset.index, 10));
    });
  }

  // Start on the first unanswered question, then load live results
  const firstOpen = questions.findIndex(q => !votes[q.id]);
  index = firstOpen === -1 ? 0 : firstOpen;
  render();
  fetchTallies({ action: 'results' }).then(() => render());
}

/**
 * Say Something Sweet: pick who it's for, tap a vibe to auto-fill a message,
 * then send privately to Google Sheets
 */
function initWishes() {
  const form = document.getElementById('wishesForm');
  const nameInput = document.getElementById('wishName');
  const messageInput = document.getElementById('wishMessage');
  const counter = document.getElementById('wishCharCount');
  const submitBtn = document.getElementById('wishSubmitBtn');
  const thanks = document.getElementById('wishThanks');
  const anotherBtn = document.getElementById('wishAnotherBtn');
  const forChips = document.querySelectorAll('#wishForChips .chip');
  const vibeChips = document.querySelectorAll('#wishVibeChips .chip');
  if (!form || !nameInput || !messageInput) return;

  const submitHtml = submitBtn ? submitBtn.innerHTML : '';
  const maxLen = parseInt(messageInput.getAttribute('maxlength'), 10) || 500;
  const templates = CONFIG.wishTemplates;
  const vibeNames = Object.keys(templates);
  const lastPick = {};
  let wishFor = 'Both';
  let vibe = '';

  function updateCounter() {
    if (counter) counter.textContent = `${messageInput.value.length} / ${maxLen}`;
  }

  forChips.forEach(chip => {
    chip.addEventListener('click', () => {
      forChips.forEach(c => {
        c.classList.toggle('is-active', c === chip);
        c.setAttribute('aria-checked', String(c === chip));
      });
      wishFor = chip.dataset.for;
    });
  });

  vibeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      let picked = chip.dataset.vibe;
      if (picked === 'surprise') picked = vibeNames[Math.floor(Math.random() * vibeNames.length)];
      vibe = picked;

      // Cycle through this vibe's lines so repeated taps give something new
      const list = templates[picked];
      const index = ((lastPick[picked] ?? -1) + 1) % list.length;
      lastPick[picked] = index;
      messageInput.value = list[index];
      updateCounter();

      vibeChips.forEach(c => c.classList.toggle('is-active', c.dataset.vibe === picked));
      messageInput.classList.remove('is-filled');
      void messageInput.offsetWidth;
      messageInput.classList.add('is-filled');
    });
  });

  messageInput.addEventListener('input', updateCounter);

  function floatHearts() {
    if (!thanks || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const hearts = ['💕', '💖', '❤️', '💗', '✨'];
    for (let i = 0; i < 14; i++) {
      const heart = document.createElement('span');
      heart.className = 'floating-heart';
      heart.textContent = hearts[i % hearts.length];
      heart.style.left = `${10 + Math.random() * 80}%`;
      heart.style.setProperty('--drift', `${Math.random() * 60 - 30}px`);
      heart.style.animationDelay = `${Math.random() * 0.8}s`;
      thanks.appendChild(heart);
      setTimeout(() => heart.remove(), 3200);
    }
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();
    if (!message) {
      messageInput.focus();
      messageInput.placeholder = 'Write a few words, or tap a vibe above for ideas!';
      return;
    }
    if (!name) {
      nameInput.classList.add('is-invalid');
      nameInput.focus();
      return;
    }
    nameInput.classList.remove('is-invalid');

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending...</span>';
    }

    const tag = `[For: ${wishFor}${vibe ? `, Vibe: ${vibe}` : ''}]`;
    const wishesUrl = (CONFIG.wishes.googleScriptUrl || '').trim();
    if (wishesUrl) {
      await postToSheet(wishesUrl, { name, message: `${tag} ${message}` });
    } else {
      // Fallback: store in the RSVP sheet, clearly marked as a wish
      await postToSheet(CONFIG.rsvp.googleScriptUrl, {
        name, guests: '0', contact: '', attending: '', message: `[Wish] ${tag} ${message}`
      });
    }

    form.hidden = true;
    if (thanks) thanks.hidden = false;
    floatHearts();
    form.reset();
    vibe = '';
    vibeChips.forEach(c => c.classList.remove('is-active'));
    updateCounter();
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = submitHtml;
    }
  });

  nameInput.addEventListener('input', () => nameInput.classList.remove('is-invalid'));

  if (anotherBtn) {
    anotherBtn.addEventListener('click', () => {
      if (thanks) thanks.hidden = true;
      form.hidden = false;
      messageInput.focus();
    });
  }
}
