import "./Footer.css";
import { Button } from "../Button/Button";

// Estructura del Footer

export const Footer = () => `

<h2>Redes Sociales</h2>
<div>
<a href="https://www.linkedin.com/in/%C3%B3scar-zafra-662209262/" target="_blank" rel="noopener noreferrer">
${Button("../../assets/LinkedIn_icon.jpeg", "LinkedIn")}
<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
${Button("../../assets/x-icon.png", "X")}
<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
${Button("../../assets/instagram-icons.webp", "Instagram")}
<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
${Button("../../assets/facebook_icons.png", "Facebook")}
</div>

<div>
<p>&copy; 2024 - Todos los derechos Reservados - FindFun</p>
</div>
`;
