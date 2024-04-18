<p align="center"><a href="https://vuejs.org/" target="_blank"><img src="https://github.com/vuejs/art/blob/master/logo.png" width="400"></a></p>

# INFO

- Web application that simulates an instant messaging service.

# FEATURES

-Filter for messages and contacts: as you type characters in the search field, contacts will be reactively filtered.
At the same time, messages filtered based on the characters entered will appear under the contacts.
Only contacts will be sorted in descending chronological order based on the time the last message was sent/received.
At the moment the search for messages does not respect a chronological order.

-By clicking on a contact or a message we will see the details of the conversation on the chat screen.

-For each message deleted or received, the deletion functionality has been implemented through a dropdown

-It is possible to send a message to each contact.
The message will remain stored even if you move to another contact.
When the message is sent, the contact will instantly move to the correct position with respect to the contact time sorting rule.

-One second after sending a message the contact will send a "test" response message

-The page is responsive. On devices <768px we will only see contacts. By clicking on the contact we will view the chat.
