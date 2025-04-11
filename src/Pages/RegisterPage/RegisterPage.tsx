import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import '../RegisterPage/RegisterPage.css'
function RegisterPage() {

    return (
        <div className='container'>
            <Header />
            <main className='register-main'>
                <form action="" method="" id="myform">

                    <h3>Connexion</h3>
                    <p><output id="outputMessage"></output></p>

                    <input type="text" placeholder="Nom*" name="nom" id="name" required />
                    <input type="email" placeholder="Example@mail.com*" name="mail" id="mail" required />
                    <input type="number" placeholder="Téléphone (facultatif)" name="telephone" id="phone" />
                    <input type="text" placeholder="mot de passe" name="mot de passe" id="password" />

                    <section className="button">
                        <button type="button" className="sendButton"><a href="#">Inscription</a></button>
                    </section>
                </form>
            </main>

            <Footer />

        </div>
    )
}

export default RegisterPage