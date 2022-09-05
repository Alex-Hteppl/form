const TOKEN = '5650751671:AAGQwGVvuOc2hKAzCEwiZJF4oQzfm75gVoE';
const ID = '-1001762289266';

/*https://api.telegram.org/bot5650751671:AAGQwGVvuOc2hKAzCEwiZJF4oQzfm75gVoE*/

const form = document.querySelector('.form');

form.onsubmit = (e) => {
    e.preventDefault()
    const data = {
        'Имя пользователя': form.name.value,
        'Телефон': form.phone.value,
        'Комментарий': form.comment.value,
    };
    const entries = Object.entries(data);
    const values = entries.map(value => `<b>${value[0]}</b>: ${value[1]}`)
    const message = values.join('%0A');

    fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${ID}$parse_mode=html$text=${message}`)

    form.reset();
}