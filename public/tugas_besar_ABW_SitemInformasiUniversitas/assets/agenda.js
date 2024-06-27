document.addEventListener("DOMContentLoaded", function () {
    const agenda = [
        {
            title: "Seminar Teknologi",
            date: "2024-07-10",
            description: "Seminar tentang perkembangan teknologi terkini.",
        },
        {
            title: "Pelatihan Kewirausahaan",
            date: "2024-07-15",
            description: "Pelatihan untuk meningkatkan kemampuan berwirausaha.",
        },
        {
            title: "Kuliah Umum",
            date: "2024-07-20",
            description: "Kuliah umum dengan pembicara tamu dari luar negeri.",
        },
    ];

    const agendaList = document.getElementById("agenda-list");

    agenda.forEach((item) => {
        const agendaItem = document.createElement("div");
        agendaItem.classList.add("agenda-item");

        const agendaTitle = document.createElement("h3");
        agendaTitle.textContent = item.title;
        agendaItem.appendChild(agendaTitle);

        const agendaDate = document.createElement("p");
        agendaDate.textContent = `Tanggal: ${item.date}`;
        agendaItem.appendChild(agendaDate);

        const agendaDescription = document.createElement("p");
        agendaDescription.textContent = item.description;
        agendaItem.appendChild(agendaDescription);

        agendaList.appendChild(agendaItem);
    });
});
