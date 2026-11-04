// =====================================================================
// SECCIÓN DE VOCABULARIO — "vocabulario 3eso"
// Unidad 05: Work conditions and responsibilities
// Unidad 06: Working life, hours and pay
// =====================================================================
(function () {
    'use strict';

    const UNITS = {
        u05: '05 · Work conditions and responsibilities',
        u06: '06 · Working life, hours and pay'
    };

    // en: tal cual aparece en la ficha. es: traducción. ex: frase de ejemplo (la expresión va entre [ ]).
    // alt: respuestas alternativas aceptadas al escribir.
    // avoid: ids con significado parecido que no deben salir como distractores.
    const VOCAB = [
        // ---------- 05 Work conditions and responsibilities ----------
        { id: 'career', unit: 'u05', en: 'career', es: 'carrera profesional', ex: 'She wants a [career] in medicine.' },
        { id: 'colleague', unit: 'u05', en: 'colleague', es: 'compañero/a de trabajo', ex: 'My [colleague] helps me when I have a problem at work.' },
        { id: 'deal-with', unit: 'u05', en: 'deal with (the public)', es: 'tratar con (el público)', ex: 'Shop assistants have to [deal with the public] every day.', alt: ['deal with the public', 'deal with'] },
        { id: 'earn-salary', unit: 'u05', en: 'earn a salary', es: 'ganar un sueldo', ex: 'Doctors [earn a good salary].' },
        { id: 'employee', unit: 'u05', en: 'employee', es: 'empleado/a, trabajador/a', ex: 'The company has got 50 [employees].', avoid: ['employer'] },
        { id: 'employer', unit: 'u05', en: 'employer', es: 'empleador/a, empresario/a (quien contrata)', ex: 'My [employer] pays me at the end of the month.', avoid: ['employee'] },
        { id: 'experience', unit: 'u05', en: 'experience', es: 'experiencia', ex: 'You need two years of [experience] for this job.' },
        { id: 'high-pressure', unit: 'u05', en: 'high-pressure', es: 'de mucha presión, estresante', ex: 'Being a firefighter is a [high-pressure] job.', alt: ['high pressure'] },
        { id: 'in-charge-of', unit: 'u05', en: 'in charge of', es: 'a cargo de, encargado/a de', ex: 'Mrs Smith is [in charge of] the sales department.', avoid: ['responsible-for'] },
        { id: 'indoors', unit: 'u05', en: 'indoors', es: 'en interior, bajo techo', ex: 'Office workers work [indoors] all day.', avoid: ['outdoors'] },
        { id: 'conditions', unit: 'u05', en: 'in good/bad/dangerous conditions', es: 'en buenas/malas/peligrosas condiciones', ex: 'Miners often work [in dangerous conditions].', alt: ['in good conditions', 'in bad conditions', 'in dangerous conditions'] },
        { id: 'internship', unit: 'u05', en: 'internship', es: 'prácticas (en una empresa)', ex: 'He did an [internship] at a bank last summer.', avoid: ['training'] },
        { id: 'manual', unit: 'u05', en: 'manual', es: 'manual (trabajo físico, con las manos)', ex: 'Builders do [manual] work.', avoid: ['skilled'] },
        { id: 'outdoors', unit: 'u05', en: 'outdoors', es: 'al aire libre', ex: 'Farmers work [outdoors], even when it rains.', avoid: ['indoors'] },
        { id: 'permanent', unit: 'u05', en: 'permanent', es: 'fijo, indefinido', ex: 'After a year she got a [permanent] contract.', avoid: ['secure', 'temporary'] },
        { id: 'promotion', unit: 'u05', en: 'promotion', es: 'ascenso', ex: 'He got a [promotion] and now he is the manager.' },
        { id: 'qualifications', unit: 'u05', en: 'qualifications', es: 'títulos, cualificaciones', ex: 'You need good [qualifications] to be a teacher.', avoid: ['skilled'] },
        { id: 'responsible-for', unit: 'u05', en: 'responsible for', es: 'responsable de', ex: 'Pilots are [responsible for] the passengers\u2019 safety.', avoid: ['in-charge-of'] },
        { id: 'secure', unit: 'u05', en: 'secure', es: 'estable, seguro (empleo)', ex: 'A job in the government is very [secure].', avoid: ['permanent'] },
        { id: 'self-employed', unit: 'u05', en: 'self-employed', es: 'autónomo/a, que trabaja por cuenta propia', ex: 'My dad is [self-employed]: he has his own business.', alt: ['self employed'] },
        { id: 'skilled', unit: 'u05', en: 'skilled', es: 'cualificado/a, especializado/a', ex: 'Electricians are [skilled] workers.', avoid: ['qualifications', 'manual'] },
        { id: 'temporary', unit: 'u05', en: 'temporary', es: 'temporal', ex: 'I have a [temporary] job for the summer.', avoid: ['permanent'] },
        { id: 'training', unit: 'u05', en: 'training', es: 'formación', ex: 'New employees get two weeks of [training].', avoid: ['internship'] },

        // ---------- 06 Working life, hours and pay ----------
        { id: 'apply', unit: 'u06', en: 'apply for a job', es: 'solicitar un trabajo, presentarse a un puesto', ex: 'I\u2019m going to [apply for a job] at the supermarket.', avoid: ['look-for', 'job-hunting'] },
        { id: 'redundant', unit: 'u06', en: 'be made redundant', es: 'ser despedido/a por reducción de plantilla', ex: 'The factory closed and 200 workers [were made redundant].', avoid: ['sacked', 'unemployed', 'out-of-work'] },
        { id: 'offered', unit: 'u06', en: 'be offered a job', es: 'recibir una oferta de trabajo', ex: 'She [was offered a job] in London.' },
        { id: 'sacked', unit: 'u06', en: 'be sacked/fired', es: 'ser despedido/a, ser echado/a', ex: 'He [was sacked] because he was always late.', alt: ['be sacked', 'be fired', 'be sacked or fired', 'be fired/sacked'], avoid: ['redundant', 'unemployed', 'out-of-work'] },
        { id: 'paid', unit: 'u06', en: 'be well/badly paid', es: 'estar bien/mal pagado/a', ex: 'Footballers [are well paid].', alt: ['be well paid', 'be badly paid'], avoid: ['minimum-wage'] },
        { id: 'unemployed', unit: 'u06', en: 'become unemployed', es: 'quedarse en paro, quedarse sin trabajo', ex: 'Many people [became unemployed] during the crisis.', avoid: ['out-of-work', 'redundant', 'sacked'] },
        { id: 'shift-work', unit: 'u06', en: 'do shift work', es: 'trabajar por turnos', ex: 'Nurses often [do shift work].', avoid: ['nights'] },
        { id: 'job-hunting', unit: 'u06', en: 'go job hunting', es: 'salir a buscar empleo (ir de búsqueda de empleo)', ex: 'After university, I\u2019ll [go job hunting].', alt: ['go job-hunting'], avoid: ['look-for', 'apply'] },
        { id: 'look-for', unit: 'u06', en: 'look for a job', es: 'buscar trabajo', ex: 'My brother is [looking for a job].', avoid: ['job-hunting', 'apply'] },
        { id: 'flexitime', unit: 'u06', en: 'on flexitime', es: 'con horario flexible', ex: 'I work [on flexitime], so I can start at 8 or at 10.' },
        { id: 'minimum-wage', unit: 'u06', en: 'on the minimum wage', es: 'cobrando el salario mínimo', ex: 'Many young people work [on the minimum wage].', avoid: ['paid'] },
        { id: 'out-of-work', unit: 'u06', en: 'out of work', es: 'sin trabajo, en paro', ex: 'He has been [out of work] for six months.', avoid: ['unemployed', 'redundant', 'sacked'] },
        { id: 'resign', unit: 'u06', en: 'resign', es: 'dimitir, renunciar (dejar el puesto voluntariamente)', ex: 'She didn\u2019t like her boss, so she [resigned].', avoid: ['retire'] },
        { id: 'retire', unit: 'u06', en: 'retire', es: 'jubilarse', ex: 'My grandfather [retired] when he was 65.', avoid: ['resign'] },
        { id: 'sign-contract', unit: 'u06', en: 'sign a contract', es: 'firmar un contrato', ex: 'You have to [sign a contract] before you start work.' },
        { id: 'nine-to-five', unit: 'u06', en: 'work from nine to five', es: 'trabajar de nueve a cinco (horario de oficina)', ex: 'Office workers usually [work from nine to five].', alt: ['work from 9 to 5'], avoid: ['full-time'] },
        { id: 'full-time', unit: 'u06', en: 'work full-time', es: 'trabajar a tiempo completo', ex: 'My mum [works full-time], 40 hours a week.', alt: ['work full time'], avoid: ['part-time', 'nine-to-five', 'long-hours'] },
        { id: 'long-hours', unit: 'u06', en: 'work long hours', es: 'trabajar muchas horas', ex: 'Doctors often [work long hours].', avoid: ['overtime', 'full-time'] },
        { id: 'overtime', unit: 'u06', en: 'work overtime', es: 'hacer horas extra', ex: 'I had to [work overtime] to finish the project.', avoid: ['long-hours'] },
        { id: 'nights', unit: 'u06', en: 'work nights', es: 'trabajar de noche', ex: 'Security guards often [work nights].', avoid: ['shift-work'] },
        { id: 'part-time', unit: 'u06', en: 'work part-time', es: 'trabajar a tiempo parcial', ex: 'Students often [work part-time] at weekends.', alt: ['work part time'], avoid: ['full-time'] }
    ];

    const MODES = {
        study:   { label: 'Estudiar', icon: 'fa-book', desc: 'Repasa la lista completa. Pulsa una tarjeta para ver (u ocultar) la traducción.' },
        en_es:   { label: 'Test EN → ES', icon: 'fa-language', desc: 'Lee la expresión en inglés y elige su significado en español.' },
        es_en:   { label: 'Test ES → EN', icon: 'fa-arrow-right-arrow-left', desc: 'Lee el significado en español y elige la expresión en inglés.' },
        gap:     { label: 'Completa la frase', icon: 'fa-puzzle-piece', desc: 'Elige la expresión que completa correctamente cada frase.' },
        write:   { label: 'Escríbelo', icon: 'fa-keyboard', desc: 'Escribe la expresión en inglés a partir de su significado en español.' },
        match:   { label: 'Emparejar', icon: 'fa-link', desc: 'Une cada expresión en inglés con su traducción. ¡Intenta no fallar!' }
    };

    const MISTAKES_KEY = 'vocab3eso_mistakes';
    const ROUND_SIZE = 10;

    let state = {
        unit: 'all',
        mode: 'study',
        hideSpanish: false,
        quiz: null,
        match: null
    };

    // ---------------- Utilidades ----------------
    function esc(s) {
        return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    }
    function shuffle(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    function normalize(s) {
        return String(s).toLowerCase()
            .replace(/[\u2019']/g, '')
            .replace(/[().,!?¿¡]/g, ' ')
            .replace(/-/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }
    function byId(id) { return VOCAB.find(v => v.id === id); }
    function pool() { return state.unit === 'all' ? VOCAB : VOCAB.filter(v => v.unit === state.unit); }
    function speak(text) { if (typeof speakText === 'function') speakText(text); }

    function getMistakes() {
        try { return JSON.parse(localStorage.getItem(MISTAKES_KEY)) || []; } catch (e) { return []; }
    }
    function setMistakes(list) {
        try { localStorage.setItem(MISTAKES_KEY, JSON.stringify([...new Set(list)])); } catch (e) { /* sin almacenamiento */ }
        updateMistakesBadge();
    }
    function addMistake(id) { setMistakes([...getMistakes(), id]); }
    function removeMistake(id) { setMistakes(getMistakes().filter(x => x !== id)); }

    function distractors(item, n) {
        const avoid = new Set([item.id, ...(item.avoid || [])]);
        // Preferimos distractores de la misma unidad; si faltan, de cualquier unidad.
        const same = shuffle(VOCAB.filter(v => v.unit === item.unit && !avoid.has(v.id)));
        const other = shuffle(VOCAB.filter(v => v.unit !== item.unit && !avoid.has(v.id)));
        return [...same, ...other].slice(0, n);
    }

    function sentenceParts(item) {
        const m = item.ex.match(/^(.*)\[(.*)\](.*)$/);
        return { before: m[1], answer: m[2], after: m[3] };
    }

    // ---------------- Render principal ----------------
    function render() {
        const root = document.getElementById('vocab-root');
        if (!root) return;

        // Botones de unidad
        document.querySelectorAll('[data-vocab-unit]').forEach(b => {
            const on = b.dataset.vocabUnit === state.unit;
            b.className = 'px-3 py-1.5 rounded-lg text-xs font-bold border transition ' +
                (on ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200' : 'bg-white text-slate-600 border-slate-200 hover:bg-indigo-50');
        });
        // Botones de modo
        document.querySelectorAll('[data-vocab-mode]').forEach(b => {
            const on = b.dataset.vocabMode === state.mode;
            b.className = 'px-3 py-2 rounded-xl text-xs sm:text-sm font-bold border-2 transition flex items-center gap-2 ' +
                (on ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-indigo-50/60');
        });
        document.getElementById('vocab-count').innerText = `Total: ${pool().length} expresiones`;
        document.getElementById('vocab-mode-desc').innerText = MODES[state.mode].desc;

        if (state.mode === 'study') return renderStudy(root);
        if (state.mode === 'match') return renderMatch(root);
        return renderQuiz(root);
    }

    // ---------------- Estudiar ----------------
    function renderStudy(root) {
        const groups = state.unit === 'all' ? Object.keys(UNITS) : [state.unit];
        let html = `
            <div class="flex flex-wrap items-center justify-between gap-3">
                <label class="flex items-center gap-2 text-sm font-semibold text-slate-700 cursor-pointer select-none">
                    <input type="checkbox" id="vocab-hide-es" class="w-4 h-4 accent-indigo-600" ${state.hideSpanish ? 'checked' : ''}>
                    Ocultar traducciones (modo memoria)
                </label>
                <button data-vocab-action="speak-list" class="text-xs bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 border border-indigo-200">
                    <i class="fa-solid fa-volume-high"></i> Escuchar Lista
                </button>
            </div>`;
        groups.forEach(u => {
            const items = VOCAB.filter(v => v.unit === u);
            html += `
            <div class="space-y-3">
                <h3 class="text-lg font-extrabold text-indigo-900 flex items-center gap-2 pt-2">
                    <span class="bg-rose-600 text-white text-xs px-2 py-1 rounded-md">${u.slice(1)}</span> ${esc(UNITS[u].split('· ')[1])}
                    <span class="text-xs font-semibold text-slate-400">(${items.length})</span>
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                ${items.map(v => `
                    <div data-vocab-card="${v.id}" class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition cursor-pointer">
                        <div class="flex items-start justify-between gap-2">
                            <p class="text-base font-extrabold text-slate-900">${esc(v.en)}</p>
                            <button data-vocab-speak="${v.id}" class="shrink-0 w-7 h-7 rounded-full bg-slate-100 hover:bg-indigo-100 text-slate-600 hover:text-indigo-600 flex items-center justify-center transition" title="Escuchar Pronunciación">
                                <i class="fa-solid fa-volume-high text-[10px]"></i>
                            </button>
                        </div>
                        <div class="vocab-es mt-2 ${state.hideSpanish ? 'hidden' : ''}">
                            <p class="text-sm font-bold text-indigo-700">${esc(v.es)}</p>
                            <p class="text-xs italic text-slate-500 mt-1">"${esc(v.ex.replace(/[\[\]]/g, ''))}"</p>
                        </div>
                        <p class="vocab-es-placeholder mt-2 text-xs font-semibold text-slate-400 ${state.hideSpanish ? '' : 'hidden'}"><i class="fa-solid fa-eye mr-1"></i> Toca para ver la traducción</p>
                    </div>`).join('')}
                </div>
            </div>`;
        });
        root.innerHTML = html;
    }

    // ---------------- Tests (EN→ES, ES→EN, frase, escribir) ----------------
    function buildQuiz(mode, items) {
        const questions = shuffle(items).map(item => {
            if (mode === 'write') return { item };
            const opts = shuffle([item, ...distractors(item, 3)]);
            return { item, options: opts.map(o => o.id), correct: opts.findIndex(o => o.id === item.id) };
        });
        return { mode, questions, index: 0, answers: new Array(questions.length).fill(null), finished: false, reviewOnly: false };
    }

    function startQuiz(onlyMistakes) {
        let items;
        if (onlyMistakes) {
            const ids = getMistakes();
            items = VOCAB.filter(v => ids.includes(v.id));
        } else {
            items = shuffle(pool()).slice(0, state.roundAll ? pool().length : ROUND_SIZE);
        }
        if (!items.length) { state.quiz = null; render(); return; }
        state.quiz = buildQuiz(state.mode, items);
        state.quiz.reviewOnly = !!onlyMistakes;
        render();
    }

    function optionLabel(mode, id) {
        const v = byId(id);
        return mode === 'en_es' ? v.es : v.en;
    }

    function renderQuiz(root) {
        const q = state.quiz;
        if (!q || q.mode !== state.mode) {
            const nMistakes = getMistakes().length;
            root.innerHTML = `
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center max-w-2xl mx-auto space-y-5">
                    <div class="w-16 h-16 mx-auto rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-2xl"><i class="fa-solid ${MODES[state.mode].icon}"></i></div>
                    <div>
                        <h3 class="text-2xl font-extrabold text-slate-900">${MODES[state.mode].label}</h3>
                        <p class="text-sm text-slate-600 mt-1">${MODES[state.mode].desc}</p>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-3 justify-center">
                        <button data-vocab-action="start" class="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition shadow-md shadow-indigo-200">
                            <i class="fa-solid fa-play mr-1"></i> Empezar (${Math.min(ROUND_SIZE, pool().length)} preguntas)
                        </button>
                        <button data-vocab-action="start-all" class="px-6 py-3 bg-white border border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-100 transition">
                            Todas (${pool().length})
                        </button>
                    </div>
                    <button data-vocab-action="start-mistakes" ${nMistakes ? '' : 'disabled'} class="text-sm font-bold text-rose-600 hover:text-rose-700 disabled:text-slate-300 disabled:cursor-not-allowed">
                        <i class="fa-solid fa-rotate-left mr-1"></i> Practicar mis fallos (${nMistakes})
                    </button>
                </div>`;
            return;
        }
        if (q.finished) return renderQuizResults(root);

        const cur = q.questions[q.index];
        const item = cur.item;
        const answer = q.answers[q.index];
        const answered = answer !== null;
        const total = q.questions.length;

        let prompt = '', badge = '';
        if (q.mode === 'en_es') { badge = '¿Qué significa?'; prompt = `<span class="text-indigo-700">${esc(item.en)}</span>`; }
        if (q.mode === 'es_en') { badge = '¿Cómo se dice en inglés?'; prompt = esc(item.es); }
        if (q.mode === 'write') { badge = 'Escribe en inglés'; prompt = esc(item.es); }
        if (q.mode === 'gap') {
            badge = 'Completa la frase';
            const p = sentenceParts(item);
            prompt = `${esc(p.before)}<span class="inline-block min-w-[6rem] border-b-2 border-indigo-400 mx-1">&nbsp;</span>${esc(p.after)}`;
        }

        let body = '';
        if (q.mode === 'write') {
            const isOk = answered && answer.ok;
            body = `
                <form data-vocab-form class="space-y-3">
                    <input id="vocab-write-input" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" ${answered ? 'disabled' : ''}
                        value="${answered ? esc(answer.text) : ''}" placeholder="Escribe aquí la expresión..."
                        class="w-full p-4 rounded-xl border-2 text-base font-semibold outline-none transition ${answered ? (isOk ? 'bg-emerald-50 border-emerald-400 text-emerald-900' : 'bg-rose-50 border-rose-300 text-rose-900') : 'border-slate-200 focus:border-indigo-500'}">
                    ${answered ? '' : `
                    <div class="flex flex-wrap gap-2">
                        <button type="submit" class="px-5 py-2.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition shadow-md shadow-indigo-200 text-sm">Comprobar</button>
                        <button type="button" data-vocab-action="hint" class="px-4 py-2.5 bg-amber-50 border border-amber-200 text-amber-800 font-semibold rounded-xl hover:bg-amber-100 transition text-sm"><i class="fa-solid fa-lightbulb mr-1"></i> Pista</button>
                        <button type="button" data-vocab-action="giveup" class="px-4 py-2.5 bg-white border border-slate-300 text-slate-600 font-semibold rounded-xl hover:bg-slate-100 transition text-sm">No lo sé</button>
                    </div>
                    <p id="vocab-hint" class="text-sm text-amber-800 hidden"></p>`}
                </form>`;
        } else {
            body = `<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">` + cur.options.map((id, idx) => {
                let style = 'bg-slate-50 hover:bg-indigo-50/60 border-slate-200 text-slate-800';
                let icon = `<span class="w-6 h-6 shrink-0 rounded-full border border-slate-300 flex items-center justify-center text-xs font-bold text-slate-500 mr-3">${String.fromCharCode(65 + idx)}</span>`;
                if (answered) {
                    if (idx === cur.correct) {
                        style = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold';
                        icon = '<i class="fa-solid fa-circle-check text-emerald-600 text-lg mr-3"></i>';
                    } else if (idx === answer) {
                        style = 'bg-rose-50 border-rose-300 text-rose-900';
                        icon = '<i class="fa-solid fa-circle-xmark text-rose-500 text-lg mr-3"></i>';
                    } else {
                        style = 'bg-slate-50 border-slate-200 text-slate-400';
                    }
                }
                return `<button data-vocab-option="${idx}" ${answered ? 'disabled' : ''} class="w-full text-left p-4 rounded-xl border-2 transition-all flex items-center ${style}">${icon}<span class="text-sm font-semibold">${esc(optionLabel(q.mode, id))}</span></button>`;
            }).join('') + `</div>`;
        }

        let feedback = '';
        if (answered) {
            const ok = q.mode === 'write' ? answer.ok : answer === cur.correct;
            feedback = `
                <div class="p-4 rounded-xl border ${ok ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900'}">
                    <div class="flex items-start gap-3">
                        <i class="fa-solid ${ok ? 'fa-circle-check text-emerald-600' : 'fa-circle-exclamation text-rose-600'} mt-0.5 text-lg"></i>
                        <div class="space-y-1">
                            <h4 class="font-bold text-sm">${ok ? '¡Excelente! Respuesta Correcta' : 'Respuesta Incorrecta'}</h4>
                            <p class="text-sm text-slate-700"><strong>${esc(item.en)}</strong> = ${esc(item.es)}
                                <button data-vocab-speak="${item.id}" class="ml-1 text-indigo-600 hover:text-indigo-800" title="Escuchar"><i class="fa-solid fa-volume-high text-xs"></i></button></p>
                            <p class="text-xs italic text-slate-500">"${esc(item.ex.replace(/[\[\]]/g, ''))}"</p>
                        </div>
                    </div>
                </div>`;
        }

        const score = q.questions.reduce((s, qq, i) => s + (isCorrect(q, i) ? 1 : 0), 0);
        root.innerHTML = `
            <div class="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 space-y-2">
                <div class="flex items-center justify-between text-sm font-bold">
                    <span class="text-slate-600">${q.reviewOnly ? '<i class="fa-solid fa-rotate-left text-rose-500 mr-1"></i> Repaso de fallos · ' : ''}Pregunta ${q.index + 1} de ${total}</span>
                    <span class="text-indigo-600"><i class="fa-solid fa-star text-amber-400 mr-1"></i>${score} aciertos</span>
                </div>
                <div class="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div class="bg-indigo-600 h-full transition-all duration-300" style="width:${((q.index + 1) / total) * 100}%"></div>
                </div>
            </div>
            <div class="bg-white rounded-2xl shadow-md border border-slate-200 p-6 sm:p-8 space-y-6">
                <span class="text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">${badge}</span>
                <h3 class="text-xl sm:text-2xl font-bold text-slate-800 leading-relaxed">${prompt}</h3>
                ${body}
                ${feedback}
            </div>
            <div class="flex items-center justify-between">
                <button data-vocab-action="prev" ${q.index === 0 ? 'disabled' : ''} class="px-4 py-2 text-sm font-semibold text-slate-600 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition">
                    <i class="fa-solid fa-arrow-left"></i> Anterior
                </button>
                <button data-vocab-action="next" ${answered ? '' : 'disabled'} class="px-5 py-2 text-sm font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-md shadow-indigo-200 flex items-center gap-1.5">
                    ${q.index === total - 1 ? '<span>Ver Resultado</span> <i class="fa-solid fa-check"></i>' : '<span>Siguiente</span> <i class="fa-solid fa-arrow-right"></i>'}
                </button>
            </div>`;

        if (q.mode === 'write' && !answered) {
            const inp = document.getElementById('vocab-write-input');
            if (inp) inp.focus();
        }
    }

    function isCorrect(q, i) {
        const a = q.answers[i];
        if (a === null) return false;
        return q.mode === 'write' ? a.ok : a === q.questions[i].correct;
    }

    function checkWritten(item, text) {
        const t = normalize(text);
        if (!t) return false;
        const accepted = [item.en, ...(item.alt || [])].map(normalize);
        return accepted.includes(t);
    }

    function recordAnswer(value) {
        const q = state.quiz;
        q.answers[q.index] = value;
        const item = q.questions[q.index].item;
        if (isCorrect(q, q.index)) {
            if (q.reviewOnly) removeMistake(item.id);
        } else {
            addMistake(item.id);
        }
        render();
    }

    function renderQuizResults(root) {
        const q = state.quiz;
        const total = q.questions.length;
        const score = q.questions.reduce((s, qq, i) => s + (isCorrect(q, i) ? 1 : 0), 0);
        const pct = Math.round((score / total) * 100);
        const wrong = q.questions.filter((qq, i) => !isCorrect(q, i)).map(qq => qq.item);
        let headline = 'Necesitas Más Repaso 📚', advice = 'Vuelve a la sección <strong>Estudiar</strong>, repasa la lista con las traducciones ocultas y después practica tus fallos.';
        if (pct === 100) { headline = '¡Perfecto! 🏆'; advice = '¡Lo dominas! Prueba otro tipo de ejercicio o haz el test con <strong>todas</strong> las expresiones.'; }
        else if (pct >= 70) { headline = '¡Muy bien! 🎉'; advice = 'Tienes una buena base. Practica los fallos que te quedan para memorizarlos del todo.'; }
        else if (pct >= 50) { headline = 'Vas por buen camino 💪'; advice = 'Repasa las expresiones que has fallado y vuelve a intentarlo.'; }

        root.innerHTML = `
            <div class="bg-white p-8 rounded-2xl shadow-md border border-slate-200 text-center space-y-4 max-w-2xl mx-auto">
                <div class="text-5xl font-black text-indigo-600">${score}<span class="text-2xl text-slate-400">/${total}</span></div>
                <h3 class="text-2xl font-extrabold text-slate-900">${headline}</h3>
                <p class="text-sm text-slate-600">${pct}% de aciertos. ${advice}</p>
                <div class="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <button data-vocab-action="restart" class="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition shadow-md shadow-indigo-200"><i class="fa-solid fa-rotate mr-1"></i> Repetir con otras preguntas</button>
                    ${wrong.length ? `<button data-vocab-action="retry-wrong" class="px-6 py-3 bg-rose-50 border border-rose-200 text-rose-700 font-bold rounded-xl hover:bg-rose-100 transition"><i class="fa-solid fa-rotate-left mr-1"></i> Practicar estos fallos (${wrong.length})</button>` : ''}
                </div>
            </div>
            ${wrong.length ? `
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-3">
                <h4 class="font-bold text-slate-800"><i class="fa-solid fa-triangle-exclamation text-rose-500 mr-1"></i> Expresiones para repasar</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    ${wrong.map(v => `<div class="p-3 rounded-xl bg-rose-50/60 border border-rose-100 text-sm"><strong class="text-slate-900">${esc(v.en)}</strong> <span class="text-slate-500">=</span> <span class="text-indigo-700 font-semibold">${esc(v.es)}</span></div>`).join('')}
                </div>
            </div>` : ''}`;
        state.lastWrong = wrong.map(v => v.id);
    }

    // ---------------- Emparejar ----------------
    function startMatch() {
        const items = shuffle(pool()).slice(0, 6);
        state.match = {
            items: items.map(v => v.id),
            left: shuffle(items.map(v => v.id)),
            right: shuffle(items.map(v => v.id)),
            done: [],
            selLeft: null,
            selRight: null,
            errors: 0,
            flash: null
        };
        render();
    }

    function renderMatch(root) {
        const m = state.match;
        if (!m) { startMatch(); return; }
        const finished = m.done.length === m.items.length;
        const cell = (side, id) => {
            const v = byId(id);
            const done = m.done.includes(id);
            const sel = (side === 'L' ? m.selLeft : m.selRight) === id;
            const bad = m.flash && m.flash[side] === id;
            let style = 'bg-slate-50 hover:bg-indigo-50/60 border-slate-200 text-slate-800';
            if (done) style = 'bg-emerald-50 border-emerald-300 text-emerald-700 opacity-60';
            else if (bad) style = 'bg-rose-50 border-rose-400 text-rose-800';
            else if (sel) style = 'bg-indigo-100 border-indigo-500 text-indigo-900';
            return `<button data-vocab-match="${side}:${id}" ${done ? 'disabled' : ''} class="w-full min-h-[3.5rem] text-left p-3 rounded-xl border-2 transition text-sm font-semibold ${style}">${done ? '<i class="fa-solid fa-check mr-1"></i>' : ''}${esc(side === 'L' ? v.en : v.es)}</button>`;
        };
        root.innerHTML = `
            <div class="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-between text-sm font-bold">
                <span class="text-slate-600">Parejas: ${m.done.length} / ${m.items.length}</span>
                <span class="text-rose-500"><i class="fa-solid fa-xmark mr-1"></i>${m.errors} errores</span>
            </div>
            ${finished ? `
            <div class="bg-white p-8 rounded-2xl shadow-md border border-slate-200 text-center space-y-4">
                <h3 class="text-2xl font-extrabold text-slate-900">${m.errors === 0 ? '¡Perfecto, sin errores! 🏆' : '¡Ronda completada! 🎉'}</h3>
                <p class="text-sm text-slate-600">Has emparejado ${m.items.length} expresiones con ${m.errors} error${m.errors === 1 ? '' : 'es'}.</p>
                <button data-vocab-action="match-new" class="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition shadow-md shadow-indigo-200"><i class="fa-solid fa-shuffle mr-1"></i> Nueva ronda</button>
            </div>` : `
            <div class="bg-white rounded-2xl shadow-md border border-slate-200 p-4 sm:p-6">
                <div class="grid grid-cols-2 gap-3 sm:gap-6">
                    <div class="space-y-3"><p class="text-xs font-bold text-indigo-600 uppercase tracking-wider">Inglés</p>${m.left.map(id => cell('L', id)).join('')}</div>
                    <div class="space-y-3"><p class="text-xs font-bold text-indigo-600 uppercase tracking-wider">Español</p>${m.right.map(id => cell('R', id)).join('')}</div>
                </div>
            </div>
            <div class="text-right"><button data-vocab-action="match-new" class="px-4 py-2 text-sm font-semibold text-slate-600 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 transition"><i class="fa-solid fa-shuffle mr-1"></i> Otras expresiones</button></div>`}`;
    }

    function pickMatch(side, id) {
        const m = state.match;
        if (m.flash) return;
        if (side === 'L') { m.selLeft = id; speak(byId(id).en); } else m.selRight = id;
        if (m.selLeft && m.selRight) {
            if (m.selLeft === m.selRight) {
                m.done.push(m.selLeft);
                removeMistake(m.selLeft);
                m.selLeft = m.selRight = null;
            } else {
                m.errors++;
                addMistake(m.selLeft);
                m.flash = { L: m.selLeft, R: m.selRight };
                m.selLeft = m.selRight = null;
                setTimeout(() => { m.flash = null; render(); }, 700);
            }
        }
        render();
    }

    function updateMistakesBadge() {
        const el = document.getElementById('vocab-mistakes-count');
        if (el) el.innerText = getMistakes().length;
    }

    // ---------------- Eventos ----------------
    function onClick(e) {
        const t = e.target.closest('[data-vocab-unit],[data-vocab-mode],[data-vocab-action],[data-vocab-option],[data-vocab-speak],[data-vocab-card],[data-vocab-match]');
        if (!t || !document.getElementById('section-vocab').contains(t)) return;

        if (t.dataset.vocabSpeak) { e.stopPropagation(); speak(byId(t.dataset.vocabSpeak).en); return; }
        if (t.dataset.vocabUnit) { state.unit = t.dataset.vocabUnit; state.quiz = null; state.match = null; render(); return; }
        if (t.dataset.vocabMode) { state.mode = t.dataset.vocabMode; state.quiz = null; state.match = null; render(); return; }
        if (t.dataset.vocabCard) {
            t.querySelector('.vocab-es').classList.toggle('hidden');
            t.querySelector('.vocab-es-placeholder').classList.toggle('hidden');
            return;
        }
        if (t.dataset.vocabOption !== undefined) {
            if (state.quiz && state.quiz.answers[state.quiz.index] === null) recordAnswer(Number(t.dataset.vocabOption));
            return;
        }
        if (t.dataset.vocabMatch) {
            const [side, id] = t.dataset.vocabMatch.split(':');
            pickMatch(side, id);
            return;
        }
        const q = state.quiz;
        switch (t.dataset.vocabAction) {
            case 'speak-list': speak('Vocabulary: ' + pool().map(v => v.en.replace(/\//g, ' or ')).join(', ')); break;
            case 'start': state.roundAll = false; startQuiz(false); break;
            case 'start-all': state.roundAll = true; startQuiz(false); break;
            case 'start-mistakes': startQuiz(true); break;
            case 'restart': startQuiz(false); break;
            case 'retry-wrong': {
                const items = VOCAB.filter(v => (state.lastWrong || []).includes(v.id));
                state.quiz = buildQuiz(state.mode, items);
                state.quiz.reviewOnly = true;
                render();
                break;
            }
            case 'prev': if (q && q.index > 0) { q.index--; render(); } break;
            case 'next':
                if (!q) break;
                if (q.index < q.questions.length - 1) q.index++; else q.finished = true;
                render();
                break;
            case 'hint': {
                const item = q.questions[q.index].item;
                const words = item.en.split(' ');
                const hint = words.map((w, i) => i === 0 ? w : w.replace(/[a-zA-Z]/g, '_')).join(' ');
                const el = document.getElementById('vocab-hint');
                el.innerHTML = `<i class="fa-solid fa-lightbulb mr-1"></i> Empieza así: <strong class="font-mono">${esc(hint)}</strong>`;
                el.classList.remove('hidden');
                break;
            }
            case 'giveup': recordAnswer({ text: '', ok: false }); break;
            case 'match-new': startMatch(); break;
        }
    }

    function onSubmit(e) {
        const form = e.target.closest('[data-vocab-form]');
        if (!form) return;
        e.preventDefault();
        const q = state.quiz;
        if (!q || q.answers[q.index] !== null) return;
        const text = document.getElementById('vocab-write-input').value;
        if (!text.trim()) return;
        recordAnswer({ text, ok: checkWritten(q.questions[q.index].item, text) });
    }

    function onChange(e) {
        if (e.target.id === 'vocab-hide-es') { state.hideSpanish = e.target.checked; render(); }
    }

    function onKey(e) {
        const sec = document.getElementById('section-vocab');
        if (!sec || sec.classList.contains('hidden') || !state.quiz || state.quiz.finished || state.mode === 'study' || state.mode === 'match') return;
        if (e.key === 'Enter' && state.quiz.answers[state.quiz.index] !== null) {
            e.preventDefault();
            const btn = sec.querySelector('[data-vocab-action="next"]');
            if (btn) btn.click();
        }
    }

    function init() {
        const sec = document.getElementById('section-vocab');
        if (!sec) return;
        sec.addEventListener('click', onClick);
        sec.addEventListener('submit', onSubmit);
        sec.addEventListener('change', onChange);
        document.addEventListener('keydown', onKey);
        updateMistakesBadge();
        render();
    }

    // Exponer para depuración / pruebas
    window.VOCAB_3ESO = VOCAB;
    window.vocabCheckWritten = checkWritten;

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
