document.getElementById('rsvpForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const attending = e.target.attending.value;
  const notes = e.target.notes.value;

  // Option 1: Submit via Formspree POST (replace 'YOUR_FORM_ID' below)
  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('attending', attending);
  formData.append('notes', notes);

  try {
    const res = await fetch('https://formspree.io/f/xldlqbaw', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      document.getElementById('responseMessage').textContent = 'Thanks for your response!';
      e.target.reset();
    } else {
      throw new Error('Network response wasn’t ok');
    }
  } catch (err) {
    document.getElementById('responseMessage').textContent = 'Sorry, an error occurred.';
  }
});
