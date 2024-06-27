<script>
// Kode JavaScript untuk mengganti kelas "active" saat halaman di-klik
const links = document.querySelectorAll("ul li a");
links.forEach(link => {
  link.addEventListener("click", function(e) {
    // Hapus kelas "active" dari semua link
    links.forEach(l => l.classList.remove("active"));

    // Tambahkan kelas "active" ke link yang di-klik
    this.classList.add("active");

    // Pencegahan default agar halaman tidak di-reload
    e.preventDefault();
  });
});
</script>