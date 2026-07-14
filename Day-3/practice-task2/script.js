const habitsTracker = [
   {id: 1, name: "Drink Water", daysCompleted: 3, target: 5},
   {id: 2, name: "Exercise", daysCompleted: 5, target: 7},
   {id: 3, name: "Read Book", daysCompleted: 1, target: 3},
];

// elements
const trackers_container = document.getElementById('trackers-container');

// render all data 
function trackerList_Render(each_one_data){
    trackers_container.innerHTML = '';
    each_one_data.forEach((data) => {
        const isCompleted = data.daysCompleted === data.target;
        let buttonText = 'Mark today done';
        let disabledAttr = '';
    
        if(isCompleted){
            buttonText = 'Completed 🎉';
            disabledAttr = 'disabled';
        }

        trackers_container.innerHTML += `
        <div data-id="${data.id}" class="habit-card flex justify-between items-center border bg-[#2C2C2A] p-3 rounded-[10px]">
            <!-- title -->
            <div>
                <h2 class="text-[#fff] font-semibold">${data.name}</h2>
                <p class="text-[#d3d3d3]">${data.daysCompleted}/${data.target} days</p>
            </div>

            <!-- progress button -->
            <div>
                <button 
    onclick="progress_btn(this)" 
    class="mark-today-done py-1 px-2 shadow-sm border border-[#ffffff1a] rounded-md text-[#fff] font-medium text-[14px]" 
    ${disabledAttr}
>${buttonText}</button>
            </div>
        </div>`
    })
}
trackerList_Render(habitsTracker);


// progress button 
function progress_btn(progress){
    const each_one_card = progress.closest('.habit-card');
    const habitId = Number(each_one_card.dataset.id);

    // find a single array object 
    let habitObj = habitsTracker.find((habitsTracker_id) => habitsTracker_id.id === habitId);
    if(habitObj.daysCompleted < habitObj.target){
        habitObj.daysCompleted++;
    }

    trackerList_Render(habitsTracker);
}