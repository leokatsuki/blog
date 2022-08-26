import api from '../../services/api';
import Post from '../../components/Post';

const Main = () => {

    async function handleAxios(){
        const response = await api.get('/posts');
    }

    return(
        <>
            <section className="container">
                <h1>Main.js</h1>
                <button onClick={handleAxios}>Fazer requisicao</button>
            </section>
        </>
    )
}

export default Main;