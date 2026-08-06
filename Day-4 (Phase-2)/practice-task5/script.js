// all elements
const statusFilterBtns = document.getElementById('status-filter-container');
const bookingsContainer = document.getElementById('bookings-container');


// data 
let bookings = [
   {id: 1, eventName: "Wedding Photography", client: "Anika Rahman", date: "2026-08-15", status: "pending"},
   {id: 2, eventName: "Birthday Shoot", client: "Tanvir Ahmed", date: "2026-08-20", status: "confirmed"},
   {id: 3, eventName: "Product Launch", client: "Nusrat Jahan", date: "2026-09-01", status: "cancelled"},
];

function elementsFactory(elements){
    // create parent card div
    const card = document.createElement('div');
    const infoDiv = document.createElement('div');
    const titleRow = document.createElement('div');
    const title = document.createElement('h2');
    const statusBadge = document.createElement('span');
    const clientInfo = document.createElement('p');
    const actionsDiv = document.createElement('div');
    const statusSelect = document.createElement('select');
    const deleteBtn = document.createElement('button');

    // add styles
    card.classList.add('booking-card', 'bg-white', 'border', 'border-[#E4E7E1]', 'rounded-2xl', 'p-5', 'flex', 'items-center', 'justify-between');
    titleRow.classList.add('flex', 'items-center', 'gap-2', 'mb-1');
    title.classList.add('heading-font', 'text-[#20241F]', 'text-base');
    statusBadge.classList.add('text-[10px]', 'uppercase', 'tracking-wide', 'font-semibold', 'px-2', 'py-0.5', 'rounded-full');
    clientInfo.classList.add('text-[#8B9186]', 'text-sm');
    actionsDiv.classList.add('flex', 'items-center', 'gap-3');
    statusSelect.classList.add('status-select', 'text-sm', 'border', 'border-[#E4E7E1]', 'rounded-lg', 'px-2.5', 'py-1.5', 'bg-[#FAFAF8]', 'text-[#20241F]', 'focus:outline-none');
    deleteBtn.classList.add('delete-btn', 'text-[#8B9186]', 'hover:text-rose-400', 'text-sm', 'leading-none', 'transition');

    // add text content
    title.textContent = elements.eventName;
    statusBadge.textContent = elements.status;
    clientInfo.textContent = `${elements.client} · ${elements.date}`;
    deleteBtn.textContent = '✕';

    // build the select options
    statusSelect.innerHTML = `
        <option value="pending">Pending</option>
        <option value="confirmed">Confirmed</option>
        <option value="cancelled">Cancelled</option>
    `;
    statusSelect.value = elements.status;

    // Change status badge's color based on status
    if(elements.status === 'pending'){
        statusBadge.classList.add('bg-[#FEF3C7]', 'text-[#92620A]');
    }else if(elements.status === 'confirmed'){
         statusBadge.classList.add('bg-[#DCF5E3]', 'text-[#1D7A3E]');
    }else{
        statusBadge.classList.add('bg-[#ffe0d9]', 'text-[#803e29]');
    }

    // add event on status select option
    statusSelect.addEventListener(('change'), () => {
        elements.status = statusSelect.value;
        rendering(bookings);
    })

    // -----> TODO (তোমার কাজ): deleteBtn এ 'click' event বসানো, bookings থেকে filter করে বাদ দেওয়া, rendering(bookings) call করা

    // append all childs
    card.appendChild(infoDiv);
    infoDiv.appendChild(titleRow);
    titleRow.appendChild(title);
    titleRow.appendChild(statusBadge);
    infoDiv.appendChild(clientInfo);
    card.appendChild(actionsDiv);
    actionsDiv.appendChild(statusSelect);
    actionsDiv.appendChild(deleteBtn);

    return card;
}

function rendering(bookingsData){
    bookingsContainer.innerHTML = '';
    bookingsData.forEach((data) => {
        const card = elementsFactory(data);
        bookingsContainer.appendChild(card);
    });
}
rendering(bookings);