const addFavEvent = async (event) => {
    event.preventDefault();

    // values to input into the table from document query selector
    await fetch(`/api/event`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    document.location.replace('/dashboard');
};

document
    .querySelector('#events')
    .addEventListener('submit', addFavEvent);