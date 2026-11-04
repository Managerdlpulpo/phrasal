// =====================================================================
// SECCIÓN DE VOCABULARIO — "vocabulario 3eso" (nivel 3º ESO, A2+/B1)
// Unidad 05: Work conditions and responsibilities
// Unidad 06: Working life, hours and pay
// =====================================================================
(function () {
    'use strict';

    const UNITS = {
        u05: '05 · Work conditions and responsibilities',
        u06: '06 · Working life, hours and pay'
    };

    // en:   expresión tal cual aparece en la ficha
    // alt:  otras formas base aceptadas (modo Definiciones)
    // es:   significado en español
    // def:  definición en inglés (estilo diccionario para estudiantes)
    // g:    frases para completar. {respuesta|variante|...} marca el hueco con TODAS las formas correctas en ese contexto
    // t:    transformación: [frase original, frase reescrita con hueco]
    const VOCAB = [
        // ---------- 05 Work conditions and responsibilities ----------
        { id: 'career', unit: 'u05', en: 'career', es: 'carrera profesional',
          def: 'the series of jobs that you do during your working life, usually in the same type of work',
          g: ['She wants a {career} in medicine, so she\'s going to study to become a doctor.',
              'After twenty years as a journalist, he decided to change {careers|career} and became a teacher.'],
          t: ['He has worked in banking all his professional life.', 'He has had a long {career} in banking.'] },
        { id: 'colleague', unit: 'u05', en: 'colleague', es: 'compañero/a de trabajo',
          def: 'a person that you work with',
          g: ['I get on well with my {colleagues}; we often have lunch together.',
              'One of my {colleagues} is ill, so I\'m doing her work today.'],
          t: ['Anna and I work in the same office.', 'Anna is my {colleague}.'] },
        { id: 'deal-with', unit: 'u05', en: 'deal with (the public)', alt: ['deal with the public', 'deal with'], es: 'tratar con (el público)',
          def: 'to talk to and help the customers or people who come to a shop, office, etc.',
          g: ['Shop assistants have to {deal with the public} every day, so they need to be patient and polite.',
              'I\'m a receptionist, so I {deal with the public} all day.'],
          t: ['In her job, she talks to customers and helps them all day.', 'In her job, she {deals with the public} all day.'] },
        { id: 'earn-salary', unit: 'u05', en: 'earn a salary', es: 'ganar un sueldo',
          def: 'to receive a fixed amount of money every month or year for the work you do',
          g: ['When I finish university, I want to get a good job and {earn a salary}.',
              'My sister {earns a salary} of 2,000 euros a month.'],
          t: ['The company pays her 30,000 euros a year for her work.', 'She {earns a salary} of 30,000 euros a year.'] },
        { id: 'employee', unit: 'u05', en: 'employee', es: 'empleado/a, trabajador/a',
          def: 'a person who is paid to work for a company or for another person',
          g: ['The company is very big: it has more than 2,000 {employees}.',
              'As a new {employee}, you will get two weeks of training.'],
          t: ['Mark works for a big supermarket chain.', 'Mark is an {employee} of a big supermarket chain.'] },
        { id: 'employer', unit: 'u05', en: 'employer', es: 'empleador/a, empresa o persona que contrata',
          def: 'a person or company that pays people to work for them',
          g: ['My {employer} pays me at the end of every month.',
              'Your {employer} must give you a contract when you start work.'],
          t: ['Mr Brown has given me a job in his shop and he pays me every month.', 'Mr Brown is my {employer}.'] },
        { id: 'experience', unit: 'u05', en: 'experience', es: 'experiencia',
          def: 'the knowledge and skills that you get by doing a job for some time',
          g: ['Sorry, we can\'t give you the job because you don\'t have enough {experience}.',
              'She has ten years of {experience} as a nurse.'],
          t: ['He has never worked in a restaurant before.', 'He has no {experience} of working in a restaurant.'] },
        { id: 'high-pressure', unit: 'u05', en: 'high-pressure', es: 'de mucha presión, estresante',
          def: '(of a job) very stressful, with a lot to do and not much time to do it',
          g: ['Being an air traffic controller is a {high-pressure} job.',
              'He left his {high-pressure} job in the city and opened a small café by the sea.'],
          t: ['Her job is very stressful: she always has too much to do and too little time.', 'She has a very {high-pressure} job.'] },
        { id: 'in-charge-of', unit: 'u05', en: 'in charge of', es: 'a cargo de, encargado/a de',
          def: 'having control of a group of people or an activity; being the person who makes decisions about it',
          g: ['Mrs Smith is {in charge of} the sales department.',
              'Who\'s {in charge of} the music for the party?'],
          t: ['Tom manages the kitchen in the restaurant.', 'Tom is {in charge of} the kitchen in the restaurant.'] },
        { id: 'indoors', unit: 'u05', en: 'indoors', es: 'en interior, bajo techo',
          def: 'inside a building',
          g: ['I hate the cold, so I prefer jobs where I can work {indoors}.',
              'Office workers spend most of the day {indoors}.'],
          t: ['Programmers usually work inside a building.', 'Programmers usually work {indoors}.'] },
        { id: 'conditions', unit: 'u05', en: 'in good/bad/dangerous conditions', alt: ['in good conditions', 'in bad conditions', 'in dangerous conditions', 'in good bad dangerous conditions'], es: 'en buenas/malas/peligrosas condiciones',
          def: 'in a nice, unpleasant or risky situation or place at work',
          g: ['Miners often work {in dangerous conditions}, deep under the ground.',
              'The factory was dirty, cold and noisy, and people worked {in bad conditions}.'],
          t: ['The new office is clean, safe and comfortable.', 'In the new office, the employees work {in good conditions}.'] },
        { id: 'internship', unit: 'u05', en: 'internship', es: 'prácticas (en una empresa)',
          def: 'a period of time when a student or young person works for a company to get experience',
          g: ['I\'m doing a three-month {internship} at a law firm this summer.',
              'Many companies offer {internships} to university students.'],
          t: ['This summer she is working at a newspaper for a few weeks to get some experience.', 'This summer she is doing an {internship} at a newspaper.'] },
        { id: 'manual', unit: 'u05', en: 'manual', es: 'manual (trabajo físico)',
          def: '(of work) done with your hands and body, not with your mind',
          g: ['Builders and farmers do {manual} work.',
              'He\'s very strong, so he doesn\'t mind doing {manual} jobs.'],
          t: ['In his job he uses his hands and his body all day.', 'He has a {manual} job.'] },
        { id: 'outdoors', unit: 'u05', en: 'outdoors', es: 'al aire libre',
          def: 'outside, not in a building',
          g: ['Gardeners work {outdoors}, even when it\'s raining.',
              'I hate offices; I\'d love a job where I can be {outdoors} all day.'],
          t: ['Postmen spend most of the day outside.', 'Postmen spend most of the day {outdoors}.'] },
        { id: 'permanent', unit: 'u05', en: 'permanent', es: 'fijo, indefinido',
          def: '(of a job or contract) lasting for a long time, with no end date',
          g: ['After a year, the company gave her a {permanent} contract.',
              'I don\'t want another summer job; I\'m looking for something {permanent}.'],
          t: ['His contract has no end date.', 'He has a {permanent} contract.'] },
        { id: 'promotion', unit: 'u05', en: 'promotion', es: 'ascenso',
          def: 'a move to a more important job, with more responsibility, in the same company',
          g: ['He worked hard and got a {promotion}: now he\'s the manager.',
              'If you get a {promotion}, you usually earn more money.'],
          t: ['Her company has given her a more important job with a higher salary.', 'She has got a {promotion}.'] },
        { id: 'qualifications', unit: 'u05', en: 'qualifications', alt: ['qualification'], es: 'títulos, cualificaciones',
          def: 'the exams you have passed or courses you have finished, which show you can do a job',
          g: ['You need good {qualifications} to become a teacher.',
              'She left school at sixteen without any {qualifications}.'],
          t: ['He has a university degree, a master\'s and a C1 English certificate.', 'He has very good {qualifications}.'] },
        { id: 'responsible-for', unit: 'u05', en: 'responsible for', es: 'responsable de',
          def: 'having the job or duty of looking after someone or something',
          g: ['Pilots are {responsible for} the safety of their passengers.',
              'In this job you will be {responsible for} answering the phone and emails.'],
          t: ['It\'s her job to look after the children in the swimming pool.', 'She is {responsible for} the children in the swimming pool.'] },
        { id: 'secure', unit: 'u05', en: 'secure', es: 'estable, seguro (empleo)',
          def: '(of a job) not likely to end, so you won\'t lose it',
          g: ['Jobs in the government are usually very {secure}.',
              'With this economic crisis, nobody\'s job is {secure}.'],
          t: ['He isn\'t worried about losing his job at all.', 'His job is very {secure}.'] },
        { id: 'self-employed', unit: 'u05', en: 'self-employed', es: 'autónomo/a, por cuenta propia',
          def: 'working for yourself, not for an employer',
          g: ['My dad is {self-employed}; he has his own plumbing business.',
              'When you are {self-employed}, you can decide your own hours.'],
          t: ['She hasn\'t got a boss; she works for herself.', 'She is {self-employed}.'] },
        { id: 'skilled', unit: 'u05', en: 'skilled', es: 'cualificado/a, especializado/a',
          def: 'having the training and experience to do a job well',
          g: ['Electricians are {skilled} workers.',
              'The company needs {skilled} engineers, so it\'s offering very high salaries.'],
          t: ['He does his job very well because he has had a lot of training.', 'He\'s a very {skilled} worker.'] },
        { id: 'temporary', unit: 'u05', en: 'temporary', es: 'temporal',
          def: '(of a job) lasting only for a short, limited time',
          g: ['I\'ve got a {temporary} job in a hotel for the summer.',
              'His contract is {temporary}: it finishes in December.'],
          t: ['This job is only for three months.', 'This is a {temporary} job.'] },
        { id: 'training', unit: 'u05', en: 'training', es: 'formación',
          def: 'the process of learning the skills that you need to do a job',
          g: ['All new employees get two weeks of {training}.',
              'Pilots need years of {training} before they can fly a plane.'],
          t: ['The company teaches new workers how to use the machines.', 'The company gives new workers {training} on how to use the machines.'] },

        // ---------- 06 Working life, hours and pay ----------
        { id: 'apply', unit: 'u06', en: 'apply for a job', es: 'solicitar un trabajo',
          def: 'to ask formally for a job, usually by sending a letter or your CV, or by filling in a form',
          g: ['I {applied for a job} at the supermarket last week, but they haven\'t called me yet.',
              'If you want to {apply for a job} here, you have to send us your CV.'],
          t: ['Yesterday she sent her CV and a letter to a bank, asking them to give her work.', 'Yesterday she {applied for a job} at a bank.'] },
        { id: 'redundant', unit: 'u06', en: 'be made redundant', es: 'ser despedido/a por reducción de plantilla',
          def: 'to lose your job because your employer doesn\'t need you any more, not because you did something wrong',
          g: ['When the factory closed last year, 300 workers {were made redundant}.',
              'My uncle {has been made redundant|\'s been made redundant}, so he\'s looking for a new job.'],
          t: ['The company lost a lot of money, so it told fifty workers that it didn\'t need them any more.', 'Fifty workers {were made redundant} because the company lost a lot of money.'] },
        { id: 'offered', unit: 'u06', en: 'be offered a job', alt: ['be offered a job'], es: 'recibir una oferta de trabajo',
          def: 'to be asked by a company if you would like to work for them',
          g: ['After the interview, she {was offered a job} in London.',
              'If you {are offered a job} abroad, will you accept it?'],
          t: ['The company asked Tom if he wanted to work for them.', 'Tom {was offered a job} by the company.'] },
        { id: 'sacked', unit: 'u06', en: 'be sacked/fired', alt: ['be sacked', 'be fired', 'be sacked or fired', 'be fired/sacked'], es: 'ser despedido/a, ser echado/a',
          def: 'to lose your job because you did something wrong',
          g: ['He {was sacked|was fired} because he was always late for work.',
              'If you steal from the shop, you\'ll {be sacked|be fired}.'],
          t: ['The boss told Sam to leave the company because he was rude to customers.', 'Sam {was sacked|was fired|got sacked|got fired} because he was rude to customers.'] },
        { id: 'paid', unit: 'u06', en: 'be well/badly paid', alt: ['be well paid', 'be badly paid', 'be well or badly paid'], es: 'estar bien/mal pagado/a',
          def: 'to receive a lot of money (well) or not much money (badly) for your work',
          g: ['Most professional footballers {are well paid}: they earn millions.',
              'In many countries cleaners {are badly paid}, even though their work is very hard.'],
          t: ['Doctors earn a lot of money for their work.', 'Doctors {are well paid}.'] },
        { id: 'unemployed', unit: 'u06', en: 'become unemployed', es: 'quedarse en paro, quedarse sin trabajo',
          def: 'to lose your job and not have another one',
          g: ['Thousands of people {became unemployed} during the economic crisis.',
              'If the factory closes, many people in the town will {become unemployed}.'],
          t: ['Last year my neighbour lost his job and he couldn\'t find another one.', 'Last year my neighbour {became unemployed}.'] },
        { id: 'shift-work', unit: 'u06', en: 'do shift work', es: 'trabajar por turnos',
          def: 'to work at different times of the day or night, for example mornings one week and nights the next',
          g: ['Nurses and police officers often {do shift work}.',
              'My mum {does shift work}, so sometimes she has to sleep during the day.'],
          t: ['Paul works mornings one week, afternoons the next week and nights the week after.', 'Paul {does shift work}.'] },
        { id: 'job-hunting', unit: 'u06', en: 'go job hunting', es: 'salir a buscar empleo',
          def: 'to spend time trying to find a job, for example by visiting companies or looking at adverts',
          g: ['After I finish university, I\'m going to {go job hunting}.',
              'Last summer she {went job hunting} every day, but she didn\'t find anything.'],
          t: ['Tomorrow I\'m going to spend the whole day visiting companies to find work.', 'Tomorrow I\'m going to {go job hunting}.'] },
        { id: 'look-for', unit: 'u06', en: 'look for a job', es: 'buscar trabajo',
          def: 'to try to find a job',
          g: ['My brother is {looking for a job} as a waiter.',
              'She lost her job in March, and she has been {looking for a job} since then.'],
          t: ['He\'s trying to find work in a hotel.', 'He\'s {looking for a job} in a hotel.'] },
        { id: 'flexitime', unit: 'u06', en: 'on flexitime', alt: ['flexitime'], es: 'con horario flexible',
          def: 'with a system that lets you choose what time you start and finish work',
          g: ['I work {on flexitime}, so I can start at 8 or at 10.',
              'Many companies let parents work {on flexitime} so they can take their children to school.'],
          t: ['In our office we can choose what time we start and finish.', 'In our office we work {on flexitime}.'] },
        { id: 'minimum-wage', unit: 'u06', en: 'on the minimum wage', alt: ['minimum wage', 'the minimum wage'], es: 'cobrando el salario mínimo',
          def: 'earning the lowest amount of money for your work that the law allows',
          g: ['Many young people in fast-food restaurants work {on the minimum wage}.',
              'It\'s difficult to pay the rent when you\'re {on the minimum wage}.'],
          t: ['Her company pays her the lowest salary that the law allows.', 'She works {on the minimum wage}.'] },
        { id: 'out-of-work', unit: 'u06', en: 'out of work', es: 'sin trabajo, en paro',
          def: 'without a job',
          g: ['He has been {out of work} for six months.',
              'When the restaurant closed, all the waiters were {out of work}.'],
          t: ['My cousin hasn\'t got a job at the moment.', 'My cousin is {out of work} at the moment.'] },
        { id: 'resign', unit: 'u06', en: 'resign', es: 'dimitir, dejar el trabajo voluntariamente',
          def: 'to tell your employer officially that you are leaving your job',
          g: ['She {resigned} last week because she hated her boss.',
              'If they don\'t give me more money, I\'ll {resign}.'],
          t: ['Peter decided to leave his job because he wanted to travel round the world.', 'Peter {resigned|resigned from his job} because he wanted to travel round the world.'] },
        { id: 'retire', unit: 'u06', en: 'retire', es: 'jubilarse',
          def: 'to stop working because you have reached a certain age, for example 65',
          g: ['My grandfather {retired} when he was 65.',
              'In Spain most people {retire} at about 65 or 67.'],
          t: ['My grandmother stopped working when she was 64 and now she travels a lot.', 'My grandmother {retired} at 64 and now she travels a lot.'] },
        { id: 'sign-contract', unit: 'u06', en: 'sign a contract', es: 'firmar un contrato',
          def: 'to write your name on an official document that shows what you and your employer have agreed',
          g: ['Before you start work, you have to {sign a contract}.',
              'Yesterday the footballer {signed a contract|signed a new contract} with Real Madrid.'],
          t: ['She wrote her name on the official agreement for her new job yesterday.', 'She {signed a contract|signed the contract|signed her contract} for her new job yesterday.'] },
        { id: 'nine-to-five', unit: 'u06', en: 'work from nine to five', alt: ['work from 9 to 5', 'work nine to five', 'work 9 to 5'], es: 'trabajar de nueve a cinco (horario de oficina)',
          def: 'to have normal office hours, starting in the morning and finishing in the afternoon',
          g: ['Most office workers {work from nine to five|work from 9 to 5}.',
              'I\'m tired of {working from nine to five|working from 9 to 5}; I want a more exciting job.'],
          t: ['Her working day starts at 9 a.m. and finishes at 5 p.m.', 'She {works from nine to five|works from 9 to 5}.'] },
        { id: 'full-time', unit: 'u06', en: 'work full-time', es: 'trabajar a tiempo completo',
          def: 'to work all the normal hours of a working week, usually about 35–40 hours',
          g: ['My mum {works full-time}: 40 hours a week.',
              'When I finish my studies, I want to {work full-time}.'],
          t: ['He works eight hours a day, from Monday to Friday.', 'He {works full-time}.'] },
        { id: 'long-hours', unit: 'u06', en: 'work long hours', es: 'trabajar muchas horas',
          def: 'to work for many hours every day, more than most people do',
          g: ['Doctors often {work long hours}: sometimes twelve hours a day.',
              'Chefs usually {work long hours|work very long hours}, so they don\'t see their families much.'],
          t: ['Farmers often start work at 5 a.m. and finish very late at night.', 'Farmers often {work long hours|work very long hours}.'] },
        { id: 'overtime', unit: 'u06', en: 'work overtime', alt: ['do overtime'], es: 'hacer horas extra',
          def: 'to work more hours than you normally do, usually for extra money',
          g: ['I had to {work overtime} to finish the project on time.',
              'If you {work overtime}, the company pays you extra.'],
          t: ['This week Anna is working two extra hours every day after her normal hours.', 'This week Anna is {working overtime}.'] },
        { id: 'nights', unit: 'u06', en: 'work nights', es: 'trabajar de noche',
          def: 'to work during the night and sleep during the day',
          g: ['Security guards often {work nights}.',
              'My dad {works nights} at the hospital, so he sleeps in the afternoon.'],
          t: ['Carla starts work at 10 p.m. and finishes at 6 a.m.', 'Carla {works nights}.'] },
        { id: 'part-time', unit: 'u06', en: 'work part-time', es: 'trabajar a tiempo parcial',
          def: 'to work only some of the hours of a normal working week',
          g: ['Many students {work part-time} at weekends.',
              'She {works part-time} because she wants to spend more time with her children.'],
          t: ['He only works twenty hours a week.', 'He {works part-time}.'] }
    ];

    const MODES = {
        study:      { label: 'Estudiar', icon: 'fa-book', desc: 'Repasa cada expresión con su definición en inglés, su significado y frases de ejemplo.' },
        gap:        { label: 'Completa la frase', icon: 'fa-pen', desc: 'Escribe la expresión que falta en la forma correcta (tiempo verbal, persona, plural...). El hueco puede tener varias palabras.' },
        transform:  { label: 'Transforma la frase', icon: 'fa-arrows-rotate', desc: 'Completa la segunda frase para que signifique lo mismo que la primera, usando una expresión del vocabulario.' },
        definition: { label: 'Definiciones', icon: 'fa-book-open-reader', desc: 'Lee la definición en inglés y escribe la palabra o expresión.' },
        mixed:      { label: 'Examen mixto', icon: 'fa-shuffle', desc: 'Mezcla de frases para completar, transformaciones y definiciones.' }
    };

    const MISTAKES_KEY = 'vocab3eso_mistakes';
    const ROUND_SIZE = 10;

    const state = { unit: 'all', mode: 'study', quiz: null, roundAll: false, lastWrong: [] };

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
    // Tolerante con mayúsculas, espacios, guiones, puntuación y contracciones.
    function normalize(s) {
        return ' ' + String(s).toLowerCase()
            .replace(/[\u2018\u2019\u00b4`]/g, "'")
            .replace(/\bcan't\b/g, 'can not').replace(/\bcannot\b/g, 'can not')
            .replace(/\bwon't\b/g, 'will not').replace(/\bshan't\b/g, 'shall not')
            .replace(/n't\b/g, ' not')
            .replace(/'m\b/g, ' am').replace(/'re\b/g, ' are').replace(/'ve\b/g, ' have').replace(/'ll\b/g, ' will')
            .replace(/[-\u2013\u2014\/]/g, ' ')
            .replace(/[.,!?;:()"¿¡]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }
    function byId(id) { return VOCAB.find(v => v.id === id); }
    function pool() { return state.unit === 'all' ? VOCAB : VOCAB.filter(v => v.unit === state.unit); }
    function speak(text) { if (typeof speakText === 'function') speakText(text); }
    function plain(sentence) { return sentence.replace(/\{([^}|]*)[^}]*\}/g, '$1'); }
    function parseGap(sentence) {
        const m = sentence.match(/^(.*)\{([^}]*)\}(.*)$/);
        return { before: m[1], answers: m[2].split('|'), after: m[3] };
    }

    function getMistakes() {
        try { return JSON.parse(localStorage.getItem(MISTAKES_KEY)) || []; } catch (e) { return []; }
    }
    function setMistakes(list) {
        try { localStorage.setItem(MISTAKES_KEY, JSON.stringify([...new Set(list)].filter(byId))); } catch (e) { /* sin almacenamiento */ }
        updateMistakesBadge();
    }
    function addMistake(id) { setMistakes([...getMistakes(), id]); }
    function removeMistake(id) { setMistakes(getMistakes().filter(x => x !== id)); }
    function updateMistakesBadge() {
        const el = document.getElementById('vocab-mistakes-count');
        if (el) el.innerText = getMistakes().filter(byId).length;
    }

    // ---------------- Generación de preguntas ----------------
    function makeQuestion(item, type) {
        if (type === 'gap') {
            const p = parseGap(item.g[Math.floor(Math.random() * item.g.length)]);
            return { item, type, before: p.before, after: p.after, answers: p.answers };
        }
        if (type === 'transform') {
            const p = parseGap(item.t[1]);
            return { item, type, original: item.t[0], before: p.before, after: p.after, answers: p.answers };
        }
        return { item, type: 'definition', answers: [item.en, ...(item.alt || [])] };
    }

    function buildQuiz(mode, items) {
        const types = ['gap', 'transform', 'definition'];
        const questions = shuffle(items).map((item, i) =>
            makeQuestion(item, mode === 'mixed' ? types[Math.floor(Math.random() * 3)] : mode));
        return { mode, questions, index: 0, answers: new Array(questions.length).fill(null), hints: new Array(questions.length).fill(0), finished: false, reviewOnly: false };
    }

    function startQuiz(onlyMistakes, ids) {
        let items;
        if (ids) items = VOCAB.filter(v => ids.includes(v.id));
        else if (onlyMistakes) items = VOCAB.filter(v => getMistakes().includes(v.id));
        else items = shuffle(pool()).slice(0, state.roundAll ? pool().length : ROUND_SIZE);
        if (!items.length) { state.quiz = null; render(); return; }
        state.quiz = buildQuiz(state.mode, items);
        state.quiz.reviewOnly = !!(onlyMistakes || ids);
        render();
    }

    // Devuelve 'ok' | 'form' (expresión correcta, forma incorrecta) | 'wrong'
    function evaluate(q, text) {
        const t = normalize(text);
        if (!t) return 'wrong';
        if (q.answers.some(a => normalize(a) === t)) return 'ok';
        const baseForms = [q.item.en, ...(q.item.alt || [])].map(normalize);
        if (baseForms.includes(t)) return 'form';
        // ¿contiene las palabras clave de la expresión pero en otra forma? (p. ej. "resign" en vez de "resigned")
        const key = normalize(q.answers[0]).split(' ').filter(w => w.length > 3);
        const stem = w => w.replace(/(ied|ies|ed|es|s|ing)$/, '').slice(0, 5);
        if (key.length && key.every(k => t.split(' ').some(w => stem(w) === stem(k)))) return 'form';
        return 'wrong';
    }

    function hintText(q, level) {
        const ans = q.answers[0];
        const words = ans.split(/\s+/).length;
        const parts = [];
        if (level >= 1) {
            parts.push(q.type === 'gap'
                ? `Tiene <strong>${words}</strong> palabra${words === 1 ? '' : 's'}.`
                : `Significado: <strong>${esc(q.item.es)}</strong>.`);
        }
        if (level >= 2) {
            if (q.type !== 'gap') parts.push(`Tiene <strong>${words}</strong> palabra${words === 1 ? '' : 's'}.`);
            const pattern = ans.split(/\s+/).map(w => w[0] + w.slice(1).replace(/[a-zA-Z]/g, '_')).join('  ');
            parts.push(`Empieza así: <strong class="font-mono tracking-wider">${esc(pattern)}</strong>`);
        }
        return parts.join(' ');
    }

    // ---------------- Render principal ----------------
    function render() {
        const root = document.getElementById('vocab-root');
        if (!root) return;

        document.querySelectorAll('[data-vocab-unit]').forEach(b => {
            const on = b.dataset.vocabUnit === state.unit;
            b.className = 'px-3 py-1.5 rounded-lg text-xs font-bold border transition ' +
                (on ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200' : 'bg-white text-slate-600 border-slate-200 hover:bg-indigo-50');
        });
        document.querySelectorAll('[data-vocab-mode]').forEach(b => {
            const on = b.dataset.vocabMode === state.mode;
            b.className = 'px-3 py-2 rounded-xl text-xs sm:text-sm font-bold border-2 flex items-center gap-2 ' +
                (on ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-indigo-50/60');
        });
        document.getElementById('vocab-count').innerText = `Total: ${pool().length} expresiones`;
        document.getElementById('vocab-mode-desc').innerText = MODES[state.mode].desc;
        updateMistakesBadge();

        if (state.mode === 'study') return renderStudy(root);
        return renderQuiz(root);
    }

    // ---------------- Estudiar ----------------
    function renderStudy(root) {
        const groups = state.unit === 'all' ? Object.keys(UNITS) : [state.unit];
        let html = `
            <div class="flex flex-wrap items-center justify-between gap-3">
                <p class="text-sm text-slate-600"><i class="fa-solid fa-lightbulb text-amber-500 mr-1"></i> Consejo: tapa la expresión, lee la definición e intenta recordarla.</p>
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
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                ${items.map(v => `
                    <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition space-y-2">
                        <div class="flex items-start justify-between gap-2">
                            <p class="text-base font-extrabold text-slate-900">${esc(v.en)}</p>
                            <button data-vocab-speak="${v.id}" class="shrink-0 w-7 h-7 rounded-full bg-slate-100 hover:bg-indigo-100 text-slate-600 hover:text-indigo-600 flex items-center justify-center transition" title="Escuchar Pronunciación">
                                <i class="fa-solid fa-volume-high text-[10px]"></i>
                            </button>
                        </div>
                        <p class="text-sm text-slate-700"><span class="text-[10px] font-bold uppercase text-indigo-500 mr-1">Def.</span>${esc(v.def)}</p>
                        <p class="text-sm font-bold text-indigo-700">${esc(v.es)}</p>
                        <ul class="text-xs italic text-slate-500 space-y-0.5 list-disc pl-4">
                            ${v.g.map(s => `<li>${esc(plain(s))}</li>`).join('')}
                        </ul>
                    </div>`).join('')}
                </div>
            </div>`;
        });
        root.innerHTML = html;
    }

    // ---------------- Ejercicios ----------------
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
                        <p class="text-xs text-slate-500 mt-2">Escribe tú la respuesta: no hay opciones. Puedes pedir pistas o pulsar "No lo sé".</p>
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
        if (q.finished) return renderResults(root);

        const cur = q.questions[q.index];
        const item = cur.item;
        const ans = q.answers[q.index];
        const answered = ans !== null;
        const total = q.questions.length;
        const hintLevel = q.hints[q.index];

        const gapBox = answered
            ? `<span class="inline-block px-2 rounded-md font-extrabold ${ans.result === 'ok' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}">${esc(ans.result === 'ok' ? ans.text.trim() : cur.answers[0])}</span>`
            : `<span class="inline-block min-w-[7rem] border-b-2 border-indigo-400 mx-1">&nbsp;</span>`;

        let badge = '', prompt = '';
        if (cur.type === 'gap') {
            badge = 'Completa la frase';
            prompt = `<p class="text-xl sm:text-2xl font-bold text-slate-800 leading-relaxed">${esc(cur.before)}${gapBox}${esc(cur.after)}</p>
                      <p class="text-sm text-slate-500">(= <span class="font-semibold text-indigo-700">${esc(item.es)}</span>) — escríbelo en la forma correcta.</p>`;
        } else if (cur.type === 'transform') {
            badge = 'Transforma la frase';
            prompt = `<p class="text-base sm:text-lg text-slate-600 bg-slate-50 border-l-4 border-slate-300 p-3 rounded-r-lg">${esc(cur.original)}</p>
                      <p class="text-xl sm:text-2xl font-bold text-slate-800 leading-relaxed">${esc(cur.before)}${gapBox}${esc(cur.after)}</p>
                      <p class="text-sm text-slate-500">Completa la segunda frase para que signifique lo mismo, usando una expresión del vocabulario.</p>`;
        } else {
            badge = 'Definición';
            prompt = `<p class="text-xl sm:text-2xl font-bold text-slate-800 leading-relaxed">"${esc(item.def)}"</p>
                      <p class="text-sm text-slate-500">¿Qué palabra o expresión es?</p>`;
        }

        let body = '';
        if (!answered) {
            body = `
                <form data-vocab-form class="space-y-3">
                    <input id="vocab-write-input" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"
                        placeholder="Escribe aquí tu respuesta..."
                        class="w-full p-4 rounded-xl border-2 border-slate-200 focus:border-indigo-500 text-base font-semibold outline-none transition">
                    <div class="flex flex-wrap gap-2">
                        <button type="submit" class="px-5 py-2.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition shadow-md shadow-indigo-200 text-sm">Comprobar</button>
                        <button type="button" data-vocab-action="hint" ${hintLevel >= 2 ? 'disabled' : ''} class="px-4 py-2.5 bg-amber-50 border border-amber-200 text-amber-800 font-semibold rounded-xl hover:bg-amber-100 disabled:opacity-50 transition text-sm"><i class="fa-solid fa-lightbulb mr-1"></i> Pista (${hintLevel}/2)</button>
                        <button type="button" data-vocab-action="giveup" class="px-4 py-2.5 bg-white border border-slate-300 text-slate-600 font-semibold rounded-xl hover:bg-slate-100 transition text-sm">No lo sé</button>
                    </div>
                    ${hintLevel ? `<p class="text-sm text-amber-800 bg-amber-50/70 border-l-4 border-amber-400 p-3 rounded-r-lg"><i class="fa-solid fa-lightbulb text-amber-500 mr-1"></i> ${hintText(cur, hintLevel)}</p>` : ''}
                    <p id="vocab-try-again" class="hidden text-sm font-semibold text-amber-700"></p>
                </form>`;
        } else {
            const ok = ans.result === 'ok';
            const title = ok ? '¡Excelente! Respuesta Correcta'
                : ans.giveUp ? 'Respuesta'
                : ans.result === 'form' ? 'Casi: expresión correcta, pero no en la forma correcta'
                : 'Respuesta Incorrecta';
            const sentence = cur.type === 'definition' ? item.g[0] : (cur.before + '{' + cur.answers[0] + '}' + cur.after);
            body = `
                <div class="p-4 rounded-xl border ${ok ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900'}">
                    <div class="flex items-start gap-3">
                        <i class="fa-solid ${ok ? 'fa-circle-check text-emerald-600' : 'fa-circle-exclamation text-rose-600'} mt-0.5 text-lg"></i>
                        <div class="space-y-1">
                            <h4 class="font-bold text-sm">${title}</h4>
                            ${!ok && !ans.giveUp ? `<p class="text-sm text-slate-700">Tu respuesta: <span class="line-through">${esc(ans.text)}</span></p>` : ''}
                            <p class="text-sm text-slate-700">Respuesta correcta: <strong>${cur.answers.slice(0, 3).map(esc).join('</strong> / <strong>')}</strong></p>
                            <p class="text-sm text-slate-700"><strong>${esc(item.en)}</strong> = ${esc(item.es)}
                                <button data-vocab-speak="${item.id}" class="ml-1 text-indigo-600 hover:text-indigo-800" title="Escuchar"><i class="fa-solid fa-volume-high text-xs"></i></button></p>
                            <p class="text-xs italic text-slate-500">"${esc(plain(sentence))}"</p>
                        </div>
                    </div>
                </div>`;
        }

        const score = q.questions.reduce((s, qq, i) => s + (q.answers[i] && q.answers[i].result === 'ok' ? 1 : 0), 0);
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
            <div class="bg-white rounded-2xl shadow-md border border-slate-200 p-6 sm:p-8 space-y-5">
                <span class="text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">${badge}</span>
                ${prompt}
                ${body}
            </div>
            <div class="flex items-center justify-between">
                <button data-vocab-action="prev" ${q.index === 0 ? 'disabled' : ''} class="px-4 py-2 text-sm font-semibold text-slate-600 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition">
                    <i class="fa-solid fa-arrow-left"></i> Anterior
                </button>
                <button data-vocab-action="next" ${answered ? '' : 'disabled'} class="px-5 py-2 text-sm font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-md shadow-indigo-200 flex items-center gap-1.5">
                    ${q.index === total - 1 ? '<span>Ver Resultado</span> <i class="fa-solid fa-check"></i>' : '<span>Siguiente</span> <i class="fa-solid fa-arrow-right"></i>'}
                </button>
            </div>`;

        if (!answered) {
            const inp = document.getElementById('vocab-write-input');
            if (inp && window.matchMedia('(min-width: 768px)').matches) inp.focus();
        }
    }

    function recordAnswer(value) {
        const q = state.quiz;
        q.answers[q.index] = value;
        const item = q.questions[q.index].item;
        if (value.result === 'ok') { if (q.reviewOnly) removeMistake(item.id); }
        else addMistake(item.id);
        render();
    }

    function renderResults(root) {
        const q = state.quiz;
        const total = q.questions.length;
        const score = q.answers.filter(a => a && a.result === 'ok').length;
        const pct = Math.round((score / total) * 100);
        const wrong = q.questions.filter((qq, i) => !q.answers[i] || q.answers[i].result !== 'ok');
        let headline = 'Necesitas Más Repaso 📚', advice = 'Vuelve a <strong>Estudiar</strong>, lee las definiciones y las frases de ejemplo, y después practica tus fallos.';
        if (pct === 100) { headline = '¡Perfecto! 🏆'; advice = '¡Lo dominas! Prueba otro tipo de ejercicio o el <strong>Examen mixto</strong> con todas las expresiones.'; }
        else if (pct >= 70) { headline = '¡Muy bien! 🎉'; advice = 'Tienes una buena base. Practica los fallos que te quedan para memorizarlos del todo.'; }
        else if (pct >= 50) { headline = 'Vas por buen camino 💪'; advice = 'Repasa las expresiones que has fallado (¡fíjate en la forma del verbo!) y vuelve a intentarlo.'; }
        state.lastWrong = wrong.map(qq => qq.item.id);

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
                    ${wrong.map(qq => `<div class="p-3 rounded-xl bg-rose-50/60 border border-rose-100 text-sm space-y-1">
                        <p><strong class="text-slate-900">${esc(qq.item.en)}</strong> <span class="text-slate-500">=</span> <span class="text-indigo-700 font-semibold">${esc(qq.item.es)}</span></p>
                        ${qq.type !== 'definition' ? `<p class="text-xs italic text-slate-500">${esc(qq.before)}<strong class="not-italic text-slate-800">${esc(qq.answers[0])}</strong>${esc(qq.after)}</p>` : `<p class="text-xs text-slate-500">${esc(qq.item.def)}</p>`}
                    </div>`).join('')}
                </div>
            </div>` : ''}`;
    }

    // ---------------- Eventos ----------------
    function onClick(e) {
        const t = e.target.closest('[data-vocab-unit],[data-vocab-mode],[data-vocab-action],[data-vocab-speak]');
        if (!t || !document.getElementById('section-vocab').contains(t)) return;

        if (t.dataset.vocabSpeak) { e.stopPropagation(); speak(byId(t.dataset.vocabSpeak).en.replace(/\//g, ' or ')); return; }
        if (t.dataset.vocabUnit) { state.unit = t.dataset.vocabUnit; state.quiz = null; render(); return; }
        if (t.dataset.vocabMode) { state.mode = t.dataset.vocabMode; state.quiz = null; render(); return; }

        const q = state.quiz;
        switch (t.dataset.vocabAction) {
            case 'speak-list': speak('Vocabulary: ' + pool().map(v => v.en.replace(/\//g, ' or ')).join(', ')); break;
            case 'start': state.roundAll = false; startQuiz(false); break;
            case 'start-all': state.roundAll = true; startQuiz(false); break;
            case 'start-mistakes': startQuiz(true); break;
            case 'restart': startQuiz(false); break;
            case 'retry-wrong': startQuiz(true, state.lastWrong); break;
            case 'prev': if (q && q.index > 0) { q.index--; render(); } break;
            case 'next':
                if (!q || q.answers[q.index] === null) break;
                if (q.index < q.questions.length - 1) q.index++; else q.finished = true;
                render();
                break;
            case 'hint':
                if (q && q.hints[q.index] < 2) {
                    const typed = (document.getElementById('vocab-write-input') || {}).value || '';
                    q.hints[q.index]++;
                    render();
                    const inp = document.getElementById('vocab-write-input');
                    if (inp) { inp.value = typed; inp.focus(); }
                }
                break;
            case 'giveup': recordAnswer({ text: '', result: 'wrong', giveUp: true }); break;
        }
    }

    function onSubmit(e) {
        if (!e.target.closest('[data-vocab-form]')) return;
        e.preventDefault();
        const q = state.quiz;
        if (!q || q.answers[q.index] !== null) return;
        const text = document.getElementById('vocab-write-input').value;
        if (!text.trim()) return;
        recordAnswer({ text, result: evaluate(q.questions[q.index], text) });
    }

    function onKey(e) {
        const sec = document.getElementById('section-vocab');
        if (!sec || sec.classList.contains('hidden') || !state.quiz || state.quiz.finished) return;
        if (e.key === 'Enter' && state.quiz.answers[state.quiz.index] !== null && e.target.tagName !== 'BUTTON') {
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
        document.addEventListener('keydown', onKey);
        render();
    }

    // Exponer para pruebas
    window.VOCAB_3ESO = VOCAB;
    window.vocabEvaluate = (item, type, text, idx) => {
        const q = makeQuestion(item, type);
        if (type === 'gap' && idx !== undefined) Object.assign(q, (p => ({ before: p.before, after: p.after, answers: p.answers }))(parseGap(item.g[idx])));
        return evaluate(q, text);
    };

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
