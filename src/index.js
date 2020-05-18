import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Inicial from './pages';
import Enquete from './pages/enquete';
import Resultado from './pages/resultado';
import Candidatos from './pages/candidatos/candidatos';
import ListaOpcoes from './pages/candidatos';

const StackNavigator = createStackNavigator({
	Inicial: {
		screen: Inicial,
		navigationOptions: ({navigation}) => ({
			headerTransparent: true,
			hideStatusBar: true,
		}),
	},

	Enquete: {
		screen: Enquete,
		navigationOptions: ({navigation}) => ({
			title: 'Enquete',
			headerStyle: {
				backgroundColor: '#FF7043',
			},
			headerTintColor: '#fff',
		}),
	},

	Resultado: {
		screen: Resultado,
		navigationOptions: ({navigation}) => ({
			title: 'Resultado',
			headerStyle: {
				backgroundColor: '#FF7043',
			},
			headerTintColor: '#fff',
		}),
	},

	ListaOpcoes: {
		screen: ListaOpcoes,
		navigationOptions: ({navigation}) => ({
			title: 'Opções de enquete',
			headerStyle: {
				backgroundColor: '#FF7043',
			},
			headerTintColor: '#fff',
		}),
	},

	Candidatos: {
		screen: Candidatos,
		navigationOptions: ({navigation}) => ({
			title: 'Candidato',
			headerStyle: {
				backgroundColor: '#FF7043',
			},
			headerTintColor: '#fff',
		}),
	},
	
});

export default createAppContainer(StackNavigator);
