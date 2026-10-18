const routineData = {
    "Lunes": [
        { name: "Press de banca inclinado con mancuernas (4x8-10)", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&q=80", sets: 4 },
        { name: "Press plano con barra W o mancuernas (3x10-12)", img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&q=80", sets: 3 },
        { name: "Aperturas con mancuernas en banca (3x12)", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80", sets: 3 },
        { name: "Press Francés con barra W (3x10-12)", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&q=80", sets: 3 },
        { name: "Tríceps copa a dos manos (3x10-12)", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&q=80", sets: 3 },
        { name: "Elevaciones de piernas colgado en barra (3x12-15)", img: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=500&q=80", sets: 3 }
    ],
    "Martes": [
        { name: "Dominadas en barra de puerta (4xFallo)", img: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=500&q=80", sets: 4 },
        { name: "Remo a una mano con mancuerna (4x10 por lado)", img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=500&q=80", sets: 4 },
        { name: "Pull-over con mancuerna sobre banca (3x12)", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80", sets: 3 },
        { name: "Curl alternado de bíceps con supinación (3x10-12)", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&q=80", sets: 3 },
        { name: "Curl predicador con barra W en banca (3x10-12)", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&q=80", sets: 3 },
        { name: "Curl invertido / Zottman (3x12-15)", img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&q=80", sets: 3 },
        { name: "Antebrazo: Curl de muñeca en banca c/mancuerna (3x15)", img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&q=80", sets: 3 },
        { name: "Antebrazo: Curl de muñeca invertido c/mancuerna (3x15)", img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&q=80", sets: 3 }
    ],
    "Miercoles": [
        { name: "Sentadilla Goblet con mancuerna pesada (4x10-12)", img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=500&q=80", sets: 4 },
        { name: "Zancadas caminando con mancuernas (3x10 por pierna)", img: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=500&q=80", sets: 3 },
        { name: "Peso muerto rumano con mancuernas/barra W (4x10-12)", img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&q=80", sets: 4 },
        { name: "Elevación de talones con tobilleras/mancuernas (4x15-20)", img: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=500&q=80", sets: 4 },
        { name: "Plancha abdominal (3x45-60 seg)", img: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=500&q=80", sets: 3 }
    ],
    "Jueves": [
        { name: "Press militar de hombros sentado (4x8-10)", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&q=80", sets: 4 },
        { name: "Elevaciones laterales con mancuernas (4x12-15)", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80", sets: 4 },
        { name: "Pájaros / Posterior inclinado (4x12-15)", img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=500&q=80", sets: 4 },
        { name: "Encogimientos de hombros / Trapecio (4x12-15)", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&q=80", sets: 4 },
        { name: "Cuello: Flexión frontal boca arriba c/disco (3x15)", img: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=500&q=80", sets: 3 },
        { name: "Cuello: Extensión posterior boca abajo c/disco (3x15)", img: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=500&q=80", sets: 3 },
        { name: "Cuello: Flexiones laterales c/disco (3x12-15/lado)", img: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=500&q=80", sets: 3 }
    ],
    "Viernes": [
        { name: "Hip Thrust en banca con barra W / mancuerna (4x10-12)", img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=500&q=80", sets: 4 },
        { name: "Peso muerto sumo con mancuerna (3x10-12)", img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&q=80", sets: 3 },
        { name: "Patada de glúteo con tobilleras de 10lb (3x15 por pierna)", img: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=500&q=80", sets: 3 },
        { name: "Abducciones laterales con tobilleras (3x15 por pierna)", img: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=500&q=80", sets: 3 },
        { name: "Crunches con peso en banca (3x15-20)", img: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=500&q=80", sets: 3 },
        { name: "Paseo del granjero con mancuernas (3x45 seg)", img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=500&q=80", sets: 3 }
    ]
};

let timerInterval;

function loadDay(day) {
    document.getElementById('day-selector').classList.add('hidden');
    document.getElementById('workout-container').classList.remove('hidden');
    document.getElementById('current-day-title').innerText = day;
    
    const list = document.getElementById('exercises-list');
    list.innerHTML = '';

    routineData[day].forEach((ex, index) => {
        let setsHTML = '';
        for (let s = 1; s <= ex.sets; s++) {
            const keyPeso = `${day}_ex_${index}_s${s}_peso`;
            const keyReps = `${day}_ex_${index}_s${s}_reps`;
            const savedPeso = localStorage.getItem(keyPeso) || '';
            const savedReps = localStorage.getItem(keyReps) || '';

            setsHTML += `
                <div style="display:flex; align-items:center; gap:8px; margin-top:5px;">
                    <span style="font-weight:bold; width:60px;">Serie ${s}:</span>
                    <input type="number" id="peso_${index}_${s}" placeholder="Kg/Lb" value="${savedPeso}" style="width:40%;">
                    <input type="number" id="reps_${index}_${s}" placeholder="Reps" value="${savedReps}" style="width:40%;">
                </div>
            `;
        }

        const card = document.createElement('div');
        card.className = 'exercise-card';
        card.innerHTML = `
            <h3>${ex.name}</h3>
            <img src="${ex.img}" style="width:100%; height:160px; object-fit:cover; border-radius:6px; margin:8px 0;" alt="${ex.name}">
            ${setsHTML}
            <button class="save-btn" onclick="saveProgress('${day}', ${index}, ${ex.sets})">Guardar Ejercicio</button>
            <div style="margin-top:10px; text-align:center; background:#292929; padding:8px; border-radius:6px;">
                <span style="font-size:14px; color:#aaa;">Descanso entre series:</span>
                <div style="display:flex; justify-content:center; gap:10px; margin-top:5px;">
                    <button onclick="startTimer(60)" style="background:#333; color:#00e676; border:1px solid #00e676; padding:5px 12px; border-radius:4px; cursor:pointer; font-weight:bold;">⏱️ 60 Seg</button>
                    <button onclick="startTimer(90)" style="background:#333; color:#00e676; border:1px solid #00e676; padding:5px 12px; border-radius:4px; cursor:pointer; font-weight:bold;">⏱️ 90 Seg</button>
                </div>
            </div>
        `;
        list.appendChild(card);
    });

    // Añadir contenedor de temporizador flotante si no existe
    if (!document.getElementById('timer-display')) {
        const timerDiv = document.createElement('div');
        timerDiv.id = 'timer-display';
        timerDiv.style = "position:fixed; bottom:15px; right:15px; background:#00e676; color:#121212; padding:12px 20px; border-radius:30px; font-weight:bold; font-size:18px; display:none; box-shadow:0 4px 10px rgba(0,0,0,0.5); z-index:1000;";
        document.body.appendChild(timerDiv);
    }
}

function startTimer(seconds) {
    clearInterval(timerInterval);
    const display = document.getElementById('timer-display');
    display.style.display = 'block';
    let timeLeft = seconds;

    timerInterval = setInterval(() => {
        display.innerText = `⏱️ Descanso: ${timeLeft}s`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            display.innerText = "¡TIEMPO! Siguiente serie";
            setTimeout(() => { display.style.display = 'none'; }, 3000);
        }
    }, 1000);
}

function saveProgress(day, index, totalSets) {
    for (let s = 1; s <= totalSets; s++) {
        const peso = document.getElementById(`peso_${index}_${s}`).value;
        const reps = document.getElementById(`reps_${index}_${s}`).value;
        
        localStorage.setItem(`${day}_ex_${index}_s${s}_peso`, peso);
        localStorage.setItem(`${day}_ex_${index}_s${s}_reps`, reps);
    }
    alert('¡Todas las series guardadas!');
}

function backToMenu() {
    document.getElementById('workout-container').classList.add('hidden');
    document.getElementById('day-selector').classList.remove('hidden');
}
