import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import logo from './logo.svg';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Button from '@material-ui/core/Button';
import Navlink from './components/Navlink'
//import Content from './components/MediaControlCard'
import Profile from './components/Profile'

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name,  contato } = steps;

    this.setState({ name, contato });
  }

  render() {
    const { name, contato } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Solicitante:</h3>
        <table>
          <tbody>
            <tr>
              <td>Nome:</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Telefone:</td>
              <td>{contato.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

const theme = {
  background: '#f5f8fb',
  headerBgColor: '#311B92',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#4527A0',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

function App() {
  return (
    <div className="App">
      <Navlink/>

      <header className="App-header">
        <Profile/>

      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Anibôt"
          botAvatar="https://avatars0.githubusercontent.com/u/28975240?s=460&u=950a3722d69e077b7e4a9879fcaad2cfa28be3e7&v=4"
          userAvatar="https://material-ui.com/static/images/avatar/3.jpg"
          enableSmoothScrol={true}
          floating={true}
          speechSynthesis={{ enable: false, lang: 'pt', voice: null }}
          recognitionEnable={true}
          steps={[
    {
      id: '1',
      message: 'Qual é o seu nome?',
      trigger: 'name',
    },
    {
      id: 'name',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Olá {previousValue}!',
      trigger: '4',
    },
    {
      id: '4',
      message: 'Me fale seu número de contato?',
      trigger: 'contato',
    },
    {
      id: 'contato',
      user: true,
      trigger: '6',
      validator: (value) => {
        if (isNaN(value)) {
          return 'value must be a number';
        } else if (value < 0) {
          return 'value must be positive';
        }
        return true;
      },
    },
    {
      id: '6',
      message: 'Ok!',
      trigger: 'review',
    },
    {
      id: 'review',
      component: <Review />,
      asMessage: true,
      trigger: 'update',
    },
    {
      id: 'update',
      message: 'Você Deseja alterar algum campo?',
      trigger: 'update-question',
    },
    {
      id: 'update-question',
      options: [
        { value: 'yes', label: 'Sim', trigger: 'update-yes' },
        { value: 'no', label: 'Não', trigger: 'end-message' },
      ],
    },
    {
      id: 'update-yes',
      message: 'Qual campo você deseja alterar?',
      trigger: 'update-fields',
    },
    {
      id: 'update-fields',
      options: [
        { value: 'name', label: 'Nome', trigger: 'update-name' },
        { value: 'contato', label: 'Telefone', trigger: 'update-contato' },
      ],
    },
    {
      id: 'update-name',
      update: 'name',
      trigger: '6',
    },
    {
      id: 'update-contato',
      update: 'contato',
      trigger: '6',
    },
    {
      id: 'end-message',
      message: 'Obrigado! Seu pedido foi salvo com sucesso!',
      end: true,
    },


]}
        />
      </ThemeProvider>
      </header>
    </div>
  );
}


export default App;
