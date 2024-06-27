document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.getElementById("calendar");

    // Function to generate calendar cells
    function generateCalendar(year, month) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1).getDay();

        let date = 1;
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDayOfMonth) {
                    calendar.innerHTML += '<div class="day"></div>';
                } else if (date > daysInMonth) {
                    break;
                } else {
                    const cell = document.createElement("div");
                    cell.classList.add("day");
                    cell.textContent = date;
                    if (
                        date === new Date().getDate() &&
                        year === new Date().getFullYear() &&
                        month === new Date().getMonth()
                    ) {
                        cell.classList.add("today");
                    }
                    calendar.appendChild(cell);
                    date++;
                }
            }
        }
    }

    // Call generateCalendar function with current month and year
    const currentDate = new Date();
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
});
