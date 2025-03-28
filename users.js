document.addEventListener("DOMContentLoaded", async function() {
    const container = document.getElementById("users-container");
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        container.innerHTML = users.map(user => `
            <div class="card">
                <h3><i class="fas fa-user"></i> ${user.name} (@${user.username})</h3>
                <p><i class="fas fa-location-dot"></i> ${user.address.city}, ${user.address.street}</p>
                <p><i class="fas fa-building"></i> ${user.company.name}</p>
                <p><i class="fas fa-envelope"></i> ${user.email} | <i class="fas fa-phone"></i> ${user.phone}</p>
                <a href="posts.html?userId=${user.id}">view posts</a>
            </div>
        `).join('');
    } catch (error) {
        console.error("Veri çekme hatası:", error);
    }
});
