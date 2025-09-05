(function() {
  emailjs.init("jcLa6tg5ysvXzk6ze");
})();

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_8zl41gg', 'emplate_w4tqmya', e.target)
    .then(() => {
      alert('✅ Message sent successfully!');
    }, (error) => {
      alert('❌ Failed to send message: ' + JSON.stringify(error));
    });
}
