document.addEventListener("DOMContentLoaded", async function() {
    let userId = prompt("Bir kullanıcı ID giriniz (1-10):");

    while (isNaN(userId) || userId < 1 || userId > 10) {
        alert("Geçersiz kullanıcı ID. Lütfen 1 ile 10 arasında bir değer girin.");
        userId = prompt("Bir kullanıcı ID giriniz (1-10):");
    }

    console.log("Girilen ID:", userId);

    const container = document.getElementById("posts-container");
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await response.json();

        if (posts.length > 0) {
            container.innerHTML = posts.map(post => `
                <div class="card">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `).join('');
        } else {
            container.innerHTML = "<p>Bu kullanıcıya ait gönderi bulunamadı.</p>";
        }
    } catch (error) {
        console.error("Veri çekme hatası:", error);
    }
});




