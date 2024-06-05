document.addEventListener("DOMContentLoaded", function () {
    const backgrounds = document.querySelectorAll('.background img');
    const speed = .2;
    const directions = [];

    function randomizePosition() {
        return {
            x: Math.random() * (window.innerWidth - 20),
            y: Math.random() * (window.innerHeight - 20)
        };
    }

    function checkCollision(index) {
        const currentBackground = backgrounds[index];
        const currentRect = currentBackground.getBoundingClientRect();
        for (let i = 0; i < backgrounds.length; i++) {
            if (i !== index) {
                const rect = backgrounds[i].getBoundingClientRect();
                if (!(currentRect.right < rect.left || 
                      currentRect.left > rect.right || 
                      currentRect.bottom < rect.top || 
                      currentRect.top > rect.bottom)) {
                    directions[index].x *= -1;
                    directions[index].y *= -1;
                    break;
                }
            }
        }
    }

    backgrounds.forEach((background, index) => {
        const initialPosition = randomizePosition();
        background.style.left = `${initialPosition.x}px`;
        background.style.top = `${initialPosition.y}px`;

        directions.push({
            x: (Math.random() > 0.5 ? 1 : -1) * speed,
            y: (Math.random() > 0.5 ? 1 : -1) * speed
        });

        // Agregar una rotación aleatoria inicial
        background.style.transform = `rotate(${Math.random() * 360}deg)`;
    });

    function moveBackgrounds() {
        backgrounds.forEach((background, index) => {
            checkCollision(index);
            const rect = background.getBoundingClientRect();
            const parentRect = background.parentElement.getBoundingClientRect();

            if (rect.left <= parentRect.left || rect.right >= parentRect.right) {
                directions[index].x *= -1;
            }
            if (rect.top <= parentRect.top || rect.bottom >= parentRect.bottom) {
                directions[index].y *= -1;
            }

            background.style.left = `${background.offsetLeft + directions[index].x}px`;
            background.style.top = `${background.offsetTop + directions[index].y}px`;

            // Rotar la imagen mientras se mueve
            let currentRotation = parseFloat(background.style.transform.split("rotate(")[1].split("deg)")[0]);
            let rotationChange = (Math.random() * 4 - 1) * 0.2; // Ajusta el valor para controlar la velocidad de rotación
            background.style.transform = `rotate(${currentRotation + rotationChange}deg)`;
        });
        requestAnimationFrame(moveBackgrounds);
    }

    moveBackgrounds();
});