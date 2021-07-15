import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= "https://scontent.fcaw2-1.fna.fbcdn.net/v/t1.6435-9/118321612_3199557500134724_8383842468586147889_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=L0g4CqfI7zsAX89m78J&tn=kF9f7p4kJd1nMcC4&_nc_ht=scontent.fcaw2-1.fna&oh=140e1a83b967fd110a1e567d20497756&oe=60F5F3A4"
          nome="Luana Ferreira" 
          descricao="Oi, eu sou a Luana. Sou aluna da turma noturna de frontend com react da Labenu e também do curso de Fonoaudiologia da UFRJ. Tenho 22 anos e estou buscando uma inserção mais rápida no mercado de trabalho através da programação e quem sabe no futuro poder aliar e unir as duas áreas que estou me dedicando no momento."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno 
        linkDaImagem= "https://w7.pngwing.com/pngs/298/243/png-transparent-email-address-computer-icons-mail-miscellaneous-angle-triangle-thumbnail.png"
        titulo="Email:"
        informacao="luaninha22@gmai.com"
        />
        <CardPequeno 
        linkDaImagem="https://i.pinimg.com/564x/cf/00/e9/cf00e9dbd04b0619b8a3b0a8bf9f7051.jpg"
        titulo="Endereço:"
        informacao="Rua Moonlight,116"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://pbs.twimg.com/profile_images/834747012969005056/Ne1hISAM_400x400.jpg" 
          nome="CEFET-RJ" 
          descricao="Fui estagiária do laboratório de metrologia dimensional (LAMDI) do CEFET-RJ." 
        />
        
        <CardGrande 
          imagem="https://escolaelevare.com.br/wp-content/uploads/2018/04/refor%C3%A7o-escolar-icone.png" 
          nome="Autonôma" 
          descricao="Dei aulas de reforço escolar para crianças da educação infantil e do ensino fundamental I e II." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
