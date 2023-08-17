var arrivalInput = new Cleave('.modal-form__arrival-date', {
  date: true,
  delimiter: '.',
  datePattern: ['d', 'm', 'Y']
});

var departureInput = new Cleave('.modal-form__departure-date', {
  date: true,
  delimiter: '.',
  datePattern: ['d', 'm', 'Y']
});
