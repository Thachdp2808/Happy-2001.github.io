const buyBTNs =document.querySelectorAll('.js-buy-ticket')
        const modal = document.querySelector('.js-modal')
        const close= document.querySelector('.js-close')
        const modal_box= document.querySelector('.modal-box')
        function showBuyticket(){
            modal.classList.add('open')
        }
        function hideBuyticket(){
            modal.classList.remove('open')
        }
        for(const buyBTN of buyBTNs){
            buyBTN.addEventListener('click', showBuyticket)
        }
        close.addEventListener('click',hideBuyticket)
        modal.addEventListener('click',hideBuyticket)
        modal_box.addEventListener('click',function(even){
            even.stopPropagation()
        })