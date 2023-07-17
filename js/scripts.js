

fecharCriar.onclick = () => {
    drawer.classList.remove('active');
    setTimeout(() => {
        overlay.classList.remove('active');
    }, 700);
}

overlay.onclick = () => {
    drawer.classList.remove('active');
    setTimeout(() => {
        overlay.classList.remove('active');
    }, 700);
}

window.addEventListener('keydown', (e) => {
    if(e.code === 'Escape'){
        drawer.classList.remove('active');
        setTimeout(() => {
            overlay.classList.remove('active');
        }, 700);
    }
})