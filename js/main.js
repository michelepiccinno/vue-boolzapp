'use strict';
const { createApp } = Vue

const app = createApp({
  data() {
    return {

      contatti: [
        {
          name: "Michele",
          avatar: "_1",
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di dargli da mangiare",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "_2",
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "_3",
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Luisa",
          avatar: "_4",
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
      ],

      currentContact: null,

      messageIn: '',

    }
  },

  
  methods: {


    /**Riceve in input l'oggetto selezionato con click
     * e lo clona in un array "temporanea"
     */
    selectContact(singleContact) {
      this.currentContact = singleContact;
    },


    /**Preleva il valore del 'name' dell'oggetto corrente.
     * Ricerca nell'array un oggetto con nome identico e 
     * pusha il messaggio nello stesso oggetto.
     * Una volta pushato il messaggio la funzione chiama
     * una funzione anonima che a sua volta 
     * richiama this.pushOkMessage(singleObj)
     */
    sendChatMsg() {
      for (let i = 0; i < this.contatti.length; i++) {
        let singleObj = this.contatti[i];
        if (singleObj.name === this.currentContact.name) {
          singleObj.messages.push({ message: this.messageIn, status: 'sent', date: this.assingDate() });

          setTimeout(() => {
            this.pushOkMessage(singleObj);
          }, 1000);
        }
      }
    },


    /**Riceve Un oggetto e pusha al suo interno 
     * un array di 3 elementi (message, status, date)
     * 
     * @param {object} singleObj 
     */
    pushOkMessage(singleObj) {
      singleObj.messages.push({ message: 'OK', status: 'received', date: this.assingDate() })
    },



    /**Assegna la data alla variabile temporanea
     * che a sua volta viene richiamata nel HTML     *
     */
    assingDate() {
      const date = new Date();
      const timeFormatted = new Intl.DateTimeFormat('it-IT', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }).format(date);
      console.log(timeFormatted);
      return timeFormatted;
    }

  },



  /**All'apertura della pagina assegna al contatto corrente 
   * il primo contatto dell'array di oggetti
   */
  beforeMount() {
    this.currentContact = this.contatti[0]
  }

}).mount('#app');



