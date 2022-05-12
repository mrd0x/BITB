
    /* a regex express to valid email addresses */
    /* ref. https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript */
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }



    function Coogle(){
        var coogle = this;


        coogle.onReady = function(){
            coogle.scrollTo(400, 0)
        }

        coogle.doEmailStep = function(){

            var emailValid = validateEmail($('#email-input').val());
            
            $('#cgle-progress-bar').fadeIn( 500 );//.css('display', 'block')
            $('#login-form').css('opacity', 0.5)

            setTimeout(() => {
                $('#cgle-progress-bar').fadeOut( 500 );//.css('display', 'none')
                $('#login-form').css('opacity', 1.0)
                if(emailValid){
                    $('#email-input').removeClass('g-input-invalid')
                    $('.invalid-email').css('display', 'none')
                    $('#prev-email').text($('#email-input').val())
                    coogle.toPasswordPage()
                } else {
                    $('#email-input').addClass('g-input-invalid')
                    $('.invalid-email').css('display', 'block')
                    coogle.toEmailPage()
                }       
            }, 400);
        }

        coogle.doPasswordStep = function(){
            var username = $('#email-input').val()
            var password = $('#password-input').val()
            console.log(username, password)
        }

        coogle.toEmailPage = function(){
            coogle.scrollTo(400)
            $('#instruction-text').text('Sign in')
            $('#instrution-text-desc').text('Continue to Gmail')
            $('#email-input').focus()
        }

        coogle.toPasswordPage = function(){
            coogle.scrollTo(0)

            $('#instruction-text').text('Welcome')
            $('#instrution-text-desc').text(' ')
            $('#password-input').focus()
        }

        coogle.scrollTo = function(toPerc, duration = 500){
            $('.slide-container-outer').animate({
                scrollLeft: toPerc + '%'
             }, duration);
        }

        coogle.attachEvents = function(){
            $('#email-form-step').on('submit', function( e ){
                coogle.doEmailStep()
                e.preventDefault()
            })


            $('.btn-next-email').on('click', function(){
                coogle.doEmailStep()
            })

            $('#password-form-step').on('submit', function( e ){
                coogle.doPasswordStep()
                e.preventDefault()
            })

            $('.btn-next-password').on('click', function(){
                coogle.doPasswordStep()
            })


        }

        coogle.onReady()
        coogle.attachEvents()

    }

    $( document ).ready(function() {
        var myCoogle = new Coogle();
        window.coogle = myCoogle;
        //coogle.toPasswordPage()
    });