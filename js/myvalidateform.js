
new window.JustValidate('#form', {
  rules: {
    name: {
      required: true,
      strength: {
        custom: '[а-яА-Я]',
      }
    },
    phone: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
        },
    },
  },
  messages: {

    name: {
      strength: 'Не верный формат ввода',
      required: "Поле обязательно для заполнения!",
    },

    phone: {
      function: "Номер не верный!",
      required: "Поле обязательно для заполнения!",

    },
 },
focusWrongField: true,


});
