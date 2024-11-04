function shuffleNumbers() {
    const container = document.getElementById('grid-container');
    const items = Array.from(container.children);
    const shuffled = items.sort(() => Math.random() - 0.5);
    container.innerHTML = '';
    shuffled.forEach(item => container.appendChild(item));
}