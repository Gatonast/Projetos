const handleSubmit = (event) => {
    event.preventDefault();

    const Nome = document.querySelector('input[name="nome"]').value;
    const Contato = document.querySelector('input[name="contato"]').value;
    const Estado = document.querySelector('input[name="estado"]').value;
    const Cidade = document.querySelector('input[name="cidade"]').value;
    const Termos = document.querySelector('input[name="termos"]').checked;

    fetch('https://api.sheetmonkey.io/form/nNJu1ka43dJkZ6tR4nRx3i', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Nome: Nome,
            Contato: Contato,
            Estado: Estado,
            Cidade: Cidade,
            Termos: Termos,
        }),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Sucesso:', data);
    })
    .catch((error) => {
        console.error('Erro:', error);
    });
};

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
    form.addEventListener('submit', handleSubmit);
});

function showPopup() {
    const nome = document.querySelector('input[name="nome"]').value;
    const contato = document.querySelector('input[name="contato"]').value;
    const estado = document.querySelector('input[name="estado"]').value;
    const cidade = document.querySelector('input[name="cidade"]').value;
    const termos = document.querySelector('input[name="termos"]').checked;

    if (nome && contato && estado && cidade && termos) {
        document.querySelector('.popup , backgroundpopup').style.display = 'grid';

        if (typeof fbq === 'function') {
            fbq('track', 'Lead');
        }
    } else {
        alert('Por favor, preencha todos os campos e aceite os termos!');
    }
}

function closePopup() {
    document.querySelector('.popup').style.display = 'none';
}

document.querySelector('button[type="submit"]').addEventListener('click', showPopup);
