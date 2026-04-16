const colorBtn = document.getElementById("get-btn")
const schemeSelector = document.getElementById("scheme")
const colorInput = document.getElementById("color-picker")
const colorsContainer = document.getElementById("colors")

colorBtn.addEventListener("click", () => {
    const currentColor = colorInput.value.slice(1)
    const selectedScheme = schemeSelector.value.toLowerCase()
    const queryString = `?hex=${currentColor}&mode=${selectedScheme}&count=4`

    fetch(`https://www.thecolorapi.com/scheme${queryString}`)
        .then(res => {
            if (!res.ok) throw new Error(`API returned ${res.status}`)
            return res.json()
        })
        .then(data => {
            console.log(data)
            let render = ""
            data.colors.forEach(color => {
                
                render += `
                <div class="images">
                 <img src="${color.image?.named}" alt="${color.hex.value}">
                 <h2>${color.hex.value}</h2>
                </div>
                
              `

            })
            colorsContainer.innerHTML = render      
        })
        .catch(err => {
            console.error("Fetch error:", err)
            colorsContainer.textContent = "Unable to load colors."
        })
})