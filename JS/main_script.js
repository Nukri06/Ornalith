document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Q&A Accordion ფუნქციონალი
    const accHeaders = document.querySelectorAll('.accordion-header');

    accHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            
            // გააქტიურება
            header.classList.toggle('active');

            if (header.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = 0;
            }
        });
    });

    // 2. API ინტეგრაციის სიმულაცია (დღის ფაქტი)
    const apiTrigger = document.getElementById('api-trigger');
    const apiResult = document.getElementById('api-result');

    // შემოწმება, არსებობს თუ არა ელემენტი DOM-ში, სანამ ღილაკს დავუმატებთ ლისენერს
    if (apiTrigger && apiResult) {
        apiTrigger.addEventListener('click', () => {
            apiResult.style.display = 'block';
            apiResult.innerHTML = '<p style="color: var(--clr-gold-1); padding: 10px; background: rgba(0,0,0,0.5); margin-top:10px; border-radius:5px;">⏳ იტვირთება...</p>';

            setTimeout(() => {
                const facts = [
                    "იცოდით? ოქრომჭედლობა საქართველოში ძვ.წ. III ათასწლეულიდან იწყება.",
                    "ვარძიაში 3000-მდე ოთახია გამოკვეთილი.",
                    "ქართული დამწერლობა მსოფლიოს 14 ძირითად დამწერლობას შორისაა."
                ];
                const randomFact = facts[Math.floor(Math.random() * facts.length)];
                
                apiResult.innerHTML = `
                    <div style="background: var(--clr-dark-2); padding: 15px; border: 1px solid var(--clr-gold-1); margin-top: 15px; border-radius: 5px;">
                        <h5 style="color: var(--clr-red-accent);">დღის ფაქტი:</h5>
                        <p>${randomFact}</p>
                    </div>
                `;
            }, 1000);
        });
    }

    // 3. Navbar ფონის შეცვლა სქროლისას
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = '#2E1F1E'; // სრულად მუქი
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
        } else {
            navbar.style.background = 'rgba(46, 31, 30, 0.95)'; // ოდნავ გამჭვირვალე
            navbar.style.boxShadow = 'none';
        }
    });
});