const container = document.getElementById("blason-container");

const renderBlason = (data) => {
  container.innerHTML = `
        <div class="blason-modern">
            <header class="blason-header">
                <h1>${data.identite}</h1>
                <p class="devise">${data.devise}</p>
            </header>

            <div class="shield-grid">
                ${data.sections
                  .map(
                    (section) => `
                    <div class="quartier ${section.titre.toLowerCase().replace(/\s/g, "-")}">
                        <div class="image-container">
                            <img src="${section.image}" alt="${section.titre}" />
                        </div>
                        <h3>${section.titre}</h3>
                        <ul>
                            ${section.items.map((item) => `<li>${item}</li>`).join("")}
                        </ul>
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </div>
    `;
};
renderBlason(blasonData);
