// import { createGlobalStyle } from 'styled-components';

// /**
//  * Global styles for the application
//  * This includes reset CSS and base styles
//  */
// const GlobalStyle = createGlobalStyle`
//   /* Reset CSS */
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }

//   /* Base styles */
//   body {
//     font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
//       Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//     font-size: 16px;
//     line-height: 1.5;
//     color: ${({ theme }) => theme.colors.text};
//     background-color: ${({ theme }) => theme.colors.background};
//   }

//   /* Typography */
//   h1, h2, h3, h4, h5, h6 {
//     font-weight: 600;
//     margin-bottom: 0.8em;
//     line-height: 1.2;
//   }

//   h1 {
//     font-size: 2.5rem;
//   }

//   h2 {
//     font-size: 2rem;
//   }

//   h3 {
//     font-size: 1.75rem;
//   }

//   h4 {
//     font-size: 1.5rem;
//   }

//   p {
//     margin-bottom: 1rem;
//   }

//   a {
//     color: ${({ theme }) => theme.colors.primary};
//     text-decoration: none;
//     transition: color 0.2s ease;

//     &:hover {
//       color: ${({ theme }) => theme.colors.primaryDark};
//     }
//   }

//   /* Code blocks */
//   code {
//     font-family: 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
//     background-color: ${({ theme }) => theme.colors.codeBg};
//     padding: 0.2em 0.4em;
//     border-radius: 3px;
//     font-size: 0.9em;
//   }

//   pre {
//     background-color: ${({ theme }) => theme.colors.codeBg};
//     border-radius: 8px;
//     padding: 1rem;
//     overflow-x: auto;
//     margin: 1rem 0;
//   }

//   /* Form elements */
//   input, textarea, select, button {
//     font-family: inherit;
//     font-size: inherit;
//   }

//   /* Focus styles for accessibility */
//   :focus {
//     outline: 2px solid ${({ theme }) => theme.colors.primary};
//     outline-offset: 2px;
//   }

//   /* Scrollbar styling */
//   ::-webkit-scrollbar {
//     width: 8px;
//     height: 8px;
//   }

//   ::-webkit-scrollbar-track {
//     background: ${({ theme }) => theme.colors.scrollTrack};
//   }

//   ::-webkit-scrollbar-thumb {
//     background: ${({ theme }) => theme.colors.scrollThumb};
//     border-radius: 4px;
//   }

//   ::-webkit-scrollbar-thumb:hover {
//     background: ${({ theme }) => theme.colors.scrollThumbHover};
//   }
// ;

// export default GlobalStyle;