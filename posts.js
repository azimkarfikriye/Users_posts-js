document.addEventListener("DOMContentLoaded", async function() {
    const urlParams = new URLSearchParams(window.location.search);
    let userId = urlParams.get("userId");
    if (!userId) {
        userId = prompt("Bir kullanıcı ID giriniz (1-10):");
        if (!userId || isNaN(userId) || userId < 1 || userId > 10) {
            alert("Geçersiz kullanıcı ID");
            throw new Error("Geçersiz kullanıcı ID");
        }
    }

    const container = document.getElementById("posts-container");
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await response.json();
        container.innerHTML = posts.map(post => `
            <div class="card">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error("Veri çekme hatası:", error);
    }
});
