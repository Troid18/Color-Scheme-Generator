# Color Scheme Generator

A simple, elegant web application that generates harmonious color schemes based on a user-selected base color and color theory principles.

## Features

- 🎨 **Interactive Color Picker** - Select any base color using an intuitive color picker
- 🌈 **Multiple Scheme Types** - Generate color schemes using 7 different color harmony modes:
  - Monochrome
  - Monochrome Dark
  - Monochrome Light
  - Analogic
  - Complement
  - Analogic-Complement
  - Triad
- 📊 **Real-time Generation** - Instantly generate 5 complementary colors for your selected scheme
- 💾 **Color Hex Display** - View hex color codes for each generated color
- 🎯 **Clean UI** - Modern, responsive design with smooth interactions

## How to Use

1. **Pick a Base Color** - Click the color picker button to select your starting color
2. **Choose a Color Scheme** - Select your desired color harmony type from the dropdown menu
3. **Generate** - Click the "Get color scheme" button to generate colors
4. **View Results** - Browse the generated color palette with hex codes displayed

## Technology Stack

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with gradients, flexbox, and responsive design
- **JavaScript (Vanilla)** - Event handling and API integration
- **The Color API** - External API for color scheme generation ([thecolorapi.com](https://www.thecolorapi.com))

## Project Structure

```
Color-Scheme-Generator/
├── index.html          # HTML structure and UI
├── index.css           # Styling and layout
├── index.js            # JavaScript logic and API calls
└── README.md           # This file
```

## Code Highlights

### Color Generation
The application uses the Color API to fetch harmonious color schemes:
```javascript
fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}&count=5`)
```

### Error Handling
Robust error handling ensures graceful degradation if the API is unavailable:
- API errors are caught and displayed to the user
- User-friendly error messages replace the color display

### Responsive Design
The UI uses flexbox and viewport-aware styling to work across different screen sizes.

## Files Overview

### index.html
- Sets up the DOM structure with input controls
- Imports Google Fonts (Roboto, Source Sans 3)
- Links to CSS and JavaScript files

### index.js
- DOM element references and event listeners
- Fetch logic to call The Color API
- Dynamic color rendering using template literals
- Comprehensive error handling

### index.css
- Beautiful radial gradient background
- Styled form controls (color picker, select, button)
- Hover and active states for interactivity
- Flexbox layout for color card display
- Rounded corners and subtle shadows for depth

## Browser Compatibility

Works on all modern browsers that support:
- CSS Grid and Flexbox
- Fetch API
- ES6 template literals
- HTML5 Color Input

## Future Enhancements

- Add ability to save favorite color schemes
- Export colors in multiple formats (RGB, HSL, CSS)
- Copy to clipboard functionality
- Dark mode toggle
- Color accessibility checker
- Local storage for generated palettes

## Dependencies

- **External API**: The Color API (https://www.thecolorapi.com) - Free and requires no authentication

## Getting Started

1. Clone or download the project
2. Open `index.html` in your web browser
3. Start generating color schemes!

## License

Feel free to use and modify this project as needed.

---

**Enjoy creating beautiful color schemes! 🎨**
