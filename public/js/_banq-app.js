$(() => {
    // Les boutons de menu sidebar
    const composeMsgBtn = document.getElementById('composeMsgBtn');
    // const readMsgBtn = document.getElementById('composeMsgBtn');
    
    const closeReadMsgBtn = document.getElementById('read-message__close-btn');

    
    const menuInboxBtn = document.getElementById('menuInboxBtn');
    const menuStarredBtn = document.getElementById('menuStarredBtn');
    const menuSentBtn = document.getElementById('menuSentBtn');
    const menuTrashBtn = document.getElementById('menuTrashBtn');


    // Section principale
    // Tous les blocs principaux
    const contentCtn = document.getElementsByClassName('content__ctn');
    
    const inboxCtn = document.getElementById('inbox__ctn');
    const starredCtn = document.getElementById('starred__ctn');
    const sentCtn = document.getElementById('sent__ctn');
    const trashCtn = document.getElementById('trash__ctn');


    const importantCtn = document.getElementById('important__ctn');
    const promotionCtn = document.getElementById('promotion__ctn');
    const socialCtn = document.getElementById('social__ctn');




    

    const fullCtn = document.getElementsByClassName('full__ctn')[0];

    
    const newMessageCtn = document.getElementById('new-message__ctn');

    const readMessageCtn = document.getElementById('read-message__ctn');
    
    
    
    // Titres des blocs.
    // Tous les menus sidebar
    const titleHeaderCtn = document.getElementsByClassName('title-header-ctn');

    const inboxTitleHeaderCtn = document.getElementById('inbox__title-header-ctn');
    const starredTitleHeaderCtn = document.getElementById('starred__title-header-ctn');
    const sentTitleHeaderCtn = document.getElementById('sent__title-header-ctn');
    const trashTitleHeaderCtn = document.getElementById('trash__title-header-ctn');


    function toggleComposeNewMessage(newMessageCtn){
        // composeMsgBtn.
        newMessageCtn.classList.toggle("new-msg-compose__active");
        if (newMessageCtn.classList.contains("new-msg-compose__active")) {
            fullCtn.classList.add('under__compose-message');
        }
        else{
            fullCtn.classList.remove('under__compose-message');
        }
    }

    composeMsgBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // alert("Cliked on Compose mesg");
        toggleComposeNewMessage(newMessageCtn);
        // hideSections(titleHeaderCtn, contentCtn);
    });

    cancelComposeMsgBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleComposeNewMessage(newMessageCtn);
    });

    function hideSections(titleHeaderCtn, contentCtn){
        for (let i = 0; i < titleHeaderCtn.length; i++) {
            titleHeaderCtn[i].classList.remove('active');
        }

        for (let i = 0; i < contentCtn.length; i++) {
            contentCtn[i].classList.remove('active');
        }
    }

    menuInboxBtn.addEventListener('click', (e) => {
        e.preventDefault();
        hideSections(titleHeaderCtn, contentCtn);

        inboxTitleHeaderCtn.classList.add("active");
        inboxCtn.classList.add("active");
    });

    menuStarredBtn.addEventListener('click', (e) => {
        e.preventDefault();
        hideSections(titleHeaderCtn, contentCtn);

        starredCtn.classList.add("active");
        starredTitleHeaderCtn.classList.add("active");
    });

    menuSentBtn.addEventListener('click', (e) => {
        e.preventDefault();
        hideSections(titleHeaderCtn, contentCtn);

        sentCtn.classList.add("active");
        sentTitleHeaderCtn.classList.add("active");
    });

    menuTrashBtn.addEventListener('click', (e) => {
        e.preventDefault();
        hideSections(titleHeaderCtn, contentCtn);

        trashCtn.classList.add("active");
        trashTitleHeaderCtn.classList.add("active");
    });



    var messages = document.getElementsByClassName("a-inline__ctn");
    // console.log(messages);

    // messages.addEventListener('click', function(e){
    // document.addEventListener('click', (e) => {
        // e.preventDefault();{
        // e.preventDefault();
        // console.log(e);
        // this.Attr('id');

        // this.Attr().id();

    // });

    function toggleReadMessage(readMessageCtn, messageId = false){
        // readMsgBtn.
        
        readMessageCtn.classList.toggle("read-msg-read__active");
        if (readMessageCtn.classList.contains("read-msg-read__active")) {
            fullCtn.classList.add('under__read-message');
        }
        else{
            fullCtn.classList.remove('under__read-message');
        }
    }
    
    Array.prototype.forEach.call(document.querySelectorAll('.a-inline__ctn'), function (el) {
        el.addEventListener('click', function () {
            // alert(this.id);
            let msgId = document.getElementById("msgId");
            const messageId = this.id;
            toggleReadMessage(readMessageCtn);

            if (messageId !== 'undefined') {
                console.log(messageId);
                msgId.innerHTML = messageId;
            }

        });
    });

    closeReadMsgBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        toggleReadMessage(readMessageCtn);
    });




});