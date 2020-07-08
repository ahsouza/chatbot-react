import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import logo from './logo.svg';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Button from '@material-ui/core/Button';
import Navlink from './components/Navlink'
import Content from './components/MediaControlCard'

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
    const { name,  age } = steps;

    this.setState({ name, age });
  }

  render() {
    const { name, age } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Nome:</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Idade:</td>
              <td>{age.value}</td>
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
  headerBgColor: '#7B1FA2',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#2196F3',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

function App() {
  return (
    <div className="App">
      <Navlink/>

      <header className="App-header">
        <Content/>
        <br/>
        <br/>
        <Button variant="contained" color="secondary">
          Saiba Mais
        </Button>

      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Argobô"
          botAvatar="https://media-exp1.licdn.com/dms/image/C4E0BAQH8RNLNJSYaiQ/company-logo_200_200/0?e=1602115200&v=beta&t=PsGhg_ax2IU5kTqipNCg-h1g1KmV09qC5WO8A4JMVTs"
          userAvatar="https://avatars0.githubusercontent.com/u/28975240?s=460&u=950a3722d69e077b7e4a9879fcaad2cfa28be3e7&v=4"
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
      message: 'Qual é sua idade?',
      trigger: 'age',
    },
    {
      id: 'age',
      user: true,
      trigger: '6',
      validator: (value) => {
        if (isNaN(value)) {
          return 'value must be a number';
        } else if (value < 0) {
          return 'value must be positive';
        } else if (value > 120) {
          return `${value}? Come on!`;
        }
        return true;
      },
    },
    {
      id: '6',
      message: 'Esta é sua avaliação de risco',
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
        { value: 'age', label: 'Idade', trigger: 'update-age' },
      ],
    },
    {
      id: 'update-name',
      update: 'name',
      trigger: '6',
    },
    {
      id: 'update-age',
      update: 'age',
      trigger: '6',
    },
    {
      id: 'end-message',
      message: 'Obrigado! Seus dados foram salvos com sucesso!',
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
