* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: Roboto, Arial, sans-serif;
}
header {
    background-color: #3a0ca3;
    color: white;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navigation ul {
    display: flex;
    flex-direction: column;
    list-style: none;
}
.navigation {
    display: none;
}
.navigation.open {
    display: block;
}
.navigation li a {
    display: block;
    color: white;
    padding: 0.5rem 1rem;
    text-decoration: none;
}
.navigation li a:hover {
    background-color: #f72585;
    color: white;
    border-radius: 5px;
}
#menu {
    font-size: 1.5rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
}
#menu::before {
    content: "☰";
}
#menu.open::before {
    content: "❌";
}
main {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
}
main h2 {
    text-align: center;
    margin: 1rem;
}
#temples-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}
#temples-container section {
    border: 1px solid #ccc;
    padding: 1rem;
    background-color: #f8f9fa;
    text-align: center;
    border-radius: 8px;
}
#temples-container img {
    width: 100%;
    height: auto;
    margin-top: 1rem;
    box-shadow: 0 0 10px #333;
}
.label {
    font-weight: bold;
    color: #3a0ca3;
}
footer {
    background-color: #3a0ca3;
    color: white;
    text-align: center;
    padding: 1rem;
    margin-top: 1rem;
}
