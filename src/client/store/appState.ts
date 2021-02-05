import { useContext } from 'react';
import { AppContext } from './appContext';
import Client from '../models/Client';
import { http } from '../util/api';

const useAppState = () => {
    const [ state, setState ] = useContext(AppContext);

    const addNewClient = async (client: Client) => {
        try {
            let { status } = await http.put('/roster/add', client);
            if (status === 200) {
                console.log("AddNewClient: Success:", status);
                return true;
            } else {
                console.log("AddNewClient: BadResponse:", status)
            }
        } catch (error) {
            console.log("AddNewClient:", error);
            return false;
        }
    }

    return {
        fullRoster: state.fullRoster,
        addNewClient
    }
}

export default useAppState;