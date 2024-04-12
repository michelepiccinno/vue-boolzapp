'use strict';
const { createApp } = Vue

const app = createApp({
  data() {
    return {

      contatti: [
        {
          name: "Michele",
          avatar: '_1',
          visible: false,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: '_2',
          visible: false,
          messages: [
            {
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Samuele',
          avatar: '_3',
          visible: false,
          messages: [
            {
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: '28/03/2020 10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro B.',
          avatar: '_4',
          visible: false,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro L.',
          avatar: '_5',
          visible: false,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Va bene, stasera la sento',
              status: 'received'
            }
          ],
        },
        {
          name: 'Claudia',
          avatar: '_6',
          visible: false,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Non ancora',
              status: 'received'
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Federico',
          avatar: '_7',
          visible: false,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Davide',
          avatar: '_8',
          visible: false,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received'
            }
          ],
        },
      ],

      searchContact: '',

      currentContact: null,

      messageIn: '',

      oldSelectedContact: '',

    }
  },


  computed: {

    /**Confronta i caratteri digitati nella search input con i caratteri che compongo
      *in nomi contenuti nell'array di oggetti e ritorna i contatti filtrati nella
      *let "filteredContacts. 
      */
    filteredContacts() {
      let filteredContacts = this.contatti.filter((singleContact) => {
        return singleContact.name.toLowerCase().includes(this.searchContact.toLowerCase());
      });
      return filteredContacts;
    },

  },

  methods: {

    /**Riceve in input l'oggetto selezionato con click
     * e lo clona in un array "temporanea" reattiva (currentContact). 
     * Gestisce la logica di background-color del contatto selezionato
    */
    selectContact(singleContact) {
      this.currentContact = singleContact;
      singleContact.visible = true;
      this.filteredContacts.forEach(element => {
        if (element === this.oldSelectedContact) {
          element.visible = false;
        }
      });
      this.oldSelectedContact = singleContact;
    },


    /**Pusha nell'array di messaggi di currentContact
     *il messaggio in input.
     * Una volta pushato il messaggio viene eseguita la funzione setTimeout
     */
    sendChatMsg() {
      this.currentContact.messages.push({
        message: this.messageIn,
        status: 'sent',
        date: this.assingDate()
      });
      const contactToReply = this.currentContact
      setTimeout(() => {
        this.pushOkMessage(contactToReply);
      }, 1000);
    },





    /**Riceve Un oggetto e pusha al suo interno 
     * un array di 3 elementi (message, status, date)
     * 
     * @param {object} singleObj 
     */
    pushOkMessage(singleObj) {
      singleObj.messages.push({
        message: 'OK',
        status: 'received',
        date: this.assingDate()
      })
    },



    /**Assegna la data alla variabile temporanea
     * che a sua volta viene richiamata nel HTML   
     */
    assingDate() {
      const date = new Date();
      const timeFormatted = new Intl.DateTimeFormat('it-IT', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      }).format(date);
      console.log(timeFormatted);
      return timeFormatted;
    },


    /**Riceve in input il "sotto-oggetto" messages da eliminare 
     *(Tale oggetto contiene 3 elementi: message, status, date)
     * Recupera l'indice del messaggio corrente (del contatto corrente)
     * Nel currentcontact elimina dall'array "messages" il messaggio corrispondente 
     * Il currentcontact è reattivo e si aggiorna nel html
     */
    deleteMessage(message) {
      let currentIndexMessages =
        this.currentContact.messages.indexOf(message);
      this.currentContact.messages.splice([currentIndexMessages], 1);
    }

  },


  /**All'apertura della pagina assegna al contatto corrente 
   * il primo contatto dell'array di oggetti
   */
  beforeMount() {
    this.currentContact = this.contatti[0]
  }

}).mount('#app');



