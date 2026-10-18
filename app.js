const routineData = {
    "Lunes": [
        { name: "Press de banca inclinado con mancuernas (4x8-10)", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&q=80" },
        { name: "Press plano con barra W o mancuernas (3x10-12)", img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&q=80" },
        { name: "Aperturas con mancuernas en banca (3x12)", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80" },
        { name: "Press Francés con barra W (3x10-12)", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&q=80" },
        { name: "Tríceps copa a dos manos (3x10-12)", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&q=80" },
        { name: "Elevaciones de piernas colgado en barra (3x12-15)", img: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=500&q=80" }
    ],
    "Martes": [
        { name: "Dominadas en barra de puerta (4xFallo)", img: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=500&q=80" },
        { name: "Remo a una mano con mancuerna (4x10 por lado)", img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=500&q=80" },
        { name: "Pull-over con mancuerna sobre banca (3x12)", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80" },
        { name: "Curl alternado de bíceps con supinación (3x10-12)", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&q=80" },
        { name: "Curl predicador con barra W en banca (3x10-12)", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&q=80" },
        { name: "Curl invertido / Zottman (3x12-15)", img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&q=80" },
        { name: "Antebrazo: Curl de muñeca en banca c/mancuerna (3x15)", img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&q=80" },
        { name: "Antebrazo: Curl de muñeca invertido c/mancuerna (3x15)", img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&q=80" }
    ],
    "Miercoles": [
        { name: "Sentadilla Goblet con mancuerna pesada (4x10-12)", img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=500&q=80" },
        { name: "Zancadas caminando con mancuernas (3x10 por pierna)", img: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=500&q=80" },
        { name: "Peso muerto rumano con mancuernas/barra W (4x10-12)", img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&q=80" },
        { name: "Elevación de talones con tobilleras/mancuernas (4x15-20)", img: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=500&q=80" },
        { name: "Plancha abdominal (3x45-60 seg)", img: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=500&q=80" }
    ],
    "Jueves": [
        { name: "Press militar de hombros sentado (4x8-10)", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&q=80" },
        { name: "Elevaciones laterales con mancuernas (4x12-15)", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80" },
        { name: "Pájaros / Posterior inclinado (4x12-15)", img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=500&q=80" },
        { name: "Encogimientos de hombros / Trapecio (4x12-15)", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&q=80" },
        { name: "Cuello: Flexión frontal boca arriba c/disco (3x15)", img: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=500&q=80" },
        { name: "Cuello: Extensión posterior boca abajo c/disco (3x15)", img: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=500&q=80" },
        { name: "Cuello: Flexiones laterales c/disco (3x12-15/lado)", img: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=500&q=80" }
    ],
    "Viernes": [
        { name: "Hip Thrust en banca con barra W / mancuerna (4x10-12)", img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=500&q=80" },
        { name: "Peso muerto sumo con mancuerna (3x10-12)", img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&q=80" },
        { name: "Patada de glúteo con tobilleras de 10lb (3x15 por pierna)", img: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=500&q=80" },
        { name: "Abducciones laterales con tobilleras (3x15 por pierna)", img: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=500&q=80" },
        { name: "Crunches con peso en banca (3x15-20)", img: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=500&q=80" },
        { name: "Paseo del granjero con mancuernas (3x45 seg)", img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=500&q=80" }
    ]
};

function loadDay(day) {
    document.getElementById('day-selector').classList.add('hidden');
    document.getElementById('workout-container').classList.remove('hidden');
    document.getElementById('current-day-title').innerText = day;
    
    const list = document.getElementById('exercises-list');
    list.innerHTML = '';

    routineData[day].forEach((ex, index) => {
        const keyPeso = `${day}_ex_${index}_peso`;
        const keyReps = `${day}_ex_${index}_reps`;
        const savedPeso = localStorage.getItem(keyPeso) || '';
        const savedReps = localStorage.getItem(keyReps) || '';

        const card = document.createElement('div');
        card.className = 'exercise-card';
        card.innerHTML = `
            <h3>${ex.name}</h3>
            <img src="${ex.img}" style="width:100%; height:180px; object-fit:cover; border-radius:6px; margin:8px 0;" alt="${ex.name}">
            <div class="input-group">
                <input type="number" id="peso_${index}" placeholder="Peso (kg/lb)" value="${savedPeso}">
                <input type="number" id="reps_${index}" placeholder="Reps logradas" value="${savedReps}">
            </div>
            <button class="save-btn" onclick="saveProgress('${day}', ${index})">Guardar Carga</button>
        `;
        list.appendChild(card);
    });
}

function saveProgress(day, index) {
    const peso = document.getElementById(`peso_${index}`).value;
    const reps = document.getElementById(`reps_${index}`).value;
    
    localStorage.setItem(`${day}_ex_${index}_peso`, peso);
    localStorage.setItem(`${day}_ex_${index}_reps`, reps);
    alert('¡Registro guardado exitosamente!');
}

function backToMenu() {
    document.getElementById('workout-container').classList.add('hidden');
    document.getElementById('day-selector').classList.remove('hidden');
}
